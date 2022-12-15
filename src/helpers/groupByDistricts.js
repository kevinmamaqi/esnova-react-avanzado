// eslint-disable-next-line import/prefer-default-export
export const groupByDistricts = (data) => {
  const byDistrict = {}
  data.forEach((home) => {
    if (!byDistrict[home.district]) {
      byDistrict[home.district] = {
        district: home.district,
        numHomes: 0,
      }
    }
    byDistrict[home.district].numHomes += 1
  })
  return Object.values(byDistrict)
}
