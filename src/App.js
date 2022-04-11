import React from "react";
import elements from "./alpaca/elements";
import Categoria from "./componentes/Categoria";
import alpaca from "./alpaca/nose.png"

export default function App() {

  const [categoriasData, setCategoriasData] = React.useState(elements.elements);

  function clicked(id) {
    setCategoriasData(prevCategoriasData => prevCategoriasData.map(prevCategoria => {
      return (id === prevCategoria.id) ? {
        ...prevCategoria,
        isSelected: true,
      } : {
        ...prevCategoria,
        isSelected: false,
      }
    }))
  }

  const categorias = categoriasData.map(elemento => {
    return (
      <Categoria
        key={elemento.id} 
        nombre={elemento.title}
        seleccionar={() => clicked(elemento.id)}
        seleccionado={elemento.isSelected}
        item={elemento.items.map(item => item.name)}
      />
    )
  })

  return (
    <div className="app">
      <h1 className="titulo">¡Crea tu Alpaca!</h1>
      <div className="cuerpo">
        <img 
          src="alpaca/nose.png"
          alt="your_alpaca"
        />
        <h2>Categorías</h2>
        {categorias}
      </div>
    </div>
  )
}