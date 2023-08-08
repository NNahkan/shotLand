import React, { useState } from 'react'
import { drink } from '../model';
import "./styles.css"
import ModalUp from './ModalUp';

interface SingleDrinkProps {
	item: drink;
}



const SingleDrink: React.FC<SingleDrinkProps> = ({ item }) => {
	const [openModel, setOpenModel] = useState<boolean>(false)
	const liquorList = Object.keys(item.liquors);
	const juiceList = Object.keys(item.juices);

	return (
		<>
			<div className='drinkMain' onClick={() => setOpenModel(true)} >
				<h2>{item.name}  </h2>
				<div style={{ textTransform: "capitalize" }}>
					{liquorList.map((name) => <span>{name} : {item.liquors[name]}   </span>)}
				</div>
				<div>
					{juiceList.map((name) => <span>{name} : {item.juices[name]}   </span>)}
				</div>

			</div >
			{openModel && <ModalUp item={item} closeModel={setOpenModel} />
			}
		</>
	)

}

export default SingleDrink
