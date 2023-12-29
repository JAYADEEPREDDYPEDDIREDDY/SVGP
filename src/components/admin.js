import React from 'react';
import './admin.css';
function AdminLogin() {
    return (  <>
        <div className="container">
	<div id="login-box">
		<div className="logo">
			<img src="http://placehold.it/100x100?text=DD" className="img img-responsive img-circle center-block"/>
			<h1 className="logo-caption"><span className="tweak">L</span>ogin</h1>
		</div>
		<div className="controls">
			<input type="text" name="username" placeholder="Username" className="form-control" />
			<input type="text" name="username" placeholder="Password" className="form-control" />
			<button type="button" className="btn btn-default btn-block btn-custom">Login</button>
		</div>
	</div>
</div>
<div id="particles-js"></div>  
    </>);
}

export default AdminLogin;