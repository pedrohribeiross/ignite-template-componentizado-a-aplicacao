import styled from 'styled-components';

export const ButtonArea = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;

	max-width: 20rem;
	width: 100%;

	border: 0;
	background: ${({ theme }) => theme.colors.button.primary};
	padding: 1.1875rem 2rem;
	border-radius: 0.25rem;

	font-size: 1.125rem;
	color: ${({ theme }) => theme.colors.white};

	&:hover {
		background: ${({ theme }) => theme.colors.button.secondary};
	}

	transition: background 200ms;

	& + button {
		margin-top: 1rem;
	}

	&:first-child {
		margin-top: 0;
	}

	&.selected {
		background: ${({ theme }) => theme.colors.button.secondary};
		color: ${({ theme }) => theme.colors.yellow};
	}
`;
