import { LoginContainer, Column, Info } from "./Login.styles";
import LoginForm from "../../components/LoginForm";

const Login = () => {
	return (
		<LoginContainer>
			<Info>
				<Column>
					<h1>Domine as tecnologias utilizadas pelas empresas mais inovadoras</h1>
				</Column>
			</Info>
			<Column>
				<LoginForm />
			</Column>
		</LoginContainer>
	);
};

export default Login;
