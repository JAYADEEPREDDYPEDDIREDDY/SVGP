import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./navbar.css";

 

function NavBar() {

  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [navbar, setnavbar] = useState(false);
  // const [header, setHeader] = useState(false);
  const changenavcol = () => {
    if (window.scrollY > 150) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };
  
  const [isShown, setIsShown] = useState(false);
  // const changeheadcol = () => {
  //   if (window.scrollY >50) {
  //     setHeader(true);
  //   } else {
  //     setHeader(false);
  //   }
  // };
   window.addEventListener("scroll", (changenavcol));

   const [ display, setDisplay ] = useState(false)

   function setDisplayfun() {

       if ( display === false ) {

           setDisplay( true )

       } else {

           setDisplay( false)

       }
      }
  return (
    <>
      <div>
         <nav className={navbar ? "navbar active" : "navbar"} /*id={header ?"header_active": ""}*/>
          <div className="nav-container">
            {/* <div className="nav">
              <img src="SVGP.png" alt="logo" id="logo"></img>
              <p>SVGP</p>
            </div>
            <div className="nav-logo">
           
              <i className="fas fa-code"></i>
            </div>
          <div className="animation"></div> */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
     
              <li className="nav-item" id="link1">
                <div className="nav-links">
                  <Link to="/" className="Link"  style={{textDecoration:'none'}}>
                    Home
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-links">
                  <Link to="/about" className="Link" style={{textDecoration:'none'}}>
                    About
                  </Link>
                </div>
              </li>
              <li className="nav-item" >
                <div className="nav-links">
               
                <summary><a href="#dept" className="Link" style={{textDecoration:'none'}} >Departments
       </a></summary>

                
                  {/* <select style={{textDecoration:'none',border:'none',background:'none'}}>
                    <option><a href="#dept" className="Link" style={{textDecoration:'none'}}>
Departments</a></option>
               <option>cme</option>
               <option>cme</option>
               <option>cme</option>
                  </select> */}
                 </div>
              </li>
            
              {/* <div className="dropdown-menu1">
              <li>COMPUTER ENGINEERING</li>
              <li>CIVIL ENGINEERING</li>
              <li>MECHANICAL ENGINEERING</li>
              <li>ELECTRICAL & ELECTRONICS ENGINEERING</li>
              <li>ELECTRONICS & COMMUNICATION ENGINEERING</li>
              <li>BIO-MEDICAL ENGINEERING</li>
              <li>PHARMACY</li>
              <li>CHEMICAL & SUGAR TECHNOLOGY</li>
              <li>GENERAL SEASON</li>
            </div> */}
             
             {/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}

<li className="nav-item" id="nav-item1">
                <div className="nav-links" id="drop"  >Activities</div>


                {display &&
                                <div className="dropdown-act">
                                <li>NCC</li>
                                <li>NSS</li>
                                <li>INNOVATON HUB</li>
                              </div>
                }                

</li>
              
           

              <li className="nav-item">
                <div className="nav-links">
                <Link to="/gallery" className="Link" style={{textDecoration:'none'}}>
                  Gallery
                  </Link>
                  </div>
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
      

      {/* <div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div> */}
    </>
  );
}

export default NavBar;


function DropMenuButton(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuOptionClick(option) {
    props.onOptionSelect(option);
    setIsMenuOpen(false);
  }

  const menuOptions = props.menuOptions.map(option => (
    <div key={option} onClick={() => handleMenuOptionClick(option)}>
      {option}
    </div>
  ));

  return (
    <div className="drop-menu-button">
      <button onClick={handleMenuToggle}>Menu</button>
      {isMenuOpen && <div className="menu-options">{menuOptions}</div>}
    </div>
  );
}