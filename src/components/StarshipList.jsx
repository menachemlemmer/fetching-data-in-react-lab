function StarshipList(props) {
  return (
    <div>
      <h2>Starship List</h2>
      <ul>
        {props.starships.map((starship, index) => (
          <li key={index}>
            <h3>{starship.name}</h3>
            <p>Class: {starship.class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Model: {starship.model}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarshipList;
