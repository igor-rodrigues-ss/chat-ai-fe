import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { RowEnd } from "../../styles/grid";
import SideDrawer from "./components/SideDrawer";

const ChatPage = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<Box sx={{ display: "flex" }}>
			<SideDrawer variant="permanent" open={open}>
				<RowEnd>
					<IconButton onClick={() => setOpen(!open)}>
						{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</RowEnd>

				<List>
					<ListItem
						key={"Messages"}
						disablePadding
						sx={{ display: "block" }}
					>
						<ListItemButton
							sx={[
								{
									minHeight: 48,
									px: 2.5,
								},
								open
									? {
											justifyContent: "initial",
										}
									: {
											justifyContent: "center",
										},
							]}
						>
							<ListItemIcon
								sx={[
									{
										minWidth: 0,
										justifyContent: "center",
									},
									open
										? {
												mr: 3,
											}
										: {
												mr: "auto",
											},
								]}
							>
								<InboxIcon />
							</ListItemIcon>

							<ListItemText
								primary={"Messages"}
								sx={[
									open
										? {
												opacity: 1,
											}
										: {
												opacity: 0,
											},
								]}
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</SideDrawer>

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Typography sx={{ marginBottom: 2 }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Rhoncus dolor purus non enim praesent elementum
					facilisis leo vel. Risus at ultrices mi tempus imperdiet.
					Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id
					donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est
					ultricies integer quis. Cursus euismod quis viverra nibh
					cras. Metus vulputate eu scelerisque felis imperdiet proin
					fermentum leo. Mauris commodo quis imperdiet massa
					tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
					At augue eget arcu dictum varius duis at consectetur lorem.
					Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>
			</Box>
		</Box>
	);
};

export default ChatPage;
