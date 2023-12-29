import React , {useState}from 'react'

import './cme.css'
import { Link } from 'react-router-dom';
function PHARMACY() {
 
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
    // const setSideBarFun=()=>{
    //     console.log(sidebar);
    //     if(sidebar===true)
    //     setSideBar(false);
    //     else
    //     setSideBar(true);
    // }

    const [hideText, setHideText] = useState(false);
    const setHideTextfun=()=>{
        setSideBar(true)
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
           <img src="phar_dept.png" alt="cme"></img>
           
             <p> PHARMACY </p>
             </div>
            <div onClick={()=>setHideTextfun()}> <i class="fa fa-user-o" ></i> About </div>
        <div onClick={()=>setHidefun()}> <i class="fa fa-laptop" ></i> Faculty </div>
         <div onClick={()=>setCmelabfun()}> <i class="fa fa-clone" ></i>laboratories</div> 
         <div onClick={()=>setCmegalfun()}> <i class="fa fa-star-o" ></i> Gallery </div>
          <div onClick={()=>setCmeevefun()}> <i class="fa fa-trash-o" ></i>Events</div>
          </aside>
          
       <div className='dept_name'>
        <h1>DEPARTMENT OF PHARMACY</h1>
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
           <img src='hod-p.jpg' alt=''></img>
           <h2>G.KRISHNA MURTHY NAIDU</h2>
           <h3>Head of the Department</h3>
           </div>
           <div class="flip-box-back">
             <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>G.KRISHNA MURTHY NAIDU</td>
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
           <img src='p1.jpg' alt=''></img>
           <h2>H M SUDHEER KUMAR</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>H M SUDHEER KUMAR</td>
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
           <img src='p2.jpg' alt=''></img>
           <h2>G.CHANDRA SHEKAR</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>G.CHANDRA SEKHAR</td>
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
           <img src='p3.jpg' alt=''></img>
           <h2>M.CHANTI NAIK</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>M.CHANTI NAIK</td>
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
           <img src='p4.jpg' alt=''></img>
           <h2>P.V.SRI RAMYA</h2>
           <h3>Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>P.V.SRI RAMYA</td>
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
           <img src='p5.jpg' alt=''></img>
           <h2>R.CHENGALARYULU</h2>
           <h3>Office Subordinate(Attender)</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>R.CHENGALARYULU</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Office Subordinate(Attender)</td>
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
           <img src='p6.jpg' alt=''></img>
           <h2>K.PADMAVATHI</h2>
           <h3>Senior Lecturer</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>K.PADMAVATHI</td>
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
           <img src='p7.jpg' alt=''></img>
           <h2>P.RAJESWARI</h2>
           <h3>Skilled Assistant</h3>
           </div>
           <div class="flip-box-back">
           <h2>Profile:</h2>
             <table>
             <tr>
                <td>Name</td>
                <td>:</td>
                <td>P.RAJESWARI</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>:</td>
                <td>Skilled Assistant</td>
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

export default PHARMACY;