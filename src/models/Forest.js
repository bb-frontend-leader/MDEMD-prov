import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { usePlane, useSphere, useCompoundBody, useCylinder } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { timeInterval } from 'rxjs';

function Fruits({ fruit }) {
	const fruitCount = 18;
	const [randomFruit, setRandomFruit] = useState(
		Math.floor(Math.random() * (6 - 0)) + 0,
	);
	const [fall, setFall] = useState(false);
	const { nodes, materials } = useGLTF(fruit.path);

	const [ref] = useSphere(() => ({
		args: [0.3],
		mass: 1,
		position: [randomFruit, 5, 3],
		type: 'Dynamic',
	}));

	return (
		<group ref={ref}>
			{fruit.child ? (
				<>
					<mesh
						geometry={nodes[fruit.child[0].geometry].geometry}
						material={materials[fruit.child[0].material]}
					/>
					<mesh
						geometry={nodes[fruit.child[1].geometry].geometry}
						material={materials[fruit.child[1].material]}
					/>
				</>
			) : (
				<mesh
					geometry={nodes[fruit.geometry].geometry}
					material={materials[fruit.material]}
				/>
			)}
		</group>
	);
}

function Forest({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/Forest.glb');

	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, 0, 0],
	}));
	const [refC] = useCylinder(() => ({
		rotation: [0, 0, 0],
		position: [0, 2, 0.9],
	}));

	return (
		<>
			<mesh ref={ref}>
				<planeGeometry args={[100, 100]} />
				<meshBasicMaterial visible={false} />
			</mesh>
			<mesh ref={refC}>
				<cylinderGeometry args={[1, 1, 3]} />
				<meshBasicMaterial visible={false} />
			</mesh>
			<group ref={group} {...props} dispose={null}>
				<mesh
					geometry={nodes.BackgroundAndGround.geometry}
					material={materials.BackgroundAndGround_mat}
				/>
				<mesh
					geometry={nodes.BushesAndRocks.geometry}
					material={materials.BushesAndRocks_mat}
				/>
				<mesh
					geometry={nodes.TreesAndHouse.geometry}
					material={materials.TreesAndHouse_mat}
				/>
			</group>
		</>
	);
}

useGLTF.preload('/models/enviroment/Forest.glb');
useGLTF.preload('/models/fruit/Arandano.glb');
useGLTF.preload('/models/fruit/Durazno.glb');
useGLTF.preload('/models/fruit/Fresa.glb');
useGLTF.preload('/models/fruit/Manzana.glb');
useGLTF.preload('/models/fruit/Mora.glb');
useGLTF.preload('/models/fruit/Naranja.glb');

export { Forest, Fruits };
