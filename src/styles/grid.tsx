import styled from "styled-components";

export const Row = styled.div<{ m?: string; p?: string }>`
	display: flex;
	flex-direction: row;
	margin: ${(p) => p.m || "0"};
	padding: ${(p) => p.p || "0"};
`;

export const Col = styled.div<{ m?: string; p?: string; width?: string }>`
	display: flex;
	flex-direction: column;
	margin: ${(p) => p.m || "0"};
	padding: ${(p) => p.p || "0"};
	width: ${(p) => p.width || "auto"};
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

export const ColStart = styled(Col)`
	justify-content: start;
`;

export const RowBetween = styled(Row)`
	justify-content: space-between;
`;
