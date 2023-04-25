import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTour } from '@reactour/tour';

import { ProviderContext } from '../../providers';

import Video from '../../components/video/Video';
import BackButton from '../../components/BackButton/BackButton';
import TextInstructions from '../../components/Instructions/Instructions';
import ContentAvatar from '../../components/ContentAvatar/ContentAvatar';
import ImageHouse from '../../components/ImageHouse/ImageHouse';
import Sign from '../../components/Sign/Sign';
import ImageStar from '../../components/ImageStar/ImageStar';
import TourButton from '../../components/TourButton';

import { ContainerPage, ContentPage, ImageModule } from './styles';

import { module } from '../../components/tour/steps';

function Module() {
	let { moduleId } = useParams();

	const {
		user,
		baseUrlApi,
		tour,
		step,
		updateStep,
		updateTour,
		updateCompetences,
		updateActivities,
	} = useContext(ProviderContext);
	const history = useNavigate();
	const [modulos, setModulos] = useState({});

	const { setIsOpen, setSteps } = useTour();

	const goToView = (module, competence) => {
		if (competence.evaluative) {
			if (
				competence &&
				competence.stars &&
				competence.stars[0] &&
				competence.stars[0].id
			) {
				if (competence.stars[0].completed) return null;
				const actividadId = competence.stars[0].id;
				const competenciaId = competence.competenceId;
				updateActivities({ id: actividadId });
				updateCompetences({ id: competenciaId });
				history(`/m${module.moduleId}ce`);
			}
		} else {
			history(`/module/${module.moduleId}/competence/${competence.competenceId}`);
		}
	};

	useEffect(() => {
		setIsOpen(false);
		updateStep(0);
		setSteps([...module]);
		axios
			.get(
				`${baseUrlApi}index.php?PCO_WSOn=1&PCO_WSKey=X24B27XD7Q&PCO_WSSecret=PDUOMAZEJQ&PCO_WSId=ConsultaEstudianteModulo&estudiante_id=${user.id}&modulo_id=${moduleId}`,
			)
			.then((res) => {
				let copyData = res.data.data;

				copyData.competences.map((element, index) => {
					copyData.competences[index].disabled = false;

					if (index > 0) {
						if (copyData.competences[index - 1].disabled) {
							copyData.competences[index].disabled = true;
						} else if (copyData.competences[index - 1].mandatory) {
							let complete = 0;
							copyData.competences[index - 1].stars.map(
								(star, indexStar) => {
									if (star.completed) {
										complete += 1;
									}
								},
							);
							if (complete < copyData.competences[index - 1].stars.length) {
								copyData.competences[index].disabled = true;
							}
						}
					}
				});

				setModulos(copyData);
			})
			.catch((err) => {});
	}, []);

	return !modulos?.instructions ? null : (
		<ContainerPage>
			<TourButton
				onClick={() => {
					updateStep(0);
					setIsOpen(true);
					updateTour(true);
				}}
			/>
			<BackButton ruta="/map" rutaTour="step-back-button" />
			{modulos && modulos.instructions && (
				<TextInstructions
					description={modulos.instructions}
					className="step-12"
				/>
			)}
			{modulos && modulos.videos.length > 0 && !(step >= 1 && tour) && (
				<Video videos={modulos.videos} />
			)}
			<ContentAvatar />
			<ContentPage className="step-9">
				{modulos?.moduleBg && (
					<ImageModule src={baseUrlApi + modulos.moduleBg} alt="" />
				)}
				{modulos.competences &&
					modulos.competences.map((competence, index) => {
						return (
							<React.Fragment key={index}>
								<ImageHouse
									data={competence}
									disabled={competence.disabled}
								/>
								{competence.disabled ? (
									<Sign
										data={competence}
										className="step-17"
										disabled={competence.disabled}
									/>
								) : (
									<Sign
										data={competence}
										className="step-17"
										disabled={competence.disabled}
										onClick={() => {
											goToView(modulos, competence);
										}}
									/>
								)}

								{competence.stars &&
									competence.stars.map((star, index) => {
										return (
											<ImageStar
												key={index}
												data={star}
												className="step-16"
											/>
										);
									})}
							</React.Fragment>
						);
					})}
			</ContentPage>
		</ContainerPage>
	);
}

export default Module;
