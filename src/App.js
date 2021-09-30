//import './App.css';

import { DisplayComponent } from "./DisplayComponent/DisplayComponent";
import { ButtonComponent } from "./ButtonComponent/ButtonComponent";


function App() {
  return (
    <>
      <h1>Calculadora Sencilla</h1>
      <DisplayComponent />
      <br />
      <ButtonComponent />             
        {/* {
          numeros.map( numeros => (
            <ButtonComponent 
              key={numeros.id} 
              texto={numeros.texto}              
            />
            )
          )}       */}
      
    </>
    
  );
}

export default App;
