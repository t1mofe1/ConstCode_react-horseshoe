import { ActionContainer } from './styles';

type ActionProps = {
	onClick: () => void;
	children: React.ReactNode;

	disabled?: boolean;
};

export default function Action({ onClick, children, disabled }: ActionProps) {
	const handleClick = () => !disabled && onClick();

	return (
		<ActionContainer disabled={disabled} onClick={handleClick}>
			{children}
		</ActionContainer>
	);
}
