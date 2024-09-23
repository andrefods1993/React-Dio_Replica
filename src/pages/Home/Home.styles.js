import styled from "styled-components";
import { variables } from "../../styles/variables";

export const HomeContainer = styled.main`
	display: flex;
	padding: 15px;
	max-width: 1200px;
	margin: 0 auto;
`;

export const ArticlesContainer = styled.div`
	flex: 2;
	margin-right: 20px;
	overflow-y: auto;
	height: 80vh;
	::-webkit-scrollbar {
		display: none;
	}
	overflow: -moz-scrollbars-none;
	scrollbar-width: none;
`;

export const RankContainer = styled.div`
	flex: 1;
	height: calc(100vh - 100px);
	height: 80vh;

	@media (max-width: ${variables.breakpoints.tablet}) {
		display: none;
	}
`;
