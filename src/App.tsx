import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Panel from './components/Panel';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
	const [capital, setCapital] = useState(0);
	const [horseshoes, setHorseshoes] = useState(0);

	return (
		<>
			<GlobalStyle />
			<Panel capital={capital} setCapital={setCapital} horseshoes={horseshoes} setHorseshoes={setHorseshoes} />
		</>
	);
}

export default App;
