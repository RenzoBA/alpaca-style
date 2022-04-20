import React from "react";

export default function Patas(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/leg', false, /\.png/)
  )

  const patasDatos = ["bubble-tea.png", "cookie.png", "default.png", "game-console.png", "tilt-backward.png", "tilt-forward.png"]
  

  return (
    <div className="disenos">
      {
        patasDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarPatas(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}