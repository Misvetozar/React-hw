import { useState } from 'react'

const PlayerInput = ({ id, label, onSubmit }) => {
	const [userName, setUserName] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		console.log(userName, { label })
		onSubmit(id, userName)
	}

	return (
		<form className='column' onSubmit={handleSubmit}>
			<label className='header' htmlFor='userName'>
				{label}
			</label>
			<input
				id='userName'
				type='text'
				placeholder='Github Username'
				autoComplete='off'
				value={userName}
				onChange={event => setUserName(event.target.value)}
			/>
			<button className='button' type='submit' disabled={!userName}>
				Submit
			</button>
		</form>
	)
}

export default PlayerInput
