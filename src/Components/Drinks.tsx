import React from 'react'

const data = [
	{
		name: "margarita",
		liquors: {
			tequila: "1.5oz",
			tripleSec: "1oz"
		},
		juices: {
			margaritaMix: "4oz",
			sour: "2oz"
		},
		garnish: ["lime", "lemon"]
	},
	{
		name: "margarita",
		liquors: {
			tequila: "1.5oz",
			tripleSec: "1oz"
		},
		juices: {
			margaritaMix: "4oz",
			sour: "2oz"
		},
		garnish: ["lime", "lemon"]
	},
	{
		name: "margarita",
		liquors: {
			tequila: "1.5oz",
			tripleSec: "1oz"
		},
		juices: {
			margaritaMix: "4oz",
			sour: "2oz"
		},
		garnish: ["lime", "lemon"]
	}
]

const Drinks = () => {
	return (
		<div>
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
			})}

		</div>
	)
}

export default Drinks
