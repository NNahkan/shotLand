import React, { useState } from 'react'
import { drink } from '../model';
import "./styles.css"
import ModalUp from './ModalUp';

interface SingleDrinkProps {
	item: drink;
}



const SingleDrink: React.FC<SingleDrinkProps> = ({ item }) => {
	const [openModel, setOpenModel] = useState<boolean>(false)
	const juiceList = item.juices && Object.keys(item.juices);
	const otherList = item.other && Object.keys(item.other);
	const liquorList = Object.keys(item.liquors);

	return (
		<>
			<div className='drinkMain' onClick={() => setOpenModel(true)} >
				<h2>{item.name}  </h2>
				<div style={{ textTransform: "capitalize" }}>
					{liquorList.map((name) => <span>{name} : {item.liquors[name]}   </span>)}
				</div>
				<div>
					{item.juices && juiceList.map((name) => <span>{name} : {item.juices[name]}   </span>)}
				</div>
				{item.other && <div>
					{otherList.map((name) => <span>{name} : {item.other[name]}   </span>)}
				</div>}

			</div >
			{openModel && <ModalUp
				key={item.name}
				liquorList={liquorList}
				juiceList={juiceList}
				openModel={openModel}
				otherList={otherList}
				item={item}
				closeModel={setOpenModel} />
			}
		</>
	)

}

export default SingleDrink
