import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1 class="font-bold p-5">Home</h1>
		<p>This is the Home component.</p>
	</div>
);

export default Home;
