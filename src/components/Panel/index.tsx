import StateBar from '../StateBar';
import ActionBar from '../ActionBar';

import { PanelContainer } from './styles';

type PanelProps = {
	capital: number;
	horseshoes: number;
	setCapital: React.Dispatch<React.SetStateAction<number>>;
	setHorseshoes: React.Dispatch<React.SetStateAction<number>>;
};

export default function Panel({ capital, horseshoes, setCapital, setHorseshoes }: PanelProps) {
	const createHorseshoe = (amount: number) => {
		setHorseshoes((v) => v + amount);
	};

	const sellHorseshoes = (amount: number, price?: number) => {
		const _price = price ?? amount; // new variable because of "Narrowing doesn't persist across function boundaries. GH issue 9998."

		setCapital((v) => v + _price);
		setHorseshoes((v) => v - amount);
	};

	return (
		<PanelContainer>
			<StateBar capital={capital} horseshoes={horseshoes} />
			<ActionBar capital={capital} horseshoes={horseshoes} createHorseshoe={createHorseshoe} sellHorseshoes={sellHorseshoes} />
		</PanelContainer>
	);
}
