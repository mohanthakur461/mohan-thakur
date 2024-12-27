'use stric'
import React, { useEffect } from 'react'


const GetinTouchCTA = () => {
    useEffect(()=>{
        let c = document.createElement('canvas').getContext('2d')
  let canvasContainer =  document.getElementById("waveCanvas");
  let postctx = canvasContainer.appendChild(document.createElement('canvas')).getContext('2d')
  let canvas = c.canvas
  
  let vertices = []
  
  // Effect Properties
  let vertexCount = 7000
  let vertexSize = 5
  let oceanWidth = 204
  let oceanHeight = -80
  let gridSize = 20;
  let waveSize = 10;
  let perspective = 150;
  
  // Common variables
  let depth = (vertexCount / oceanWidth * gridSize)
  let frame = 0
  let { sin, cos, tan, PI } = Math
  
  // Render loop
  let oldTimeStamp = performance.now();
  let loop = (timeStamp) => {
    let rad = sin(frame / 100) * PI / 20
    let rad2 = sin(frame / 50) * PI / 10
    const dt = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    
    frame += dt * 50;
    if (postctx.canvas.width !== postctx.canvas.offsetWidth || postctx.canvas.height !== postctx.canvas.offsetHeight) { 
      postctx.canvas.width = canvas.width = postctx.canvas.offsetWidth
      postctx.canvas.height = canvas.height = postctx.canvas.offsetHeight
    }
  
    
    c.fillStyle = `hsl(200deg, 100%, 2%)`
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.save()
    c.translate(canvas.width / 1.5, canvas.height / 8)
    
    c.beginPath()
    vertices.forEach((vertex, i) => {
      let ni = i + oceanWidth
      let x = vertex[0] - frame % (gridSize * 2)
      let z = vertex[2] - frame * 2 % gridSize + (i % 2 === 0 ? gridSize / 2 : 0)
      let wave = (cos(frame / 45 + x / 50) - sin(frame / 20 + z / 50) + sin(frame / 50 + z*x / 10000))
      let y = vertex[1] + wave * waveSize
      let a = Math.max(0, 1 - (Math.sqrt(x ** 2 + z ** 2)) / depth)
      let tx, ty, tz
      
      y -= oceanHeight
      
      // Transformation variables
       tx = x
      ty = y
      tz = z
  
      // Rotation Y
      tx = x * cos(rad) + z * sin(rad)
      tz = -x * sin(rad) + z * cos(rad)
      
      x = tx
      y = ty
      z = tz
      
      // Rotation Z
      tx = x * cos(rad) - y * sin(rad)
      ty = x * sin(rad) + y * cos(rad) 
      
      x = tx;
      y = ty;
      z = tz;
      
      // Rotation X
      
      ty = y * cos(rad2) - z * sin(rad2)
      tz = y * sin(rad2) + z * cos(rad2)
      
      x = tx;
      y = ty;
      z = tz;
  
      x /= z / perspective
      y /= z / perspective
      
      
          
      if (a < 0.01) return
      if (z < 0) return
     
      
      c.globalAlpha = a;
      c.fillStyle = `hsl(${352 + wave * 1}deg, 60%, 63%)`
      c.fillRect(x - a * vertexSize / 2, y - a * vertexSize / 2, a * vertexSize, a * vertexSize)
      c.globalAlpha = 1
    })
    c.restore()
    
    // Post-processing
    postctx.drawImage(canvas, 0, 0)
    
    postctx.globalCompositeOperation = "screen"
    postctx.filter = 'blur(0px)'
    postctx.drawImage(canvas, 0, 0)
    postctx.filter = 'blur(0)'
    postctx.globalCompositeOperation = "source-over"
    
    requestAnimationFrame(loop)
  }
  
  // Generating dots
  for (let i = 0; i < vertexCount; i++) {
    let x = i % oceanWidth
    let y = 0
    let z = i / oceanWidth >> 0
    let offset = oceanWidth / 2
    vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize])
  }
  
  loop(performance.now())
    },[])
    

  return (
    <section className="canvas-cta py-10">
      <div className="container">
        <div className="canvas-cta-inner w-full">
          <div id="waveCanvas" className="canvas-container waveCanvas w-full relative ">
            <div className="w-100 h-52 headbtn-group flex flex-wrap justify-between items-center relative z-10 rounded-lg px-8">
              <h2 className="text-h3 max-w-md leading-tight font-anton uppercase">Are you ready to connect with me?</h2>
              <a href="#" className="btn btn-dark mouse-cursor-gradient-tracking">
                <span className="btn-txt">Let’s get started!</span>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetinTouchCTA
