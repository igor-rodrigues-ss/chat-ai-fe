import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import SideContent from "./SideContent";
import { useEffect } from "react";

const DRAWER_WIDTH = 380;

interface Props {
	open: boolean;
	setOpen: (value: boolean) => void;
}


const SideDrawer = (props: Props) => {
	const { open, setOpen } = props;

	useEffect(() => {
		setOpen(open);
	}, [open, setOpen]);

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box component="nav" sx={BoxSX}>
			<Drawer
				variant="temporary"
				open={open}
				onClose={handleDrawerClose}
				ModalProps={{
					keepMounted: true,
				}}
				sx={TemporaryDrawerSX}
			>
				<SideContent />
			</Drawer>

			<Drawer
				variant="permanent"
				sx={PermanentDrawerSX}
				open
			>
				<SideContent />
			</Drawer>
		</Box>
	);
};


const TemporaryDrawerSX = {
	display: { xs: "block", sm: "none" },
	"& .MuiDrawer-paper": {
		boxSizing: "border-box",
		width: DRAWER_WIDTH,
	},
}

const PermanentDrawerSX = {
	display: { xs: "none", sm: "block" },
	"& .MuiDrawer-paper": {
		boxSizing: "border-box",
		width: DRAWER_WIDTH,
	},
}

const BoxSX = {
	width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 }
}

export default SideDrawer;
