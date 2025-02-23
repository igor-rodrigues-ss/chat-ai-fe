import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import {
	Col,
	ColBetween,
	ColCenter,
	Row,
	RowBetween,
	RowEnd,
} from "../../../../styles/grid";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { DEFAULT_FONT_FAMILY } from "../../../../styles/config";
import { GreenText, Title } from "../../../../components/text";
import { COLORS } from "../../../../styles/colors";
import { Img } from "../../../../components/imgs";

const AiBaloon = styled.div`
	background: ${COLORS.GREY.TINT}80;
	padding: 14px;
	border-radius: 10px 10px 10px 0;
	font-family: ${DEFAULT_FONT_FAMILY};
	margin: 8px 0 0 0;
`;

const UserBaloon = styled.div`
	background: #e1f3fd;
	padding: 14px;
	border-radius: 10px 10px 0px 10px;
	font-family: ${DEFAULT_FONT_FAMILY};
	margin: 8px 0;
`;

const ChatContent = styled(ColBetween)`
	height: 80vh;
	width: 100%;
	margin: 0 auto;
`

const Header = () => (
	<RowBetween
		style={{ padding: "0 40px", borderBottom: "1px solid #f1f1f1" }}
	>
		<Title m={"12px 0"}>LLama 3.1</Title>

		<GreenText m={"12px 0"}>Messages</GreenText>
	</RowBetween>
)

const InputMessageContainer = styled(Row)`
	background: white;
	width: 50vw;
	margin: 0 auto;
	border-radius: 8px;
	border: 1px solid lightgrey;
	padding: 4px 6px 4px 4px;
`

const InputMessage = () => (
	<InputMessageContainer>
		<InputBase
			sx={{ ml: 1, flex: 1 }}
			placeholder="Write your message..."
		/>

		<div
			style={{
				background: COLORS.GREEN.BASE,
				borderRadius: "8px",
				margin: "2px 0",
			}}
		>
			<IconButton
				type="button"
				sx={{ p: "10px" }}
				aria-label="search"
			>
				<SendIcon style={{ color: "white" }} />
			</IconButton>
		</div>
	</InputMessageContainer>
) 

const ChatMessages = () => {
	return (
		<Col style={{ height: "98vh", width: "100%", borderRadius: "12px" }}>
			<Header/>

			<ChatContent>
				<Col p="0 20%">
					<Row>
						<Img src="images/robot.png" width={"40px"} m="auto 4px"/>

						<ColCenter>
							<AiBaloon>
								Olá meu amigo, em que posso te ajudar?
							</AiBaloon>
						</ColCenter>
					</Row>

					<RowEnd>
						<ColCenter>
							<UserBaloon>
								Como você está meu grande parceiro?
							</UserBaloon>
						</ColCenter>
					</RowEnd>
				</Col>

				<InputMessage/>
				
			</ChatContent>
		</Col>
	);
};

export default ChatMessages;
