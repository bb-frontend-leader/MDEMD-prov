import { actions } from '../state';

const interfazReducer = (state, action) => {
	switch (action.type) {
		case actions.UPDATE_USER: {
			return { ...state, user: action.user };
		}
		case actions.UPDATE_PASSWORD: {
			return { ...state, password: action.password };
		}
		case actions.UPDATE_PROFILE: {
			return { ...state, profile: action.profile };
		}
		case actions.UPDATE_PROFILES: {
			return { ...state, profiles: [...action.profiles] };
		}
		case actions.UPDATE_MODULES: {
			return { ...state, modules: { ...action.modules } };
		}
		case actions.UPDATE_COMPETENCES: {
			return { ...state, competences: { ...action.competences } };
		}
		case actions.UPDATE_ACTIVITIES: {
			return { ...state, activities: { ...action.activities } };
		}
		case actions.UPDATE_STEP: {
			return { ...state, step: action.step };
		}
		case actions.UPDATE_TOUR: {
			return { ...state, tour: action.tour };
		}
		default:
			return state;
	}
};

const gameReducer = (state, action) => {
	switch (action.type) {
		case actions.UPDATE_GAME_ID: {
			return { ...state, game: { ...state.game, id: action.id } };
		}
		case actions.UPDATE_GAME_ADDRESS: {
			return { ...state, game: { ...state.game, address: action.address } };
		}
		case actions.UPDATE_GAME_OVER: {
			return { ...state, game: { ...state.game, gameOver: action.gameOver } };
		}
		case actions.UPDATE_GAME_ANSWER: {
			return { ...state, game: { ...state.game, answerState: action.answerState } };
		}
		case actions.UPDATE_GAME_IS_READY: {
			return { ...state, game: { ...state.game, isReady: action.isReady } };
		}
		case actions.UPDATE_GAME_IS_WIN: {
			return { ...state, game: { ...state.game, isWin: action.isWin } };
		}
		case actions.UPDATE_GAME_MUTE: {
			return { ...state, game: { ...state.game, mute: action.mute } };
		}
		case actions.UPDATE_GAME_RESET: {
			return {
				...state,
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
		}
		default:
			return state;
	}
};

const combineReducers = (reducers) => {
	return (state, action) => {
		return Object.keys(reducers).reduce((acc, prop) => {
			return {
				...acc,
				...reducers[prop]({ [prop]: acc[prop] }, action),
			};
		}, state);
	};
};

const appReducers = combineReducers({
	interfaz: interfazReducer,
	game: gameReducer,
});

export default appReducers;
