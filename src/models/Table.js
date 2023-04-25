import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSRGBTexture } from '../customHooks/Texture';

function Images({ resources }) {
	const textures = useSRGBTexture(
		resources.map((element) => element.address),
		true,
	);

	const positions = [
		[-5.3, 3.5, -1.5],
		[5.3, 3.5, -1.5],
	];

	return (
		<>
			{textures.map((texture, index) => {
				return (
					<mesh key={index} position={positions[index]}>
						<planeGeometry args={[8, 4]} />
						<meshStandardMaterial map={texture} transparent />
					</mesh>
				);
			})}
		</>
	);
}

function Table(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/Table.glb');

	return (
		<>
			<group ref={group} {...props} dispose={null}>
				<mesh
					geometry={nodes.CPC_Wood.geometry}
					material={materials.CPC_Table_mat}
				></mesh>
				<mesh
					geometry={nodes.GreenBox.geometry}
					material={materials.GreenBox_mat}
				></mesh>
				<mesh
					geometry={nodes.RedBox.geometry}
					material={materials.RedBox_mat}
				></mesh>
			</group>
		</>
	);
}

useGLTF.preload('/models/enviroment/Table.glb');

export { Table, Images };
