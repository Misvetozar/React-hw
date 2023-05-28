import { useSelector } from 'react-redux'
import { Repository } from './Repository'

export function RepList() {
	const repos = useSelector(state => state.popular.repos)

	return (
		<ul className='popular-list'>
			{repos.map((repo, index) => (
				<Repository key={repo.id} index={index} repo={repo} />
			))}
		</ul>
	)
}
