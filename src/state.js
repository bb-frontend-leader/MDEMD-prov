const initialState = {
	threeJsDebug: process.env.REACT_APP_THREE_JS_DEBUG,
	baseUrlApi: process.env.REACT_APP_BASE_URL_API,
	baseUrl: '',
	profiles: [],
	profile: '',
	user: null,
	password: null,
	modules: {},
	competences: {},
	activities: {},
	step: 0,
	tour: false,
	game: {
		id: null,
		address: null,
		answerState: null,
		gameOver: false,
		isWin: false,
		isReady: false,
		mute: false,
		sendProgress: {
			method: 'post',
			params: [{ key: 'PCO_WSId', value: 'Actualizar_actividades' }],
		},
	},
};

const actionsInterfaz = {
	UPDATE_PROFILES: 'UPDATE_PROFILES',
	UPDATE_PROFILE: 'UPDATE_PROFILE',
	UPDATE_USER: 'UPDATE_USER',
	UPDATE_PASSWORD: 'UPDATE_PASSWORD',
	UPDATE_MODULES: 'UPDATE_MODULES',
	UPDATE_COMPETENCES: 'UPDATE_COMPETENCES',
	UPDATE_ACTIVITIES: 'UPDATE_ACTIVITIES',
	UPDATE_STEP: 'UPDATE_STEP',
	UPDATE_TOUR: 'UPDATE_TOUR',
};

const actionsGame = {
	UPDATE_GAME_ID: 'UPDATE_GAME_ID',
	UPDATE_GAME_ADDRESS: 'UPDATE_GAME_ADDRESS',
	UPDATE_GAME_OVER: 'UPDATE_GAME_OVER',
	UPDATE_GAME_ANSWER: 'UPDATE_GAME_ANSWER',
	UPDATE_GAME_IS_READY: 'UPDATE_GAME_IS_READY',
	UPDATE_GAME_IS_WIN: 'UPDATE_GAME_IS_WIN',
	UPDATE_GAME_MUTE: 'UPDATE_GAME_IS_MUTE',
	UPDATE_GAME_RESET: 'UPDATE_GAME_RESET',
};

const actions = {
	...actionsInterfaz,
	...actionsGame,
};

export { initialState, actions };
