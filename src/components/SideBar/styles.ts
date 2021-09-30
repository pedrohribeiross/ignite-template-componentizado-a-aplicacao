import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;

	align-items: center;

	max-width: 24rem;
	width: 100%;

	padding: 2rem;

	background: ${({ theme }) => theme.colors.background.secondary};

	span {
		margin-bottom: 4.5rem;
		font-size: 3rem;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.yellow};

		p {
			display: inline;
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
`;
