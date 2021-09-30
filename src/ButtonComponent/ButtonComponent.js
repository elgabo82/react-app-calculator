import React from "react";
import './ButtonComponent.css';


function ButtonComponent(props) {
    return (
        // <div>
            <input type='button' className="ButtonComponent">{props.texto}</input>            
            
        // </div>
    )
}

export { ButtonComponent };