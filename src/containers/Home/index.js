import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTour } from '@reactour/tour';

import { ProviderContext } from '../../providers';
import TourButton from '../../components/TourButton';
import { home } from '../../components/tour/steps';

import {
	ContainerPage,
	Contentup,
	ContainerLeft,
	ContentProfile,
	ImageProfile,
	ImageProfileBig,
	ContainerRight,
	ImageSend,
	Input,
	ImageProfileContainer,
	Contentdown,
	ContentSend,
	ContentAvatars,
} from './styles';

function Home() {
	const {
		user,
		updateUser,
		profile,
		updateProfile,
		profiles,
		updateProfiles,
		baseUrlApi,
		tour,
		step,
		updateTour,
		updateStep,
	} = useContext(ProviderContext);
	const history = useNavigate();
	const { setIsOpen, currentStep, setSteps } = useTour();

	const submit = () => {
		let url =
			baseUrlApi +
			`index.php?PCO_WSOn=1&PCO_WSKey=GFS8N3BFPE&PCO_WSSecret=NTTOYDVB2A&PCO_WSId=EditarEstudiante&id=${user.id}&personaje_id=${profile}&nick=${user.nick}`;
		axios
			.post(url)
			.then(function (response) {
				if (response?.status == '200') {
					updateUser({
						...user,
						personaje_id: profile,
					});
					history('/map');
				}
			})
			.catch(function (response) {});
	};

	useEffect(() => {
		setIsOpen(false);
		updateStep(0);
		setSteps([...home]);
		let url =
			baseUrlApi +
			'index.php?PCO_WSOn=1&PCO_WSKey=X24B27XD7Q&PCO_WSSecret=PDUOMAZEJQ&PCO_WSId=ConsultaPersonaje';
		axios.get(url).then(function (response) {
			updateProfiles(response.data.data);
			if (user?.personaje_id) updateProfile(user.personaje_id);
		});
	}, []);

	useEffect(() => {
		setIsOpen(false);
		if (profiles && user.stateTour == '0') {
			setTimeout(() => {
				setIsOpen(true);
			}, 500);
		}
	}, [profiles]);

	const updateFocus = (e, id) => {
		if (e.key === 'Enter') {
			updateProfile(id);
		}
	};

	const enterHome = (e) => {
		if (e.key === 'Enter') {
			if (profile && user.nick) submit();
		}
	};

	return (
		profiles && (
			<ContainerPage>
				<TourButton
					onClick={() => {
						updateStep(0);
						setIsOpen(true);
						updateTour(true);
					}}
				/>
				<Contentdown className="step-1">
					<Contentup>
						<p>ESCOGE TU AVATAR</p>
					</Contentup>
					<ContainerLeft>
						<ContentAvatars className="step-2">
							{profiles.map((element, index) => {
								return (
									<ContentProfile key={index}>
										<ImageProfileContainer
											tabIndex={index + 1}
											selected={profile === element.id}
											onClick={() => updateProfile(element.id)}
											onKeyDown={(e) => updateFocus(e, element.id)}
										>
											<ImageProfile
												src={baseUrlApi + element.imagen_cara}
												alt=""
											/>
										</ImageProfileContainer>
										<p>{element.title}</p>
									</ContentProfile>
								);
							})}
						</ContentAvatars>
						<ContentSend>
							<Input
								placeholder="Escribe el nombre "
								autoFocus
								value={user.nick}
								className={'step-3'}
								onChange={({ target: { value } }) =>
									updateUser({ ...user, nick: value })
								}
								onKeyDown={enterHome}
								tabIndex={7}
							/>
							{profile && user.nick ? (
								<ImageSend
									className={'step-4'}
									onClick={() => submit()}
									tabIndex={8}
								/>
							) : (
								<ImageSend className={'step-5'} tabIndex={8} />
							)}
						</ContentSend>
					</ContainerLeft>
				</Contentdown>
				<ContainerRight>
					{profile && (
						<ImageProfileBig
							src={
								baseUrlApi +
								profiles.filter((element) => element.id == profile)[0]
									.imagen_avatar
							}
							alt=""
						/>
					)}
				</ContainerRight>
			</ContainerPage>
		)
	);
}

export default Home;
