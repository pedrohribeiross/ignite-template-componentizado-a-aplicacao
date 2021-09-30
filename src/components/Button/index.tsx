import { Icon } from '../../styles/Icon';

import { ButtonArea } from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
	selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {
	return (
		<ButtonArea
			type='button'
			{...(selected && { className: 'selected' })}
			{...rest}
		>
			<Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
			{title}
		</ButtonArea>
	);
}
