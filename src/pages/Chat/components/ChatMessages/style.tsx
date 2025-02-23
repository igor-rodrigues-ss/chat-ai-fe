import styled from "styled-components";
import { COLORS } from "../../../../styles/colors";
import { DEFAULT_FONT_FAMILY } from "../../../../styles/config";
import { Col, ColBetween, Row } from "../../../../styles/grid";

export const AiBaloon = styled.div`
	background: ${COLORS.GREY.TINT}80;
	padding: 14px;
	border-radius: 10px 10px 10px 0;
	font-family: ${DEFAULT_FONT_FAMILY};
	margin: 8px 0 0 0;
`;

export const UserBaloon = styled.div`
	background: #e1f3fd;
	padding: 14px;
	border-radius: 10px 10px 0px 10px;
	font-family: ${DEFAULT_FONT_FAMILY};
	margin: 8px 0;
`;

export const ChatContent = styled(ColBetween)`
	height: 80vh;
	width: 100%;
	margin: 0 auto;
`;

export const ChatMessagesContainer = styled(Col)`
	height: 98vh;
	width: 100%;
	border-radius: 12px;
`;

export const InputMessageContainer = styled(Row)`
	background: white;
	margin: 0 auto;
	border-radius: 8px;
	border: 1px solid lightgrey;

	@media (max-width: 588px) {
		width: 100%;
	}

	@media (min-width: 589px) and (max-width: 1150px) {
		width: 80%;
	}

	@media (min-width: 1151px) {
		width: 60%;
	}
`;

export const SendButton = styled.div`
	background: ${COLORS.GREEN.BASE};
	border-radius: 8px;
	margin: 4px;
`;
