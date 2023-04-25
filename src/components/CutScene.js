import { useThree } from '@react-three/fiber';
import React, { useState } from 'react';

import Sprite from './Sprite';

import { ContinueButton, SkipButton, SpeechBubble } from './ui/styles';

function SetSceneCamera({ sceneCamera, isLastFrame }) {
	const { camera } = useThree();
	const newPos = JSON.parse(JSON.stringify(sceneCamera.position));
	const newRot = JSON.parse(JSON.stringify(sceneCamera.rotation));
	const fov = JSON.parse(JSON.stringify(sceneCamera.fov));

	if (isLastFrame) {
		camera.position.set(newPos[0], newPos[1], newPos[2]);
		camera.rotation.set(newRot[0], newRot[1], newRot[2]);
		camera.fov = fov;
		camera.updateProjectionMatrix();
	}
}

function CameraMovement({ cameraProperties, frame }) {
	const { camera } = useThree();

	if (cameraProperties[frame].hasOwnProperty('camera')) {
		camera.position.set(
			cameraProperties[frame].camera.position.x,
			cameraProperties[frame].camera.position.y,
			cameraProperties[frame].camera.position.z,
		);
		camera.rotation.set(
			cameraProperties[frame].camera.rotation.x,
			cameraProperties[frame].camera.rotation.y,
			cameraProperties[frame].camera.rotation.z,
		);
		camera.fov = cameraProperties[frame].camera.fov;
		camera.updateProjectionMatrix();
	}
}

function Speech({ resources, frame, children }) {
	let speech;
	let img;

	if (resources[frame].hasOwnProperty('speech')) {
		speech = resources[frame].speech.text;
		img = resources[frame].speech.image;
	}

	return (
		<SpeechBubble show={speech ? true : false}>
			<img src={img} alt="" />
			<p>{speech}</p>
			{children}
		</SpeechBubble>
	);
}

function Sprites({ resources, frame }) {
	const [sprites] = useState(() => new Set());

	if (resources[frame].hasOwnProperty('sprites')) {
		if (sprites.size > 0) sprites.clear();

		sprites.add(
			resources[frame].sprites.map((sprite, index) => {
				return (
					<Sprite
						key={index}
						expressions={sprite.expressions}
						answerState={false}
						isReady={true}
					/>
				);
			}),
		);
	}
	// useEffect(() => {
	// }, [frame]);

	return sprites;
}

const CutScene = ({ resources, frame, setFrame, setLastFrame }) => {
	const framesLength = resources.length - 1;

	const onClickHandler = () => {
		if (frame === framesLength) {
			setLastFrame(true);
		}
		if (frame < framesLength) {
			setFrame(frame + 1);
		}
	};

	return (
		<>
			<SkipButton onClick={() => setLastFrame(true)} />
			<Speech resources={resources} frame={frame}></Speech>
			<ContinueButton
				onClick={onClickHandler}
				isLastFrame={frame === framesLength}
			/>
		</>
	);
};

export { CutScene, CameraMovement, Sprites, SetSceneCamera };
