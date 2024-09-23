import styled from "styled-components";
import { variables } from "../../styles/variables";

export const LoginContainer = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 85vh;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5rem;
	justify-content: center;
	align-items: center;
`;

export const Info = styled.div`
	@media (max-width: ${variables.breakpoints.tablet}) {
		display: none;
	}
`;
