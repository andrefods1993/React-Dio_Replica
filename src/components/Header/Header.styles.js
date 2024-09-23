import styled from "styled-components";
import { variables } from "../../styles/variables";

export const HeaderContainer = styled.header`
	width: 100%;
	background-color: ${variables.colors.secondary};
	padding: 1rem 0;
`;

export const NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 5rem;
`;

export const Column = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const Logo = styled.div`
	img {
		height: 2.5rem;
	}
`;

export const Menu = styled.ul`
	display: flex;
	list-style: none;
	gap: 2rem;

	@media (max-width: ${variables.breakpoints.tablet}) {
		display: none;
	}
`;

export const MenuItem = styled.li`
	cursor: pointer;
	transition: color 0.3s ease-in-out;

	&:hover {
		color: ${variables.colors.primary};
	}
`;

export const SearchBar = styled.input`
	padding: 0.5rem 1.2rem;
	border-radius: 0.5rem;
	border: 2px solid ${variables.colors.primary};
	color: ${variables.colors.secondary}
	width: 300px;

	@media (max-width: ${variables.breakpoints.tablet}) {
		width: 100px;
		font-size: 0.8rem;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: ${variables.breakpoints.mobile}) {
		flex-direction: column;
	}
`;

export const UserProfile = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;
