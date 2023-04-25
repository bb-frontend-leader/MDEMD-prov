import React, { createRef, useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

import guideArrow from '../sprites/guideArrow.webp';
import { useSRGBTexture } from '../customHooks/Texture';

function GuideArrow({ obj }) {
	const arrow = useSRGBTexture(guideArrow, true);

	const arrPositions = {
		0: [-2.8, 1.8, 2.8],
		1: [-9.8, 1.8, 1.5],
		2: [0, 2.4, 0],
		3: [11.8, 2.8, 3],
	};
	if (obj.current === undefined) return;
	return (
		<>
			{obj.current.children.map((element, index) => {
				if (element) {
				}
				return (
					<mesh key={index} position={arrPositions[index]}>
						<planeGeometry scale={[0.7, 0.7]} />
						<meshBasicMaterial map={arrow} transparent />
					</mesh>
				);
			})}
		</>
	);
}

export default function City({ id, setId, answerState, correctCount, ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/CaringPlantsCity.glb');
	const { camera } = useThree();
	const [problemObj, setProblemObj] = useState();
	const [solutionObj, setSolutionObj] = useState();

	const myMesh = React.useRef();
	let factorScale = 1;

	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		const solutionsIndex = group.current.children.findIndex(
			(element) => element.name === 'solutions',
		);
		group.current.children[solutionsIndex].children.map(
			(object) => (object.visible = false),
		);
	}, []);

	useEffect(() => {
		if (answerState) {
			if (problemObj) checkAnswer();
			setTimeout(() => cameraTransition(), 2500);
		}
	}, [answerState]);

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

	const solutions = (index) => {
		group.current.children.map((solution) => {
			if (solution.name === 'solutions') {
				solution.children.map((object) =>
					object.index === index ? setSolutionObj(object) : undefined,
				);
			}
		});
	};

	const cameraTransition = () => {
		if (correctCount === 1) {
			camera.position.set(1, 2.2, 4.1);
			camera.rotation.set(-0.245, 0.2, 0);
		} else if (correctCount === 3) {
			camera.position.set(13, 2, 4.1);
			camera.rotation.set(-0.18, 0.3, 0);
		}
	};

	const checkAnswer = () => {
		setTimeout(() => {
			if (problemObj.visible) {
				problemObj.visible = false;
			}
			if (solutionObj && !solutionObj.visible) {
				solutionObj.visible = true;
			}
		}, 1000);
	};

	const setIndex = (object) => {
		if (object.visible && object.parent.name === 'problems') {
			setId(object.index);
			setProblemObj(object);
			solutions(object.index);
		}
	};

	const onClickHandler = (object) => {
		setIndex(object);
	};

	return (
		<>
			<group
				ref={group}
				{...props}
				dispose={null}
				onClick={(e) => onClickHandler(e.object)}
			>
				<group name="solutions">
					<mesh
						index={0}
						position={[2.83, -0.19, -1.9]}
						scale={1.91}
						geometry={nodes.TrashBags.geometry}
						material={materials['TrashBags_mat.001']}
					/>
					<mesh
						index={1}
						geometry={nodes.PlantedTrees.geometry}
						material={materials['PlantedTrees_mat.001']}
					/>
					<mesh
						index={2}
						geometry={nodes.CleanWaterSign.geometry}
						material={materials['CleanWaterSign_mat.001']}
					/>
				</group>
				<group
					name="problems"
					ref={myMesh}
					onPointerOver={(e) => {
						if (e.object.visible) {
							setHovered(true);
						}
					}}
					onPointerOut={() => {
						setHovered(false);
					}}
				>
					<mesh
						index={0}
						geometry={nodes.Trash.geometry}
						material={materials['Trash_mat.001']}
					/>
					<mesh
						index={1}
						geometry={nodes.Stumps.geometry}
						material={materials['Stumps_mat.001']}
					/>
					<mesh
						index={2}
						geometry={nodes.LakeTrash.geometry}
						material={materials['LakeTrash_mat.001']}
					/>
					<mesh
						index={3}
						geometry={nodes.Fire.geometry}
						material={materials['Fire_mat.001']}
					/>
				</group>
				<mesh
					geometry={nodes.ForestAndLake.geometry}
					material={materials['ForestAndLake_mat.001']}
				/>
				<mesh
					geometry={nodes.RocksAndBushes.geometry}
					material={materials['RocksAndBushes_mat.001']}
				/>
				<mesh
					geometry={nodes.Scenery.geometry}
					material={materials['Scenery_mat.001']}
				/>
			</group>
			<GuideArrow obj={myMesh} />
		</>
	);
}

useGLTF.preload('/models/enviroment/CaringPlantsCity.glb');
