import React, { useEffect, useState } from 'react'
import { getAllDrinks } from '../service.js'
import { drink } from '../model.js'
import SingleDrink from './SingleDrink'

interface DrinksProps {
	searchWord: string;
	mainFilter: string;
}


const Drinks: React.FC<DrinksProps> = ({ mainFilter, searchWord }) => {
	const lowerSearchWord = searchWord.toLowerCase();


	const [data, setData] = useState<drink[]>([])

	useEffect(() => {
		getAllDrinks().then(setData)
	}, [])

	const filteredDrinks = data.filter((drink) => {
		const lowerDrinkName = drink.name.toLowerCase();
		const typeDrink = drink.type;

		return (
			typeDrink.includes(mainFilter)
			&& (
				lowerDrinkName.includes(lowerSearchWord)
				||
				Object.keys(drink.liquors).some(
					(liquor) => liquor.toLowerCase().includes(lowerSearchWord)
				)
				||
				Object.keys(drink.juices).some(
					(juice) => juice.toLowerCase().includes(lowerSearchWord)
				)

			)
		)
	}
	)

	return (

		data && (
			<div className='drinks-Wrapper'>
				{filteredDrinks.map((item) =>
					<SingleDrink key={item.name} item={item} />
				)}
			</div>


		))
}

export default Drinks
