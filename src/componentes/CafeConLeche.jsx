import React, { useEffect, useState } from 'react'
import { Header } from './Header';
import cardCss from "../cssModules/card.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../Reducers/productosSlice";
export const CafeConLeche = () => {
  const navegador = useNavigate();
    const [cafeConLeche, setCafeConLeche] = useState([]);
    useEffect(() => {
      fetch("https://cafeapi.onrender.com/cafeconleche", { mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => setCafeConLeche(data));
    }, []);
    const dispath = useDispatch();
    const devolverObj = (array) => {
      dispath(addProduct({
        nombre: array[0][1].textContent,
        price: array[0][3].textContent,
        description: array[0][2].textContent,
        imagen: array[0][0].firstElementChild.src
        
      }))
    };
  return (
    <>
    <Header/>
    <h1 className='text-center m-5'>Cafes con leche </h1>
    <main
    className={`d-flex flex-wrap align-items-center justify-content-center mb-5 ${cardCss.main}`}
  >
    {cafeConLeche.map((cafeConLeche) => (
      <div key={cafeConLeche.id} className={`m-2 p-2  ${cardCss.cardstye}`}>
        <div className={`d-flex justifi-content-center m-4 `}>
          <img
            src="https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg?size=338&ext=jpg&ga=GA1.2.352477321.1677177831&semt=ais"
            alt=""
            className={`${cardCss.imagencafe}`}
          />
        </div>
        <h5 className={`text-center fw-semibold`}>{cafeConLeche.nombre}</h5>
        <p className={`fw-semibold ${cardCss.p}`}>{cafeConLeche.descripcion}</p>

        <p
          className={`fw-semibold text-danger me-2`}
        >{`$${cafeConLeche.precio}`}</p>
        <button
          className={`text-danger border  ${cardCss.btncomprar}`}
          onClick={(event) => {
            const datos = [event.target.parentElement.children];
            devolverObj(datos);
             navegador("/producto");
          }}
        >
          Comprar
        </button>
      </div>
    ))}
  </main>
  <h6 className='text-center fw-semibold '>
    Desarrollado por Eliud Pinto
    <br />
    <a href="https://www.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_23128948.htm#page=2&query=taza%20de%20cafe&position=24&from_view=search&track=ais">Image by macrovector</a> on Freepik
    </h6>
  </>
  )
}


