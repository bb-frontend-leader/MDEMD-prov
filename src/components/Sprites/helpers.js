const hoverMeshes = (hover) => {
	let pointer = [...document.body.classList].filter((e) => e == 'pointer');
	if (hover && pointer.length == 0) {
		document.body.classList.add('pointer');
	} else if (!hover && pointer.length > 0) {
		document.body.classList.remove('pointer');
	}
};

const toleranceDistance = 0.5;

const getTransition = (spriteRef, transition, indexExpression, setIndexExpresion) => {
	if (spriteRef.current?.userData?.transition) {
		const initialTransition = spriteRef.current.userData.transition;
		let typeTransition = '';

		if (
			initialTransition == 'right' &&
			(Math.abs(transition.right[0] - spriteRef.current.position.x) >
				toleranceDistance ||
				Math.abs(transition.right[2] - spriteRef.current.position.z) >
					toleranceDistance)
		) {
			typeTransition = 'right';
		} else if (
			initialTransition == 'right' &&
			(Math.abs(transition.right[0] - spriteRef.current.position.x) <=
				toleranceDistance ||
				Math.abs(transition.right[2] - spriteRef.current.position.z) <=
					toleranceDistance)
		) {
			spriteRef.current.userData.transition = 'center';
			typeTransition = 'center';
			if (indexExpression == 0) setIndexExpresion(2);
			spriteRef.current.parent.userData.totalFruits[
				spriteRef.current.userData.clickFruit
			] += 1;
			spriteRef.current.userData.clickFruit = '';
		}

		if (
			initialTransition == 'left' &&
			(Math.abs(transition.left[0] - spriteRef.current.position.x) >
				toleranceDistance ||
				Math.abs(transition.left[2] - spriteRef.current.position.z) >
					toleranceDistance)
		) {
			typeTransition = 'left';
		} else if (
			initialTransition == 'left' &&
			(Math.abs(transition.left[0] - spriteRef.current.position.x) <=
				toleranceDistance ||
				Math.abs(transition.left[2] - spriteRef.current.position.z) <=
					toleranceDistance)
		) {
			spriteRef.current.userData.transition = 'center';
			typeTransition = 'center';
			if (indexExpression == 0) setIndexExpresion(1);
			spriteRef.current.parent.userData.totalFruits[
				spriteRef.current.userData.clickFruit
			] += 1;
			spriteRef.current.userData.clickFruit = '';
		}

		if (
			initialTransition == 'center' &&
			(Math.abs(transition.center[0] - spriteRef.current.position.x) >
				toleranceDistance ||
				Math.abs(transition.center[2] - spriteRef.current.position.z) >
					toleranceDistance)
		) {
			typeTransition = 'center';
		} else if (
			initialTransition == 'center' &&
			(Math.abs(transition.center[0] - spriteRef.current.position.x) <=
				toleranceDistance ||
				Math.abs(transition.center[2] - spriteRef.current.position.z) <=
					toleranceDistance)
		) {
			spriteRef.current.userData.transition = 'initial';
			typeTransition = 'initial';
		}

		if (
			initialTransition == 'initial' &&
			(Math.abs(transition.initial[0] - spriteRef.current.position.x) >
				toleranceDistance ||
				Math.abs(transition.initial[2] - spriteRef.current.position.z) >
					toleranceDistance)
		) {
			typeTransition = 'initial';
			if (indexExpression != 0) setIndexExpresion(0);
		} else if (
			initialTransition == 'initial' &&
			(Math.abs(transition.initial[0] - spriteRef.current.position.x) <=
				toleranceDistance ||
				Math.abs(transition.initial[2] - spriteRef.current.position.z) <=
					toleranceDistance)
		) {
			spriteRef.current.userData.transition = '';
			spriteRef.current.parent.userData.points += 1;
		}

		if (typeTransition) {
			[
				spriteRef.current.position.x,
				spriteRef.current.position.y,
				spriteRef.current.position.z,
			] = [
				spriteRef.current.position.x -
					(spriteRef.current.position.x - transition[typeTransition][0]) / 80,
				spriteRef.current.position.y,
				spriteRef.current.position.z -
					(spriteRef.current.position.z - transition[typeTransition][2]) / 80,
			];
		}
	}
};

function hiddeSpriteInNotTransition(spriteRef, fruitHtmlRef) {
	if (
		spriteRef.current &&
		spriteRef.current.parent.userData?.sprite &&
		spriteRef.current.parent.userData?.sprite != spriteRef.current.name
	) {
		spriteRef.current.visible = false;
		fruitHtmlRef.current.style.opacity = '0';
	}
}

const showSpriteInFinishTransition = (spriteRef) => {
	if (
		spriteRef.current?.userData.transition == '' &&
		spriteRef.current.parent.userData?.sprite &&
		spriteRef.current.parent.userData?.sprite == spriteRef.current.name
	) {
		spriteRef.current.parent.userData.sprite = '';
	}

	if (
		spriteRef.current &&
		!spriteRef.current.visible &&
		spriteRef.current.parent.userData?.sprite == ''
	) {
		spriteRef.current.visible = true;
	}
};

export {
	hiddeSpriteInNotTransition,
	getTransition,
	showSpriteInFinishTransition,
	hoverMeshes,
};
