import React from "react";
import { Link } from "react-router-dom";
import './branches.css';

const Branches=()=>{
    return(<>
    <div className="wrap">
       <center><div className="headingdept">DEPARTMENTS</div></center>
       <div className="container-wrapper">
        <Link to="/cme" style={{textDecoration:'none'}}>
       <div className="containerdept">
           <img src="CME_DEPT.png" alt="cme"></img>
           <div className="text12"> Computer Engineering Department </div>
           <div className="text123">❯</div>
       </div>
       </Link>
       <Link to="/civil" style={{textDecoration:'none'}}>
       <div className="containerdept">
           <img src="civil.png" alt="cme"></img>
           <div className="text12">Department of Civil Engineering</div>
           <div className="text123">❯</div>
       </div>
       </Link>
       <Link to="/mech" style={{textDecoration:'none'}}>
       <div className="containerdept">
           <img src="mech_dept.png" alt="cme"></img>
           <div className="text12">Mechanical Engineering</div>
           <div className="text123">❯</div>
       </div>
       </Link> 
      </div>
      <button className="btn">View all departments</button>
      <div className="container-wrapper container-wrapper2">
        <Link to="/pharmacy" style={{textDecoration:'none'}}>
       <div className="containerdept">
           <img src="phar_dept.png" alt="cme"></img>
           <div className="text12">Department of Pharmacy</div>
           <div className="text123">❯</div>
       </div>
       </Link>
       <Link to="/eee" style={{textDecoration:'none'}}>
       <div className="containerdept">
           <img src="eee_dept.png" alt="cme"></img>
           <div className="text12">Electrical & Electronics Engineering</div>
           <div className="text123">❯</div>
       </div>
       </Link>
       <Link to="/ece" style={{textDecoration:'none'}}>
       <div className="containerdept">
           <img src="ECE_DEPT.png" alt="cme"></img>
           <div className="text12">Electronics & Communication</div>
           <div className="text123">❯</div>
       </div>
       </Link>
       </div>
       <div className="container-wrapper container-wrapper2">
        <Link to="chem" style={{textDecoration:'none'}}>
        <div className="containerdept">
           <img src="chemi_dept.png" alt="cme"></img>
           <div className="text12">Chemical & Sugar Technology</div>
           <div className="text123">❯</div>
       </div>
       </Link>
       <Link to="bme" style={{textDecoration:'none'}}>
       <div className="containerdept">
           <img src="biomed_dept.png" alt="cme"></img>
           <div className="text12">Bio-Medical Engineering</div>
           <div className="text123">❯</div>
       </div> 
       </Link>
       <div className="containerdept">
           <img src="general.png" alt="cme"></img>
           <div className="text12">General Section</div>
           <div className="text123">❯</div>
       </div> 
      </div>
      
    </div>
    </>
    )
}

export default Branches;