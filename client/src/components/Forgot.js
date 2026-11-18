import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Forgot() {

  let navigate = useNavigate()

  return (
    <div className="App">
      <div>
        <img style={{ width: "20%" }} src="./images/brn.png"></img>
      </div>
      <form className="Form1">
        <p id="password">Forgot Password?</p>

        <p>
          Enter your registered e-mail address below to get your password to
          e-mail.
        </p>

        <div>
          <input
            type="text"
            placeholder="Email"
            id="main"
            className="name"
          ></input>
        </div>
        
        <button style={{ height: "30px", backgroundColor: "black", color: "white",marginLeft:'-60%' }} type="button" onClick={()=>{
       
       navigate("/Signup");
       
       }}>BACK</button>
       <br></br>
        <div >
          <button
            type="button"
            style={{ height: "30px", backgroundColor: "green", color: "white"}} onClick={()=>{
              navigate("/Login");
            }} >
            SUBMIT
          </button>
        </div>


       
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="brn1">
        <a style={{marginLeft:'-15%'}} href="http://www.brninfotech.com/">2023 © BRN Infotech Pvt. Ltd.</a>
      </div>
    </div>
  );
}

export default Forgot;
