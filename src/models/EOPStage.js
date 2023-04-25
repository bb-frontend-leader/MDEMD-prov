import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function EOPScene({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/EOPStage.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.EOP_Stage.geometry}
				material={materials.Ensenanzas_Stage_mat}
			/>
		</group>
	);
}

function Board({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/board/EOPBoard.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<group position={[0.01, 23.89, 0]} rotation={[-Math.PI, -0.03, -Math.PI]}>
				<mesh
					geometry={nodes['Tittle-Dark_Purple'].geometry}
					material={materials['Dark Purple']}
				/>
				<mesh
					geometry={nodes['Tittle-Light_Purple'].geometry}
					material={materials['Light Purple']}
				/>
			</group>
			<group
				position={[-0.01, 10.98, -0.75]}
				rotation={[-Math.PI, -0.03, -Math.PI]}
			>
				<mesh
					geometry={nodes['Board-Dark_Brown'].geometry}
					material={materials['Dark Brown']}
				/>
				<mesh
					geometry={nodes['Board-Light_Brown'].geometry}
					material={materials['Light Brown']}
				/>
			</group>
		</group>
	);
}

function TreeTrunk({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/WoodLog.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.Tree_52.geometry}
				material={materials.Tree_5}
				scale={[1, 1, 1]}
			/>
		</group>
	);
}

useGLTF.preload('/models/board/EOPBoard.glb');
useGLTF.preload('/models/enviroment/WoodLog.glb');
useGLTF.preload('/models/enviroment/EOPStage.glb');

export { EOPScene, Board, TreeTrunk };
