const byType = (house, type) => {
  if (!type) return true
  return house.type.toLowerCase() === type.toLowerCase()
}

const byCity = (house, city) => {
  if (!city) return true
  return house.city.toLowerCase() === city.toLowerCase()
}

// eslint-disable-next-line import/prefer-default-export
export const filterHouses = (house, city, type) =>
  [byCity(house, city), byType(house, type)].every(Boolean)
