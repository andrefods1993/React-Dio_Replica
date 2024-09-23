import styled from "styled-components";
import { variables } from "../../styles/variables";

export const RankContainer = styled.div`
	margin: 0 auto;
	padding: 1rem;
	background-color: ${variables.colors.secondary};
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
	text-align: center;
	margin-bottom: 20px;
`;

export const UserCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	padding: 5px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const RankNumber = styled.span`
	font-size: 1.5rem;
	font-weight: bold;
	color: ${variables.colors.primary};
	margin-right: 15px;
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
`;

export const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
`;

export const NameAndXP = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UserName = styled.span`
	font-size: 1.1rem;
	font-weight: bold;
	width: 200px;
	color: ${variables.colors.secondary};
`;

export const XP = styled.span`
	font-size: 0.9rem;
	color: #777;
`;

export const ProgressBar = styled.div`
	width: 100%;
	background-color: #e0e0e0;
	border-radius: 5px;
	overflow: hidden;
	height: 10px;
	margin-top: 5px;
`;

export const Progress = styled.div`
	width: ${(props) => props.progress}%;
	height: 100%;
	background-color: ${variables.colors.primary};
`;
