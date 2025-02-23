import { Row, Col, RowBetween } from "../../../styles/grid";

import { DEFAULT_FONT_FAMILY } from "../../../styles/config";

import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { COLORS } from "../../../styles/colors";
import styled from "styled-components";

interface RecentChatItemsProps {
	title: string;
	subtitle: string;
	dateOrTime: string;
}

const RecentChatItem = (props: RecentChatItemsProps) => (
	<RowBetween style={{ margin: "0 0 18px 0" }}>
		<Row>
			<ViewHeadlineIcon style={{ margin: "auto 0" }} />

			<Col>
				<BrokenText m="auto auto 4px 8px">{props.title}</BrokenText>

				<BrokenText
					fontSize="8pt"
					m="auto auto 4px 8px"
					color={COLORS.GREY.SHADE}
				>
					{props.subtitle}
				</BrokenText>
			</Col>
		</Row>

		<DateOrTime>{props.dateOrTime}</DateOrTime>
	</RowBetween>
);

const BrokenText = styled.span<{
	m?: string;
	color?: string;
	fontSize?: string;
}>`
	font-family: ${DEFAULT_FONT_FAMILY};
	width: 220px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: ${(p) => p.fontSize || "12pt"};
	color: ${(p) => p.color || "grey"};
	margin: ${(p) => p.m || "auto"};
`;

const DateOrTime = styled.span`
	font-size: 8pt;
	font-weight: bold;
	margin: 0 0 auto auto;
	font-family: ${DEFAULT_FONT_FAMILY};
	color: ${COLORS.GREY.SHADE};
`;

export default RecentChatItem;
