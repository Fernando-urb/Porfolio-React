import React from 'react'
import imgVstream from "../../assets/img-repositorios/img-vstream.png"
import imgDom from "../../assets/img-repositorios/img-dom.png"
import imgAdivina from "../../assets/img-repositorios/img-adivina.png"
import imgDragon from "../../assets/img-repositorios/img-dragon-ball.png"

export const Porfolio = () => {
  return (

  <div >
    <div className="w-[90%] m-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
  {/* Card */}
  <div className="group flex flex-col focus:outline-hidden" href="#">
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={imgVstream} alt="Blog Image" />
    </div>

    <div className="pt-4">
      <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
      VSTREAM
      </h3>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
      Canal de streaming
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <a href="https://github.com/Fernando-urb/VSTREAM" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-brands fa-github px-2"></i>GitHub
        </a>
        <a href="https://vstream-2025.netlify.app/" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-solid fa-globe px-2"></i>Visitar el sitio
        </a>
        
        
        
      </div>
    </div>
  </div>
  {/* End Card */}
    {/* Card */}
    <div className="group flex flex-col focus:outline-hidden" href="#">
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={imgDragon} alt="Blog Image" />
    </div>

    <div className="pt-4">
      <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
      App-Dragon-Ball
      </h3>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
      Juego de Atrapar Personajes d ela Sagas
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <a href="https://github.com/Fernando-urb/App-Dragon-Ball" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-brands fa-github px-2"></i>GitHub
        </a>
        <a href="https://dragon-ball-app-rolling-code.netlify.app/" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-solid fa-globe px-2"></i>Visitar el sitio
        </a>
        
        
        
      </div>
    </div>
  </div>
  {/* End Card */}
    {/* Card */}
    <div className="group flex flex-col focus:outline-hidden" href="#">
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={imgDom} alt="Blog Image" />
    </div>

    <div className="pt-4">
      <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
      Lista de App
      </h3>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
      Conjunto de App de uso diario
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <a href="https://github.com/Fernando-urb/Ejercicios-de-DOM-y-BOM-RollingCode" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-brands fa-github px-2"></i>GitHub
        </a>
        <a href="https://proyecto-dom-rolling.netlify.app/" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-solid fa-globe px-2"></i>Visitar el sitio
        </a>
        
        
        
      </div>
    </div>
  </div>
  {/* End Card */}
    {/* Card */}
    <div className="group flex flex-col focus:outline-hidden" href="#">
    <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src={imgAdivina} alt="Blog Image" />
    </div>

    <div className="pt-4">
      <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
      Poke Api
      </h3>
      <p className="mt-1 text-gray-600 dark:text-neutral-400">
      Atrapa Tus Pokemosnes Preferidos y Guardalos
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <a href="https://github.com/Fernando-urb/Poke-Api-2" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-brands fa-github px-2"></i>GitHub
        </a>
        <a href="#" className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <i class="fa-solid fa-globe px-2"></i>Visitar el sitio
        </a>
        
        
        
      </div>
    </div>
    
  </div>
 
 
  </div>
  <div className=" flex justify-center text-center ">
      <a className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-blue-400 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6" href="https://github.com/Fernando-urb">
      Ver mas Proyectos
      
      </a>
    </div>


  </div>

  
 )
 }