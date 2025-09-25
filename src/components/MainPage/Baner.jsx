import React from 'react'

export const Baner = () => {
  return (
   
<div className="bg-linear-to-b via-transparent">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
    {/* Announcement Banner */}

    {/* End Announcement Banner */}

    {/* Title */}
    <div className="max-w-3xl text-center mx-auto">
      <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
      ¿En qué tipo de proyecto necesitas ayuda?
      </h1>
    </div>
    {/* End Title */}

    <div className="max-w-3xl text-center mx-auto">
      <p className="text-lg text-white/70">Conversemos sobre tus ideas. Estoy disponible para nuevos desafíos de desarrollo frontend..</p>
    </div>

    {/* Buttons */}
    <div className="text-center">
      <a className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-blue-400 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6" href="#">
      <i class="fa-brands fa-whatsapp text-[1.5rem]"></i> Solicitar Cotización
      
      </a>
    </div>
    {/* End Buttons */}
  </div>
</div>

  )
}
