import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import data from './data';

export default function CaringAnimalsCity({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/CaringAnimalsCity.glb');
	// const vec = new THREE.Vector3();
	// const euler = new THREE.Euler();

	// console.log(props.cutscene);
	// console.log(props.frame);

	// useFrame((state) => {
	// 	if (
	// 		props.cutscene[props.frame].camera &&
	// 		props.cutscene.length - 1 > props.frame
	// 	) {
	// 		//state.camera.lookAt(props.cutscene[props.frame].camera.position);
	// 		let xPosition = props.cutscene[props.frame].camera.position.x;
	// 		let yPosition = props.cutscene[props.frame].camera.position.y;
	// 		let zPosition = props.cutscene[props.frame].camera.position.z;

	// 		let xRotation = props.cutscene[props.frame].camera.rotation.x;
	// 		let yRotation = props.cutscene[props.frame].camera.rotation.y;
	// 		let zRotation = props.cutscene[props.frame].camera.rotation.z;

	// 		//state.camera.lookAt(props.cutscene[props.frame].camera.position);
	// 		state.camera.position.lerp(vec.set(xPosition, yPosition, zPosition), 0.03);
	// 		state.camera.rotation.setFromVector3(
	// 			euler.set(xRotation, yRotation, zRotation),
	// 			0,
	// 		);
	// 		state.camera.updateProjectionMatrix();
	// 	}
	// });

	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.CAA_Bushes.geometry}
				material={materials.CAA_Bushes_mat}
			/>
			<mesh
				geometry={nodes.CAA_Scenery.geometry}
				material={materials.CAA_Stage_mat}
			/>
		</group>
	);
}

useGLTF.preload('/models/enviroment/CaringAnimalsCity.glb');
