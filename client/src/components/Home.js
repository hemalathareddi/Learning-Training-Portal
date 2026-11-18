import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { IoHappy } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";


function Home() {

 let storeObj = useSelector((store)=>{ return store})

  return (
    
    <div className='main' style={{backgroundColor:'white'}}>
        
    <Navbar style={{marginTop:'3%'}} className='main' bg="dark" data-bs-theme="dark">
    <Container>
<Navbar.Brand className='navbar' href="#home"><img style={{marginLeft:'-62%',width:'70%'}} src='https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo.png'></img> </Navbar.Brand>
      <Nav className="me-auto" style={{marginLeft:'-10%'}}>
        <Nav.Link  href="#home" onClick={()=>{
         }}><b>Home</b></Nav.Link>
        <Nav.Link href="#features" onClick={()=>{
         
         

         }}><b>Daily Satus Updates</b></Nav.Link>
        <Nav.Link  href="#home" onClick={()=>{
          
        
 

         }}><b>Tasks</b></Nav.Link>
 <Nav.Link  href="#home" onClick={()=>{
           
      


         }}><b>Messages</b></Nav.Link>

<Dropdown id='profile'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
    <b> more</b>
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        <Dropdown.Item href="#/action-1" onClick={()=>{
          
          
        }}>Create a Request</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>{
        
        
        }}>Apply Leave</Dropdown.Item>
        
        <Dropdown.Item href="#/action-1" onClick={()=>{
          
          
        }}>Curriculum</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

 <Dropdown id='profile' style={{marginLeft:'0%'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <b><IoHappy style={{color:'rgb(36,169,186)',marginTop:'-4%'}} /> {storeObj && storeObj.loginData && storeObj.loginData.data ? `${storeObj.loginData.data.name} `:'user'}</b>
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        <Dropdown.Item href="/Login" ><MdLogout /> Log Out</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

    <Nav.Link  title='Your profile'  > </Nav.Link>


      </Nav>
    </Container>
  </Navbar>
  
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

<div style={{display:'inline-block'}}>
<img style={{marginLeft:"-100%",borderRadius:"2%",width:'40%'}} src={storeObj && storeObj.loginData && storeObj.loginData.data ? `http://localhost:1414/${storeObj.loginData.data.profile}`:'https://th.bing.com/th/id/OIP.5X5YCMnONnnBftR_180S0gAAAA?rs=1&pid=ImgDetMain'}></img>
<p><strong style={{marginLeft:'-103%'}}> {storeObj && storeObj.loginData && storeObj.loginData.data ? `${storeObj.loginData.data.name} `:'user'}</strong></p>
</div> 


<h6 style={{color:"red",marginLeft:"15%",marginTop:"-20%" }}><HiOutlineAdjustmentsVertical /> ATTENDANCE SUMMARY</h6>


<Table striped style={{width:"30%",marginLeft:"51%"}}>
      <thead>
      
      </thead>
      <tbody>
      <tr>
      <th>Total Days</th>
      <td>1</td>
    </tr>
    <tr>
      <th>Working Days</th>
      <td>1</td>
    </tr>
    <tr>
      <th>Leaves</th>
      <td>0 days</td>
    </tr>
    <tr>
      <th>Absents</th>
      <td>0 days</td>
    </tr>
  <tr>
      <th>Days Attended</th>
      <td>1 days</td>
    </tr>
    <tr>
    <th>Updates Sent</th>
      <td>1 times</td>
    </tr>
    <tr>
      <th>Working Hours</th>
      <td>8:00:00</td>
    </tr>
    <tr>
      <th>Worked Hours</th>
      <td>8:00:00</td>
    </tr>
    <tr>
      <th>Overall Spent Summary</th>
      <td>0:60:60</td>
    </tr>
    <tr>
      <th>Worked Per day(Avg.Hrs)</th>
      <td>08:00:00(100%)</td>
    </tr>
    <tr>
      <th>Shortage Per day(Avg.Hrs)</th>
      <td>00:00:00(0%)</td>
    </tr>
    <tr>
      <th>Late to Office</th>
      <td>0 times</td>
    </tr>
    <tr>
      <th>Minimum Hrs Missed</th>
      <td>0 times</td>
    </tr>
    <tr>
      <th>Max Points</th>
      <td>30</td>
    </tr>
    <tr>
      <th>TPoints Earned</th>
      <td>30</td>
    </tr>
    <tr>
      <th>Your Performance Score</th>
      <td>100%</td>
    </tr>  
     
      </tbody>
    </Table>


<br></br>
<div id='accordion'>
<Accordion >
      <Accordion.Item eventKey="0" >
        <Accordion.Header > <strong><FaEdit /> Attendance Details</strong></Accordion.Header>
        <Accordion.Body>
          


<Table striped>
      <thead>
        <tr>
        <th>#</th>
      <th>Date</th>
      	<th>Day Type</th>
        <th>Check In</th>
        <th>Check Out</th>
        <th>Time Spent</th>
        <th>Spent Summary</th>
        <th>Points Earned</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Tue, 21-Nov-23</td>
          <td>JustLab</td>
          <td>10:00:00</td>
          <td>06:00:00</td>
          <td>08:00:00</td>
          <td>00:00:00</td>
          <td>30</td>
        </tr>
       
      
      </tbody>
    </Table>


        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  







</div>

  )
}

export default Home