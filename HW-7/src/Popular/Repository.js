export function Repository(props) {
	return (
		<li className='popular-item'>
			<div className='popular-rank'>#{props.index + 1}</div>
			<ul>
				<li>
					<img className='avatar' src={props.repo.owner.avatar_url} alt='' />
				</li>
				<li>
					<a href={props.repo.html_url} rel='noreferrer' target='_blank'>
						{props.repo.name}
					</a>
				</li>
				<li>@{props.repo.owner.login}</li>
				<li>{props.repo.stargazers_count} stars</li>
			</ul>
		</li>
	)
}
