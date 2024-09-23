import { FaFire, FaCommentAlt } from "react-icons/fa";
import {
	CardContainer,
	CoverImage,
	AuthorInfo,
	AuthorImage,
	AuthorDetails,
	ArticleInfo,
	Title,
	Description,
	Footer,
	IconContainer,
	InteractionInfo,
} from "./ArticleCard.styles";

const ArticleCard = ({
	cover,
	author,
	date,
	title,
	description,
	likes,
	comments,
}) => {
	return (
		<CardContainer>
			<CoverImage src={cover} alt="Capa do artigo" />
			<AuthorInfo>
				<AuthorImage src={author.image} alt={author.name} />
				<AuthorDetails>
					<p>{author.name}</p>
					<span>{date}</span>
				</AuthorDetails>
			</AuthorInfo>
			<ArticleInfo>
				<Title>{title}</Title>
				<Description>
					{description} <a href="#">ver mais</a>
				</Description>
			</ArticleInfo>
			<Footer>
				<IconContainer>
					<FaFire />
					<InteractionInfo>{likes}</InteractionInfo>
				</IconContainer>
				<IconContainer>
					<FaCommentAlt />
					<InteractionInfo>{comments}</InteractionInfo>
				</IconContainer>
			</Footer>
		</CardContainer>
	);
};

export default ArticleCard;
