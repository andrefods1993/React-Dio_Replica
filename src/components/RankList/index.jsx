import {
	Avatar,
	NameAndXP,
	Progress,
	ProgressBar,
	RankContainer,
	RankNumber,
	Title,
	UserCard,
	UserInfo,
	UserName,
	XP,
} from "./RankWeek.styles";

const RankList = ({ users }) => {
	return (
		<RankContainer>
			<Title>RANKING DA SEMANA</Title>
			{users.map((user, index) => (
				<UserCard key={user.id}>
					<RankNumber>{index + 1}</RankNumber>
					<UserInfo>
						<Avatar src={user.avatar} alt={`${user.name} avatar`} />
						<NameAndXP>
							<UserName>{user.name}</UserName>
							<XP>{user.xp} XP</XP>
							<ProgressBar>
								<Progress progress={user.progress}></Progress>
							</ProgressBar>
						</NameAndXP>
					</UserInfo>
				</UserCard>
			))}
		</RankContainer>
	);
};

export default RankList;
