import styled from "styled-components";
import { variables } from "../../styles/variables";

export const CardContainer = styled.div`
	width: 100%;
	max-width: 600px;
	border: 1px solid ${variables.colors.primary};
	border-radius: 10px;
	overflow: hidden;
	margin: 20px 0;
`;

export const CoverImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`;

export const AuthorInfo = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 20px;
`;

export const AuthorImage = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 10px;
`;

export const AuthorDetails = styled.div`
	p {
		margin: 0;
		font-weight: bold;
	}

	span {
		font-size: 0.9rem;
		color: #777;
	}
`;

export const ArticleInfo = styled.div`
	padding: 20px;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	margin: 0 0 10px;
`;

export const Description = styled.p`
	font-size: 1rem;
	color: #999;
	a {
		color: ${variables.colors.primary};
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	border-top: 1px solid ${variables.colors.primary};
`;

export const IconContainer = styled.div`
	display: flex;
	align-items: center;

	svg {
		margin-right: 5px;
		color: ${variables.colors.primary};
	}
`;

export const InteractionInfo = styled.span`
	font-size: 1rem;
	color: #999;
`;
