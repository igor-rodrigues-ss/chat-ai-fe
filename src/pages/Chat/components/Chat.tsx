import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import {
	Col,
	ColBetween,
	ColCenter,
	Row,
	RowBetween,
	RowEnd,
} from "../../../styles/grid";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { DEFAULT_FONT_FAMILY } from "../../../styles/config";
import { GreenText, Title } from "../../../components/text";
import { COLORS } from "../../../styles/colors";

const AiBaloon = styled.div`
	background: #e1e6fd;
	padding: 14px;
	border-radius: 10px 10px 10px 0;
	font-family: ${DEFAULT_FONT_FAMILY};
`;

const UserBaloon = styled.div`
	background: #e1f3fd;
	padding: 14px;
	border-radius: 10px 10px 0px 10px;
	font-family: ${DEFAULT_FONT_FAMILY};
`;

const ChatMessages = () => {
	return (
		<div style={{ height: "98vh", width: "100%", borderRadius: "12px" }}>
			<RowBetween
				style={{ padding: "0 40px", borderBottom: "1px solid #f1f1f1" }}
			>
				<Title m={"12px 0"}>LLama 3.1</Title>

				<GreenText m={"12px 0"}>Messages</GreenText>
			</RowBetween>

			<ColBetween
				style={{ height: "80vh", width: "100%", margin: "0 auto" }}
			>
				<Col style={{ padding: "0 20%" }}>
					<Row>
						<img src="images/robot.png" width={"80px"} />

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

				<Row
					style={{
						background: "white",
						width: "50vw",
						margin: "0 auto",
						borderRadius: "8px",
						border: "1px solid lightgrey",
						padding: "4px 6px 4px 4px",
					}}
				>
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
				</Row>
			</ColBetween>
		</div>
	);
};

export default ChatMessages;
