import React, { useEffect, useState } from 'react'
import { getAllDrinks } from '../service.js'


const Drinks = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		getAllDrinks().then(setData)
	}, [])


	return (
		data && (
			<>
				{data.map((item) => {
					const liquorList = Object.keys(item.liquors);
					const juiceList = Object.keys(item.juices);
					return (
						<div>
							<h2>{item.name}</h2>
							<div style={{ textTransform: "capitalize" }}>
								{liquorList.map((name) => <span>{name} : {item.liquors[name]}   </span>)}
							</div>
							<div>
								{juiceList.map((name) => <span>{name} : {item.juices[name]}   </span>)}
							</div>
							<div>
								Garnish : {item.garnish.join(" , ")}
							</div>
						</div>
					)
				})}</>
		)
	)
}

export default Drinks