import { Star, Clock } from 'react-feather';

import { CardArea, Container, MovieInfo } from './styles';

interface MovieCardProps {
	title: string;
	poster: string;
	rating: string;
	runtime: string;
}

export function MovieCard(props: MovieCardProps) {
	return (
		<Container>
			<img src={props.poster} alt={props.title} loading='lazy' />

			<CardArea>
				<MovieInfo>
					<span>{props.title}</span>
					<div className='meta'>
						<div>
							<Star /> {props.rating}
						</div>

						<div>
							<Clock /> {props.runtime}
						</div>
					</div>
				</MovieInfo>
			</CardArea>
		</Container>
	);
}
