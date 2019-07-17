import React from 'react';
import RoomDetails from './myroomdetails';

const RoomSummary = ({room}) => (
	<div className="rooms-row">
		<div className="my-events-image" style={{ backgroundImage: "url(" + room.img_src + ")" }}></div>
		<p className="room-name">{room.name}</p>
		<p className="room-description">{room.description}</p>
		<RoomDetails />			
	</div>
);

export default RoomSummary;