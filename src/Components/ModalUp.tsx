import React from 'react'
import { drink } from '../model';

interface ModalUpProps {
	item: drink;
	closeModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalUp: React.FC<ModalUpProps> = ({ item, closeModel }) => {

	const closeWindow = (e: React.MouseEvent) => {
		e.target.className === "overlay" && closeModel(false)
	}

	const { name, liquors, juices, garnish, description } = item;
	const liquorsName = Object.keys(liquors)
	const juicesName = Object.keys(juices)
	return (
		<div className='overlay' onClick={(e) => closeWindow(e)}>
			<div className="modalContainer">
			<span onClick={() => closeModel(false)} className='close-btn'>X</span>
				<h1>{name}</h1>
				<div className='modal-flex'>
					<div className='temporaryBox'>image of the drink</div>
					<div className='modal-info'>
						<div className='modal-ingredients'>
							{liquorsName.map((liquor) =>
								<li>{liquors[liquor]} : {liquor} </li>
							)}
							{juicesName.map((juice) =>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalUp
