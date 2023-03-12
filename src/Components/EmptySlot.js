import {useEffect} from 'react';
import moleHill from '../images/moleHill.png';

export default function EmptySlot(props) {
	useEffect(() => {
		let randSeconds = Math.ceil(Math.random() * 5000);
		let timer = setTimeout(() => {
			props.toggle(true);
		}, randSeconds);
		return () => clearTimeout(timer);
	});

	return (
		<div>
			<img
				style={{width: '30vw'}}
				src={moleHill}
				alt={moleHill}
			/>
		</div>
	);
}
