import { useSelector } from 'react-redux'
import { Loader } from '../Loader'
import { RepList } from './RepList'
import { Tab } from './Tab'

const Popular = () => {
	const showLoader = useSelector(state => state.popular.showLoader)
	return (
		<div>
			<Tab />
			{showLoader ? <Loader /> : <RepList />}
		</div>
	)
}

export default Popular
