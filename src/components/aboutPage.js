import React from "react";
import { useState } from "react";
import "./aboutPage.css";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Footer from './footer';
import Header from "./header";

function AboutPage() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [navbar, setnavbar] = useState(false);

  const [hideOverview, setHideOverview] = useState(true);
  const setHideOverviewfun=()=>{
    setcolor();
    if(hideOverview===false)
   { setHideOverview(true);
    setHidevm(false);setHidepre(false);}
    
    // else
    // setHideOverview(false);
 }
const [iscolor, setiscolor]=useState(true);
const setcolor=()=>{
  if(iscolor===false){
    {setiscolor(true);setiscolors(true);}
  }
  else{
    setiscolor(false)
  }
}

const [iscolors, setiscolors]=useState(false);
const setcolors=()=>{
  if(iscolors===true){
   { setiscolors(false);setiscolor(true);}
  }
  else{
    setiscolors(true);
  }
}

const [hidevm, setHidevm] = useState(false);
const setHidevmfun=()=>{
  setcolors();
  if(hidevm===false)
 { setHidevm(true);
  setHideOverview(false); setHidepre(false);}
  // else
  // setHidevm(false);
}

const [hidepre, setHidepre] = useState(false);
const setHideprefun=()=>{
  if(hidepre===false)
 { setHidepre(true);
  setHideOverview(false);setHidevm(false);}
  
  // else
  // setHidepre(false);
}

const changenavcol = () => {
  if (window.scrollY > 150) {
    setnavbar(true);
  } else {
    setnavbar(false);
  }
};
  return (
    <>
    <Header/>
      <div className="nav-aboutpage">
      
        <nav className={navbar ? "navbar active" : "navbar"} id='nav_aboutpage'>
          <div className="navbar">
           

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <div className="nav-links">
                  <Link to="/" className="Link" style={{textDecoration:'none'}}>
                    Home
                  </Link>
                </div>
              </li>
              <li className="nav-item" id="link2">
                <div className="nav-links">
                  <Link to="/about" className="Link" style={{textDecoration:'none'}}> 
                    About
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links">Departments</div>
                {/* <div class="dropdown-menu">
          <li href="#">COMPUTER ENGINEERING</li>
           <li href="#">CIVIL ENGINEERING</li>
           <li href="#">MECHANICAL ENGINEERING</li>
           <li href="#">ELECTRICAL & ELECTRONICS ENGINEERING</li>
           <li href="#">ELECTRONICS & COMMUNICATION ENGINEERING</li>
           <li href="#">BIO-MEDICAL ENGINEERING</li>
           <li href="#">PHARMACY</li>
           <li href="#">CHEMICAL & SUGAR TECHNOLOGY</li>
           <li href="#">GENERAL SECTION</li>
  </div> */}
              </li>
              <li className="nav-item">
                <div className="nav-links">Gallery</div>
              </li>
              <li className="nav-item">
                <div className="nav-links">Contact</div>
              </li>

            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <FaBars />
            </div>
          </div>
        </nav>
      </div>
      
      <div className="page">
        <div className="aside1">
         
        <a onClick={()=>setHideOverviewfun()} className={iscolor ? "setbgcolor" :""} >Overview</a> 
<a onClick={()=>setHidevmfun()} className={iscolors ? "setbgcolor" :""} id="nav3">Vision & Mission</a>
       
      
        </div>
        {hideOverview &&
        <div className="overview">
        <p>Sri Venkateshwara Government Polytechnic College is a
        government-run polytechnic college located in Chittoor district of
        Andhra Pradesh, India. It was established in the year 2008 and is
        affiliated to the State Board of Technical Education and Training
        (SBTET). The college offers diploma courses in various engineering
        disciplines such as Civil Engineering, Mechanical Engineering,
        Electrical and Electronics Engineering, Electronics and Communication
        Engineering, Computer Engineering, and Mining Engineering. The college
        has a well-equipped infrastructure with modern amenities such as
        laboratories, libraries, seminar halls, and sports facilities. The
        faculty members of the college are highly qualified and experienced in
        their respective fields. Sri Venkateshwara Government Polytechnic
        College also provides various co-curricular activities to its students
        to enhance their overall development. The college has a placement cell
        that helps the students to get placed in top companies. Overall, Sri
        Venkateshwara Government Polytechnic College is a reputed polytechnic
        college in Andhra Pradesh that provides quality education to its
        students and prepares them for a successful career in the field of
        engineering.</p> 
        </div>
}
{hidevm &&
        <div className="vismis">
          <p>
          Vision:

            <p> &#9658; To impart technical knowledge to our students how to use whole of themselves</p>
            <p> &#9658; To make them realize that equipping and capacity building in ongoing process</p>
            <p> &#9658; To make our students the worthy citizens of a nation of priceless heritage. </p>
            <p>  &#9658; To make the move to learn and learn to move</p>
          </p>
         
          <p>
          Mission:

            <p> &#9658; To provide with the necessary state of the art facilities to cope with the curriculum.</p>
            <p> &#9658; To provide with accessibility to latest trends and modern equipments to pave a way for new innovation.</p>
            <p> &#9658; Providing with placement guidance with up to date information from home and aboard. </p>
            
          </p>

        </div>
}


        <Footer/>
      </div>
      {/* {hideOverview &&
      <div className="nav-text">
         <h1 id="nav-text">Overview</h1>
      </div>
       }
       {hidevm &&
      <div className="nav-text">
      <h1 id="nav-text">Vision & Mission</h1>
        </div>
       }
       {hidepre &&
        <div className="nav-text">
        <h1 id="nav-text">Our Preceders</h1>
        </div>
       } */}
    </>
  );
}

export default AboutPage;
