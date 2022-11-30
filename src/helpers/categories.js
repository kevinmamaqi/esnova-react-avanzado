export const getCities = (houses) =>
  houses.reduce((acc, home) => {
    if (!acc.includes(home.city)) {
      acc.push(home.city)
    }
    return acc
  }, [])

export const getHouseTypes = (houses) =>
  houses.reduce((acc, home) => {
    if (!acc.includes(home.type)) {
      acc.push(home.type)
    }
    return acc
  }, [])
