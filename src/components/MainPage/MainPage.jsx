import React from 'react'
import { Header } from '../Header/Header'
import { Home } from './Home'
import { AcercaDe } from './AcercaDe'
import { MisServicios } from './MisServicios'
import { Porfolio } from './Porfolio'
import { Baner } from './Baner'
import { Resenias } from './Resenias'
import { Contacto } from './Contacto'
import { Footer } from '../Footer/Footer'
import {Separador} from "./Separador"


export const MainPage = () => {
  return (
     <>
     
     <div className='md:ps-65 md:hs-overlay-minified:ps-13 transition-all duration-300 pb-4 h-full flex flex-col bg-white dark:bg-neutral-900 '>
        <Header>
        
        </Header>
        <Home>
        </Home>
        <Separador
        titulo="Acerca de mi" />
        <AcercaDe>
        </AcercaDe>
        <Separador 
         titulo="Servicios" 
        />
        <MisServicios>
        </MisServicios>
        <Separador 
         titulo="Portafolio" 
        />
        <Porfolio> 
        </Porfolio>
        
        <Baner>
        </Baner>
        <Separador
         titulo="Reseñas" 
        />
        <Resenias>
        </Resenias>
        <Separador
         titulo="Contacto" 
          />
        <Contacto>
        </Contacto>
        <Footer></Footer>
     
    </div>
 
    
    </>
  )
}
