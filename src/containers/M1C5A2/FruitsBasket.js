import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { element } from 'prop-types';

function FruitsBasket({ modelsFruitsBasket }) {
	const groupFruitRef = useRef();
	const fruitRef = useRef([]);

	useEffect(() => {});

	useFrame(() => {
		if (fruitRef.current && groupFruitRef.current) {
			let totalPoints = groupFruitRef.current.parent.children.filter(
				(element) => element.name == 'sprites',
			)[0].userData.points;

			fruitRef.current.map((element, index) => {
				if (index + 1 <= totalPoints / 6) {
					if (!fruitRef.current[index].visible) {
						fruitRef.current[index].visible = true;
					}
				} else if (fruitRef.current[index].visible) {
					fruitRef.current[index].visible = false;
				}
			});
		}
	});

	return (
		<group ref={groupFruitRef}>
			{modelsFruitsBasket.map((fruit, index) => {
				return (
					<group key={index} ref={(el) => (fruitRef.current[index] = el)}>
						<FruitBasket
							fruit={fruit}
							index={index}
							name={fruit.name}
							positions={fruit.positions}
						/>
					</group>
				);
			})}
		</group>
	);
}

function FruitBasket({ fruit, index, name, positions }) {
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
			fruitRef.current.map((element, index) => {
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

useGLTF.preload('/models/fruit/Arandano.glb');
useGLTF.preload('/models/fruit/Durazno.glb');
useGLTF.preload('/models/fruit/Fresa.glb');
useGLTF.preload('/models/fruit/Manzana.glb');
useGLTF.preload('/models/fruit/Mora.glb');
useGLTF.preload('/models/fruit/Naranja.glb');

export { FruitBasket, FruitsBasket };
