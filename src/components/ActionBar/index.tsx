import Action from '../Action';
import { ActionBarContainer, ActionsContainer } from './styles';

type ActionBarProps = {
	createHorseshoe: (amount: number) => void;
	sellHorseshoes: (amount: number, price?: number) => void;

	capital: number;
	horseshoes: number;
};

export default function ActionBar({ createHorseshoe, sellHorseshoes, capital, horseshoes }: ActionBarProps) {
	return (
		<ActionBarContainer>
			<ActionsContainer style={{ marginBottom: '20px' }}>
				<Action onClick={() => createHorseshoe(1)}>Сковать подкову</Action>
			</ActionsContainer>
			<ActionsContainer>
				<Action disabled={horseshoes < 1} onClick={() => sellHorseshoes(1)}>
					Продать 1 подкову ( 1$)
				</Action>
				<Action disabled={horseshoes < 10} onClick={() => sellHorseshoes(10, 12)}>
					Продать 10 подков (12$)
				</Action>
				<Action disabled={horseshoes < 25} onClick={() => sellHorseshoes(25)}>
					Продать 25 подков (25$)
				</Action>
			</ActionsContainer>
		</ActionBarContainer>
	);
}
