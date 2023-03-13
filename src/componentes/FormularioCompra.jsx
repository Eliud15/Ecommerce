import React from "react";
import Formulariocss from "../cssModules/formularioComprar.module.css";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { ExclamationLg } from "react-bootstrap-icons";
export const FormularioCompra = () => {
   const navegador = useNavigate();
  return (
    <>
    <Header/>
    <main className="d-flex align-items-center justify-content-center  w-100 h-100 pt-5">
      <form action="#" className={`m-5 h-auto p-3 position-relative mt-5 ${Formulariocss.form}`}>
        <h1 className="text-center m-2 mb-3" >Formulario de compra</h1>
        <label htmlFor="nombre">
          <h3>Your Name:</h3>
        </label>
        <input
          type="text"
          name="nombre"
          placeholder="Your name"
          className="form-control w-20 fw-semibold mb-3"
          />
        <label htmlFor="email">
          <h3>Your Email:</h3>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          className="form-control w-20 fw-semibold mb-3"
        />
        <label htmlFor="email">
          <h3>Your Address:</h3>
        </label>
        <input
          type="text"
          name="address"
          placeholder="Your address"
          className="form-control w-20 fw-semibold mb-3"
        />
        <label htmlFor="telefono">
          <h3>Your Phone Number:</h3>
        </label>
        <input
          type="text"
          name="telefono"
          placeholder="Your Phone Number"
          className="form-control w-20 fw-semibold mb-3"/>
        <label htmlFor="country">
          <h3>Select Your country:</h3>
        </label> <br />
          <select name="country" id="">
            <option className="fw-semibold" value="Colombia">Colombia</option>
            <option className="fw-semibold" value="Argentina">Argentina</option>
            <option className="fw-semibold" value="Australia">Australia</option>
            <option className="fw-semibold" value="Austria">Austria</option>
            <option className="fw-semibold" value="Belgium">Belgium</option>
            <option className="fw-semibold" value="Brazil">Brazil</option>
            <option className="fw-semibold" value="Canada">Canada</option>
            <option className="fw-semibold" value="Chile">Chile</option>
            <option className="fw-semibold" value="China">China</option>
            <option className="fw-semibold" value="Costa Rica">Costa Rica</option>
            <option className="fw-semibold" value="Cuba">Cuba</option>
            <option className="fw-semibold" value="Dominican Republic">Dominican Republic</option>
            <option className="fw-semibold" value="Ecuador">Ecuador</option>
          </select>
        <h6 className="text-danger fw-semibold m-3"><ExclamationLg/> Este formulario es falso no recopilamos informacion alguna <br /> 
        puede saltarse este formulario en el siguiente enlace <br /> <br />
        </h6>
        <button  className="btn bg-success text-light mt-2 w-100"
        onClick={()=> navegador('/finalizarcompra')}
        >Finalizar compra</button>
      </form>
    </main>
    <h6 className='text-center fw-semibold '>
                Desarrollado por Eliud Pinto
            </h6>
    </>
  );
};
