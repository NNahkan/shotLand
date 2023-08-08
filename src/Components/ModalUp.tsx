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
				<h1>{name}</h1>
				<div className='modal-flex'>
					<div className='temporaryBox'>image of the drink</div>
					<div className='modal-info'>
						<div>
							<div>
								{liquorsName.map((liquor) =>
									<li>{liquor} : {liquors[liquor]}</li>
								)}
							</div>
							<div>
								{juicesName.map((juice) =>
									<li>{juice} : {juices[juice]}</li>
								)}
							</div>
							<div>
								Garnish : {garnish.join(" , ")}
							</div>
							<div>{description}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalUp
