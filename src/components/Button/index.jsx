import { ButtonContainer } from "./Button.styles";

const Button = ({ title, onClick, variant = "primary" }) => {
	return (
		<ButtonContainer onClick={onClick} variant={variant}>
			{title}
		</ButtonContainer>
	);
};

export default Button;
