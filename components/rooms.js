import React, { Component } from 'react';
import RoomList from './roomlist';
import { connect } from 'react-redux';


class Rooms extends Component {
	render(){
		const { rooms } = this.props;
		return(
			<div className="main-content">
				<div className="rooms-row">
					<div className="rooms-col">
						<RoomList rooms={rooms} />
					</div>	
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		rooms: state.room.rooms
	}
}

export default connect(mapStateToProps)(Rooms);