import styled from "styled-components"
import { DEFAULT_FONT_FAMILY } from "../styles/config"
import { Row } from "../styles/grid"
import { COLORS } from "../styles/colors"


const Logo = () => (
    <Row m="24px auto 0">
        <LogoText>
            AI
        </LogoText>

        <LogoImg src="images/ai-logo.png"/>
    </Row>
)


const LogoText = styled.span`
    margin: auto 4px auto 0;
    font-size: 15pt;
    font-weight: bold;
    color: ${COLORS.PRIMARY.SHADE};
    font-family: ${DEFAULT_FONT_FAMILY};
`

const LogoImg = styled.img`
    margin: 0 0 auto -4px;
    opacity: .9;
    width: 16px;
`

export default Logo