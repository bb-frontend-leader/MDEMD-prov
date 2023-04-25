import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function WoodBox({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/WoodBox.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh geometry={nodes.WoodBox.geometry} material={materials.WoodBox_mat} />
		</group>
	);
}

function BadProposal({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/BadProposal.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.BadProposal.geometry}
				material={materials.BadProposal_mat}
			/>
		</group>
	);
}

function GoodProposal({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/GoodProposal.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.GoodProposal.geometry}
				material={materials.GoodProposal_mat}
			/>
		</group>
	);
}

useGLTF.preload('/models/enviroment/GoodProposal.glb');
useGLTF.preload('/models/enviroment/BadProposal.glb');
useGLTF.preload('/models/enviroment/WoodBox.glb');

export { WoodBox, BadProposal, GoodProposal };
