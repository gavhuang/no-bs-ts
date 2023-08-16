import houses from './houses.json';

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(
  houses: House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  return (filter ? houses.filter(filter) : houses).map((house) => {
    return {
      id: Math.random(),
      ...house,
    };
  });
}

console.log(findHouses(houses, ({ name }) => name === 'Atreides'));

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));
