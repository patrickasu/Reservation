import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
	<nav>
		<i class="fab fa-pied-piper-alt"><h2 className="font-text">Roly Hotel</h2></i>
		<ul className="navigation-bar">
			<li><NavLink className="navigation-links" exact to="/">Home</NavLink></li>
			<li><NavLink className="navigation-links" to="/roomdetails">Accommodations</NavLink></li>
		</ul>
	</nav>
);

export default Navbar;