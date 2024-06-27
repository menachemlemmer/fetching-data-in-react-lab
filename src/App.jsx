import { useState, useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import * as starshipService from "./services/starshipService";

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const shipIndex = async () => {
      const data = await starshipService.index();

      const shipData = data.map((ship) => {
        return {
          name: ship.name,
          class: ship.starship_class,
          manufacturer: ship.manufacturer,
          model: ship.model,
        };
      });
      setStarships(shipData);
    };
    shipIndex();
  }, []);

  const handleSearch = async (term) => {
    const data = await starshipService.search(term);

    const shipData = data.map((ship) => {
      return {
        name: ship.name,
        class: ship.starship_class,
        manufacturer: ship.manufacturer,
        model: ship.model,
      };
    });
    setStarships(shipData);
  };

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch handleSearch={handleSearch} />
      <StarshipList starships={starships} />
    </>
  );
};

export default App;
