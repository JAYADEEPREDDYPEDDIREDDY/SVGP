import React from 'react';
import './footer.css'
const Footer=()=>{
    return(
        <>
        
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Sri venkteshwara government polytechnic college<span></span></h3>
        <h4>Tirupathi</h4>

		<div className="footer-icons">

<a href="/"><i className="fa fa-facebook"></i></a>
<a href="/"><i className="fa fa-twitter"></i></a>
<a href="/"><i className="fa fa-linkedin"></i></a>
<a href="/"><i className="fa fa-github"></i></a>

</div>
			</div>


			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>ADDRESS</span>Tirupathi</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>9390787290</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:svgp@gmail.com">svgp@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the college</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				

			</div>

		</footer>
        </>
    )
}

export default Footer;


