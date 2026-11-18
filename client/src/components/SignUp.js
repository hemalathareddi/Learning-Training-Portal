
import axios from "axios";
import React, {  useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {


  useEffect(()=>{

    axios.defaults.baseURL = 'http://localhost:1414/';


  },[])
    let navigate = useNavigate()
    let [gender,setGender] = useState('');
    let [profile, setProfile] = useState("./images/dummy.jpg");
  let nameInputRef=useRef();
  let nameSpanRef=useRef();
  let genderSelectedRef = useRef();
 let marriedSelectedRef = useRef()
 let profileInputRef = useRef();
  let mobileInputRef=useRef();
  let mobileSpanRef=useRef();
  let cityInputRef = useRef();
  let stateSelectedRef = useRef();
  let emailInputRef=useRef();
  let emailSpanRef=useRef();
  let passwordInputRef=useRef();
  let passwordSpanRef=useRef();
  let reEnterPasswordInputRef=useRef();
  let reEnterPasswordSpanRef=useRef();
  
  let validateName=(inputRef,spanRef)=>{
    const namePattern = /^[A-Za-z ]{3,30}(?: [A-Za-z ]{3,30})*$/;

    
    let result=namePattern.test(inputRef.current.value);
    if(result==true){
      spanRef.current.innerHTML="✅";
    }else{
      spanRef.current.innerHTML="❌";

    }}

    let validateMobileNo=(inputRef,spanRef)=>{
      const mobileNo = /^\d{10}$/;
      let result=mobileNo.test(inputRef.current.value);
      if(result==true){
        spanRef.current.innerHTML="✅";
      }else{
        spanRef.current.innerHTML="❌";
      }}
      let validateEmail=(inputRef,spanRef)=>{
        const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let result=email.test(inputRef.current.value);
        if(result==true){
          spanRef.current.innerHTML="✅";
        }else{
          spanRef.current.innerHTML="❌";
        }}
let validatePassword=(inputRef,spanRef)=>{
  const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let result=password.test(inputRef.current.value);
if(result==true){
  spanRef.current.innerHTML="✅";
}else{
  spanRef.current.innerHTML="❌";
}

}


let sendDataToServer = async()=>{

  let dataToSend = new FormData();
  dataToSend.append("name",nameInputRef.current.value);
  dataToSend.append("gender",genderSelectedRef.current.value);
  dataToSend.append("married",marriedSelectedRef.current.value);
 
for(let i=0;i<profileInputRef.current.files.length;i++){
  dataToSend.append("profile",profileInputRef.current.files[i]);
}
  dataToSend.append("number",mobileInputRef.current.value);
  dataToSend.append("city",cityInputRef.current.value);
  dataToSend.append("state",stateSelectedRef.current.value);
  dataToSend.append("email",emailInputRef.current.value);
  dataToSend.append("password",passwordInputRef.current.value);
  dataToSend.append("rePassword",reEnterPasswordInputRef.current.value);
 

  let response = await axios.post("/signup",dataToSend);
  console.log(response);
 


}


let signupFillFields =()=>{

  if(nameInputRef.current.value.length ==0 ||
    marriedSelectedRef.current.value.length ==0 ||
    genderSelectedRef.current.value.length ==0 ||
    profileInputRef.current.value.length ==0 ||
    emailInputRef.current.value.length ==0 ||
    passwordInputRef.current.value.length ==0 ||
    reEnterPasswordInputRef.current.value.length ==0||
    cityInputRef.current.value.length ==0 ||
    stateSelectedRef.current.value.length ==0 || 
    mobileInputRef.current.value.length == 0

    ){
    alert("Please fill in required fields");
 }else{
  alert("successfully created an account");
 }

 }


  return (
    <div className="signUp">
         <img style={{width:'20%'}} src="./images/logo.png"></img>
      {/* <h3>Learn.Pratice.Perform</h3> */}
      <div>
        <form >
          <div>
            <p className="sighHead">Sign Up</p>
          </div>
          <div>
            <p>Enter your name exactly as per your educational certificate</p>
          </div>
          <div>
            <input ref={nameInputRef}
              className="signupInput"
              placeholder="Enter Your Name"
              onChange={()=>{
                validateName(nameInputRef,nameSpanRef);
                if(nameInputRef.current.value==""){
                  nameSpanRef.current.innerHTML=""
                }
              }}
            ></input>
            <span ref={nameSpanRef}></span>
          </div>
      
        
          <div  className="select">
            <select  ref={genderSelectedRef}>
              <option className="option">Choose Gender</option>
              <option >Female</option>
              <option >Male</option>
            </select>
            </div>
            <div>
            <select ref={marriedSelectedRef}>
              <option>Choose Marital Status</option> 
              <option>Married</option>
              <option>Single</option>
            </select>
            </div>

            <div>
              <img className="image" src={profile}></img>
            </div>
            <div className="file">
            <input type="file" ref={profileInputRef} onChange={()=>{
              let selectedURL = URL.createObjectURL(profileInputRef.current.files[0]);
              setProfile(selectedURL);
            }}></input>

              <div>
            <input  ref={mobileInputRef}   className="signupInput" placeholder="Mobile No"
                onChange={()=>{
                  validateMobileNo(mobileInputRef,mobileSpanRef);
               
                }}
                ></input>
                <span ref={mobileSpanRef}></span>
                
              </div>
              <div>
                <input  className="signupInput" placeholder="City/Town" ref={cityInputRef}></input>
              </div>
              <div>
          
          <select ref={stateSelectedRef}>
            <option>choose your state</option>
            <option value="Telangana">Telangana</option>
            <option value="Andra Pradesh">Andra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madya Pradesh">Madya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Orissa">Orissa</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttaranchal">Uttaranchal</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div>
          <p className="para">Enter your account details below :</p>
        </div>
        <div>
                <input     className="signupInput" placeholder="Email" ref={emailInputRef}
                onChange={()=>{
                  validateEmail(emailInputRef,emailSpanRef);
                }}
                
                ></input>
                <span ref={emailSpanRef}></span>
              </div>
              <div>
                <input type="password"  ref={passwordInputRef} className="signupInput" placeholder="Password"
                onChange={()=>{
                  validatePassword(passwordInputRef,passwordSpanRef);
                }}
                
                
                
                ></input>
                <span ref={passwordSpanRef}></span>
              </div>
              <div>
                <input type="password" ref={reEnterPasswordInputRef}  className="signupInput" placeholder="Re-type Your Password"
                onChange={()=>{
                  if(passwordInputRef.current.value==reEnterPasswordInputRef.current.value){
                    reEnterPasswordSpanRef.current.innerHTML="✅";
                  }else{
                    reEnterPasswordSpanRef.current.innerHTML="❌";
                  }
                 
                }}
                
                ></input>
                <span ref={reEnterPasswordSpanRef}></span>
               
              </div>
         
         <div className="checkBox">
          <input type="checkbox" className="inputChechbox"  ></input>
          <label    className="checkboxLabel">I agree to the</label>
         </div>
         <div>
       {/* <Link></Link> */}
       <a style={{marginLeft:'-10%'}} href="https://docs.google.com/document/d/1UNc8jOJtjQJttCxogPfFQcXFl6gNm8iuOwiRfbkmXcw/edit">Terms of Service & Privacy Policy</a>
       </div>
       <div>
       
       
       <button  className="back" onClick={()=>{
            navigate("/Login");
       }}>BACK</button>
       </div>
       <div>
       <button style={{width:'30%',marginTop:'-20%'}} className="submit" type="button" onClick={()=>{
        sendDataToServer();
        signupFillFields();
       }}>SUBMIT</button>
       </div>
          </div>
        </form>
       
      </div>
      <div>
        <a className="brn"  href="https://www.brninfotech.com/">2023 © BRN Infotech Pvt. Ltd.</a>
      </div>
    </div>


  )
}

export default SignUp