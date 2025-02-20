import ChatIcon from "@mui/icons-material/Chat";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { COLORS } from "../styles/colors";
import { Col } from "../styles/grid";
import styled from "styled-components";


const SideMenu = () => (
    <Col>
        <ChatIconStyled/>
        <ManageAccountsIconStyled/>
    </Col>
)


const ManageAccountsIconStyled = styled(ManageAccountsIcon)`
    color: grey;
    margin: 12px auto 0;
    font-size: 30pt;
`

const ChatIconStyled = styled(ChatIcon)`
    color: ${COLORS.GREEN.BASE};
    font-size: 20pt;
    border-radius: 8px;
    padding: 12px;
    background: ${COLORS.GREEN.TINT};
`

export default SideMenu;