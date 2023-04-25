import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { usePlane, useSphere, useBox, useCylinder, Debug } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import ThirdPersonMovement from './ThirdPersonMovement';
import useControls from '../../customHooks/useControls';

import { data } from './data';

function generateRandomNumber() {
	let min = 0.0,
		max = 3.0,
		highlightedNumber = Math.random() * (max - min) + min;

	let plusOrMinus = Math.random() < 0.5 ? -1 : 1;

	return highlightedNumber * plusOrMinus;
}

const position = [0, 3.5, 4];

const getPosition = (index) => {
	let random = generateRandomNumber();

	let copyPosition = [...position];
	copyPosition[1] = copyPosition[1] + index * 3;
	copyPosition[0] = random;

	return copyPosition;
};

function Fruits({ fruit, index, name, setScore }) {
	const fruitCount = 18;
	const [position] = useState(getPosition(index));
	const [fall, setFall] = useState(false);
	const { nodes, materials } = useGLTF(fruit.path);
	const [visible, setVisible] = useState(true);

	const [ref, api] = useSphere(
		() => ({
			args: [0.2],
			mass: 1,
			position,
			type: 'Dynamic',
			onCollide: (object) => {
				if (
					Object.keys(object.target.userData).length === 0 &&
					object.body.name == 'ground'
				) {
					object.target.userData.collisionGround = true;
				} else if (
					Object.keys(object.target.userData).length === 0 &&
					object.body.name == 'pia'
				) {
					object.target.userData.collisionPia = true;
					setScore(object.target.name);
				}
			},
		}),
		useRef(null),
	);

	useFrame(() => {
		if (ref.current.visible && ref.current.userData.collisionPia) {
			ref.current.visible = false;
			api.position.set(0, 0, 0);
			api.sleep();
		}
		if (ref.current.visible && ref.current.userData.collisionGround) {
			setTimeout(() => {
				ref.current.visible = false;
				api.position.set(0, 0, 0);
				api.sleep();
			}, 3000);
		}
	});

	return (
		<group ref={ref} name={name}>
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

function Forest(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/Forest.glb');
	const { instructions, models, sprites } = data;

	const controls = useControls();

	const refFruits = useRef();

	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, 0, 0],
	}));
	const [refC] = useCylinder(() => ({
		rotation: [0, 0, 0],
		position: [0, 2, 0.9],
	}));

	const refForest = useRef();

	useFrame(() => {
		if (refForest.current) {
			const { left, right } = controls.current;
			let pia = refForest.current.children.filter(
				(element) => element.name == 'pia',
			)[0];

			if (left && pia.userData.position[0] > -4) {
				refForest.current.rotation.y += 0.005;
			}
			if (right && pia.userData.position[0] < 4) {
				refForest.current.rotation.y -= 0.005;
			}
		}

		if (refFruits.current) {
			let collisionPia = 0;
			let collisionGround = 0;

			const quantityFruits = refFruits.current.children.map((element) => {
				if (element.userData.collisionGround) collisionGround += 1;
				else if (element.userData.collisionPia) collisionPia += 1;
			}).length;

			if (collisionPia + collisionGround == quantityFruits) {
				if (!props.isWin || !props.gameOver) {
					if (collisionPia == quantityFruits) {
						props.setIsWin(true);
					} else {
						props.setGameOver(true);
					}
				}
			}
		}
	});

	return (
		<group ref={refForest}>
			<mesh ref={ref} name="ground">
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
			{props.isReady && (
				<>
					<group ref={refFruits}>
						{models.map((fruit, index) => {
							return (
								<Fruits
									fruit={fruit}
									key={index}
									index={index}
									name={fruit.name}
									setScore={props.setScore}
								/>
							);
						})}
					</group>
				</>
			)}
			<ThirdPersonMovement expression={sprites} />
		</group>
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
