import * as React from "react";

import Drawer from "@mui/material/Drawer";

import { Box } from "@mui/material";

const drawer = (
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
);

const drawerWidth = 240;

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
				{drawer}
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
				{drawer}
			</Drawer>
		</Box>
	);
};

export default SideDrawer;
