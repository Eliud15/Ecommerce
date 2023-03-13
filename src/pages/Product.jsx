import React, { useState, useEffect,useRef } from "react";
import { Header } from "../componentes/Header";
import ProductCss from "../cssModules/product.module.css";
import { useSelector } from "react-redux";
import { addProduct } from "../Reducers/productosSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Product = () => {
  const navegador = useNavigate()
    const imagenProductoRef = useRef();
    const nombreProductoRef = useRef();
    const descripcionProductoRef = useRef();
    const precioProductoRef = useRef();
    const cantidadProductoRef = useRef();
  const { name, description, price } = useSelector((state) => state.productos);
  const [especiales, setEspeciales] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();
  const AgregarAlCarrito = () => {
    const array = [];
    array.push({
        imagen:imagenProductoRef.current.src,
        nombre:nombreProductoRef.current.textContent,
        descripcion:descripcionProductoRef.current.textContent,
        precio:precioProductoRef.current.textContent.substring(1),
        cantidad:cantidadProductoRef.current.textContent,
    }) 
    localStorage.setItem(`@${nombreProductoRef.current.textContent}`, JSON.stringify(array[0]))
    alert('Agregado al carrito')
    navegador('/producto')
  }
  useEffect(() => {
    fetch("https://cafeapi.onrender.com/cafeespecial")
      .then((response) => response.json())
      .then((data) => setEspeciales(data));

    window.scroll({
      top: -1000,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const devolverObj = (array) => {
    dispatch(
      addProduct({
        nombre: array[0][1].textContent,
        price: array[0][3].textContent,
        description: array[0][2].textContent,
        imagen: array[0][0].firstElementChild.src,
      })
      
    );
    window.scroll({
      top: -1000,
      left: 0,
      behavior: "smooth",
    });
    setCantidad(1);
  };
  return (
    <>
      <Header />
      <h1 id="name" ref={nombreProductoRef} className={`text-center m-5 className='fw-bolder'`}>{name}</h1>
      <main className={`d-flex justify-content-center mb-5 ${ProductCss.main}`}>
        <div className={` ${ProductCss.container_info}`}>
          <div className={`d-flex me-3  ${ProductCss.container_img}`}>
            <img 
            id='imagen'
            ref={imagenProductoRef}
              src="https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg?size=338&ext=jpg&ga=GA1.2.352477321.1677177831&semt=ais"
              alt=""
              className={`d-flex ${ProductCss.img}`}
            />
          </div>
          <div className={`d-flex  ${ProductCss.info_product}`}>
            <h2 className="fw-bolder">Descripcion</h2>
            <h5 ref={descripcionProductoRef} id='descripcion' className="text-primary fw-semibold">{description}</h5>
            <h2 className="fw-bolder">Precio</h2>
            <h5 ref={precioProductoRef} id='precio' className="text-primary fw-semibold">{price}</h5>
            <h2 className="fw-bolder">Cantidad</h2>
            <div className={`d-flex mb-2   ${ProductCss.container_btns}`}>
              <h5 ref={cantidadProductoRef} id='cantidad' className="me-2 text-primary fw-semibold">{cantidad}</h5>
              <button
                className={ProductCss.btns}
                onClick={() => {
                  setCantidad(cantidad + 1);
                }}
              >
                <h6>+</h6>
              </button>{" "}
              <button
                className={ProductCss.btns}
                onClick={() => {
                  cantidad === 1 ? false : setCantidad(cantidad - 1);
                }}
                disabled={cantidad === 1 ? true : false}
              >
                <h6>-</h6>
              </button>
            </div>
            <div className={`d-flex   ${ProductCss.container_btns_vender}`}>
              <button
                className={`bg-primary btn me-2 text-light ${ProductCss.btns_comprar}`}
                onClick={()=> navegador('/formulariocompra')}
               
              >
                Comprar
              </button> 
              <button
                className={`bg-danger btn me-2 text-light ${ProductCss.btns_addcard}`}
                    onClick={AgregarAlCarrito}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </main>

      <main>
        <h2 className={`text-center  ${ProductCss.sub_titulo}`}>
          Podrian gustarte!
        </h2>

        <section className="d-flex  mb-5">
          <article className={`d-flex ${ProductCss.carruselcards}`}>
            {especiales.map((item, index) => {
              return (
                <div key={index} className={`${ProductCss.cardstye}`}>
                  <div className={`d-flex justifi-content-center m-4 `}>
                    <img
                      src="https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg?size=338&ext=jpg&ga=GA1.2.352477321.1677177831&semt=ais"
                      alt=""
                      className={`${ProductCss.imagencafe}`}
                    />
                  </div>
                  <h5
                    className={`text-center fw-semibold ${ProductCss.card_title}`}
                  >
                    {item.nombre}
                  </h5>
                  <p className={`fw-semibold ${ProductCss.card_text}`}>
                    {item.descripcion}
                  </p>
                  <p className={`fw-semibold ${ProductCss.card_text}`}>
                    ${item.precio}
                  </p>
                  <button
                    className={`text-danger ${ProductCss.btncomprar}`}
                    onClick={(event) => {
                      const datos = [event.target.parentElement.children];
                      devolverObj(datos);

                      //  navegador("/producto");
                    }}
                  >
                    Comprar
                  </button>
                </div>
              );
            })}
          </article>
        </section>
      </main>
      <h6 className='text-center fw-semibold '>
    Desarrollado por Eliud Pinto
    <br />
    <a href="https://www.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_23128948.htm#page=2&query=taza%20de%20cafe&position=24&from_view=search&track=ais">Image by macrovector</a> on Freepik
    </h6>
    </>
  );
};
//! HACER EL BOTON DE COMPRAR 

