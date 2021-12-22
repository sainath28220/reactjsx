import React from 'react';
import logo from './logo.svg';
import './App.css';

const values = {
  heading1 : "Appointment : ",
  Time : "9:00 AM  (22-12-2021)",
  email : "Email : ",
  phone : "Phone : ",
  email_name : "Yamin1336@gmail.com",
  phone_number : "+918880063004",
  mark : "Mark",
  Time1 : "10:30 (15-09-2021)"
}
var arrow=">"
var arrow1 = "<"
function App() {
  return (
    <div className="site-container">
      <div className='firstone'>
        <p className='one1' style={{width:"350px"}}>
          <p style={{width:"25px",height:"25px"}}>{arrow1}</p>
        </p>
        <p className='one1' style={{width:"150px",marginTop:"0px"}}>
          <p style={{marginTop:"0px"}}>Sainath</p>
          <p style={{marginTop:"0px"}}>00020102</p>
        </p>
        <p className='one1' style={{float:"right",marginLeft:"5px"}}>
          <p style={{marginRight:"15px",width:"50px",height:"25px",background:"grey"}}>Print</p>
        </p>
      </div>
      <div className="customer-info">
        <p>
          <span><strong>{values.heading1}</strong></span>
          <span>{values.Time}</span>
        </p>
        <p>
          <span><strong>{values.email}</strong></span>
          <span>{values.email_name}</span>
        </p>
        <p>
          <span><strong>{values.phone}</strong></span>
          <span>{values.phone_number}</span>
        </p>
      </div>
      <div className='order-info'>
          <p className='ptag'>
            <p><strong>Status</strong></p>
            <ul><li>In Progress</li></ul>
          </p>
          <p className='ptag'>
            <p><strong>Door</strong></p>
            <p>{values.mark}</p>
          </p>
          <p className='ptag'>
            <p><strong>Time</strong></p>
            <p>{values.Time1}</p>
          </p>
      </div>
      <div className='product-list'>
        <p className = "last-class">
          <input className='label1' type={"checkbox"} style={{height:"25px",width:"25px",marginTop:"10px"}}></input>
        </p>
        <p className = "last-class">
          <img src = "https://www.w3schools.com/howto/img_avatar.png" style={{height:"200px",width:"200px",margin:"10px 0px"}}></img>
        </p>
        <div className = "last-class" className='style11' style={{display:"inline-block",marginLeft:"35px"}} >
          <h1 >Boltaart Bosbessen</h1>
          <h3 className='style12'>Bonjour salut Je t' aime Bonne Journee </h3>
        </div>
        <p className = "last-class" style={{height:"25px",width:"25px",display:"inline-block",float:"right",marginTop:"100px",marginRight:"15px"}} >
          <span style={{height:"25px",width:"25px"}}>{arrow}</span>
        </p> 
      </div> 
    </div>
  );
}

export default App;
