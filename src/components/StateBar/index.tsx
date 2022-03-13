import { StateBarContainer, StateBarItem } from './styles';

type StateBarProps = {
	capital: number;
	horseshoes: number;
};

export default function StateBar({ capital, horseshoes }: StateBarProps) {
	return (
		<StateBarContainer>
			<StateBarItem>Капитал: {capital} $</StateBarItem>
			<StateBarItem>Подков: {horseshoes} шт</StateBarItem>
		</StateBarContainer>
	);
}
