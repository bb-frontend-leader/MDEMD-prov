import { Text, TextContainer } from '../containers/M1C2A2/styles';

const DescriptionText = ({ resources, id, vertical, margin }) => {
	const name = resources.find((element) => element.id == id)?.name;

	return (
		<TextContainer vertical={vertical} show={typeof id == 'number' ? true : false}>
			<Text margin={margin}>{name}</Text>
		</TextContainer>
	);
};

export default DescriptionText;
