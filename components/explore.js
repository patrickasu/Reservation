import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => (
	<div className="main-content">
		<div className="container">
			<div className="explore-row">
				<p>Explore</p>
				<h2>The Hotel</h2>
				<div className="explore-col">
					<div className="explore-image-1">
						<div className="explore-overlay">
							<div className="explore-overlay-img-1"></div>
						</div>
						<h3 className="overlay-text">Wellness & Spar</h3>
						<h4 className="wellness">We offer the best wellness programs visit us now</h4>
						<Link to="/wellness" className="explore-link">Explore More</Link>
					</div>
					<div className="explore-image-2">
						<div className="explore-overlay">
							<div className="explore-overlay-img-2"></div>
						</div>
						<h3 className="overlay-text">Restaurants & Bars</h3>
						<h4 className="wellness">Best delicacies at affordable rate explore more here</h4>
						<Link to="/restaurant" className="explore-link">Explore More</Link>
					</div>
					<div className="explore-image-3">
						<div className="explore-overlay">
							<div className="explore-overlay-img-3"></div>
						</div>
						<h3 className="overlay-text">Special Offers</h3>
						<h4 className="wellness">We have packages design to give you a unique experience </h4>
						<Link to="/specialoffer" className="explore-link">Explore More</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Explore;
