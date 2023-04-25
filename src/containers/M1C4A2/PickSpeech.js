import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

import { SpeechBubble } from '../../components/ui/styles';

function Speech({
	resources,
	id,
	start,
	speechFinished,
	setSpeechFinished,
	correctCount,
}) {
	const refText = useRef();
	const [typewriter, setTypewrite] = useState(null);
	const [speech, setSpeech] = useState('');
	const [img, setImage] = useState('');

	useEffect(() => {
		if (refText.current) {
			setTypewrite(
				new Typewriter(refText.current, {
					cursor: '',
				}),
			);
		}
	}, []);

	useEffect(() => {
		if (id != null) {
			setSpeech(resources[id].rule);
			setImage(resources[id].img);
		}
	}, [id]);

	useEffect(() => {
		if (refText.current && typewriter) {
			typewriter.changeDelay(5000 / speech.length).typeString(speech);
		}
	}, [speech]);

	useEffect(() => {
		if (refText.current && start && typewriter) {
			typewriter.start();
		} else if (refText.current && !start && typewriter) {
			typewriter.stop();
		}
	}, [start]);

	useEffect(() => {
		setTypewrite(
			new Typewriter(refText.current, {
				cursor: '',
			}),
		);
	}, [correctCount]);

	/*
	useEffect(() => {
		if (typewriter) {
			typewriter.state.visibleNodes.map((node) => {
				console.log(typewriter.state.visibleNodes.length);
				if (typewriter.state.visibleNodes.length === speech.length)
					setSpeechFinished(true);
				// if (node.node.nextSibling === null) setSpeechFinished(true);
				// if (node.length === speech.length) setSpeechFinished(true);
			});
		}
	},[]);
  */

	return (
		<SpeechBubble show={id === null ? false : true}>
			<img src={img} alt="" />
			<p ref={refText}></p>
		</SpeechBubble>
	);
}

const PickSpeech = ({
	id,
	resources,
	start,
	speechFinished,
	setSpeechFinished,
	correctCount,
}) => {
	return (
		<>
			<Speech
				resources={resources}
				id={id}
				start={start}
				speechFinished={speechFinished}
				setSpeechFinished={setSpeechFinished}
				correctCount={correctCount}
			/>
		</>
	);
};

export default PickSpeech;
