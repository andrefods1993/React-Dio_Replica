import styled from "styled-components";
import { variables } from "../../styles/variables";

export const FormContainer = styled.div`
	min-width: 300px;
	padding: 40px;
	background-color: #fff;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
	text-align: center;
`;

export const FormTitle = styled.h1`
	font-size: 24px;
	margin-bottom: 10px;
	color: ${variables.colors.primary};
`;

export const FormText = styled.p`
	font-size: 16px;
	margin-bottom: 20px;
	color: ${variables.colors.secondary};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const InputContainer = styled.div`
	position: relative;
	width: 100%;
`;

export const Icon = styled.div`
	position: absolute;
	top: 35%;
	left: 10px;
	transform: translateY(-50%);
	color: ${variables.colors.primary};
`;

export const Input = styled.input`
	width: 80%;
	padding: 10px 10px 10px 40px;
	border: none;
	border-bottom: 1px solid ${variables.colors.primary};
	font-size: 0.8rem;
	outline: none;

	&:focus {
		border-color: ${variables.colors.secondary};
	}
`;

export const ErrorMessage = styled.span`
	display: block;
	margin-top: 5px;
	font-size: 12px;
	color: red;
	text-align: left;
`;

export const LinksContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;

export const LinkItem = styled.a`
	font-size: 14px;
	color: ${variables.colors.primary};
	cursor: pointer;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
