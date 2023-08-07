import React from 'react'

interface SearchProps {
	searchWord: string;
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
}

const data = ["vodka", "gin", "tequila", "whiskey", "something"]

const SearchAndFilter: React.FC<SearchProps> = ({ searchWord, setSearchWord }) => {
	return (
		<div>
			<input value={searchWord} onChange={(e) => setSearchWord(e.target.value)} type="text" />
			<br />
			{data.map((item) =>
				<button className='quick-btn' onClick={() => setSearchWord(item)}>{item}</button>
			)}
		</div>
	)
}

export default SearchAndFilter
