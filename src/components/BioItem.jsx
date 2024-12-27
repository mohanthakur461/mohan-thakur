

const BioItem = (props) => {
  return (
    <>
    { props.title == "designermt8@gmail.com" || props.title == "mohanlal-thakur-42b686121" ? <li><h2 className="text-h5 font-medium mb-3">{props.keyName}</h2><p><a className="text-white text-opacity-80 underline hover:text-primary-400" href={props.url} target='_blank'>{props.title}</a></p></li>: <li><h2 className="text-h5 font-medium mb-3">{props.keyName}</h2><p>{props.title}</p></li>}
    </>
  )
}

export default BioItem


