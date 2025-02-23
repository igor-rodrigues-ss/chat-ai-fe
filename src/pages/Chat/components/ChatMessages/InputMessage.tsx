import { IconButton, InputBase } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { InputMessageContainer, SendButton } from "./style";

const InputMessage = () => (
	<InputMessageContainer>
		<InputBase
			sx={{ ml: 1, flex: 1 }}
			placeholder="Write your message..."
		/>

		<SendButton>
			<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
				<SendIcon style={{ color: "white" }} />
			</IconButton>
		</SendButton>
	</InputMessageContainer>
);

export default InputMessage;
