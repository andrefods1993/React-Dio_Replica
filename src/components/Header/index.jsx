import {
	HeaderContainer,
	NavbarContainer,
	Column,
	Logo,
	Menu,
	MenuItem,
	SearchBar,
	ButtonContainer,
	UserProfile,
} from "./Header.styles";
import ImgLogo from "../../assets/diome.png";
import Profile from "../../assets/profile.png";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const navigate = useNavigate();

	const handleLogin = () => {
		setLoggedIn(!loggedIn);
		navigate("/home");
	};

	const handleLogout = () => {
		if (loggedIn) {
			setLoggedIn(false);
			navigate("/");
		}
	};

	const menu = ["Carreiras", "Projetos", "Planos", "Para Empresas"];

	return (
		<HeaderContainer>
			<NavbarContainer>
				<Column>
					<Logo onClick={handleLogout}>
						<img src={ImgLogo} alt="Logo Dio.me" />
					</Logo>
				</Column>
				<Column>
					{loggedIn ? (
						<SearchBar placeholder="Buscar..." />
					) : (
						<Menu>
							{menu.map((item) => (
								<MenuItem key={item}>{item}</MenuItem>
							))}
						</Menu>
					)}
				</Column>
				<Column>
					{loggedIn ? (
						<UserProfile src={Profile} />
					) : (
						<ButtonContainer>
							<Button title={"Criar Conta"} />
							<Button
								title={"Entrar"}
								variant="secondary"
								onClick={handleLogin}
							/>
						</ButtonContainer>
					)}
				</Column>
			</NavbarContainer>
		</HeaderContainer>
	);
};

export default Header;
