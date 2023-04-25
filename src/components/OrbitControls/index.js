import React, { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

import { OrbitControls, TransformControls, useCursor } from '@react-three/drei';
import { useControls } from 'leva';

import { useStore } from '../../customHooks/Threejs';

const Orbit = (props) => {
	const orbitCam = useRef();

	const { target, setTarget } = useStore();
	const { mode } = useControls({
		mode: { value: 'translate', options: ['translate', 'rotate', 'scale'] },
	});

	useFrame(() => {
		if (orbitCam) {
			//console.log(orbitCam.current.object);
		}
		if (target) {
			//console.log(target);
		}
	});

	return (
		<>
			<OrbitControls ref={orbitCam} makeDefault></OrbitControls>
			{target && (
				<>
					<TransformControls object={target} mode={mode} />
				</>
			)}
		</>
	);
};

export default Orbit;
