import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../componentes/Header'
export const FinalizarCompra = () => {
   const navegador =  useNavigate();
  return (
    <>
    <Header/>
    <div className='d-flex justify-content-center align-items-center w-100 h-100 position-absolute'>
      <h2 className='text-center'> Gracias por su compra ♥! <br />
      El producto sera enviado cuanto antes</h2>
      
    </div>
    {
        setTimeout(() => {navegador('/')},3000)
    }
    <h6 className='text-center fw-semibold '>
                Desarrollado por Eliud Pinto
            </h6>
    </>
  )
}


