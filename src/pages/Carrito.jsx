import React from "react";
import { Header } from "../componentes/Header";
import Carritocss from "../cssModules/carrito.module.css";
import { useNavigate } from "react-router-dom";

export const Carrito = () => {
  const navegador = useNavigate();
  const arrProductosJson = [];
  const productos = [];
  for (let i = 0; i < localStorage.length; i++) {
    arrProductosJson.push(localStorage.getItem(localStorage.key(i)));
  }
  arrProductosJson.map((product) => {
    productos.push(JSON.parse(product));
  });
  if (localStorage.length <= 0) {
    return (
      <>
        <Header />
        <h1 className="text-center m-5">No hay productos agregados!</h1>
        <h6 className="text-center fw-semibold">
          Desarrollado por Eliud Pinto
        </h6>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <h1 className="text-center m-5">Tus productos!</h1>
        <main className="d-flex flex-wrap justify-content-center">
          {productos.map((item, index) => {
            return (
              <div key={index} className={`m-5 ${Carritocss.cardstyle}`}>
                <img
                  src={item.imagen}
                  className={`${Carritocss.cardimagen}`}
                  alt="..."
                />
                <h5 className="text-center fw-semibold card-title">
                  {item.nombre}
                </h5>
                <p className="card-text fw-semibold">Precio: ${item.precio}</p>
                <p className="card-text fw-semibold">
                  Cantidad: {item.cantidad}
                </p>
                <p className="card-text fw-semibold">
                  Subtotal: ${item.precio * item.cantidad}
                </p>
                <button
                  className="bg-primary text-light fw-semibold border"
                  type="button"
                  onClick={() => {
                    navegador("/formulariocompra");
                  }}
                >
                  Comprar
                </button>
                <button
                  className="text-light bg-danger fw-semibold border"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem(localStorage.key(index));
                    navegador("/carrito");
                  }}
                >
                  Eliminar
                </button>
              </div>
            );
          })}
        </main>
        <h6 className="text-center fw-semibold ">
          Desarrollado por Eliud Pinto
          <br />
          <a href="https://www.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_23128948.htm#page=2&query=taza%20de%20cafe&position=24&from_view=search&track=ais">
            Image by macrovector
          </a>
          on Freepik
        </h6>
      </>
    );
  }
};
//! HACER EL BOTON DE COMPRAR
