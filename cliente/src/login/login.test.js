import { render, screen } from '@testing-library/react';
import Login from "./login.js";

test("Test", () => {
    //Render
    render(<Login/>)

    //Act
    const Title = screen.getByText("Bienvenido")

    //Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Bienvenido")
});