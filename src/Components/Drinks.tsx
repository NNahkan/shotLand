import React, { useEffect, useState } from 'react'
import { getAllDrinks } from '../service.js'
import { drink } from '../model.js'
import SingleDrink from './SingleDrink'

interface DrinksProps {
	searchWord: string;
}


const Drinks: React.FC<DrinksProps> = ({ searchWord }) => {
	const [data, setData] = useState<drink[]>([])

	useEffect(() => {
		getAllDrinks().then(setData)
	}, [])

	const filteredDrinks = data.filter((drink) =>
    drink.name.toLowerCase().includes(searchWord.toLowerCase())
  );


	return (

		data && (
			<div className='drinks-Wrapper'>
				<div>{searchWord}</div>
				{filteredDrinks.map((item) =>
					<SingleDrink key={item.name} item={item} />
				)}
			</div>


		))
}

export default Drinks
