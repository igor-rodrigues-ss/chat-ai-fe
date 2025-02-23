import { Img } from "../../../../components/imgs";
import { ColCenter, Row, RowEnd } from "../../../../styles/grid";
import { AiBaloon, UserBaloon } from "./style";

interface Props {
	message: string;
}

export const AiMessage = (props: Props) => (
	<Row>
		<Img src="images/robot.png" width={"40px"} m="auto 4px" />

		<ColCenter>
			<AiBaloon>{props.message}</AiBaloon>
		</ColCenter>
	</Row>
);

export const UserMessage = (props: Props) => (
	<RowEnd>
		<ColCenter>
			<UserBaloon>{props.message}</UserBaloon>
		</ColCenter>
	</RowEnd>
);
