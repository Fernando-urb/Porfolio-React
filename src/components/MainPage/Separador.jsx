import React from 'react'


export const Separador = (props) => {
  return (
    
<div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
  <div className="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
    <div className="flex flex-wrap justify-center items-center gap-2">
      <p className="inline-block text-white text-2xl font-bold">

     {props.titulo}
      
      </p>
     
    </div>
  </div>
</div>

  )
}
