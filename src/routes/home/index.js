import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1 class="font-bold italic text-gray-500">Home</h1>
		<p>This is the Home component.</p>
		<button class="border rounded py-2 px-6 bg-blue-500 text-white">Click Me!</button>
	</div>
);

export default Home;
