import { useContext, useEffect, useState } from 'react';

import { Button } from '../Button';

import { api } from '../../services/api';

import { ButtonsContainer, Container } from './styles';
import { GenreContext } from '../../contexts/GenreContext';

interface GenreResponseProps {
	id: number;
	name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
	title: string;
}

export function SideBar() {
	const [genres, setGenres] = useState<GenreResponseProps[]>([]);

	const { selectedGenreId, handleClickButton } = useContext(GenreContext);

	useEffect(() => {
		api.get<GenreResponseProps[]>('genres').then((response) => {
			setGenres(response.data);
		});
	}, []);

	return (
		<Container>
			<span>
				Watch<p>Me</p>
			</span>

			<ButtonsContainer>
				{genres.map((genre) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClickButton(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</ButtonsContainer>
		</Container>
	);
}
