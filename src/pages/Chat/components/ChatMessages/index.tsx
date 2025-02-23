import { Col, RowBetween } from "../../../../styles/grid";

import { GreenText, Title } from "../../../../components/text";
import { ChatContent, ChatMessagesContainer } from "./style";
import InputMessage from "./InputMessage";
import { AiMessage, UserMessage } from "./messages";

const ChatMessages = () => {
	return (
		<ChatMessagesContainer>
			<ChatHeader title="Llama 3.1" />

			<ChatContent>
				<Col p="0 20%">
					<AiMessage message="Olá meu amigo, em que posso te ajudar?" />
					<UserMessage message="Pode me tirar algumas dúvidas?" />
				</Col>

				<InputMessage />
			</ChatContent>
		</ChatMessagesContainer>
	);
};

interface ChatHeaderProps {
	title: string;
}

const ChatHeader = (props: ChatHeaderProps) => (
	<RowBetween
		style={{ padding: "0 40px", borderBottom: "1px solid #f1f1f1" }}
	>
		<Title m={"12px 0"}>{props.title}</Title>

		<GreenText m={"auto 0"}>Messages</GreenText>
	</RowBetween>
);

export default ChatMessages;
