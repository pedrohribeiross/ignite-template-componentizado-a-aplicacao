import styled from 'styled-components';
import { device } from '../../styles/device';

export const Container = styled.div`
	position: relative;

	img {
		width: 14.31rem;
		height: 21.25rem;
	}

	@media ${device.tablet} {
		display: flex;
		justify-content: center;
	}
`;

export const CardArea = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	display: flex;
	justify-content: center;

	background: rgba(31, 34, 41, 0.5);
`;

export const MovieInfo = styled.div`
	max-width: 12.31rem;
	width: 100%;

	display: flex;
	flex-direction: column;

	span {
		font-weight: 600;
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.white};

		margin-top: auto;
		margin-bottom: 0.5rem;
	}

	.meta {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		margin-bottom: 1rem;

		div {
			display: flex;
			align-items: center;

			font-weight: 600;
			color: ${({ theme }) => theme.colors.gray};

			svg {
				color: ${({ theme }) => theme.colors.yellow};
				margin-right: 0.5rem;
			}
		}
	}
`;
