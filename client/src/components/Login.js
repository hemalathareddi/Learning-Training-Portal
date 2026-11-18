import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';




function Login() {

  
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(()=>{

    axios.defaults.baseURL = 'http://localhost:1414/';

  },[])

  let emailInputRef=useRef();
  let emailSpanRef=useRef();

  let passwordInputRef = useRef();
  let passwordSpanRef = useRef();

    let validateEmail = (inputRef,spanRef)=>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let result = emailRegex.test(inputRef.current.value);
      if(result==true){
        spanRef.current.innerHTML ="✅";
      }else{
       
        spanRef.current.innerHTML ="❌";

      }

    }

    let validatePassword = (inputRef,spanRef)=>{
      const password = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      let result = password.test(inputRef.current.value);
      if( result == true){
       spanRef.current.innerHTML ="✅"
      }else{
        spanRef.current.innerHTML ="❌";
      }
    }

    let validateLoginThruAxios = async ()=>{

      let dataToSend = new FormData();
      dataToSend.append("email",emailInputRef.current.value);
      dataToSend.append("password",passwordInputRef.current.value);
      
      let response = await axios.post("/login",dataToSend);
      console.log(response);
      
      if(response.data.status == "Success"){
        console.log(response.data);
    
        dispatch({type:'login',data:response.data});
    
        alert(response.data.msg)
        navigate("/Home");
      }else{
        alert(response.data.msg)
      }
    
    
      console.log(response); 
        
       };

  return (
    <div className='App'>

        <div>
         <img style={{width:'20%'}} src='./images/brn.png'></img>
        </div> 

       
    <form className='loginForm'>
     
        <p className='sign'>Sign In</p>

       <div >
        <input ref={emailInputRef} type='text' placeholder='Email'  id='main' className='name' required 
        onChange={()=>{
          validateEmail(emailInputRef,emailSpanRef);
        }}></input>
       <span ref={emailSpanRef}></span>
        </div>
       
        
        <div >
        <input ref={passwordInputRef} id='main' type='password' placeholder='Password'  className='name' required  onChange={()=>{
          validatePassword(passwordInputRef,passwordSpanRef);
        }}></input>
        <span ref={passwordSpanRef}></span>
        </div>
        
      
<button type='button'  style={{marginLeft:'-59%',backgroundColor:'green',color:'white'}} onClick={()=>{

validateLoginThruAxios();

}}>LOGIN</button>
       

        <div  className='check'>
         <input type='checkbox' ></input>
          <label >Remember</label>
         </div>

         
         <div className='link' style={{marginLeft:'-30%',marginTop:'11%'}}>

         <Link  to="/Forgot">Forgot Password?</Link>
             
          </div>

         <div className='account'>
        <a style={{marginLeft:'-50%'}} href='/Signup' className='Sign'>CREATE AN ACCOUNT</a>
         
          </div>

     <div className='brn'>
            <a style={{marginLeft:'-57%'}} href='http://www.brninfotech.com/'>2023 © BRN Infotech Pvt. Ltd.</a>
        </div>

        

      </form>
      </div>
    
  )
}

export default Login