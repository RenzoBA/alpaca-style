import React from "react";

export default function Boca(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/mouth', false, /\.png/)
  )

  const bocaDatos = ["astonished.png", "default.png", "eating.png", "laugh.png", "tongue.png"]
  

  return (
    <div className="disenos">
      {
        bocaDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarBoca(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}