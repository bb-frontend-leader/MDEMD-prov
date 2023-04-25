import { useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { Tooltip } from '@chakra-ui/tooltip';
import { useTour } from '@reactour/tour';

import { ProviderContext } from '../../providers';

import TourButton from '../../components/TourButton';
import ImageMaps from './map';
import BackButton from '../../components/BackButton/BackButton';

import header from '../../assets/img/Login/Logo.webp';

import {
	ContainerPage,
	ImageHeader,
	ButtonLogout,
	ContentHeader,
	ContainerAvatar,
	Fullname,
	ContainerImageMap,
	ContentPage,
	ContentImageAvatar,
} from './styles';

import { map } from '../../components/tour/steps';

function Map() {
	const {
		user,
		updateUser,
		profile,
		profiles,
		baseUrlApi,
		updateStep,
		updateTour,
		password,
	} = useContext(ProviderContext);
	const { setIsOpen, setSteps } = useTour();
	useEffect(() => {
		setIsOpen(false);
		updateStep(0);
		setSteps([...map]);

		let url =
			baseUrlApi +
			`index.php?PCO_WSOn=1&PCO_WSKey=X24B27XD7Q&PCO_WSSecret=PDUOMAZEJQ&PCO_WSId=ConsultaEstudianteLogin&login=${user.user}&contrasena=${password}`;
		axios.get(url).then(function (response) {
			if (response?.status == '200') {
				updateUser(response.data.data);
			}
		});
	}, []);

	const orden = useRef(null);

	return profile && user.nick ? (
		<ContainerPage>
			<TourButton
				onClick={() => {
					updateStep(0);
					setIsOpen(true);
					updateTour(true);
				}}
			/>
			<ContentHeader>
				<ImageHeader src={header} alt="" className="step-5" />
				<Tooltip label="Salir" placement="auto-start" className="toolTip">
					<ButtonLogout
						onClick={() => updateUser(null)}
						className="step-6 orden"
					/>
				</Tooltip>
			</ContentHeader>

			<BackButton ruta="/home" rutaTour="step-back-button" tabIndex={1} />

			<ContentPage>
				<ContainerImageMap className="step-9">
					<ImageMaps user={user} baseUrlApi={baseUrlApi} />
				</ContainerImageMap>
			</ContentPage>
			<ContainerAvatar>
				<ContentImageAvatar>
					<img
						className="step-7"
						src={
							baseUrlApi +
							profiles.filter((element) => element.id === profile)[0]
								.imagen_avatar
						}
						alt=""
					/>
				</ContentImageAvatar>
				<Fullname className="step-8">{user.nick}</Fullname>
			</ContainerAvatar>
		</ContainerPage>
	) : null;
}

export default Map;
