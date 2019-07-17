const initState = {
	rooms: [
		{
			img_src: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_960_720.jpg",
			description: "Starting from 35000 per night",
			name: "Classic Double Room",
		},
		{
			img_src: "https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_960_720.jpg",
			description: "Starting from 52000 per night",
			name: "Diplomatic Suite",
		},
		{
			img_src: "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416063_960_720.jpg",
			description: "Starting from 40000 per night",
			name: "Creative Suite",
		},
		{
			img_src: "https://cdn.pixabay.com/photo/2016/04/15/11/43/hotel-1330834_960_720.jpg",
			description: "Starting from 45000 per night",
			name: "Club Suite",
		},
		{
			img_src: "https://cdn.pixabay.com/photo/2015/02/25/19/57/rest-649351_960_720.jpg",
			description: "Starting from 85000 per night",
			name: "Executive Suite",
		},
		{
			img_src: "https://cdn.pixabay.com/photo/2014/08/11/21/31/wall-panel-416041_960_720.jpg",
			description: "Starting from 75000 per night",
			name: "Classic Superior Room",
		}
	]
}

const roomReducer = (state = initState, action) => {
	return state
}

export default roomReducer;