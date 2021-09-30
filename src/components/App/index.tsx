import { ThemeProvider } from 'styled-components';

import { SideBar } from '../SideBar';
import { Content } from '../Content';

import { GenreContextProvider } from '../../contexts/GenreContext';

import { Container } from './styles';
import defaultTheme from '../../styles/themes/default';
import GlobalStyle from '../../styles/global';

export function App() {
	return (
		<GenreContextProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />

				<Container>
					<SideBar />
					<Content />
				</Container>
			</ThemeProvider>
		</GenreContextProvider>
	);
}
