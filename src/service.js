const URL = "http://localhost:3000/drinks/";

export const getAllDrinks = ( ) => {
	console.log("anan")
  return fetch(URL)
    .then((response) => response.json()) 
};
