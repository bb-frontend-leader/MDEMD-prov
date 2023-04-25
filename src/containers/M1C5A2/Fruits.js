import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { element } from 'prop-types';
import { data } from './data';
//import { useStore } from '../../customHooks/Threejs';

function Fruits({ fruit, index, name, setScore, positions }) {
	const { nodes, materials } = useGLTF(fruit.path);

	const fruitRef = useRef([]);
	const groupFruitRef = useRef();

	useEffect(() => {
		if (fruitRef.current) {
			fruitRef.current.map((element, index) => {
				fruitRef.current[index].userData.factorScale = 1;
			});
		}
	});

	useFrame(() => {
		if (fruitRef.current && groupFruitRef.current) {
			let totalFruits = groupFruitRef.current.parent.parent.children.filter(
				(element) => element.name == 'sprites',
			)[0].userData.totalFruits;

			fruitRef.current.map((element, index) => {
				if (index >= totalFruits[name]) {
					if (fruitRef.current[index].scale.x >= 1.05) {
						fruitRef.current[index].userData.factorScale = -1;
					}
					if (fruitRef.current[index].scale.x <= 0.95) {
						fruitRef.current[index].userData.factorScale = 1;
					}

					fruitRef.current[index].scale.x =
						fruitRef.current[index].scale.x +
						0.01 * fruitRef.current[index].userData.factorScale;
					fruitRef.current[index].scale.y =
						fruitRef.current[index].scale.y +
						0.01 * fruitRef.current[index].userData.factorScale;
					fruitRef.current[index].scale.z =
						fruitRef.current[index].scale.z +
						0.01 * fruitRef.current[index].userData.factorScale;
				} else if (fruitRef.current[index].visible) {
					fruitRef.current[index].visible = false;
				}
			});
		}
	});

	return (
		<group ref={groupFruitRef}>
			{positions.map((position, index) => {
				return (
					<group
						ref={(el) => (fruitRef.current[index] = el)}
						name={name}
						position={[...position]}
						key={index}
					>
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
			})}
		</group>
	);
}

function FruitsInBasket({ fruit, index, name, setScore, positions, scale = 1 }) {
	//const setTarget = useStore((state) => state.setTarget);
	const { nodes, materials } = useGLTF(fruit.path);

	const fruitRef = useRef([]);
	const groupFruitRef = useRef();

	useEffect(() => {
		if (fruitRef.current) {
			fruitRef.current.map((element, index) => {
				fruitRef.current[index].userData.factorScale = scale;
				fruitRef.current[index].visible = false;
			});
		}
	});

	useFrame(() => {
		if (fruitRef.current && groupFruitRef.current) {
			let totalFruits = groupFruitRef.current.parent.parent.children.filter(
				(element) => element.name == 'sprites',
			)[0].userData.totalFruitsBasket;

			fruitRef.current.map((element, index) => {
				if (index < totalFruits[name]) {
					if (!fruitRef.current[index].visible) {
						fruitRef.current[index].visible = true;
					}
					if (fruitRef.current[index].scale.x >= scale + 0.05) {
						fruitRef.current[index].userData.factorScale = scale * -1;
					}
					if (fruitRef.current[index].scale.x <= scale - 0.05) {
						fruitRef.current[index].userData.factorScale = scale;
					}

					fruitRef.current[index].scale.x =
						fruitRef.current[index].scale.x +
						0.01 * fruitRef.current[index].userData.factorScale;
					fruitRef.current[index].scale.y =
						fruitRef.current[index].scale.y +
						0.01 * fruitRef.current[index].userData.factorScale;
					fruitRef.current[index].scale.z =
						fruitRef.current[index].scale.z +
						0.01 * fruitRef.current[index].userData.factorScale;
				}
			});
		}
	});

	return (
		<group ref={groupFruitRef}>
			{positions.map((position, index) => {
				return (
					<group
						ref={(el) => (fruitRef.current[index] = el)}
						name={name}
						position={[...position]}
						key={index}
						onClick={(e) => {
							e.stopPropagation();
							//setTarget(e.object);
						}}
						scale={scale}
					>
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
			})}
		</group>
	);
}

function Fruit({ typeFruit = 'apple', position }) {
	const { models } = data;
	const fruit = models.find((element) => element.name == typeFruit);
	const { nodes, materials } = useGLTF(fruit.path);
	const [visible, setVisible] = useState(true);
	const ref = useRef();

	/*
	useFrame(() => {
		if (ref.current) {
			if (ref.current.scale.x >= 0.6) {
				ref.current.userData.factorScale = -1;
			}
			if (ref.current.scale.x <= 0.4) {
				ref.current.userData.factorScale = 1;
			}

			ref.current.scale.x =
				ref.current.scale.x + 0.01 * ref.current.userData.factorScale;
			ref.current.scale.y =
				ref.current.scale.y + 0.01 * ref.current.userData.factorScale;
			ref.current.scale.z =
				ref.current.scale.z + 0.01 * ref.current.userData.factorScale;
		}
	});*/

	useEffect(() => {
		ref.current.scale.x = 0.7;
		ref.current.scale.y = 0.7;
		ref.current.scale.z = 0.7;

		ref.current.userData.factorScale = 0.5;
	}, []);

	return (
		<group ref={ref} position={position}>
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

useGLTF.preload('/models/fruit/Arandano.glb');
useGLTF.preload('/models/fruit/Durazno.glb');
useGLTF.preload('/models/fruit/Fresa.glb');
useGLTF.preload('/models/fruit/Manzana.glb');
useGLTF.preload('/models/fruit/Mora.glb');
useGLTF.preload('/models/fruit/Naranja.glb');

export { Fruits, Fruit, FruitsInBasket };
