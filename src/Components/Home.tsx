import React, { useState } from 'react'
import SearchAndFilter from './SearchAndFilter'
import Drinks from './Drinks'
import ModalUp from './ModalUp'

const Home: React.FC = () => {
	const [searchWord, setSearchWord] = useState<string>("")
	return (
		<div>
			<SearchAndFilter searchWord={searchWord} setSearchWord={setSearchWord} />
			<Drinks searchWord={searchWord} />
		</div>
	)
}

export default Home
