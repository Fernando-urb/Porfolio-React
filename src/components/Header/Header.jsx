
import avatarImage from "../../assets/urbano-01.png";

export const Header = () => {
  return (


  <header className="md:ms-65 xl:hs-overlay-layout-open:me-96 md:hs-overlay-minified:ms-13 transition-all duration-300 fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 md:z-61 bg-white py-4 dark:bg-neutral-900 ">
    <nav className="px-4 sm:px-6 flex basis-full justify-between items-center w-full mx-auto">
      {/* Button Group */}
      <div className="flex items-center sm:gap-x-1.5 truncate">
        {/* Sidebar Toggle */}
        <button type="button" className="md:hidden flex justify-center items-center flex-none gap-x-3 size-9 text-sm text-gray-500 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="dialog" aria-expanded="true" aria-controls="hs-pro-sidebar" aria-label="Minify navigation" data-hs-overlay="#hs-pro-sidebar">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 3v18"></path><path d="m8 9 3 3-3 3"></path></svg>
          <span className="sr-only">Sidebar Toggle</span>
        </button>
        {/* End Sidebar Toggle */}

        <span className="truncate font-medium text-sm sm:text-base text-cyan-700 rounded-lg hover:bg-cyan-700/10 focus:outline-hidden focus:bg-cyan-700/10 disabled:opacity-50 disabled:pointer-events-none dark:text-cyan-500 dark:hover:bg-cyan-700/20 dark:focus:bg-cyan-700/20">
          Fernando Urbano
        </span>

  
      </div>
      {/* End Button Group */}

      {/* Button Group */}
      <div className="flex items-center sm:gap-x-1.5">
 
    

        <div className="h-8">
          {/* Account Dropdown */}
          <div className="hs-dropdown inline-flex [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
            
            <button id="hs-dnad" type="button" className="p-0.5 inline-flex shrink-0 items-center gap-x-3 text-start rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:bg-neutral-800 dark:focus:text-neutral-200 dark:text-neutral-500 " aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <img className="shrink-0 size-10 rounded-full " src={avatarImage} alt="Avatar" />
            </button>

            {/* Account Dropdown */}
            <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-neutral-900 dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-dnad">
              <div className="py-2 px-3.5">
                <span className="font-medium text-gray-800 dark:text-neutral-300">
                  Urbano Fernando
                </span>
                <p className="text-sm text-gray-500 dark:text-neutral-500">
                 fernando_urbano@outlook.com
                </p>
                <div className="mt-1.5">
                  <a className="flex justify-center items-center gap-x-1.5 py-2 px-2.5 font-medium text-[13px] bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 focus:outline-hidden focus:bg-cyan-600 disabled:opacity-50 disabled:pointer-events-none" href="https://www.linkedin.com/in/ufer2025/">
                  Linkedin 
                  </a>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-gray-200 dark:border-neutral-800">
                {/* Switch/Toggle */}
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="flex-1 cursor-pointer text-sm text-gray-600 dark:text-neutral-400">Theme</span>
                  <div className="p-0.5 inline-flex cursor-pointer bg-gray-100 rounded-full dark:bg-neutral-800">
                    <button type="button" className="size-7 flex justify-center items-center bg-white shadow-sm text-gray-800 rounded-full dark:text-neutral-200 hs-auto-mode-active:bg-transparent hs-auto-mode-active:shadow-none hs-dark-mode-active:bg-transparent hs-dark-mode-active:shadow-none" data-hs-theme-click-value="default">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg>
                      <span className="sr-only">Default (Light)</span>
                    </button>
                    <button type="button" className="size-7 flex justify-center items-center text-gray-800 rounded-full dark:text-neutral-200 hs-dark-mode-active:bg-white hs-dark-mode-active:shadow-sm hs-dark-mode-active:text-neutral-800" data-hs-theme-click-value="dark">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                      <span className="sr-only">Dark</span>
                    </button>
                   
                  </div>
                </div>
                {/* End Switch/Toggle */}
              </div>
              
            </div>
            {/* End Account Dropdown */}
          </div>
          {/* End Account Dropdown */}
        </div>
      </div>
      {/* End Button Group */}
    </nav>
  </header>
  );
};
