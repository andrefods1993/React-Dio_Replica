import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {
	FormContainer,
	FormTitle,
	FormText,
	Form,
	InputContainer,
	Input,
	Icon,
	ErrorMessage,
	LinksContainer,
	LinkItem,
} from "./LoginForm.styles";
import Button from "../../components/Button";

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Endereço de e-mail inválido")
		.required("O campo e-mail é obrigatório"),
	password: yup
		.string()
		.min(8, "A senha deve ter no mínimo 8 caracteres")
		.required("O campo senha é obrigatório"),
});

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<FormContainer>
			<FormTitle>Já tem Cadastro?</FormTitle>
			<FormText>Faça seu login</FormText>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputContainer>
					<Icon>
						<FaEnvelope />
					</Icon>
					<Input
						type="email"
						placeholder="Endereço de e-mail"
						{...register("email")}
					/>
					<ErrorMessage>
						{errors.email ? (
							errors.email.message
						) : (
							<span>&nbsp;</span>
						)}
					</ErrorMessage>
				</InputContainer>

				<InputContainer>
					<Icon>
						<FaLock />
					</Icon>
					<Input
						type="password"
						placeholder="*Senha"
						{...register("password")}
					/>
					<ErrorMessage>
						{errors.password ? (
							errors.password.message
						) : (
							<span>&nbsp;</span>
						)}
					</ErrorMessage>
				</InputContainer>

				<Button title={"ENTRAR"} type="submit" />

				<LinksContainer>
					<LinkItem href="#">Esqueci minha senha</LinkItem>
					<LinkItem href="#">Criar conta</LinkItem>
				</LinksContainer>
			</Form>
		</FormContainer>
	);
};

export default LoginForm;
