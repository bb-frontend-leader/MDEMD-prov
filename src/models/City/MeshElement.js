import React, { useEffect, useState } from 'react';
import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MeshElement = React.memo(
	({
		name,
		index,
		geometry,
		material,
		position,
		rotation,
		scale,
		visible,
		wobbleMaterial,
		standardMaterial,
		materials,
		nodes,
		hover,
	}) => {
		const [hovered, setHovered] = useState(false);

		useEffect(() => {
			if (hovered) document.body.classList.add('pointer');
			else document.body.classList.remove('pointer');
		}, [hovered]);

		useEffect(() => {
			if (typeof visible == 'boolean' && !visible)
				document.body.classList.remove('pointer');
		}, [visible]);

		const myMesh = React.useRef();
		let factorScale = 1;

		useFrame(({ clock }) => {
			if (hover && hovered) {
				if (myMesh.current.scale.x >= 1.01) {
					factorScale = -1;
				}
				if (myMesh.current.scale.x <= 0.99) {
					factorScale = 1;
				}

				myMesh.current.scale.x = myMesh.current.scale.x + 0.00055 * factorScale;
				myMesh.current.scale.y = myMesh.current.scale.y + 0.00055 * factorScale;
				myMesh.current.scale.z = myMesh.current.scale.z + 0.00055 * factorScale;
			}
		});

		return (
			<mesh
				ref={myMesh}
				index={index}
				geometry={nodes[geometry].geometry}
				material={materials[material]}
				position={position}
				rotation={rotation}
				scale={scale}
				visible={typeof visible == 'boolean' && !visible ? false : true}
				onPointerOver={() => {
					if (hover && !(typeof visible == 'boolean' && !visible))
						setHovered(true);
				}}
				onPointerOut={() => {
					if (hover) setHovered(false);
				}}
			>
				{wobbleMaterial && (
					<MeshWobbleMaterial
						metalness={wobbleMaterial.metalness}
						map={materials[wobbleMaterial.map].map}
						factor={wobbleMaterial.factor}
						speed={wobbleMaterial.speed}
						transparent={wobbleMaterial.transparent}
					/>
				)}
				{standardMaterial && (
					<meshStandardMaterial
						metalness={standardMaterial.metalness}
						map={materials[standardMaterial.map].map}
					/>
				)}
			</mesh>
		);
	},
);

export default MeshElement;
