import { render, screen } from "../../utils/testUtils"
import { Data } from "../../pages"

describe("Data", () => {
  it("should render properly", () => {
    render(<Data />)
    expect(screen.getAllByText(/Data/)).toHaveLength(2)
  })

  it("should render requested data", async () => {
    render(<Data />)
    expect(await screen.findByText(/Piso 1/)).toBeInTheDocument()
  })
})
