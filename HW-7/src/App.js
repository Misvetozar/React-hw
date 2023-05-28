import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Battle from './Battle'
import Home from './Home'
import Nav from './Nav'
import Popular from './Popular'
import Results from './Results'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<div>
				<Nav />
			</div>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/popular',
				element: <Popular />,
			},
			{
				path: '/battle',
				element: <Battle />,
			},
			{
				path: '/battle/results',
				element: <Results />,
			},
			{
				path: '*',
				element: <h2>Error...</h2>,
			},
		],
	},
])

const App = () => <RouterProvider router={router} />

export default App
