import { House } from 'lucide-react';


export const Redes = () => {

  return (
      <ul class="flex flex-col gap-y-1 px-2">
        {/* Linkedin */}
        <li>
          <a className="group  w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200  " href="https://www.linkedin.com/in/ufer2025/">
            <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </span>
            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300  ">Linkedin</span>
          </a>
        </li>
         {/* GitHub  */}
        <li>
          <a className="group  w-full flex items-center gap-1 py-1.5 px-2.5 relative text-sm text-gray-800 rounded-lg before:absolute before:inset-y-0 before:-start-2 before:rounded-e-full before:w-1 before:h-full hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200 " href="https://github.com/Fernando-urb?tab=repositories">
          <span className="-ms-[5px] flex shrink-0 justify-center items-center size-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path className="group-hover:scale-110 group-focus:scale-110 transition-transform duration-300" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" className="group-hover:scale-95 group-focus:scale-95 transition-transform duration-300"/></svg>
            </span>
            <span className="truncate hs-overlay-minified:opacity-0 transition-opacity duration-300">
            GitHub

           
            </span>
          </a>
        </li>
      </ul>
  
  )
}
