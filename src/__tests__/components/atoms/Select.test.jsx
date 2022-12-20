import { fireEvent, render, screen } from "@testing-library/react"
import { it, vi } from "vitest"
import { Select } from "../../../components/atoms"

const options = ["option 1", "option 2", "option 3"]

describe("Select", () => {
  it("should render properly", () => {
    render(<Select options={options} />)
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument()
    })
  })

  it("should render properly with a default value", () => {
    render(<Select options={options} defaultValue="default option" />)
    expect(screen.getByText("default option")).toBeInTheDocument()
  })

  it("should allow the user to select an option", () => {
    const onChange = vi.fn()
    render(<Select options={options} onChange={onChange} />)
    const select = screen.getByTestId("selectAtomUI")
    fireEvent.change(select, { target: { value: "option 2" } })
    expect(onChange).toHaveBeenCalled()
  })
})
