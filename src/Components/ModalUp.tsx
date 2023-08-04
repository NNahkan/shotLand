import React from 'react'

const ModalUp = ({ name, closeModel }) => {

	const closeWindow = (e: React.MouseEvent) => {
		console.log(e.target.className)
	}
	return (
		<div className='overlay' onClick={(e) => closeWindow(e)}>
			<div className="modalContainer">
				{name}
			</div>
		</div>
	)
}

export default ModalUp
