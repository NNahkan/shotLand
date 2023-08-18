import React, { useState } from 'react'
import SearchAndFilter from './SearchAndFilter'
import Drinks from './Drinks'
import ModalUp from './ModalUp'

const Home: React.FC = () => {
	const [mainFilter, setMainFilter] = useState<string>("")
	const [searchWord, setSearchWord] = useState<string>("")
	return (
		<div>
			<SearchAndFilter setMainFilter={setMainFilter} searchWord={searchWord} setSearchWord={setSearchWord} />
			<Drinks mainFilter={mainFilter} searchWord={searchWord} />
		</div>
	)
}

export default Home
