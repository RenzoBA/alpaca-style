import React from "react";

export default function Ojos(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/eyes', false, /\.png/)
  )

  const ojosDatos = ["angry.png", "default.png", "naughty.png", "panda.png", "smart.png", "star.png"]
  

  return (
    <div className="disenos">
      {
        ojosDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarOjos(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}