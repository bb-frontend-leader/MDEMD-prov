import React, { useEffect, useState, useContext } from 'react';
import { Billboard } from '@react-three/drei';

import { useSRGBTexture } from '../customHooks/Texture';
import Card from '../models/Card';

const Deck = ({ id, resources }) => {
	const [tween, setTween] = useState('start');
	const [resource, setResource] = useState([]);

	const textures = useSRGBTexture(resource.map((element) => element.address));

	useEffect(() => setTween('restart'), [id]);
	useEffect(() => {
		setResource(resources);
	}, []);

	return (
		<>
			{typeof id == 'number' && (
				<Billboard lockX={false} lockY={false} lockZ={false}>
					<Card
						tween={tween}
						setTween={setTween}
						texture={textures[id]}
						// position={[-8.65, 1.9, 40]}
						position={[-12.4, -0.2, 40]}
						rotation={[0, Math.PI, 0]}
					/>
				</Billboard>
			)}
		</>
	);
};

export default Deck;
