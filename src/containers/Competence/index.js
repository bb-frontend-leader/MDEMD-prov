import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTour } from '@reactour/tour';
import { ProviderContext } from '../../providers';

import Video from '../../components/video/Video';
import Loading from '../../components/Loading';
import BackButton from '../../components/BackButton/BackButton';
import Instructions from '../../components/Instructions/Instructions';
import ContentAvatar from '../../components/ContentAvatar/ContentAvatar';
import ImageAdvice from '../../components/ImageAdvice/ImageAdvice';
import Sign from '../../components/Sign/Sign';
import ImageStar from '../../components/ImageStar/ImageStar';
import TourButton from '../../components/TourButton';

import { ContainerPage, ImageCompetence } from './styles';

import { competence } from '../../components/tour/steps';

function Competence() {
	let { moduleId, competenceId } = useParams();
	const { setIsOpen, setSteps } = useTour();

	const {
		user,
		baseUrlApi,
		updateCompetences,
		updateActivities,
		tour,
		step,
		updateStep,
		updateTour,
	} = useContext(ProviderContext);
	const history = useNavigate();
	const [competencia, setCompetencia] = useState(true);
	const goToGame = (competenciaId, index, actividadId) => {
		updateActivities({ id: actividadId });
		updateCompetences({ id: competenciaId });
		history(`/M1C${competenciaId}A${index + 1}`);
	};

	useEffect(() => {
		updateStep(0);
		setIsOpen(false);
		setSteps([...competence]);
		axios
			.get(
				`${baseUrlApi}index.php?PCO_WSOn=1&PCO_WSKey=X24B27XD7Q&PCO_WSSecret=PDUOMAZEJQ&PCO_WSId=ConsultaEstudianteCompetencia&competencia_id=${competenceId}&estudiante_id=${user.id}`,
			)
			.then((res) => setCompetencia(res.data.data))
			.catch((err) => {
				history('/404', { replace: true });
			});
	}, []);

	return (
		<>
			{competencia?.activities ? (
				<ContainerPage className="step-21">
					<TourButton
						onClick={() => {
							updateStep(0);
							setIsOpen(true);
							updateTour(true);
							setSteps([...competence]);
						}}
					/>
					<BackButton
						ruta={`/module/${moduleId}`}
						rutaTour="step-back-button"
					/>
					<Instructions description={competencia.instructions} />
					{competencia && competencia.videos && !(step >= 1 && tour) && (
						<Video videos={competencia.videos} />
					)}
					<ContentAvatar />
					<ImageCompetence src={baseUrlApi + competencia.imageBg} alt="" />

					{competencia.activities &&
						competencia.activities.map((actividad, index) => {
							return (
								<React.Fragment key={index}>
									<ImageAdvice data={actividad} />
									<Sign
										data={actividad}
										className={'step-20'}
										onClick={() => {
											goToGame(
												competencia.competenceId,
												index,
												actividad.activityId,
											);
										}}
									/>
									<ImageStar data={actividad} className={'step-19'} />
								</React.Fragment>
							);
						})}
				</ContainerPage>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Competence;
