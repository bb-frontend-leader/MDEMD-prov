import { useState, useEffect } from 'react';

import CardButton from './ui/CardButton';
import SquareCardButton from './ui/SquareCardButton';

import { useAudio } from '../customHooks/Audio';
import correct from '../sounds/sfx/Aplausos.mp3';
import wrong from '../sounds/sfx/Oops_error.mp3';
import { element } from 'prop-types';

function CardButtons({ isReady, setId, cardComplete }) {
	const [cards, setCards] = useState();

	useEffect(() => {
		const { current, previous } = cards ?? { undefined, undefined };

		if (current) {
			current.style.transform = 'scale(0)';
		}
		if (previous) {
			previous.style.transform = 'scale(1)';
		}
	}, [cards]);

	return (
		<>
			{cardComplete.map((element, index) => {
				return (
					<CardButton
						key={index}
						id={element.id}
						complete={element.complete}
						onClick={(ref) => {
							if (isReady && !element.complete) {
								setCards((previous) => {
									return {
										current: ref.current,
										previous: previous ? previous.current : undefined,
									};
								});

								setId(element.id);
							}
						}}
					/>
				);
			})}
		</>
	);
}

function SquareCardButtons({
	id,
	deck,
	setId,
	setAnswerState,
	setIsWin,
	setGameOver,
	correctCount,
	setCorrectCount,
	wrongCount,
	setWrongCount,
	cardComplete,
	setCardComplete,
	start,
	setStart = () => {},
}) {
	const img = deck.map((element) => element.address);

	const { play: playWrong } = useAudio(wrong);
	const { play: playCorrect } = useAudio(correct);

	useEffect(() => {
		if (correctCount === cardComplete.length) {
			setTimeout(() => {
				setIsWin(true);
			}, 4000);
		} else if (wrongCount === 3) {
			setTimeout(() => {
				setGameOver(true);
			}, 2000);
			setGameOver(true);
		}
	}, [correctCount, wrongCount]);

	const checkAnswer = (cardId, answer) => {
		let copyCard = [...cardComplete];
		if (id !== null && !copyCard.find((element) => element.id == cardId).complete) {
			if (id === cardId) {
				copyCard.map((element, index) => {
					if (id == element.id) {
						copyCard[index].complete = true;
					}
				});
				setCardComplete(copyCard);
				answer(true);
			} else answer(false);
		}
	};

	const onClickHandler = (cardId) => {
		checkAnswer(cardId, (value) => {
			value ? playCorrect(0.6) : playWrong(0.25); // -23LUFS
			setAnswerState(value);
			if (value) {
				setCorrectCount(correctCount + 1);
				setStart(true);
			} else {
				setWrongCount(wrongCount + 1);
			}
		});
	};

	return (
		<>
			{cardComplete.map((element, index) => {
				return (
					<SquareCardButton
						key={index}
						id={element.id}
						img={img[index]}
						complete={element.complete}
						onClick={() => {
							if (!element.complete) {
								onClickHandler(element.id);
							}
						}}
					/>
				);
			})}
		</>
	);
}

export { CardButtons, SquareCardButtons };
