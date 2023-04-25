import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';

export default function SquareCard(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/card/SquareCard.glb');

	return (
		<a.mesh
			ref={group}
			{...props}
			{...props.spring}
			{...props.bind}
			// dispose={null}
			geometry={nodes.Card.geometry}
			material={materials.Card}
			// rotation={[-Math.PI / 2, 0, 0]}
		>
			<meshStandardMaterial
				map={props.texture}
				metalness={0}
			></meshStandardMaterial>
		</a.mesh>
	);
}

useGLTF.preload('/models/card/SquareCard.glb');
