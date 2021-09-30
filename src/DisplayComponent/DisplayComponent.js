import React from "react";
import "./DisplayComponent.css";



function DisplayComponent() {
    return (
        <input className="displayInput"
            placeholder="Ingrese la cantidad" pattern="[0-9]*-+=/"type="text"            
        />
    );

}

export { DisplayComponent };
