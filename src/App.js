
//import './App.css';

import { DisplayComponent } from "./DisplayComponent/DisplayComponent";
import { ButtonComponent } from "./ButtonComponent/ButtonComponent";

const numeros = [
  {texto: '1'}, {texto: '2'}, {texto: '3'},
  {texto: '4'}, {texto: '5'}, {texto: '6'},
  {texto: '7'}, {texto: '8'}, {texto: '9'},
  {texto: '0'}, {texto: '='}, {texto: '+'},
  {texto: '-'}, {texto: '*'}, {texto: '/'},
]



function App() {
  return (
    <>
      <h1>Calculadora Sencilla</h1>
      <DisplayComponent />                
        {
          numeros.map( numeros => (
            <ButtonComponent 
              key={numeros.id} 
              texto={numeros.texto}              
            />
            )
          )}      
      
    </>
    
  );
}

export default App;
