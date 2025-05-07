import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import slide from './assets/mail2.png'

    const slides = [
        {
            id: 1,
            image: slide,
            topCaption: 'Find Your Perfect Student Home',
            bottomCaption: 'Easily discover, compare and secure accomodation near your campus while connecting with verified landlords',
          },
          {
            id: 2,
            image: slide,
            topCaption: 'Secure And Verified For Your Peace Of Mind',
            bottomCaption: 'Secure leases, connect with verified landlords and stay scam free.',
          },
          {
            id: 3,
            image: slide,
            topCaption: 'Creating A Listing For Your Property',
            bottomCaption: 'Showcase your property to the right tenants by creating a listing in just a few steps.',
          },
      ];
      
export default function GetStarted() {
      const [currentSlide, setCurrentSlide] = useState(0);
     const [autoSlide, setAutoSlide] = useState(true);
     const navigate = useNavigate();
         useEffect(() => {
          if (!autoSlide) return;
      
          const timer = setInterval(() => {
            setCurrentSlide(prev => {
              if (prev >= slides.length - 1) {
                setAutoSlide(false);
                return prev;
              }
              return prev + 1;
            });
          }, 30000);
      
          return () => clearInterval(timer);
        }, [autoSlide]);
      
        const handleNext = () => {
            const nextSlide = currentSlide + 1;
          
            if (nextSlide >= slides.length) {
              navigate('/signup_option');
            } else {
              setCurrentSlide(nextSlide);
              setAutoSlide(false);
            }
          };
              
      
        const handlePrev = () => {
          setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
          setAutoSlide(false);
        };
      
        const swipeHandlers = useSwipeable({
          onSwipedLeft: handleNext,
          onSwipedRight: handlePrev,
          preventDefaultTouchmoveEvent: true,
          trackTouch: true,
        });
        const current =slides[currentSlide];
    return (
      <>
    <div
      {...swipeHandlers}
      className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-black"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-0" /> */}

      {/* Skip link */}
      <a
        href="/signup_option"
        className="absolute top-4 right-6 text-sm text-black font-medium z-10 hover:underline"
      >
        Skip
      </a>

       {/* Top caption */}
       <div className="absolute top-16 w-full p-3 text-center z-10">
        <h1 className="text-3xl text-black md:text-3xl font-semibold">{current.topCaption}</h1>
      </div>

      {/* Bottom caption */}
      <div className="absolute bottom-32 w-full text-center z-10">
        <p className="text-base text-black md:text-xl">{current.bottomCaption}</p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-20 w-full flex justify-center z-10 space-x-2">
  {slides.map((_, idx) => (
    <button
      key={idx}
      onClick={() => {
        setCurrentSlide(idx);
        setAutoSlide(false);
      }}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        currentSlide === idx ? 'bg-black text-white scale-110' : 'bg-gray-400'
      }`}
    ></button>
  ))}
</div>

      {/* Next Button */}
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <button
          onClick={handleNext}
          className="px-32 py-2 rounded bg-black text-white font-medium hover:bg-blue-200 transition disabled:opacity-50"
        >
       {currentSlide === slides.length - 1 ? 'Finish' : 'Next'}
      </button>
      </div>
    </div>
    </>
)   
}
