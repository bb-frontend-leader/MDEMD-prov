import { actions } from '../state';

const interfaz = (state, dispatch) => {
	return {
		threeJsDebug: state.threeJsDebug,
		baseUrl: state.baseUrl,
		baseUrlApi: state.baseUrlApi,
		user: state.user,
		password: state.password,
		updateUser: (user) => {
			dispatch({ type: actions.UPDATE_USER, user });
		},
		updatePassword: (password) => {
			dispatch({ type: actions.UPDATE_PASSWORD, password });
		},
		profile: state.profile,
		updateProfile: (profile) => {
			dispatch({ type: actions.UPDATE_PROFILE, profile });
		},
		profiles: state.profiles,
		updateProfiles: (profiles) => {
			dispatch({ type: actions.UPDATE_PROFILES, profiles });
		},
		modules: state.modules,
		updateModules: (modules) => {
			dispatch({ type: actions.UPDATE_MODULES, modules });
		},
		competences: state.competences,
		updateCompetences: (competences) => {
			dispatch({ type: actions.UPDATE_COMPETENCES, competences });
		},
		activities: state.activities,
		updateActivities: (activities) => {
			dispatch({ type: actions.UPDATE_ACTIVITIES, activities });
		},
		step: state.step,
		updateStep: (step) => {
			dispatch({ type: actions.UPDATE_STEP, step });
		},
		tour: state.tour,
		updateTour: (tour) => {
			dispatch({ type: actions.UPDATE_TOUR, tour });
		},
	};
};

const game = (state, dispatch) => {
	return {
		game: state.game,
		sendProgress: state.sendProgress,
		updateGameId: (id) => {
			dispatch({ type: actions.UPDATE_GAME_ID, id });
		},
		updateGameAddress: (address) => {
			dispatch({ type: actions.UPDATE_GAME_ADDRESS, address });
		},
		updateGameOver: (gameOver) => {
			dispatch({ type: actions.UPDATE_GAME_OVER, gameOver });
		},
		updateGameAnswer: (answerState) => {
			dispatch({ type: actions.UPDATE_GAME_ANSWER, answerState });
		},
		updateGameIsReady: (isReady) => {
			dispatch({ type: actions.UPDATE_GAME_IS_READY, isReady });
		},
		updateGameIsWin: (isWin) => {
			dispatch({ type: actions.UPDATE_GAME_IS_WIN, isWin });
		},
		updateGameMute: (mute) => {
			dispatch({ type: actions.UPDATE_GAME_MUTE, mute });
		},
		updateGameReset: () => {
			dispatch({ type: actions.UPDATE_GAME_RESET });
		},
	};
};

export { interfaz, game };
