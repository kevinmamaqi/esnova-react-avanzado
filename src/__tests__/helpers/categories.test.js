import { getCities, getHouseTypes } from "../../helpers/categories"
import { housesMock } from "../../__mockedData__"

describe("getCities", () => {
  it("should return an array of cities", () => {
    const cities = getCities(housesMock)
    expect(cities).toEqual(["madrid", "barcelona"])
  })

  it("should return an empty array when an empty arra y is passed", () => {
    const cities = getCities([])
    expect(cities).toEqual([])
  })
})

describe("getHouseTypes", () => {
  it("should return an array of cities", () => {
    const houseTypes = getHouseTypes(housesMock)
    expect(houseTypes).toEqual(["garaje", "chalets"])
  })

  it("should return an empty array when an empty arra y is passed", () => {
    const houseTypes = getHouseTypes([])
    expect(houseTypes).toEqual([])
  })
})
