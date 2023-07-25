import { useState } from "react";

function Calculator() {
    
  let [result,Setresult]=useState("");
  
  function handleChange(e){
    Setresult(result.concat(e.target.name))
  }

  function clear(){
    Setresult("");
  }

  function backSpace(){
    if(result==="Error"){
      Setresult("");
      return;
    }
    Setresult(result.slice(0,-1));
  }

  function calculate(){
    try{
      Setresult(eval(result).toString());
    }catch(error){
      Setresult("Error");
    }
  }
  
    return (
    <>
      <div className="container">
        <div className="calculator">
          <form>
            <input type="text" value={result} />
          </form>
          <div className="keypad">
            <button onClick={clear}>C</button>
            <button onClick={backSpace} >
              <img alt="img" className="img" src="https://cdn-icons-png.flaticon.com/128/61/61167.png"/>
               </button>
            <button name="%" onClick={handleChange}>%</button>
            <button name="/" onClick={handleChange}>&#247;</button>
            <br />  
            <button name="7" onClick={handleChange}>7</button>
            <button name="8" onClick={handleChange}>8</button>
            <button name="9" onClick={handleChange}>9</button>
            <button name="*" onClick={handleChange}>&#215;</button>
            <br />  
            <button name="4" onClick={handleChange}>4</button>
            <button name="5" onClick={handleChange}>5</button>
            <button name="6" onClick={handleChange}>6</button>
            <button name="-" onClick={handleChange}>-</button>
            <br />  
            <button name="1" onClick={handleChange}>1</button>
            <button name="2" onClick={handleChange}>2</button>
            <button name="3" onClick={handleChange}>3</button>
            <button name="+" onClick={handleChange}>+</button>
            <br /> 
            <button name="0" onClick={handleChange} className="zero">0</button>
            <button name="." onClick={handleChange}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calculator;
