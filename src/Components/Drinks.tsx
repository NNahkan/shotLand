import React, { useEffect, useState } from 'react'
import { getAllDrinks } from '../service.js'
import { drink } from '../model.js'
import SingleDrink from './SingleDrink'


const Drinks: React.FC = () => {
	const [data, setData] = useState<drink[]>([])

	useEffect(() => {
		getAllDrinks().then(setData)
	}, [])

	console.log(data)


	return (

		data && (
			<div className='drinks-Wrapper'>
				{data.map((item) =>
					<SingleDrink key={item.name} item={item} />
				)}
			</div>


		))
}

export default Drinks
