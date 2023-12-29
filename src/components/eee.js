import React , {useState,useEffect}from 'react'

import './cme.css'
import { Link, Route } from 'react-router-dom';
function EEE() {
 
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
           <img src="eee_dept.png" alt="cme"></img>
           
             <p> EEE </p>
             </div>
            <a onClick={()=>setHideTextfun()}> <i class="fa fa-user-o" ></i> About </a>
        <a onClick={()=>setHidefun()}> <i class="fa fa-laptop" ></i> Faculty </a>
         <a onClick={()=>setCmelabfun()}> <i class="fa fa-clone" ></i>laboratories</a> 
         <a onClick={()=>setCmegalfun()}> <i class="fa fa-star-o" ></i> Gallery </a>
          <a onClick={()=>setCmeevefun()}> <i class="fa fa-trash-o" ></i>Events</a>
          </aside>
          
       <div className='dept_name'>
        <h1>DEPARTMENT OF ELECTRICAL & ELECTRONICS ENGINEERING</h1>
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
           <img src='hod-ee.png' alt=''></img>
           <h2>G.V.RAMANAIAH</h2>
           <h3>Head of the Department</h3>
           </div>
           <div class="flip-box-back">
             <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>G.V.RAMANAIAH</td>
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
           <img src='e1s.jpg' alt=''></img>
           <h2>S.BHASKAR NAIDU</h2>
           <h3>Senior Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>S.BHASKAR NAIDU</td>
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
           <img src='e2s.jpg' alt=''></img>
           <h2>P.RAMESH BABU</h2>
           <h3>Senior Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>P.RAMESH BABU</td>
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
           <img src='e3s.jpg' alt=''></img>
           <h2>G.GOPI KRISHNA</h2>
           <h3> Senior Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>G.GOPI KRISHNA</td>
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
           <img src='e4.jpg' alt=''></img>
           <h2>V.HARI BABU</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>V.HARI BABU</td>
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
           <img src='e5.jpg' alt=''></img>
           <h2>K.BHARATHI</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>K.BHARATHI</td>
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
           <img src='e6.jpg' alt=''></img>
           <h2>R.SIVA PRASAD</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>R.SIVA PRASAD</td>
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
           <img src='e7.jpg' alt=''></img>
           <h2>S.SUDHEER KUMAR REDDY</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
             <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>S.SUDHEER KUMAR REDDY</td>
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
           <img src='e8.jpg' alt=''></img>
           <h2>N.PURUSHOTTAM</h2>
           <h3>S Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>N.PURUSHOTTAM</td>
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
           <img src='e9.jpg' alt=''></img>
           <h2>K.VIJAYA LAKSHMI</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>K.VIJAYA LAKSHMI</td>
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
           <img src='e10.jpg' alt=''></img>
           <h2>P.BALA SUBRAMANYAM</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>P.BALA SUBRAMANYAM</td>
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
           <img src='e11.jpg' alt=''></img>
           <h2>A.R.GOVARDHAN NAIDU</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>A.R.GOVARDHAN NAIDU</td>
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
           <img src='e12.jpg' alt=''></img>
           <h2>B.ARCHANA</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>B.ARCHANA</td>
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
           <img src='ew.jpg' alt=''></img>
           <h2>V.S.SUBHODAYA RAJU</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>V.S.SUBHODAYA RAJU</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Workshop attendant</td>
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

export default EEE;