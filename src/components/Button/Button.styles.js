import styled, { css } from "styled-components";
import { variables } from "../../styles/variables";

export const ButtonContainer = styled.button`
	padding: 0.5rem 1.2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	font-weight: bold;
	transition: all 0.3s ease;

	${(props) =>
		props.variant === "primary" &&
		css`
			background-color: ${variables.colors.primary};
			color: ${variables.colors.text};
			border: 2px solid ${variables.colors.primary};

			&:hover {
				background-color: #5f138f;
				border: 2px solid #5f138f;
			}

			&:active {
				background-color: #3f0775;
				border: 2px solid #3f0775;
			}
		`}

	${(props) =>
		props.variant === "secondary" &&
		css`
			background-color: transparent;
			color: ${variables.colors.primary};
			border: 2px solid ${variables.colors.primary};

			&:hover {
				background-color: ${variables.colors.primary};
				color: ${variables.colors.secondary};
			}

			&:active {
				background-color: #3f0775;
				border: 2px solid #3f0775;
			}
		`}
`;
