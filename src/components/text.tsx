import styled from "styled-components";
import { DEFAULT_FONT_FAMILY } from "../styles/config";
import { COLORS } from "../styles/colors";

export const Title = styled.h2<{ m?: string }>`
	color: ${COLORS.DARK.TINT};
	font-family: ${DEFAULT_FONT_FAMILY};
	margin: ${(p) => p.m || "none"};
`;

export const TitleSmall = styled.h4<{ m?: string }>`
	color: ${COLORS.GREY.SHADE};
	font-size: 11pt;
	font-family: ${DEFAULT_FONT_FAMILY};
	margin: ${(p) => p.m || "none"};
`;

export const GreenText = styled.span<{ m?: string }>`
	background-color: ${COLORS.GREEN.TINT};
	color: ${COLORS.GREEN.BASE};
	font-family: ${DEFAULT_FONT_FAMILY};
	font-size: 10pt;
	padding: 6px 20px;
	border-radius: 8px;
	margin: ${(p) => p.m || "none"};
`;
