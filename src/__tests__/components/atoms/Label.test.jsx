import { render, screen } from "@testing-library/react"
import { Label } from "../../../components/atoms"

describe("Label", () => {
  it("should render properly", () => {
    render(<Label text="test label" />)
    expect(screen.getByText("test label")).toBeInTheDocument()
  })

  it("should render properly with isHidden", () => {
    render(<Label text="test label" isHidden />)

    const label = screen.getByText("test label")
    expect(label).toHaveStyle("position: absolute")
    expect(label).toHaveStyle("clip: rect(0 0 0 0)")
    expect(label).toHaveStyle("clip-path: inset(50%)")
    expect(label).toHaveStyle("width: 1px")
    expect(label).toHaveStyle("height: 1px")
    expect(label).toHaveStyle("margin: -1px")
    expect(label).toHaveStyle("overflow: hidden")
    expect(label).toHaveStyle("padding: 0")
    expect(label).toHaveStyle("border: 0")
  })

  it("should render properly with isHidden and custom styles", () => {
    render(<Label text="test label" isHidden style={{ color: "red" }} />)
    const label = screen.getByText("test label")
    expect(label).toHaveStyle("color: red")
  })
})
