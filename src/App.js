import { useState, Suspense, lazy, useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TourProvider } from '@reactour/tour';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ProviderContext } from './providers';
import Loading from './components/Loading';
import { RotateScreen, ImageRotate } from './containers/Login/styles';

const Home = lazy(() => import('./containers/Home'));
const Login = lazy(() => import('./containers/Login'));
const Map = lazy(() => import('./containers/Map'));
const Module = lazy(() => import('./containers/Module'));
const Competence = lazy(() => import('./containers/Competence'));
const M1C1A1 = lazy(() => import('./containers/M1C1A1'));
const M1C1A2 = lazy(() => import('./containers/M1C1A2'));
const M1C1A3 = lazy(() => import('./containers/M1C1A3'));
const M1C1A4 = lazy(() => import('./containers/M1C1A4'));
const M1C2A1 = lazy(() => import('./containers/M1C2A1'));
const M1C2A2 = lazy(() => import('./containers/M1C2A2'));
const M1C2A3 = lazy(() => import('./containers/M1C2A3'));
const M1C3A1 = lazy(() => import('./containers/M1C3A1'));
const M1C3A2 = lazy(() => import('./containers/M1C3A2'));
const M1C4A1 = lazy(() => import('./containers/M1C4A1'));
const M1C4A2 = lazy(() => import('./containers/M1C4A2'));
const M1C5A1 = lazy(() => import('./containers/M1C5A1'));
const M1C5A2 = lazy(() => import('./containers/M1C5A2'));
const M1CE = lazy(() => import('./containers/M1CE'));

const M1C5A3 = lazy(() => import('./containers/M1C5A3'));
const NotFound = lazy(() => import('./containers/NotFound'));

function RequireAuth({ children }) {
	const { user } = useContext(ProviderContext);

	if (!user) {
		return <Navigate to="/" replace />;
	}

	return children;
}

function App() {
	const { step, updateStep, baseUrlApi, user, updateUser, updateTour } =
		useContext(ProviderContext);
	const history = useNavigate();

	const { height, width } = useWindowDimensions();
	const containers = [
		{ component: <Login />, path: '/', private: false },
		{ component: <Home />, path: '/home', private: true },
		{ component: <Map />, path: '/map', private: true },
		{ component: <Module />, path: '/module/:moduleId', private: true },
		{
			component: <Competence />,
			path: '/module/:moduleId/competence/:competenceId',
			private: true,
		},
		{ component: <M1C1A1 />, path: '/m1c1a1', private: true },
		{ component: <M1C1A2 />, path: '/m1c1a2', private: true },
		{ component: <M1C1A3 />, path: '/m1c1a3', private: true },
		{ component: <M1C1A4 />, path: '/m1c1a4', private: true },
		{ component: <M1C2A1 />, path: '/m1c2a1', private: true },
		{ component: <M1C2A2 />, path: '/m1c2a2', private: true },
		{ component: <M1C2A3 />, path: '/m1c2a3', private: true },
		{ component: <M1C3A1 />, path: '/m1c3a1', private: true },
		{ component: <M1C3A2 />, path: '/m1c3a2', private: true },
		{ component: <M1C4A1 />, path: '/m1c4a1', private: true },
		{ component: <M1C4A2 />, path: '/m1c4a2', private: true },
		{ component: <M1C5A1 />, path: '/m1c5a1', private: true },
		{ component: <M1C5A2 />, path: '/m1c5a2', private: true },
		{ component: <M1C5A3 />, path: '/m1c5a3', private: true },
		{ component: <M1CE />, path: '/m1ce', private: true },
		{ component: <NotFound />, path: '*', private: false },
	];

	function useWindowDimensions() {
		const hasWindow = typeof window !== 'undefined';

		function getWindowDimensions() {
			const width = hasWindow ? window.innerWidth : null;
			const height = hasWindow ? window.innerHeight : null;
			return {
				width,
				height,
			};
		}

		const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

		useEffect(() => {
			if (hasWindow) {
				function handleResize() {
					setWindowDimensions(getWindowDimensions());
				}

				window.addEventListener('resize', handleResize);
				return () => window.removeEventListener('resize', handleResize);
			}
		}, [hasWindow]);

		return windowDimensions;
	}

	const setCurrentStep = (step) => {
		updateStep(step);
	};

	return (
		<TourProvider
			styles={{
				close: (base) => {
					return {
						...base,
						width: '1.5rem',
						height: '1.5rem',
						padding: '.5rem',
						top: '0.5rem',
						right: '0.5rem',
						borderRadius: '.5rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'hsl(0, 67%, 43%)',
					};
				},
				popover: (base) => ({
					...base,
					fontFamily: 'dimbo',
				}),
			}}
			steps={[]}
			currentStep={step}
			setCurrentStep={setCurrentStep}
			onClickClose={({ setIsOpen }) => {
				updateTour(false);
				setIsOpen(false);
			}}
		>
			{' '}
			{width < height ? (
				<RotateScreen>
					<ImageRotate />
					<h2>Gira tu dispositivo</h2>
				</RotateScreen>
			) : (
				<Routes>
					{containers.map((element, index) => {
						return element.private ? (
							<Route
								key={index}
								path={element.path}
								element={
									<RequireAuth key={index}>
										<Suspense fallback={<Loading />}>
											{element.component}
										</Suspense>{' '}
									</RequireAuth>
								}
							/>
						) : (
							<Route
								path={element.path}
								key={index}
								element={
									<Suspense fallback={<Loading />}>
										{element.component}
									</Suspense>
								}
							/>
						);
					})}
				</Routes>
			)}
		</TourProvider>
	);
}

export default App;
