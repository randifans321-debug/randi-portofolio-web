import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = ({ data }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={heroRef}
          className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#d987ff]/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
        ></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#88a2ff]/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl mb-4 font-normal">Hi, I'm</span>
            <span className="bg-gradient-to-r from-[#d987ff] via-[#88a2ff] to-[#78d692] bg-clip-text text-transparent">
              {data.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            {data.title}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-[#d987ff] hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={32} />
      </div>
    </div>
  );
};

export default Hero;