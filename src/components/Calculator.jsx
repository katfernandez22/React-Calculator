import React, {useState} from "react";

export class Calculator extends React.Component{
  render() {
    const Add = (e) => {
      e.preventDefault();
      let currentNum1 = document.querySelector('#num').value;
      let currentNum2=document.querySelector('#num1').value;
      let sum = parseInt(currentNum1) + parseInt(currentNum2)
      document.querySelector('#num').value = "";
      document.querySelector('#num1').value="";
      document.querySelector('#result').value = sum;
    }
    function Subtract(e) {
      e.preventDefault();
      let currentNum1 = document.querySelector('#num').value;
      let currentNum2 = document.querySelector('#num1').value;
      let sum = parseInt(currentNum1) - parseInt(currentNum2);

      document.querySelector('#num').value = "";
      document.querySelector('#num1').value = "";
      document.querySelector('#result').value = sum;
    }
    const Muliply = (e) => {
      e.preventDefault();
      let currentNum1 = document.querySelector('#num').value;
      let currentNum2 = document.querySelector('#num1').value;
      let sum = parseInt(currentNum1) * parseInt(currentNum2)
      
      document.querySelector('#num').value = "";
      document.querySelector('#num1').value="";
      document.querySelector('#result').value = sum;
    }
    
    const Divide = (e) => {
      e.preventDefault();
      
      let currentNum1 = document.querySelector('#num').value;
      let currentNum2=document.querySelector('#num1').value;
      let sum= parseInt(currentNum1)/parseInt(currentNum2)
          
      document.querySelector('#num').value="";
      document.querySelector('#num1').value="";
      document.querySelector('#result').value = sum;
    }
    
    const Clear = (e) => {
      e.preventDefault();
      document.querySelector('form').reset();
    }
    
    return (
      <div className="App">
        <div className="app-title">
          <h1> React Calculator</h1>
        </div>
        <div className="calculator-body">
          <form>
            <input type="text" id="num" placeholder="enter a number" />
            <input type="text" id="num1" placeholder="enter a number" />
            <div className="set-buttons">
              <button id="addbtn" onClick={Add}>+</button>
              <button id="subtractbtn" onClick={Subtract}>-</button>
              <button id="multiplybtn" onClick={Muliply}>x</button>
              <button id="dividebtn" onClick={Divide}>/</button>
              <button id="clearbtn" onClick={Clear}>C</button>
            </div>
            {/*<input type="text" id="result" value={currentSum}  readOnly />*/}
            <input type="text" id="result" readOnly />
          </form>
        </div>
      </div>
    );
  }
}