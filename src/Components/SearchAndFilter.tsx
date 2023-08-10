import React from 'react'

interface SearchProps {
	searchWord: string;
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
	setMainFilter: React.Dispatch<React.SetStateAction<string>>
}
const mainFilter = ["shot", "cocktail", "special"]
const filterDrink = ["vodka", "gin", "tequila", "whiskey", "liquor"]

const SearchAndFilter: React.FC<SearchProps> = ({ setMainFilter, searchWord, setSearchWord }) => {



	return (
		<div>
			<input value={searchWord} onChange={(e) => setSearchWord(e.target.value)} type="text" />
			<br />
			{mainFilter.map((item) =>
				<button
					className='quick-btn'
					onClick={() => setMainFilter((prev) => item === prev ? "" : item)}>
					{item}
				</button>
			)}
			<br />
			{filterDrink.map((item) =>
				<button className='quick-btn' onClick={() => setSearchWord(item)}>{item}</button>
			)}
		</div>
	)
}

export default SearchAndFilter
