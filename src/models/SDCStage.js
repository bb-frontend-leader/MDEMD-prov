import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ClassRoom({ ...props }) {
	const { nodes, materials } = useGLTF('/models/enviroment/SDCStage.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[46.2, 0, -46.8]}>
				<mesh
					castShadow
					geometry={nodes.Desk1001.geometry}
					material={materials.Desk_mat}
					position={[-6.24, 0, 0]}
					scale={0.91}
				/>
			</group>
			<group position={[72.9, 0, 0]}>
				<mesh
					castShadow
					geometry={nodes.Desk1002.geometry}
					material={materials.Desk_mat}
					scale={0.91}
				/>
			</group>
			<mesh
				castShadow
				geometry={nodes.Desk1003.geometry}
				material={materials.Desk_mat}
				position={[-13.36, 0, 0]}
				scale={0.91}
			/>
			<mesh
				castShadow
				geometry={nodes.Desk1.geometry}
				material={materials.Desk_mat}
				position={[111.91, 0, -46.8]}
				scale={0.91}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Scenery.geometry}
				material={materials.Scenery_mat}
				position={[98.7, 0, -46.8]}
			/>
		</group>
	);
}

useGLTF.preload('/models/enviroment/SDCStage.glb');
