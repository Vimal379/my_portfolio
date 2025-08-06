import React from 'react';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';
import cat from '../assests/cat.png'
import clay from '../assests/clay.png'

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Pattern */}
      <div className="absolute inset-0  ">
        <img src={cat} className='bg-cover hidden md:block bg-center h-[70%] ml-[0%] mt-[20%] z-10 ' alt="" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70"></div>
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 flex justify-between items-center p-8">
        <button className="group flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all duration-300">
          <span className="text-sm font-medium">START A PROJECT</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <h1 className="text-lg font-medium text-gray-800 tracking-wider">VIMAL KUMAR</h1>
        
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
          <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
          <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
          <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 ">
        <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 text-sm uppercase tracking-wider font-medium">
                AS A FULL STACK DEVELOPER, I FOCUS ON<br />
                PRODUCING TOP-NOTCH AND IMPACTFUL<br />
                DIGITAL EXPERIENCES.
              </p>
              
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">
                  VIMAL'S FULL STACK DEVELOPMENT
                </p>
                <p className="text-gray-800 font-medium">
                  EXPERTISE DELIVERED.
                </p>
              </div>
            </div>

            {/* <button className="group flex items-center space-x-4 border-2 border-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300"> */}
              <a className='w-[30%] group flex items-center space-x-4 border-2  border-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300' href="https://drive.google.com/file/d/1VfsXvutFecX-E_a-4znKFKqk--5_Fom0/view?usp=drivesdk"><span className='font-medium text-xl'>Resume</span> <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></a> 
              
            {/* </button> */}
          </div>

          {/* Center - Large Typography */}
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="text-center lg:text-left p">
              <h2 className="text-[6rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none text-gray-800 select-none mb-5">
                VIMAL
              </h2>
              <h3 className="text-[5rem] lg:text-[6rem] xl:text-[8rem] font-black leading-none text-gray-800 -mt-8 lg:-mt-12 mb-5 select-none">
                FULLSTACK
              </h3>
              <h3 className="text-[4rem] lg:text-[5rem] xl:text-[8rem] font-black leading-none text-gray-800 -mt-8 lg:-mt-12 select-none">
                DEVELOPER
              </h3>
            </div>

            {/* Profile Image Placeholder */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              <img src={clay} alt="" />
              <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800 flex items-center justify-center">
                <Code size={64} className="text-cyan-400" />
              </div>
            </div> */}
          </div>

          {/* Right Content */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 space-y-8">
            <div className="space-y-4 mb-4">
              <p className="text-gray-700 text-sm uppercase tracking-wider font-medium">
                A CUTTING-EDGE DIGITAL PLATFORM<br />
                DESIGNED TO REVOLUTIONIZE THE WAY<br />
                PEOPLE INTERACT WITH TECHNOLOGY.
              </p>
              
              <div className="space-y-2 ">
                <p className="text-gray-800 font-medium">
                  EXCEPTIONAL FULL STACK DEVELOPMENT
                </p>
                <p className="text-gray-800 font-medium">
                  AND USER EXPERIENCE.
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            {/* <div className="relative">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-4xl font-black text-white">03</span>
              </div>
              <div className="absolute -bottom-2 -right-2">
                <div className="bg-white px-4 py-2 rounded-full shadow-lg border">
                  <span className="text-xs font-medium text-gray-800">YEARS</span>
                </div>
              </div>
            </div> */}

            {/* <div className="flex space-x-4 ">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-full">
                <span className="text-xs font-medium">FULL STACK</span>
              </div>
              <div className="bg-white border border-gray-300 px-4 py-2 rounded-full">
                <span className="text-xs font-medium text-gray-800">2024</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white py-4 overflow-hidden">
        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
          <span className="flex items-center space-x-3">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>React & Node.js</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Database Design</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>API Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Modern Web Apps</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>React & Node.js</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Database Design</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>API Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Modern Web Apps</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>React & Node.js</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Database Design</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>API Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Modern Web Apps</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>React & Node.js</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Database Design</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>API Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Modern Web Apps</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
          <span className="flex items-center space-x-2">
            <span>Full Stack Development</span>
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;