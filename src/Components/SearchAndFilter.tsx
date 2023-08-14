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
		<div className='search-wrapper'>
			<input
				className='search-input'
				placeholder='Search for Trouble'
				value={searchWord}
				onChange={(e) => setSearchWord(e.target.value)} type="text"
			/>
			<div className='mainFilter-wrapper'>
				{mainFilter.map((item) =>
					<button
						className='quick-btn'
						onClick={() => setMainFilter((prev) => item === prev ? "" : item)}>
						{item}
					</button>
				)}
			</div>
			<div className='filterDrink-wrapper'>
				{filterDrink.map((item) =>
					<button className='quick-btn' onClick={() => setSearchWord(item)}>{item}</button>
				)}
			</div>
		</div>
	)
}

export default SearchAndFilter
