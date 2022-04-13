import React from "react";
import Diseno from "./Diseno";

export default function Categoria(props) {

    const [itemsData, setItemsData] = React.useState(props.items)

    function clicked(id) {
        setItemsData(prevItemsData => prevItemsData.map(prevItem => {
          return (id === prevItem.id) ? {
            ...prevItem,
            isSelected: true,
          } : {
            ...prevItem,
            isSelected: false,
          }
        }))
      }

    const items = itemsData.map(diseno => {
        return (
            <Diseno
                key={diseno.id}
                nombre={diseno.name}
                seleccionar={() => clicked(diseno.id)}
                seleccionado={diseno.isSelected} 
            />
        )
    })
    return (
        <div className="categoriaYDisenos">
                <button className={props.seleccionado ? "categoria-on" : "categoria-off"} onClick={props.seleccionar}>{props.nombre}</button>
                <br />
                <div className="disenos">
                    {props.seleccionado ? items : undefined}
                </div>
        </div>
    )
}