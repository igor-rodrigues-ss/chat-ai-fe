import styled from "styled-components";

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RowEnd = styled(Row)`
	justify-content: end;
`;

export const RowCenter = styled(Row)`
	justify-content: center;
`;

export const ColBetween = styled(Col)`
	justify-content: space-between;
`;

export const ColCenter = styled(Col)`
	justify-content: center;
`;

export const RowBetween = styled(Row)`
	justify-content: space-between;
`;
