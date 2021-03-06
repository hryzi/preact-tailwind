import Axios from 'axios';
import { h, Component } from 'preact';
import style from './style.css';
import { route } from 'preact-router';
import Markdown from 'preact-markdown';

class Profile extends Component {
	constructor(){
		super();

		this.state = {
			story: null,
			errored: false
		}
	}

	componentDidCatch(error) {
		console.log('ERRORED!', error);
		this.setState({ errored: true });
	}

	componentDidMount(){
		Axios.get('http://localhost:3001/stories/' + this.props.user)
		.then((res) => this.setState({story: res.data}))
		.catch((e)=> {
			// console.error('CATCH!', e);
			this.setState({errored: true})
			// route('/home', true);
		});
	}

    render(props, state) {
		if (state.errored) {
			console.log('jsem v errored');
			return <p class="container mt-48 p-2 border rounded bg-red-500 text-white">Something went badly wrong</p>;
		}
		if (state.story !== null) {
			return (
			<div class="container">
				<Markdown markdown={this.state.story.body} />
			</div>
			)
		}
    }
}

// Note: `user` comes from the URL, courtesy of our router
// const Profile = ({ user }) => {
// 	const [time, setTime] = useState(Date.now());
// 	const [count, setCount] = useState(10);

// 	useEffect(() => {
// 		let timer = setInterval(() => setTime(Date.now()), 1000);
// 		return () => clearInterval(timer);
// 	}, []);

// 	return (
// 		<div class={style.profile}>
// 			<h1>Profile: {user}</h1>
// 			<p>This is the user profile for a user named { user }.</p>

// 			<div>Current time: {new Date(time).toLocaleString()}</div>

// 			<p>
// 				<button class="border rounded px-6 py-2 bg-red-100 hover:bg-purple-600 text-white" onClick={() => setCount((count) => count + 1)}>Click Me</button>
// 				{' '}
// 				Clicked {count} times.
// 			</p>
// 		</div>
// 	);
// }

export default Profile;
