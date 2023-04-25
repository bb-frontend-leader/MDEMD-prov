import React from 'react';
import ReactPlayer from 'react-player';

const CustomReactPlayer = ({ url, volume }) => {
	return (
		<ReactPlayer
			style={{
				zIndex: -1,
				position: 'absolute',
				width: 0,
				height: 0,
			}}
			url={url}
			volume={volume}
			loop={true}
			playing
		/>
	);
};

export default CustomReactPlayer;
