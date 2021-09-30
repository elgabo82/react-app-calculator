import React from "react";
import './ButtonComponent.css';


function ButtonComponent() {

    function clic(e) {
        console.log('Presionaste algún botón');
    }

    return (    
            <div className="ButtonComponent-fila">
                <div>
                    <button className="ButtonComponent" onClick = {clic} label={1}></button>
                    <button className="ButtonComponent" onClick = {clic}>2</button>
                    <button className="ButtonComponent" onClick = {clic}>3</button>
                </div>
                <div>
                    <button className="ButtonComponent" onClick = {clic}>4</button>
                    <button className="ButtonComponent" onClick = {clic}>5</button>
                    <button className="ButtonComponent">6</button>
                </div>
                <div>
                    <button className="ButtonComponent" onClick = {clic}>7</button>
                    <button className="ButtonComponent" onClick = {clic}>8</button>
                    <button className="ButtonComponent" onClick = {clic}>9</button>
                </div>
                <div>
                    <button className="ButtonComponent" onClick = {clic}>+</button>
                    <button className="ButtonComponent" onClick = {clic}>0</button>
                    <button className="ButtonComponent" onClick = {clic}>.</button>
                </div>
                <div>
                    <button className="ButtonComponent" onClick = {clic}>-</button>
                    <button className="ButtonComponent" onClick = {clic}>*</button>
                    <button className="ButtonComponent" onClick = {clic}>/</button>
                </div>                
            </div>              
    )
}

export { ButtonComponent };