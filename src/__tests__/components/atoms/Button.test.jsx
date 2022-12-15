import { fireEvent, render, screen } from "@testing-library/react"
import { vi } from "vitest"
import { Button } from "../../../components/atoms"

describe("Button", () => {
  it("should render properly", () => {
    render(<Button text="test button" />)
    expect(screen.getByText("test button")).toBeInTheDocument()
  })

  it("should allow the user to click on the button", () => {
    const onClick = vi.fn()
    render(<Button text="test button" onClick={onClick} />)
    const button = screen.getByText("test button")
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
