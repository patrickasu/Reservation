import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div className="main-content">
			<div className="welcome-row">
				<div className="welcome-col">
					<p className="welcome-text">Welcome to</p>
					<h2>Roly Hotel and luxury</h2>
					<Link to="/about" className="welcome-btn">Read More <i class="fas fa-long-arrow-alt-right"></i></Link>
				</div>
			</div>
	</div>
);

export default Navbar;