import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { data } from './data.js';

function Fruit({ fruit = 'blueberry' }) {
	const { nodes, materials } = useGLTF(data.models[fruit].path);

	useFrame(() => {});

	return (
		<>
			{data.models[fruit].child ? (
				<>
					<mesh
						geometry={nodes[data.models[fruit].child[0].geometry].geometry}
						material={materials[data.models[fruit].child[0].material]}
					/>
					<mesh
						geometry={nodes[data.models[fruit].child[1].geometry].geometry}
						material={materials[data.models[fruit].child[1].material]}
					/>
				</>
			) : (
				<mesh
					geometry={nodes[data.models[fruit].geometry].geometry}
					material={materials[data.models[fruit].material]}
				/>
			)}
		</>
	);
}

useGLTF.preload('/models/fruit/Arandano.glb');
useGLTF.preload('/models/fruit/Durazno.glb');
useGLTF.preload('/models/fruit/Fresa.glb');
useGLTF.preload('/models/fruit/Manzana.glb');
useGLTF.preload('/models/fruit/Mora.glb');
useGLTF.preload('/models/fruit/Naranja.glb');

export default Fruit;
