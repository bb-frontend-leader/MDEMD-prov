import React, { useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

import MeshElement from './MeshElement';

import cursor from '../../assets/img/Login/Puntero.webp';

const GroupElement = React.memo((props) => {
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		if (hovered) document.body.classList.add('pointer');
		else document.body.classList.remove('pointer');
	}, [hovered]);

	useEffect(() => {
		if (typeof props.visible == 'boolean' && !props.visible)
			document.body.classList.remove('pointer');
	}, [props.visible]);

	const myGroup = React.useRef();
	let factorScale = 1;

	useFrame(({ clock }) => {
		if (props.hover && hovered) {
			if (myGroup.current.scale.x >= 1.01) {
				factorScale = -1;
			}
			if (myGroup.current.scale.x <= 0.99) {
				factorScale = 1;
			}

			myGroup.current.scale.x = myGroup.current.scale.x + 0.00055 * factorScale;
			myGroup.current.scale.y = myGroup.current.scale.y + 0.00055 * factorScale;
			myGroup.current.scale.z = myGroup.current.scale.z + 0.00055 * factorScale;
		}
	});

	return (
		<group
			ref={myGroup}
			{...props}
			visible={typeof props.visible == 'boolean' && !props.visible ? false : true}
			onPointerOver={() => {
				if (props.hover && !(typeof props.visible == 'boolean' && !props.visible))
					setHovered(true);
			}}
			onPointerOut={() => {
				if (props.hover) setHovered(false);
			}}
		>
			{props.sons && (
				<>
					{props.sons.map((element, index) => {
						return (
							<React.Fragment key={index}>
								{element.type == 'mesh' ? (
									<MeshElement
										{...element}
										materials={props.materials}
										nodes={props.nodes}
									/>
								) : (
									<GroupElement
										{...element}
										materials={props.materials}
										nodes={props.nodes}
									/>
								)}
							</React.Fragment>
						);
					})}
				</>
			)}
		</group>
	);
});

export default GroupElement;
