import React , {useState,useEffect}from 'react'

import './cme.css'
import { Link, Route } from 'react-router-dom';
function ECE() {
 
    const [hide, setHide]=useState(false);
    const setHidefun=()=>{
      if(hide===false)
      {setHide(true);
      setHideText(false);
    setCmeeve(false);setCmegal(false);setCmelab(false)}
      else
      setHide(false);
  }

    const[sidebar,setSideBar]=useState(true);
    const setSideBarFun=()=>{
        console.log(sidebar);
        if(sidebar===true)
        setSideBar(false);
        else
        setSideBar(true);
    }

    const [hideText, setHideText] = useState(false);
    const setHideTextfun=()=>{
      if(hideText===false)
      {setHideText(true);
      setHide(false); setCmeeve(false);setCmegal(false);setCmelab(false)}
      else
      setHideText(false);
  }

  const [cmelab, setCmelab] = useState(false);
  const setCmelabfun=()=>{
    if(cmelab===false)
    {setCmelab(true);
    setHide(false); setHideText(false);
    setCmegal(false);setCmeeve(false)}
    else
    setCmelab(false);
}

const [cmegal, setCmegal] = useState(false);
const setCmegalfun=()=>{
  if(cmegal===false)
  {setCmegal(true);
  setHide(false); setHideText(false);
  setCmelab(false);setCmeeve(false)}
  else
  setCmegal(false);
}

const [cmeeve, setCmeeve] = useState(false);
const setCmeevefun=()=>{
  if(cmeeve===false)
  {setCmeeve(true);
  setHide(false); setHideText(false);
  setCmelab(false);setCmegal(false);}
  else
  setCmeeve(false);
}
  // const onClick = () => setHideText(false);

  //   state = {
  //     isActive:true
  //  }
 
  //  handleShow = ()=>{
  //      this.setState({
  //          isActive: true
  //      })
  //  }
 
  //  handleHide = () =>{
  //      this.setState({
  //          isActive: false
  //      })
  //  }
 
    
    return ( 
        <div>
           
           <aside className={sidebar ? "sidebar" : "sidebarhidden"}>
            <div className='branch-logo'>
           <img src="ECE_DEPT.png" alt="cme"></img>
           
             <p> ECE </p>
             </div>
            <a onClick={()=>setHideTextfun()}> <i class="fa fa-user-o" ></i> About </a>
        <a onClick={()=>setHidefun()}> <i class="fa fa-laptop" ></i> Faculty </a>
         <a onClick={()=>setCmelabfun()}> <i class="fa fa-clone" ></i>laboratories</a> 
         <a onClick={()=>setCmegalfun()}> <i class="fa fa-star-o" ></i> Gallery </a>
          <a onClick={()=>setCmeevefun()}> <i class="fa fa-trash-o" ></i>Events</a>
          </aside>
          
       <div className='dept_name'>
        <h1>DEPARTMENT OF ELECTRONICS & COMMUNICATION</h1>
       </div>
            <Link to="/homePage">
          <div className='backhome'>
          <i class="fa fa-home" ></i>
          </div>
          </Link>
          {/* <AboutDept/> */}
         {hide &&
         <div className='faculty'>
         <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='hod-ec.jpg' alt=''></img>
           <h2>P.ATCHYUTHA RAMA RAO</h2>
           <h3>Head of the Department</h3>
           </div>
           <div class="flip-box-back">
             <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>P.ATCHYUTHA RAMA RAO</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>HOD</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

       <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='ec1s.jpg' alt=''></img>
           <h2>G.HEMANJA</h2>
           <h3>Senior Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>G.HEMANJA</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Senior Lecturer</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

       <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='ec2.jpg' alt=''></img>
           <h2>G.JYOSTNA DEVI</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>G.JYOSTNA DEVI</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

       <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='ec3.jpg' alt=''></img>
           <h2>T.MAHENDRA</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>T.MAHENDRA</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

       <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='ec4.jpg' alt=''></img>
           <h2>B.ARUN KUMAR</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>B.ARUN KUMAR</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

       <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='ec5.jpg' alt=''></img>
           <h2>T.HEMALATHA</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>T.HEMALATHA</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

       <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='ec6.jpg' alt=''></img>
           <h2>P.LAKSHMI SILPA</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>P.LAKSHMI SILPA</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

       <div class="flip-box">
         <div class="flip-box-inner">
           <div class="flip-box-front">
           <img src='ec7.jpg' alt=''></img>
           <h2>D.LAVA KUMAR REDDY</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>D.LAVA KUMAR REDDY</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>:</td>
                <td>M.Tech</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>:</td>
                <td>15 Years</td>
              </tr>
             </table>
           </div>
         </div>
       </div>   

    </div>   

    
}
      {hideText &&
        <div className='cme_about'>
          <h2>
          Vision:<br></br>The Computer Engineering Department seeks the students to Nurture them as Technocrats so that they may serve the society.<br></br><br></br>
          Mission:<br></br>The Computer Engineering Staff teach the students the curriculum with real life applications and guide their practicals, projects and mentor them.<br></br>
          </h2>
        </div>
}
   {cmelab &&
   <div className='cme_labs'>
    computer labs 
   </div>}

   {cmegal &&
   <div className='cme_gal'>
    gallery of branch
   </div>}

   {cmeeve &&
   <div className='cme_eve'>
   Eventsdone by brach
   </div>}
{/* <button onClick={()=>setSideBarFun()} className={sidebar ? "" : "btn-click"}>❯</button>
<button onClick={()=>setSideBarFun()} className={sidebar ? "btn-left" : ""}>❮</button> */}

{/* <div>
           {this.state.isActive ? <h1>Hello React</h1> : null }
             <button onClick={this.handleShow}>Show</button>
             <button onClick={this.handleHide}>Hide</button>
           </div> */}

{/* <div>
      <button onClick={onClick}>Click me</button>
      {hideText ? <Text /> : null}
    </div> */}

          </div> 
     );
}

export default ECE;