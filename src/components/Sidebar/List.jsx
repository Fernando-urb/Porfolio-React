import React from 'react'
import LogoUfer from '../../assets/urbano-01.png'

export const List = () => {
  return (
  
      <ul className="flex flex-col gap-y-0.5 px-2">
        
        {/* Home  */}
        <li>
          <a className="group  w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200 " href="#home">
          <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
            <svg    className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>         
            </span>

            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Home</span>
          </a>
        </li>
        {/* Acerca de */}
        <li>
          <a className="group  w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200" href="explore.html">
            <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
              
              <svg className="shrink-0 size-6 group-hover:rotate-180 group-focus:rotate-180 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </span>
            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Acerca de</span>
          </a>
        </li>
        {/* Servicios  */}
        <li>
          <a className="group  w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200 " href="chat-details.html">
            <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-compare-arrows-icon lucide-git-compare-arrows"><circle cx="5" cy="6" r="3"/><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300"  d="M12 6h5a2 2 0 0 1 2 2v7"/><path className="group-hover:scale-95 group-focus:scale-95 transition-transform duration-300" d="m15 9-3-3 3-3"/><circle cx="19" cy="18" r="3"/><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300"  d="M12 18H7a2 2 0 0 1-2-2V9"/><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="m9 15 3 3-3 3"/></svg>
            </span>
            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Servicios</span>
          </a>
        </li>
         {/* porfolio */}
        <li>
          <a className="group relative w-full flex items-center gap-1 py-1.5 px-2.5  text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200 " href="index.html">
            <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
            <svg className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business-icon lucide-briefcase-business"><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="M12 12h.01"/><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            </span>
            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Porfolio</span>
          </a>
        </li>
        {/* Reseñas  */}
        <li>
          <a className="group  w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200 " href="explore.html"> 
            <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">

            <svg  className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text">
            <path d="M12 7v14"/>
            <path d="M16 12h2"/>
            <path  d="M16 8h2"/>
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" />
            <path d="M6 12h2" />
            <path d="M6 8h2" /></svg>
            </span>
            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Reseñas</span>
          </a>
        </li>
        {/* contacto */}
        <li>
          <a className="group  w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200 " href="chat-details.html">
            <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
            <svg className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300"  d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
             
            </span>
            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">Contacto</span>
          </a>
        </li>
      </ul>
    
  )
}
