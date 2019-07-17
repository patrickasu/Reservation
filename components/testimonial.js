import React from 'react';

const Testimonial = () => (
	<div className ="main-content">
		<div className="testimonial-section">
			<h2 className="testimonial-h2">Testimonials</h2>
			<p className="testimonial-p">What They are Saying About Us</p>
			<div className="testimonial-row">
				<div className="testimonial-col">
					<div className="testimonial-image1"></div>
					<div className="my-testimonial-col">
						<h1>Vivian Chiamaka</h1>
						<h2>Beautiful Location</h2>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<hr className="hr-style"/>
						<p>First Class Service Highly Recommended</p>
					</div>
				</div>
				<div className="testimonial-col">
					<div className="testimonial-image2"></div>
					<div className="my-testimonial-col">
						<h1>Tony Moses</h1>
						<h2>First Class Services</h2>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<hr className="hr-style"/>
						<p>Highly Recommended</p>
					</div>
				</div>
				<div className="testimonial-col">
					<div className="testimonial-image3"></div>
					<div className="my-testimonial-col">
						<h1>Cyntia Abang</h1>
						<h2>Best Price</h2>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<hr className="hr-style"/>
						<p>The Best Price Ever Highly Recommended</p>
					</div>
				</div>
			</div>
		</div>	
	</div>
);

export default Testimonial;