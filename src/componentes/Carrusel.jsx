import React from 'react'
import Glider from "react-glider";
export const Carrusel = () => {
  return (
    <div className={``}>
    <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={2}
      slidesToScroll={2}
      responsive={[
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
      ]}
    >
      <div>
        {" "}
        <img
          src="https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-603.jpg?w=740&t=st=1678389117~exp=1678389717~hmac=45a95ae34de36b7220615b1a7ac16c803e33f2b66c2654382bb66e085b105f23"
          alt=""
        />{" "}
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/espresso-coffee-cup-coffee-beans_79603-1038.jpg?w=740&t=st=1678389426~exp=1678390026~hmac=d97f0b1e44c3bd55a01365686deccf1d35f6434eaa591b799257e8793c67e7cb"
          alt=""
        />
      </div>
      <div>
            <img
              src="https://img.freepik.com/free-vector/realistic-coffee-time-background-with-coffee-cup_79603-1559.jpg?w=740&t=st=1678389480~exp=1678390080~hmac=bc9157123d6034f79342a55cf6814c6c95185df1008b069b0372d65a02effd9c"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/top-view-cup-with-delicious-coffee-table_23-2149703758.jpg?w=740&t=st=1678722803~exp=1678723403~hmac=ed7c876dbe5e50539d34ad3a377a4cc622369f856db78c0c6bce4b84f1fdcced"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/realistic-coffee-time-background-with-coffee-cup_79603-1560.jpg?w=740&t=st=1678389352~exp=1678389952~hmac=ac71b4ede9691835c3626fa0a1b29c9d9e5e8d9d309b362b4476d60f57c6f5ca"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/top-view-cup-coffee-with-coffee-beans-isolated-wooden-surface_141793-80984.jpg?w=740&t=st=1678722591~exp=1678723191~hmac=e24cf121e77d68239a144a781cb8139d463635daa93e5bdb3a63b287d03ebd87"
              alt=""
            />
          </div>
        </Glider>
        </div>
  )
}

