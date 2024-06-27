const BASE_URL = "https://swapi.dev/api/starships/";

const index = async () => {
  try {
    const data = await fetch(BASE_URL);
    const shipData = await data.json();
    return shipData.results;
  } catch (error) {
    console.log(error);
  }
};

export { index };
