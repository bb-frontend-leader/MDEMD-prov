import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import guideArrow from '../sprites/guideArrow.webp';
import { useSRGBTexture } from '../customHooks/Texture';

function GuideArrow() {
	const arrow = useSRGBTexture(guideArrow, true);

	const arrPositions = [
		[-75, 30, -8],
		[60, 30, 7],
		[35, 30, 51],
		[82, 31, -37],
		[-40, 31, 60],
		[-34, 30, -60],
	];
	const arrRotations = [
		[0, Math.PI / 2, 0],
		[0, (5 * Math.PI) / 3, 0],
		[0, 0, 0],
		[0, (7 * Math.PI) / 4, 0],
		[0, 0, 0],
		[0, 0, 0],
	];

	const Plane = (props) => {
		return (
			<mesh position={props.position} rotation={props.rotation}>
				<planeGeometry args={[15, 15]} />
				<meshBasicMaterial map={arrow} transparent side={THREE.DoubleSide} />
			</mesh>
		);
	};

	return (
		<>
			{arrPositions.map((element, index) => {
				return (
					<Plane
						key={index}
						position={arrPositions[index]}
						rotation={arrRotations[index]}
					/>
				);
			})}
		</>
	);
}

export default function Forest({
	setId,
	setIsWin,
	setGameOver,
	setAnswerState,
	wrongCount,
	setWrongCount,
	props,
}) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/PositiveEmotions.glb');

	const myMesh = React.useRef();
	let factorScale = 1;

	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		if (hovered) document.body.classList.add('pointer');
		else document.body.classList.remove('pointer');
	}, [hovered]);

	useFrame(({ clock }) => {
		if (hovered) {
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

	const checkObject = (object) => {
		setId(object.index);
		// if (wrongCount === 3) setGameOver(true);
		if (!object.isPia) {
			setWrongCount(wrongCount + 1);
			setAnswerState(false);
		} else {
			setAnswerState(true);
		}
	};

	const onClickHandler = (object) => {
		checkObject(object);
	};

	return (
		<>
			<group ref={group} {...props} dispose={null}>
				<group
					onClick={(e) => onClickHandler(e.object)}
					ref={myMesh}
					onPointerOver={(e) => {
						myMesh.current = e.object;
						if (myMesh.current) setHovered(true);
					}}
					onPointerOut={() => {
						setHovered(false);
					}}
				>
					<mesh
						index={0}
						isPia={false}
						geometry={nodes.Frailejones_Eagle.geometry}
						material={materials['Frailejones_Eagle_mat.007']}
					/>
					<mesh
						index={2}
						isPia={true}
						geometry={nodes.Hummingbird_Bushes.geometry}
						material={materials['Hummingbird_Bushes_mat.007']}
					/>
					<mesh
						index={1}
						isPia={false}
						geometry={nodes.Rabbit_Leaves.geometry}
						material={materials['Rabbit_Leaves_mat.007']}
					/>
					<mesh
						index={5}
						isPia={false}
						geometry={nodes.Teacher_Leaves.geometry}
						material={materials['Teacher_Leaves_mat.007']}
					/>
					<mesh
						index={4}
						isPia={false}
						geometry={nodes.Rocks.geometry}
						material={materials['Rocks_mat.001']}
					/>
					<mesh
						index={3}
						isPia={false}
						geometry={nodes.Waterfall.geometry}
						material={materials['Waterfall_mat.007']}
					/>
				</group>
				<mesh
					geometry={nodes['2DRocksBushesLogs'].geometry}
					material={materials['_2DRocksBushesLogs_mat.001']}
				/>
				<mesh
					geometry={nodes['3DRocksLogsTrees'].geometry}
					material={materials['_3DRocksLogsTrees_mat.001']}
				/>
				<mesh
					geometry={nodes.Foam.geometry}
					material={materials['Foam_mat.007']}
				/>

				<mesh
					geometry={nodes.Lake.geometry}
					material={materials['Lake_mat.007']}
				/>

				<mesh
					geometry={nodes.Scenery.geometry}
					material={materials['Scenery_mat.007']}
				/>
			</group>
			<GuideArrow />
		</>
	);
}

useGLTF.preload('/models/enviroment/PositiveEmotions.glb');
