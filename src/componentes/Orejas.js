import React from "react";

export default function Orejas(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/ears', false, /\.png/)
  )

  const orejasDatos = ["default.png", "tilt-backward.png", "tilt-forward.png"]
  

  return (
    <div className="disenos">
      {
        orejasDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarOrejas(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}