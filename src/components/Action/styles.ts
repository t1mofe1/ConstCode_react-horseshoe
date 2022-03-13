import styled from 'styled-components';

type ActionContainerProps = {
	disabled?: boolean;
};

export const ActionContainer = styled.div<ActionContainerProps>`
	width: 400px;
	font-size: 30px;

	text-align: center;
	padding: 10px;

	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	color: gray;
	user-select: none;

	&:hover {
		color: black;
	}

	&:not(:last-child) {
		border-bottom: 1px solid black;
	}
`;
