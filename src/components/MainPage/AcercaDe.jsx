import React from 'react'
import Contador from '../Contador/Contador'
// import { Acordion } from '/src/components/Acordion/Acordion.jsx';

export const AcercaDe = () => {
  return (

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Te Muestro las Habilidades aprendidas</h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400 py-4">Mi objetivo es escribir código limpio y bien documentado, priorizando la experiencia del usuario (UX). La combinación de React y Tailwind CSS me permite prototipar y entregar productos con diseños únicos en tiempos récord, mientras que Git asegura un flujo de trabajo profesional y organizado.Me caracterizo por usar en todos mis proyectos metodologias agiles ,la mas usada Scrum!.</p>
          </div>
          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">

            <div className="text-center">
              <a className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-blue-400 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-xl font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6 " href="#">
                Descargar mi CV

              </a>
            </div>
          </div>
          {/* Features */}

          {/* End Features */}
        </div>
        {/* End Col */}

        <div className="md:col-span-3">
          {/* Accordion */}
          <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
            {/* html5 */}
            <div className="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                HTML5
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="text-gray-600 dark:text-neutral-400">
                  Creación de estructuras de documentos web semánticas y accesibles..
                </p>
              </div>
            </div>
            {/* css3 */}
            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                CSS3
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p className="text-gray-600 dark:text-neutral-400">
                  Diseño y estilos de página con técnicas como Flexbox y Grid.
                </p>
              </div>
            </div>
            {/* JavaScript  */}
            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                JavaScript
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="text-gray-600 dark:text-neutral-400">
                  Desarrollo de interactividad y funcionalidad en la página web.
                </p>
              </div>
            </div>
            {/* React  */}
            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                React
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p className="text-gray-600 dark:text-neutral-400">
                  Construyo Single Page Applications (SPA) dinámicas y escalables, basadas en la reutilización de componentes funcionales.
                </p>
              </div>
            </div>
            {/* Tailwind CSS, Bootstrap  */}
            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                Tailwind CSS, Bootstrap
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p className="text-gray-600 dark:text-neutral-400">
                  Utilizo Tailwind CSS para un diseño rápido y personalizado con clases de utilidad, garantizando que el diseño sea responsive en todos los dispositivos.
                </p>
              </div>
            </div>
            {/* Node.js  */}
            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                Node.js
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                <p className="text-gray-600 dark:text-neutral-400">
                  Experiencia en el lado del servidor para gestionar entornos de desarrollo, construir APIs sencillas y trabajar con scripts de compilación..
                </p>
              </div>
            </div>
            {/* Git  */}
            <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
              <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-seven">
                Git
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-seven" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                <p className="text-gray-600 dark:text-neutral-400">
                  Gestión de repositorios, trabajo colaborativo con branches, commits limpios y control de versiones a través de plataformas como GitHub...
                </p>
              </div>
            </div>

          </div>
          {/* End Accordion */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Proyectos Completados</h4>
            <Contador
              from={0}
              to={30}
              duration={4}
              ease={[0.22, 0.61, 0.36, 1]}
              className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600"
            />
            <p className="mt-1 text-gray-500 dark:text-neutral-500">Proyectos entregados con éxito</p>
          </div>
          {/* End Stats */}

          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Clientes Satifechos</h4>
            <Contador
              from={0}
              to={30}
              duration={4}
              ease={[0.22, 0.61, 0.36, 1]}
              className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600"
            />
            <p className="mt-1 text-gray-500 dark:text-neutral-500">Clientes que han confiado en mi trabajo</p>
          </div>
          {/* End Stats */}

          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Clientes Satifechos</h4>
            <p className="text-5xl font-bold text-blue-600">
              <Contador to={98} duration={4} className="inline sm:text-6xl font-bold text-blue-600" />%
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">Porcentaje de satisfacción de clientes logrado solo este año</p>
          </div>
          {/* End Stats */}
        </div>
        {/* End Grid */}
      </div>
      {/* <Acordion/> */}


    </div>


  )
}
