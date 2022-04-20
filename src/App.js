import React from "react";
import mergeImages from 'merge-images';

// imagenes de alpaca por defecto
import blue50 from "./alpaca/backgrounds/blue50.png"
import defaultNeck from "./alpaca/neck/default.png"
import defaultEars from "./alpaca/ears/default.png"
import defaultHair from "./alpaca/hair/default.png"
import defaultNose from "./alpaca/nose.png"
import defaultEyes from "./alpaca/eyes/default.png"
import defaultMouth from "./alpaca/mouth/default.png"
import headphone from "./alpaca/accessories/headphone.png"
import defaultLeg from "./alpaca/leg/default.png"

// componentes importados
import Accesorios from "./componentes/Accesorios.js";
import Fondos from "./componentes/Fondos";
import Orejas from "./componentes/Orejas";
import Ojos from "./componentes/Ojos";
import Pelo from "./componentes/Pelo";
import Patas from "./componentes/Patas";
import Boca from "./componentes/Boca";
import Cuello from "./componentes/Cuello";

export default function App() {
  
  
  const [fondo, setFondo] = React.useState(blue50)
  const [cuello, setCuello] = React.useState(defaultNeck)
  const [orejas, setOrejas] = React.useState(defaultEars)
  const [pelo, setPelo] = React.useState(defaultHair)
  const [ojos, setOjos] = React.useState(defaultEyes)
  const [boca, setBoca] = React.useState(defaultMouth)
  const [accesorio, setAccesorio] = React.useState(headphone)
  const [patas, setPatas] = React.useState(defaultLeg)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = React.useState('')
  
  const showOptions = (e) => {
    setCategoriaSeleccionada(e.target.name)
  }
  
  mergeImages([fondo, cuello, orejas, pelo, defaultNose, ojos, boca, accesorio, patas])
  .then(alpaca => document.querySelector('#alpaca-avatar').src = alpaca);

  
  return (
    <div className="app">

      <h1 className="titulo">¡Crea tu Alpaca!</h1>

      <div className="cuerpo">

        <img id='alpaca-avatar' alt="alpaca" />

        <div className="categorias">
            <h2 className="categorias-titulo">Categorías</h2>
          <div className="categorias-botones">
            <button className="categorias-opciones" onClick={showOptions} name="fondo">Fondos</button>
            <button className="categorias-opciones" onClick={showOptions} name="pelo">Pelo</button>
            <button className="categorias-opciones" onClick={showOptions} name="cuello">Cuello</button>
            <button className="categorias-opciones" onClick={showOptions} name="accesorio">Accesorio</button>
            <button className="categorias-opciones" onClick={showOptions} name="ojos">Ojos</button>
            <button className="categorias-opciones" onClick={showOptions} name="patas">Patas</button>
            <button className="categorias-opciones" onClick={showOptions} name="orejas">Orejas</button>
            <button className="categorias-opciones" onClick={showOptions} name="boca">Boca</button>
          </div>
          <div>
            {
              (() => {
              
                switch (categoriaSeleccionada) {
                  case "fondo":
                    return <Fondos cambiarFondo={nuevoFondo => setFondo(nuevoFondo)} />
                  case "pelo":
                     return <Pelo cambiarPelo={nuevoPelo => setPelo(nuevoPelo)} />
                  case "cuello":
                    return <Cuello cambiarCuello={nuevoCuello => setCuello(nuevoCuello)} />
                  case "accesorio":
                    return <Accesorios cambiarAccesorio={nuevoAccesorio => setAccesorio(nuevoAccesorio)} />
                  case "ojos":
                    return <Ojos cambiarOjos={nuevosOjos => setOjos(nuevosOjos)} />
                  case "patas":
                    return <Patas cambiarPatas={nuevasPatas => setPatas(nuevasPatas)} />
                  case "orejas":
                    return <Orejas cambiarOrejas={nuevasOrejas => setOrejas(nuevasOrejas)} />
                  case "boca":
                      return <Boca cambiarBoca={nuevaBoca => setBoca(nuevaBoca)} />
                  default:
                    return <Fondos cambiarFondo={nuevoFondo => setFondo(nuevoFondo)} />
                  }  
                })()
            }
          </div>
        </div>

      </div>

    </div>
  )
}