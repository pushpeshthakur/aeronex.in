import React from 'react'
import heroCover from '../assets/heroCover.png'
import { ArrowRight } from 'lucide-react'



const Hero = () => {
  return (
    <section id="home" className="flex h-full w-full">
      <div className="relative w-full flex items-center justify-center">
        <img
          src={heroCover}
          alt=""
          className="w-full h-180 sm:h-150 md:h-150 lg:h-180 object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-center ml-5 sm:ml-10 md:ml-20 mt-10 gap-6 max-sm:pt-45">
          <div className="flex items-start justify-start flex-col  ">
            <h1 className="text-5xl md:text-6xl lg:text-7xl max-sm:text-[30px] text-white">
              Engineering the <br/>Future of <br/><span className="text-blue-300 ">Air Management</span>
            </h1>

            <p className=" text-2xl text-purple-200 font-medium max-w-150 max-sm:max-w-70 max-sm:text-[18px] ">
             Premium industrial air curtains & smart airflow solutions engineered for 
             commercial and industrial spaces.
            </p>
          </div>  

          
          <div className="flex gap-4 flex-wrap max-sm:flex-col">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-4 rounded-2xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="w-5.75 h-3.75 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-6 py-4 rounded-2xl font-semibold text-white bg-white/10 border border-white/35 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="w-5.75 h-3.75 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
            </a>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Hero