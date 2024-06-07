//This component is used when showing the info about one single planet.
// IMPLEMENT: click to see next - click to see previous

import { Link } from "react-router-dom";

//array to store all planets route names
const planets = [
  "sun",
  "mercury",
  "venus",
  "earth",
  "moon",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
];

export const PlanetList = () => {
  return (
    <div>
      <h1>Planets</h1>

      {planets.map((planet) => (
        <li key={planet}>
          <Link to={`/planets/${planet}`}>
            {planet.charAt(0).toUpperCase() + planet.slice(1)}
          </Link>
        </li>
      ))}
    </div>
  );
};
