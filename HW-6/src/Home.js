import { Link } from 'react-router-dom'

const Home = () => (
	<div className='home-container'>
		<h1>Github Battle: Battle your friends and ... staff </h1>
		<Link className='button' to='battle'>
			Battle
		</Link>
	</div>
)

export default Home
