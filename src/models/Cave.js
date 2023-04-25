import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Cave({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/Cave.glb');
	return (
		<group ref={group} {...props} dispose={null} receiveShadow castShadow>
			<mesh
				geometry={nodes.CPC_Bushes.geometry}
				material={materials.CPC_Bushes_mat}
			/>
			<mesh
				geometry={nodes.CPC_Props.geometry}
				material={materials.CPC_Props_mat}
			/>
			<mesh
				geometry={nodes.CPC_Scenery.geometry}
				material={materials.CPC_Scenery}
			/>
		</group>
	);
}

useGLTF.preload('/models/enviroment/Cave.glb');
