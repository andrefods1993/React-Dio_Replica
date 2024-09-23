import { HomeContainer, ArticlesContainer, RankContainer } from "./Home.styles";
import ArticleCard from "../../components/ArticleCard";
import RankList from "../../components/RankList";

import Cover from "../../assets/cover.jpg";
import Profile from "../../assets/profile.png";

const articles = [
	{
		cover: Cover,
		author: {
			image: Profile,
			name: "John Doe",
		},
		date: "21 de Setembro, 2024",
		title: "Título do Artigo",
		description: "Esta é uma breve descrição do artigo...",
		likes: 120,
		comments: 45,
	},
];

const users = [
	{
		id: 1,
		name: "João Silva",
		xp: 2500,
		avatar: Profile,
		progress: 80,
	},
	{
		id: 2,
		name: "Maria Souza",
		xp: 2300,
		avatar: Profile,
		progress: 70,
	},
	{
		id: 3,
		name: "Carlos Oliveira",
		xp: 2100,
		avatar: Profile,
		progress: 60,
	},
	{
		id: 4,
		name: "Ana Pereira",
		xp: 1900,
		avatar: Profile,
		progress: 50,
	},
	{
		id: 5,
		name: "Lucas Lima",
		xp: 1800,
		avatar: Profile,
		progress: 45,
	},
];

const Home = () => {
	return (
		<HomeContainer>
			<ArticlesContainer>
				{articles.map((article, index) => (
					<ArticleCard key={index} {...article} />
				))}
				{articles.map((article, index) => (
					<ArticleCard key={index} {...article} />
				))}
				{articles.map((article, index) => (
					<ArticleCard key={index} {...article} />
				))}
				{articles.map((article, index) => (
					<ArticleCard key={index} {...article} />
				))}
				{articles.map((article, index) => (
					<ArticleCard key={index} {...article} />
				))}
			</ArticlesContainer>
			<RankContainer>
				<RankList users={users} />
			</RankContainer>
		</HomeContainer>
	);
};

export default Home;
