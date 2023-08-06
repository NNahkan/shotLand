import React from 'react'

interface SearchProps {
	searchWord: string;
	setSearchWord: React.Dispatch<React.SetStateAction<string>>
}

const SearchAndFilter: React.FC<SearchProps> = ({ searchWord, setSearchWord }) => {
	return (
		<div>
			<input value={searchWord} onChange={(e) => setSearchWord(e.target.value)} type="text" />
			<br />
			<button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(e.target.innerText)} className='quick-btn'>Coctail</button>
			<button onClick={(e) => console.log(e.target)} className='quick-btn'>Shot</button>
			<button onClick={(e) => console.log(e.target)} className='quick-btn'>Something</button>
		</div>
	)
}

export default SearchAndFilter
