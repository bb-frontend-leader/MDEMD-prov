import * as THREE from 'three';

import { useSRGBTexture } from '../../customHooks/Texture';

export function SpeechBubble({ image, position }) {
	const sheet = useSRGBTexture(image, true, THREE.LinearFilter);

	return (
		<mesh position={position}>
			<planeGeometry args={[6, 2]} />
			<meshToonMaterial map={sheet} transparent />
		</mesh>
	);
}

export function OnHover() {
	const para = document.querySelector('img');
	const obj = document.getElementsByClassName('squareCard');
	const enterHandler = (e) => {};

	para.addEventListener('pointerenter', enterHandler);

	return () => {
		para.removeEventListener('pointerenter', enterHandler);
	};
}
