import styled from 'styled-components';

export const Container = styled.div`
	max-width: 52.5rem;
	width: 100%;

	margin: 0 auto;
`;

export const Category = styled.span`
	display: block;
	margin-top: 2rem;

	font-size: 2.25rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.gray};

	span {
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const MoviesMain = styled.main`
	width: 100%;
	margin-top: 5.625rem;

	.movies-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 4.75rem;
		list-style: none;
	}
`;
