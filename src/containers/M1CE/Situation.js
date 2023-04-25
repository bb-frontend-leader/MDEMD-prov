import { useEffect, useState } from 'react';

import { SituationContainer } from './styles';

import { data } from './data';

export default function Situation({ start, setStart, id, setIsWin }) {
	const { situations } = data;
	const [situation, setSituation] = useState(0);
	const [answers, setAnswers] = useState([]);

	const handelClickImage = (index) => {
		let answer = { ...situations[situation] };
		answer.selected = answer.options[index];

		let copyAnswers = JSON.parse(JSON.stringify(answers));
		copyAnswers.push(answer);

		setAnswers([...copyAnswers]);

		if (situation == situations.length - 1) {
			setStart(true);
			setTimeout(() => {
				setIsWin(true);
			}, 2000);
		} else {
			setStart(true);
		}
	};

	useEffect(() => {
		if (typeof id == 'number') {
			setSituation(id);
		}
	}, [id]);

	return (
		<SituationContainer>
			<div>
				<div>
					<div>
						<img src={situations[situation].question} alt="" />
					</div>
				</div>
				<div>
					<div
						style={{
							color: 'black',
							fontSize: '3rem',
							padding: '1rem',
							fontFamily: 'Dimbo',
						}}
					>
						{situations[situation].description}
					</div>
					{situations[situation].options.map((element, index) => {
						return (
							<div key={index}>
								<img
									src={element.image}
									alt=""
									className={'pointer'}
									onClick={() => {
										handelClickImage(index);
									}}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</SituationContainer>
	);
}
