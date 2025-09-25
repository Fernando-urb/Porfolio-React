import React from "react";
import { HeaderSidebar } from "./HeaderSidebar";
import { List } from "./List";
import { Redes } from "./Redes";

export const Sidebar = () => {
  return(
      <div className="hs-overlay [--auto-close:md]
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
w-65 hs-overlay-minified:w-13 overflow-hidden
hidden
fixed inset-y-0 z-60 start-0
bg-white border-e border-gray-200 dark:border-neutral-500
md:block md:translate-x-0 md:end-auto md:bottom-0
dark:bg-neutral-900 "   id="hs-pro-sidebar" role="dialog" tabindex="-1" aria-label="Sidebar" >
 <div className="relative flex flex-col h-full max-h-full">
  <HeaderSidebar>

  </HeaderSidebar>
 <nav className="mb-5 px-2 flex flex-col gap-y-5">
  <List>

  </List>

 </nav>
 <div className="mt-auto p-3 flex flex-col">
  <Redes>

  </Redes>
 </div>
  </div>
  </div>
  


  ) 
}