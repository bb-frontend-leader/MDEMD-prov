import React, { useRef, useContext, useState, useEffect } from 'react';
import { useGLTF, useAnimations, MeshWobbleMaterial } from '@react-three/drei';

import MeshElement from './MeshElement';
import GroupElement from './GroupElement';

import { useAudio } from '../../customHooks/Audio';

// import correct from '../../sounds/sfx/DM-CGS-28.wav';
// import wrong from '../../sounds/sfx/DM-CGS-35.wav';
import correct from '../../sounds/sfx/Aplausos.mp3';
import wrong from '../../sounds/sfx/Oops_error.mp3';

import { data as inputData } from '../data';

const City = ({
	id,
	setAnswerState,
	setIsWin,
	setGameOver,
	setCorrectCount,
	setWrongCount,
	correctCount,
	wrongCount,
	cardComplete,
	setCardComplete,
	...props
}) => {
	const { play: playWrong } = useAudio(wrong);
	const { play: playCorrect } = useAudio(correct);

	const { nodes, materials, animations } = useGLTF('/models/enviroment/City.glb');

	const [data, setData] = useState([]);

	useEffect(() => {
		setData([...inputData]);
	}, []);

	useEffect(() => {
		if (correctCount === 4) {
			setIsWin(true);
		} else if (wrongCount === 3) {
			setGameOver(true);
		} else if (wrongCount == 0 && correctCount == 0) {
			const copyData = JSON.parse(JSON.stringify(inputData));
			setData([...copyData]);
		}
	}, [correctCount, wrongCount]);

	const hiddenElement = () => {
		const clickablesIndex = data.findIndex((element) => element.name == 'clickables');
		const elementIndex = data[clickablesIndex].sons.findIndex(
			(element) => element.index == id,
		);

		const cardCompleteIndex = cardComplete.findIndex((element) => element.id == id);

		let copyData = [...data];
		copyData[clickablesIndex].sons[elementIndex].visible = false;
		setData([...copyData]);

		let copyCardComplete = [...cardComplete];
		copyCardComplete[cardCompleteIndex].complete = true;
		setCardComplete(copyCardComplete);
	};

	const setInvisible = (object, id, answer) => {
		if (object.visible && id !== null) {
			if (object.index !== undefined && object.index === id) {
				hiddenElement();
				answer(true);
				return;
			}
			if (object.parent.index && object.parent.index === id) {
				hiddenElement();
				answer(true);
				return;
			}

			answer(false);
		}
	};

	const onClickHandler = (object) => {
		setInvisible(object, id, (value) => {
			value ? playCorrect(0.6) : playWrong(0.25); // -23LUFS
			setAnswerState(value);
			if (value) {
				setCorrectCount(correctCount + 1);
			} else {
				setWrongCount(wrongCount + 1);
			}
		});
	};

	return (
		<>
			{data.map((element, index) => {
				return (
					<React.Fragment key={index}>
						{element.type == 'mesh' ? (
							<MeshElement
								{...element}
								material={materials}
								nodes={nodes}
							/>
						) : (
							<GroupElement
								{...props}
								{...element}
								materials={materials}
								nodes={nodes}
								onClick={(e) => {
									if (element.name == 'clickables') {
										onClickHandler(e.object);
									}
								}}
							/>
						)}
					</React.Fragment>
				);
			})}
		</>
	);
};

export default React.memo(City);
