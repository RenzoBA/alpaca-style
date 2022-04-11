import React from "react";

export default function Categoria(props) {

    const disenos = props.item.map(diseno => {
        return (
            <button>{diseno}</button>
        )
    })
    return (
        <div>
                <button onClick={props.seleccionar}>{props.nombre}</button>
                {props.seleccionado ? disenos: undefined}
        </div>
    )
}