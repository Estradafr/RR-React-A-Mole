import './App.css';
import React, {useState} from 'react';
import MoleContainer from './Components/MoleContainer';

function App() {
	let [score, setScore] = useState(0);

	const createMollHill = () => {
		let hills = [];
		for (let i = 0; i < 9; i++) {
			hills.push(
				<MoleContainer
					key={i}
					setScore={setScore}
					score={score}
				/>
			);
		}

		return <div>{hills}</div>;
	};

	return (
		<div className="App">
			<h1> React A Mole! </h1>
			<h2> Your score is: {score}! </h2>
			<p> How high of a score can you get? </p>
			{createMollHill()}
		</div>
	);
}

export default App;
