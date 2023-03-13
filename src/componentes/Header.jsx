import React, { useRef } from "react";
import { CaretDownFill,List } from "react-bootstrap-icons";
import Homecss from "../cssModules/home.module.css";
import { Link } from "react-router-dom";
import { Basket2Fill } from 'react-bootstrap-icons'
export const Header = () => {
  const menuSpanRef = useRef(null);
  const menuRef = useRef(null);

  return (
    <>
      <nav className={` ${Homecss.header} `}>
        <h1 className={`${Homecss.titulo}`}>Coffe-Ecommerce</h1>
        <List className={`text-light ${Homecss.menuicon} `}
        onClick={(()=>{
          menuRef.current.style.display === "none"
                ? (menuRef.current.style.display = "block")
                : (menuRef.current.style.display = "none");
        })}
        />
        <ol
          className={` position-absolute float-end  ${Homecss.menu_link}`}
          ref={menuRef}
        >
          <li className="mt-1">
            <Link to="/" className={`text-light mt fs-5 ${Homecss.link}`}>
              Home
            </Link>
          </li>
          <li className="ms-3 mt-1">
            <Link
              to="/producto"
              className={`text-light mt fs-5 ${Homecss.link}`}
            >
              Productos
            </Link>
          </li>
          <li
            className={` position-relative ms-3 mt-2 ${Homecss.categorias} `}
            onClick={() => {
              menuSpanRef.current.style.display === "none"
                ? (menuSpanRef.current.style.display = "block")
                : (menuSpanRef.current.style.display = "none");
            }}
          >
            {/* <Link to="/" className={`text-light fs-5 ${Homecss.link}`}  */}
            {/* > */}
            Categorias <CaretDownFill />{" "}
            <ol
              className={`${Homecss.menuspan}`}
              style={{ display: "none" }}
              ref={menuSpanRef}
            >
              <li className={`${Homecss.li}`}>
                <Link
                  to="/cafe"
                  className={`text-light ${Homecss.menuspan__link}`}
                >
                  Cafe
                </Link>
              </li>
              <li className={`${Homecss.li}`}>
                <Link
                  to="/cafeconleche"
                  className={`text-light ${Homecss.menuspan__link}`}
                >
                  Cafe con leche
                </Link>
              </li>
              <li className={`${Homecss.li}`}>
                <Link
                  to="/capuchino"
                  className={`text-light ${Homecss.menuspan__link}`}
                >
                  Capuchino
                </Link>
              </li>
              <li className={`${Homecss.li}`}>
                <Link
                  to="/cafeespecial"
                  className={`text-light ${Homecss.menuspan__link}`}
                >
                  Cafe especiales
                </Link>
              </li>
              <li className={`${Homecss.li}`}>
                <Link
                  to="/te"
                  className={`text-light ${Homecss.menuspan__link}`}
                >
                  Te
                </Link>
              </li>
            </ol>
            {/* </Link> */}
          </li>
          <li className={`ms-3 mt-2`}>
            <Link to="/carrito" className={`text-light ${Homecss.link}`}>
            <Basket2Fill/>  Carrito <span className="text-danger">{localStorage.length}</span>
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
};
