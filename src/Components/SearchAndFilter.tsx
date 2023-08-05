import React from 'react'

interface SearchProps {
	searchWord: string;
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
}

const SearchAndFilter: React.FC<SearchProps> = ({ searchWord, setSearchWord }) => {
	return (
		<div>
			<input value={searchWord} onChange={(e) => setSearchWord(e.target.value)} type="text" />
			<button>Coctail</button>
			<button>Shot</button>
			<button>Something</button>
 		</div>
	)
}

export default SearchAndFilter
