import React from "react";

export default function Diseno(props) {
    return (
        <button className={props.seleccionado ? "diseno-on" : "diseno-off"} onClick={props.seleccionar}>{props.nombre}</button>
    )
}