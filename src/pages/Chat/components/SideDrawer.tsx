import * as React from "react";

import Drawer from "@mui/material/Drawer";

import { Box, Divider } from "@mui/material";
import {
	Col,
	ColBetween,
	ColStart,
	Row,
	RowBetween,
} from "../../../styles/grid";
import { DEFAULT_FONT_FAMILY } from "../../../styles/config";

import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ChatIcon from "@mui/icons-material/Chat";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { GreenText, Title, TitleSmall } from "../../../components/text";
import { InputSearch } from "../../../components/inputs";
import { COLORS } from "../../../styles/colors";

const RecentChatItems = () => (
	<RowBetween style={{ margin: "0 0 18px 0"}}>
		<Row>
			<ViewHeadlineIcon style={{ margin: "auto 0" }} />

			<Col>
				<span
					style={{
						margin: "auto auto 4px 8px",
						fontWeight: "400",
						fontFamily: DEFAULT_FONT_FAMILY,
						width: "220px",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}
				>
					Talking about technology
				</span>
				<span
					style={{
						fontSize: "8pt",
						margin: "auto auto 4px 8px",
						fontFamily: DEFAULT_FONT_FAMILY,
						color: COLORS.GREY.SHADE,
						width: "200px",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}
				>
					I'll explain for you something very important but ...
				</span>
			</Col>
		</Row>

		<span
			style={{
				fontSize: "8pt",
				fontWeight: "bold",
				margin: "0 0 auto auto",
				fontFamily: DEFAULT_FONT_FAMILY,
				color: COLORS.GREY.SHADE,
			}}
		>
			11:15
		</span>
	</RowBetween>
);

const SideContent = () => {
	return (
		<Row style={{ height: "100vh" }}>
			<ColBetween style={{ padding: "0 8px" }}>
				<Row style={{ margin: "24px auto 0" }}>
					<span
						style={{
							margin: "auto 4px auto 0",
							fontSize: "15pt",
							fontWeight: "bold",
							color: COLORS.PRIMARY.SHADE,
							fontFamily: DEFAULT_FONT_FAMILY,
						}}
					>
						AI
					</span>

					<img
						src="images/ai-logo.png"
						width={"16px"}
						style={{ margin: "0 0 auto -4px", opacity: ".9" }}
					/>
				</Row>

				<Col>
					<ChatIcon
						style={{
							color: COLORS.GREEN.BASE,
							fontSize: "20pt",
							borderRadius: "8px",
							padding: "12px",
							background: COLORS.GREEN.TINT,
						}}
					/>
					<ManageAccountsIcon
						style={{
							color: "grey",
							margin: "12px auto 0",
							fontSize: "30pt",
						}}
					/>
				</Col>

				<div></div>
			</ColBetween>

			<Divider orientation="vertical" />

			<ColStart style={{ padding: "8px", width: "100%" }}>
				<Col>
					<Title m="12px 0">Models</Title>

					<Divider style={{ borderColor: COLORS.LIGHT.BASE }} />
				</Col>

				<img
					src="images/robot-profile.jpg"
					style={{
						"clip-path": "circle()",
						width: "100px",
						margin: "24px auto",
					}}
				/>

				<Title m={"8px auto"}>LLama 3.1</Title>

				<GreenText m="0 auto 12px auto">Available</GreenText>

				<InputSearch />

				<TitleSmall>Last Chats</TitleSmall>

				<RecentChatItems />
				<RecentChatItems />
			</ColStart>
		</Row>
	);
};

const drawerWidth = 380;

interface Props {
	open: boolean;
	setOpen: (value: boolean) => void;
}

const SideDrawer = (props: Props) => {
	const { open, setOpen } = props;

	React.useEffect(() => {
		setOpen(open);
	}, [open, setOpen]);

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
			aria-label="mailbox folders"
		>
			<Drawer
				variant="temporary"
				open={open}
				onClose={handleDrawerClose}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				<SideContent />
			</Drawer>

			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
				open
			>
				<SideContent />
			</Drawer>
		</Box>
	);
};

export default SideDrawer;
