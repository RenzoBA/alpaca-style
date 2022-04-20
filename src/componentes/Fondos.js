import React from "react";

export default function Fondos(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/backgrounds', false, /\.png/)
  )

  const fondoDatos = ["blue50.png", "blue60.png", "blue70.png", "darkblue30.png", "darkblue50.png", "darkblue70.png", "green50.png", "green60.png", "green70.png", "grey40.png", "grey70.png", "grey80.png", "red50.png", "red60.png", "red70.png", "yellow50.png", "yellow60.png", "yellow70.png"]
  

  return (
    <div className="disenos">
      {
        fondoDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarFondo(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}