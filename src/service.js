const URL = "http://localhost:3000/drinks/";

export const getAllDrinks = () => {
  return fetch(URL).then((response) => response.json());
};
