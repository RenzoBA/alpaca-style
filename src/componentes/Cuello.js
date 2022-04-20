import React from "react";

export default function Cuello(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/neck', false, /\.png/)
  )

  const cuelloDatos = ["bend-backward.png", "bend-forward.png", "default.png", "thick.png"]
  

  return (
    <div className="disenos">
      {
        cuelloDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarCuello(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}