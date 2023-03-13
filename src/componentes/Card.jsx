import React, { useState, useEffect } from "react";
import { addProduct } from "../Reducers/productosSlice";
import { useDispatch } from "react-redux";
import cardCss from "../cssModules/card.module.css";
import { useNavigate } from "react-router-dom";
export const Card = () => {
  const navegador = useNavigate();
  const dispath = useDispatch();
  const [cafes, setCafes] = useState([]);
  const [capuchino, setCapuchino] = useState([]);
  useEffect(() => {
    fetch("https://cafeapi.onrender.com/cafe", { mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => setCafes(data));

    fetch("https://cafeapi.onrender.com/capuchino", { mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => setCapuchino(data));
  }, []);
  const devolverObj = (array) => {
    dispath(addProduct({
      nombre: array[0][1].textContent,
      price: array[0][3].textContent,
      description: array[0][2].textContent,
      imagen: array[0][0].firstElementChild.src
      
    }))
    // array[0][0].firstElementChild.src imagen
    // array[0][1].textContent name
    // array[0][2].textContent description
  // console.log(array[0][3].textContent); 
  };
  return (
    <>
      {/* justify-content-center */}
      <h2 className={`text-center mt-5 mb-5 fs-1 text-danger `}>
        Ofertas del dia!
      </h2>
      <main
        className={` d-flex flex-wrap align-items-center justify-content-center  ${cardCss.main}`}
      >
        {cafes.map((cafe) => (
          <div
            id={cafe.id}
            key={cafe.id}
            className={` m-2   p-2  ${cardCss.cardstye}`}
          >
            <div className={`d-flex justifi-content-center m-4 `}>
              <img
                src="https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg?size=338&ext=jpg&ga=GA1.2.352477321.1677177831&semt=ais"
                alt=""
                className={`${cardCss.imagencafe}`}
              />
            </div>
            <h5 className={`text-center fw-semibold`}>{cafe.nombre}</h5>
            <p className={`fw-semibold ${cardCss.p}`}>{cafe.descripcion}</p>
            <p className={`fw-semibold text-danger me-2`}>${cafe.precio}</p>
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
      <h2 className={`text-center mt-5 mb-5 fs-1  text-danger`}>
        Mas vendidos!
      </h2>
      <main
        className={`d-flex flex-wrap align-items-center justify-content-center mb-5 ${cardCss.main}`}
      >
        {capuchino.map((cafe) => (
          <div key={cafe.id} className={`m-2 p-2  ${cardCss.cardstye}`}>
            <div className={`d-flex justifi-content-center m-4 `}>
              <img
                src="https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg?size=338&ext=jpg&ga=GA1.2.352477321.1677177831&semt=ais"
                alt=""
                className={`${cardCss.imagencafe}`}
              />
            </div>
            <h5 className={`text-center fw-semibold`}>{cafe.nombre}</h5>
            <p className={`fw-semibold ${cardCss.p}`}>{cafe.descripcion}</p>

            <p
              className={`fw-semibold text-danger me-2`}
            >{`$${cafe.precio}`}</p>
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
    </>
  );
};
