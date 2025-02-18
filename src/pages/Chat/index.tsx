import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Col, Row } from "../../styles/grid";
import SideDrawer from "./components/SideDrawer";
import ChatMessages from "./components/Chat";
import MenuIcon from "@mui/icons-material/Menu";

const ChatPage = () => {
	const [open, setOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setOpen(true);
	};

	return (
		<Col>
			<IconButton
				onClick={handleDrawerToggle}
				style={{ position: "fixed" }}
			>
				<MenuIcon />
			</IconButton>

			<Row>
				<SideDrawer open={open} setOpen={setOpen} />

				<ChatMessages />
			</Row>
		</Col>
	);
};

export default ChatPage;
