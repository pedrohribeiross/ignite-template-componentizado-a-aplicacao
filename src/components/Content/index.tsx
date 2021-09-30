import { useContext, useEffect, useState } from 'react';

import { MovieCard } from '../MovieCard';

import { api } from '../../services/api';

import { Container, Category, MoviesMain } from './styles';
import { GenreContext } from '../../contexts/GenreContext';

interface GenreResponseProps {
	id: number;
	name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
	title: string;
}

interface MovieProps {
	imdbID: string;
	Title: string;
	Poster: string;
	Ratings: Array<{
		Source: string;
		Value: string;
	}>;
	Runtime: string;
}

export function Content() {
	const { selectedGenreId } = useContext(GenreContext);

	const [movies, setMovies] = useState<MovieProps[]>([]);

	const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
		{} as GenreResponseProps
	);

	useEffect(() => {
		api
			.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
			.then((response) => {
				setMovies(response.data);
			});

		api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then((response) => {
			setSelectedGenre(response.data);
		});
	}, [selectedGenreId]);

	return (
		<Container>
			<header>
				<Category>
					Categoria:<span> {selectedGenre.title}</span>
				</Category>
			</header>

			<MoviesMain>
				<div className='movies-list'>
					{movies.map((movie) => (
						<MovieCard
							key={movie.imdbID}
							title={movie.Title}
							poster={movie.Poster}
							runtime={movie.Runtime}
							rating={movie.Ratings[0].Value}
						/>
					))}
				</div>
			</MoviesMain>
		</Container>
	);
}