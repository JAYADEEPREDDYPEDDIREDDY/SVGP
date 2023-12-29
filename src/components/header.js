import React from 'react'
import "./header.css"

function Header() {
    


    return ( <>

    <div className='header' >
       <div className='header-img'>
         <img src='SVGP.png' alt=''></img>
       </div>
        <div className='header-text'>
            <h4>శ్రీ వెంకటేశ్వర ప్రభుత్వ పాలిటెక్నిక్ కళాశాల
</h4>
          <h1>SRI VENKATESHWARA GOVERNMENT POLYTECHNIC COLLEGE</h1>
        </div>
        <div className='header-logo'>
            <img src='smj-logo.png' alt=''></img>
        </div>
    </div>
    </> );
}

export default Header;