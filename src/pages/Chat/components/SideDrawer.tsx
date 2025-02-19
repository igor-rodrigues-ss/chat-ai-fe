import * as React from "react";

import Drawer from "@mui/material/Drawer";

import { Box, Divider, InputBase } from "@mui/material";
import { Col, ColCenter, ColStart, Row, RowCenter } from "../../../styles/grid";
import { DEFAULT_FONT_FAMILY } from "../../../styles/config";
import SearchIcon from "@mui/icons-material/Search";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ChatIcon from "@mui/icons-material/Chat";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";


const SideContent = () => {
	return (
		<Row style={{ height: "100vh" }}>
			<ColCenter style={{ padding: "0 12px" }}>
				<ChatIcon style={{ color: "grey", fontSize: "28pt" }} />
				<ManageAccountsIcon
					style={{
						color: "grey",
						margin: "12px 0 0 0",
						fontSize: "32pt",
					}}
				/>
			</ColCenter>

			<Divider orientation="vertical" />

			<ColStart style={{ padding: "8px" }}>
				<Col>
					<span
						style={{
							margin: "auto",
							fontFamily: DEFAULT_FONT_FAMILY,
						}}
					>
						Conversas
					</span>

					<Divider />
				</Col>

				<img
					src="images/robot-profile.jpg"
					style={{
						"clip-path": "circle()",
						width: "100px",
						margin: "24px auto",
					}}
				/>

				<h2
					style={{
						margin: "10px auto",
						fontFamily: DEFAULT_FONT_FAMILY,
					}}
				>
					Chat AI
				</h2>

				<RowCenter>
					<span
						style={{
							background: "#cdf5d2",
							color: "#5ca06f",
							padding: "6px 8px",
							fontSize: "9pt",
							fontWeight: "bold",
							fontFamily: DEFAULT_FONT_FAMILY,
							borderRadius: "8px",
							margin: "8px",
						}}
					>
						Available
					</span>
				</RowCenter>

				<Row
					style={{
						border: "1px solid lightgrey",
						borderRadius: "6px",
					}}
				>
					<InputBase placeholder="Search old chats" />
					<SearchIcon style={{ margin: "auto 0 auto auto" }} />
				</Row>

				<h4 style={{ fontFamily: DEFAULT_FONT_FAMILY, color: "grey" }}>
					Last Chats
				</h4>

				<Row>
					<ViewHeadlineIcon />
					<span
						style={{
							margin: "auto auto auto 8px",
							fontFamily: DEFAULT_FONT_FAMILY,
						}}
					>
						Talking about technology
					</span>
				</Row>
			</ColStart>
		</Row>
	);
};

const drawerWidth = 320;

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
