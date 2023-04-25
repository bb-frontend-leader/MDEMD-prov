import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSRGBTexture } from '../customHooks/Texture';

function Images({ resources }) {
	const textures = useSRGBTexture(
		resources.map((element) => element.address),
		true,
	);

	const positions = [
		[14, 4, -1],
		[-14, 4, -1],
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

function Basket({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/PODBasket.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh geometry={nodes.Basket.geometry} material={materials.Basket_mat} />
		</group>
	);
}

function Background({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/PODScene.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.Pod_Stage.geometry}
				material={materials.Pod_Stage_mat}
			/>
		</group>
	);
}

useGLTF.preload('/models/enviroment/PODScene.glb');
useGLTF.preload('/models/enviroment/PODSBasket.glb');

export { Background, Basket, Images };
