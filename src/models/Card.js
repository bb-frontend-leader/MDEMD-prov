import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

import { useAudio } from '../customHooks/Audio';
import { useTween } from '../customHooks/Tween';

import settings from '../containers/M1C2A1/settings.json';
import sfx from '../sounds/sfx/DM-CGS-32.wav';

const loader = {
	tweens: undefined,
	Get: () => loader.tweens,
	Set: (group, deps, callback, position) => {
		const [x, y, z] = position ?? [0, 0, 0];

		loader.tweens = [
			{
				name: 'start',
				functions: useTween(
					group,
					{
						duration: settings['card-animation-time'],
						position: [x, y, z],
						rotation: [0, Math.PI, 0],
						position_ease: 'elastic',
						rotation_ease: 'elastic',
					},
					deps,
				),
			},
			{
				name: 'reveal',
				functions: useTween(
					group,
					{
						blend: false,
						duration: settings['card-animation-time'],
						position: [x, y, z],
						rotation: [0, 0, 0],
						position_ease: 'elastic.out(0.5, 0.25)', // (amplitude, frequency)
						rotation_ease: 'elastic',
					},
					deps,
				),
			},
			{
				name: 'restart',
				functions: useTween(
					group,
					{
						position: [x, y - 2.5, z],
						rotation: [0, Math.PI, 0],
						onComplete: callback,
					},
					deps,
				),
			},
		];
	},
};

function Behaviour(expressions, tween, deps = undefined) {
	useEffect(() => {
		const currentExpression = expressions.find(
			(expression) => expression.name === tween,
		);

		if (currentExpression) {
			const { play } = currentExpression.functions;
			play();
		}
	}, deps);
}

export default function Card({
	tween,
	setTween,
	texture,
	castShadow,
	receiveShadow,
	...props
}) {
	const { nodes, materials } = useGLTF('/models/card/Card.glb');
	const { play } = useAudio(sfx);
	const timeOut = useRef();
	const group = useRef();

	loader.Set(
		group,
		[tween],
		() => {
			setTween('reveal');
			if (timeOut.current) {
				clearTimeout(timeOut.current);
			}
			timeOut.current = setTimeout(
				() => play(0.35), // -23LUFS
				settings['card-animation-time'] * 1000,
			);
		},
		props['position'],
	);
	const expressions = loader.Get();
	Behaviour(expressions, tween);

	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				ref={group}
				geometry={nodes.Card.geometry}
				material={materials.Card}
				castShadow={castShadow}
				receiveShadow={receiveShadow}
			>
				<meshStandardMaterial
					map={texture}
					metalness={0}
					emissive={'white'}
					emissiveIntensity={0.015}
				></meshStandardMaterial>
			</mesh>
		</group>
	);
}

useGLTF.preload('/models/card/Card.glb');
