import { Divider } from "@mui/material";
import { Col, ColBetween, ColStart, Row } from "../../../styles/grid";

import { GreenText, Title, TitleSmall } from "../../../components/text";
import { InputSearch } from "../../../components/inputs";
import { COLORS } from "../../../styles/colors";
import RecentChatItem from "./RecentChatItem";
import Logo from "../../../components/Logo";
import SideMenu from "../../../components/SideMenu";
import { Img } from "../../../components/imgs";

const SideContent = () => {
	return (
		<Row style={{ height: "100vh" }}>
			<ColBetween style={{ padding: "0 8px" }}>
				<Logo />

				<SideMenu />

				<div></div>
			</ColBetween>

			<Divider orientation="vertical" />

			<ColStart p="8px" width="100%">
				<Col>
					<Title m="12px 0">Models</Title>

					<Divider style={{ borderColor: COLORS.LIGHT.BASE }} />
				</Col>

				<Img src="images/robot-profile.jpg" m="24px auto" />

				<Title m="8px auto">LLama 3.1</Title>

				<GreenText m="0 auto 12px auto">Available</GreenText>

				<InputSearch />

				<TitleSmall>Last Chats</TitleSmall>

				<RecentChatItem
					title="Talking about technology"
					subtitle="I'll explain for you something very important but ..."
					dateOrTime="10:17"
				/>
				<RecentChatItem
					title="Talking about technology"
					subtitle="I'll explain for you something very important but ..."
					dateOrTime="11:15"
				/>
			</ColStart>
		</Row>
	);
};

export default SideContent;
