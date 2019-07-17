import React from 'react';
import RoomSummary from './roomsummary';


const RoomList = ({rooms}) => (
	<div className="main-content">
		<div className="roomlist-row">
			<div className="roomlist-col">
				{rooms && rooms.map(room =>{
					return(
						<RoomSummary room={room} />
					)	
				})};
			</div>	
		</div>
	</div>
);

export default RoomList;