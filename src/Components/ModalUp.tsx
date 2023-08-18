import React from 'react'
import { drink } from '../model';

interface ModalUpProps {
	item: drink;
	closeModel: React.Dispatch<React.SetStateAction<boolean>>;
	openModel: boolean;
	otherList: string[] | undefined;
	liquorList: string[];
	juiceList: string[];
}

const ModalUp: React.FC<ModalUpProps> = ({ item, closeModel, openModel, liquorList, juiceList, otherList }) => {

	const closeWindow = (e: React.MouseEvent) => {
		e.target.className === "overlay" && closeModel(false)
	}

	const { name, liquors, juices, garnish, description, other = {} } = item;


	return (
		<div className='overlay' onClick={(e) => closeWindow(e)}>
			<div className="modalContainer">
				<span onClick={() => closeModel(false)} className='close-btn'>X</span>
				<h1>{name}</h1>
				<div className='modal-flex'>
					<div className='temporaryBox'>image of the drink</div>
					<div className='modal-info'>
						<div className='modal-ingredients'>
							{liquorList.map((liquor) =>
								<li>{liquors[liquor]} : {liquor} </li>
							)}
							{juiceList.map((juice) =>
								<li>{juices[juice]} : {juice} </li>
							)}
						</div>
						<br />
						<div className="modal-howTo">
							<div>{description}</div>
							{garnish && (
								<div>
									Garnish : {garnish.join(" , ")}
								</div>
							)}
							{otherList && otherList.map((name) =>
								<li>{other[name]} : {name} </li>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalUp
