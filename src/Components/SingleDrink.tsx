import React from 'react'
import { drink } from '../model';

interface SingleDrinkProps {
	item: drink;
}



const SingleDrink: React.FC<SingleDrinkProps> = ({ item }) => {
	const liquorList = Object.keys(item.liquors);
	const juiceList = Object.keys(item.juices);

	return (
		<div>
			<h2>{item.name} == {item.id}</h2>
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

}

export default SingleDrink
