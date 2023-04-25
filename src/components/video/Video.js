import React, { useState, useContext, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Tooltip } from "@chakra-ui/tooltip";
import axios from 'axios';

import { ProviderContext } from '../../providers/index';

import {
	ButtonCloseVideo,
	ContentVideoCompetence,
	ContentButtonVideos,
	ContentButtonVideo,
	ContentEncapVideo,
} from './styles';

const Video = ({ videos: inputVideos, className }) => {
	const { user, baseUrlApi } = useContext(ProviderContext);
	const [videos, setVideos] = useState([...inputVideos]);
	const [videoState, setVideoState] = useState(false);
	const [open, setOpen] = useState(true);
	const [position, setPosition] = useState(0);

	useEffect(() => {
		window.oncontextmenu = function() { return false };
	}, []);
	
	const sendVideoComplete = () => {
		axios
			.post(
				`${baseUrlApi}index.php?PCO_WSOn=1&PCO_WSKey=X24B27XD7Q&PCO_WSSecret=PDUOMAZEJQ&PCO_WSId=ActualizarVideos&estudiante_id=${
					user && user.id
				}&video_id=${videos[position].videoId}`,
			)
			.then((res) => {
				setVideoState(false);
			});
	};

	const nextVideo = () => {
		if (position < videos.length - 1) {
			setPosition(position + 1);
		} else {
			setOpen(false);
		}

		sendVideoComplete();
		let copyVideos = [...videos];
		copyVideos[position].videoComplete = true;
		setVideos([...copyVideos]);
	};

	const openVideo = (index) => {
		setOpen(true);
		setPosition(index);
	};

	return (
		<>
			<ContentButtonVideos className='step-video-controls' >
				{videos && videos.map((element, index) => {
					return (
						<Tooltip label={ element.name } placement={index === 0? 'top': 'bottom-end'} className='toolTip' key={index}>
							<ContentButtonVideo
								key={index}
								onClick={() => openVideo(index)}
							/>
						</Tooltip>
					);
				})}
			</ContentButtonVideos>

			{videos && (
				<ContentVideoCompetence open={open}>
					<ContentEncapVideo className={className}>
						<ReactPlayer
							width="100%"
							height="100%"
							url={videos && baseUrlApi + videos[position].videoUrl}
							playing={open}
							controls={videos[position].videoComplete ? true : false}
							className="react-player"
							onEnded={() => nextVideo()}
							config={{ file: { attributes: { controlsList: 'nodownload' } } }}
						/>
						{videos[position].videoComplete && (
							<ButtonCloseVideo onClick={() => setOpen(false)} />
						)}
					</ContentEncapVideo>
				</ContentVideoCompetence>
			)}
		</>
	);
};

export default Video;
