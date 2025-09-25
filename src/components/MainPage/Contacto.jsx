import React from 'react'

export const Contacto = () => {
  return (
    
    <div id="contact" className="bg-linear-to-b via-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contacta Conmigo</h2>
    
        </div>
        {/* End Title */}
    
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                {/* Input */}
                <div className="relative">
                  <input type="text" id="hs-tac-input-name" className="peer p-3 sm:p-4 block w-full bg-neutral-600 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Nombre" />
                  <label htmlFor="hs-tac-input-name" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400">Nombre</label>
                </div>
                {/* End Input */}
    
                {/* Input */}
                <div className="relative">
                  <input type="email" id="hs-tac-input-email" className="peer p-3 sm:p-4 block w-full bg-neutral-600 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Email" />
                  <label htmlFor="hs-tac-input-email" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400">Email</label>
                </div>
                {/* End Input */}
    
                {/* Input */}
                <div className="relative">
                  <input type="text" id="hs-tac-input-company" className="peer p-3 sm:p-4 block w-full bg-neutral-600 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Company" />
                  <label htmlFor="hs-tac-input-company" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400">Compania</label>
                </div>
                {/* End Input */}
    
                {/* Input */}
                <div className="relative">
                  <input type="text" id="hs-tac-input-phone" className="peer p-3 sm:p-4 block w-full bg-neutral-600 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="Telefono" />
                  <label htmlFor="hs-tac-input-phone" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400">Telefono</label>
                </div>
                {/* End Input */}
    
                {/* Textarea */}
                <div className="relative">
                  <textarea id="hs-tac-message" className="peer p-3 sm:p-4 block w-full bg-neutral-600 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  not-placeholder-shown:pt-6
                  not-placeholder-shown:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="This is a textarea placeholder" data-hs-textarea-auto-height></textarea>
                  <label htmlFor="hs-tac-message" className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-not-placeholder-shown:text-xs
                    peer-not-placeholder-shown:-translate-y-1.5
                    peer-not-placeholder-shown:text-neutral-400">Escriba tu mensaje</label>
                </div>
                {/* End Textarea */}
              </div>
    
              <div className="mt-2">
                
    
                <div className="text-center py-4">
      <a className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-blue-400 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6" href="#">
      Enviar Mensaje
      
      </a>
    </div>
              </div>
            </form>
          </div>
          {/* End Col */}
    
          <div className="space-y-14">
            {/* Item */}
            <div className="flex gap-x-5">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <div className="grow">
                <h4 className="text-white font-semibold">
                Ubicación</h4>
    
                <address className="mt-1 text-neutral-400 text-sm not-italic">
                Bolivia 53-Tucuman
                </address>
              </div>
            </div>
            {/* End Item */}
    
            {/* Item */}
            <div className="flex gap-x-5">
              <svg className="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
              <div className="grow">
                <h4 className="text-white font-semibold">Email:</h4>
    
                <a className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200" href="#mailto:example@site.co" target="_blank">
                  fernando_urbano@outlook.com
                </a>
              </div>
            </div>
            {/* End Item */}
    
            {/* Item */}
            <div className="flex gap-x-3">
            <i class="fa-solid fa-phone shrink-0 size-6 text-[1.5rem] text-neutral-500"></i>
              <div className="grow">
                <h4 className="text-white font-semibold">Telefono</h4>
                <p className="mt-1 text-neutral-400">+543813540041</p>
               
              </div>
            </div>
            {/* End Item */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  )
}
