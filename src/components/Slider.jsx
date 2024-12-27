import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const slides = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
    { id: 4, content: 'Slide 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideInterval = useRef(null);

  // Duplicate slides to create an infinite loop
  const totalSlides = slides.length;
  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides || currentIndex === -1) {
      setTimeout(() => {
        // Instantly jump back to the start or end to create the loop effect
        setCurrentIndex((currentIndex) =>
          currentIndex === totalSlides ? 0 : totalSlides - 1
        );
        sliderRef.current.style.transition = 'none';
      }, 500); // Wait for the animation to finish
    } else {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentIndex, totalSlides]);

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => prevIndex + 1);
    startAutoSlide();
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => prevIndex - 1);
    startAutoSlide();
  };

  const handleDotClick = (index) => {
    stopAutoSlide();
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <div className="slider" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
      <div
        className="slider-wrapper"
        ref={sliderRef}
        style={{
          width: `${extendedSlides.length * 100}%`,
          transform: `translateX(${-currentIndex * (100 / extendedSlides.length)}%)`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ width: `${100 / extendedSlides.length}%` }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Next/Previous Buttons */}
      <button className="prev" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="next" onClick={handleNext}>
        &#8250;
      </button>

      {/* Pagination Dots */}
      <div className="pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex % totalSlides === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
