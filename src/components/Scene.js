import React from 'react';
//import { useStore } from '../customHooks/Threejs';
//import Orbit from './OrbitControls';
import { Sun } from './SceneObject';

import { Canvas } from '@react-three/fiber';
import { ReinhardToneMapping } from 'three';

const Scene = (props) => {
	//const { target, setTarget } = useStore();

	return (
		<Canvas
			onCreated={(renderer) => {
				renderer.toneMapping = ReinhardToneMapping;
				renderer.gl.outputEncoding = 3001; /*sRGB*/
			}}
			/* orthographic*/
			dpr={[1, 2]}
			gl={{ antialias: true }}
			camera={props['camera']}
			shadows={props['shadows'] ?? false}
			style={{ position: 'absolute', background: '#98bbc5' }}
			//onPointerMissed={() => setTarget(null)}
		>
			<group position={props.children.props.position}>
				<Sun
					position={props.position}
					shadows={props.shadows}
					intensity={props.intensity}
					opacity={props.opacity}
					resolution={props.resolution}
					deltaOpacity={props.deltaOpacity}
					ignoreAmbientColor={props.ignoreAmbientColor}
					color={props.color}
				/>
			</group>
			{props.children}
			{/*<Orbit />*/}
		</Canvas>
	);
};

export default Scene;
