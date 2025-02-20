import styled from "styled-components";
import { Row } from "../styles/grid";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { COLORS } from "../styles/colors";
import { DEFAULT_FONT_FAMILY } from "../styles/config";

const InputSearchContainer = styled(Row)`
	border-radius: 8px;
	padding: 0 8px;
	background-color: ${COLORS.LIGHT.TINT};
	margin: 20px 0 12px 0;
`;

export const InputSearch = () => (
	<InputSearchContainer>
		<InputBase
			placeholder="Search"
			style={{
				fontFamily: DEFAULT_FONT_FAMILY,
				padding: "4px",
				fontWeight: "bold",
			}}
		/>
		<SearchIcon
			style={{ margin: "auto 0 auto auto", color: COLORS.GREY.SHADE }}
		/>
	</InputSearchContainer>
);
