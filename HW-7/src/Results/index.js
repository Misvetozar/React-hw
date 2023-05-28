import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Loader } from '../Loader.js'
import { startBattle } from '../redux/result.thunk'
import { ResultPanel } from './ResultPanel'

const Results = () => {
	const [searchParams] = useSearchParams()
	const playerNameOne = searchParams.get('playerOneName')
	const playerNameTwo = searchParams.get('playerTwoName')
	const dispatch = useDispatch()
	const error = useSelector(state => state.result.error)
	const showLoader = useSelector(state => state.result.showLoader)

	useEffect(() => {
		dispatch(startBattle(playerNameOne, playerNameTwo))
	}, [playerNameOne, playerNameTwo])

	const contentOrError = errorMessage => {
		if (errorMessage) {
			return <div>{errorMessage.message}</div>
		}
		return showLoader ? (
			<Loader />
		) : (
			<>
				<ResultPanel result='Winner' />
				<ResultPanel result='Loser' />
			</>
		)
	}

	return <div className='flex-container'>{contentOrError(error)}</div>
}

export default Results
