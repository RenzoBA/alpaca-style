import React from "react";

export default function Pelo(props) {

  function importarImg(r) {
    let img = []
    r.keys().map(item => ( img[item.replace('./', '')] = r(item) ))
    return img
  }

  const imagenes = importarImg(
    require.context('../alpaca/hair', false, /\.png/)
  )

  const peloDatos = ["bang.png", "curls.png", "default.png", "elegant.png", "fancy.png", "quiff.png", "short.png"]
  

  return (
    <div className="disenos">
      {
        peloDatos.map(item => <button className="diseno-boton" onClick={() => props.cambiarPelo(imagenes[item])}>{item.replace(".png","")}</button>)
      }
    </div>
  )
}