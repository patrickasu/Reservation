import React from 'react';
import Explore from './explore';
import Services from './services';
import Rooms from './rooms';
import Testimonial from './testimonial';


const Home = () => {
	return (
		<React.Fragment>
			<Explore />
			<Services />
			<Rooms />
			<Testimonial />
		</React.Fragment>
	)
}

export default Home;