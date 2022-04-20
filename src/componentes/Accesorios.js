import React from "react";

export default function Accesorios(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/accessories', false, /\.png/)
  )

  const accesoriosDatos = ["earings.png", "flower.png", "glasses.png", "headphone.png"]
  

  return (
    <div className="disenos">
      {
        accesoriosDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarAccesorio(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}