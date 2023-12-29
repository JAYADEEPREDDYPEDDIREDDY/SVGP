import React from 'react';
import NavBar from './navbar';
import './homepage.css'
import Footer from './footer';
import CitiesSlider from './about';
import Facilities from './facilites';
import Branches from './branches';
import Header from './header';
import MESSAGE from './about';
import Marquee from 'react-marquee-master';


function HomePage() {
  const myStyle={
    backgroundImage: "url(main2.png)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:"604px",
    
};

    return (  <>
        
        <div>
              <Header/>
            </div> 
            
           <div style={myStyle} className=" App bg-image">
            
           <div ><NavBar/>
           <div>
          <center><h1 className='text1'><div className='text2'>Welcome to </div><div>Sri Venkteshwara Government polytechnic College</div></h1>
          <button className='glow-on-hover'>Know More </button><br></br>
          <ul className='list-icons'>
            <li><hr></hr></li>
            <li ><a href="mailto:pemaramashok87277@gmail.com"><i className='fa fa-envelope social-media icons'></i></a></li>
            <li><a href="https://www.instagram.com/"><i className='fa fa-instagram'></i></a></li>
            <li><i className='fa fa-facebook'></i></li>
           
            <li><hr></hr></li>
          </ul>
          </center> 
          <div className='notification-card'> 
          <Marquee className='notification'>
         <div>SPMVV-BTH Admission Notification 2022-23</div> 
         <div>SPMVV-BTH Admission Notification 2022-23</div> 
         <div>SPMVV-BTH Admission Notification 2022-23</div> 
         <div>SPMVV-BTH Admission Notification 2022-23</div> 

</Marquee>
          </div>
           </div>
           </div> 
           </div>
           {/* <CitiesSlider slides={slides}/> */}
           <MESSAGE/>
           <Facilities/> 
          <div id='dept'><Branches/></div> 
     
     <Footer/>
    </>);
}

export default HomePage;