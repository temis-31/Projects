import CounterApp from "../src/CounterApp";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Pruebas en <CounterApp/>", () => {
  const value = 10;

  test("debería hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial 100 <CounterApp value={100}", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();

    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain('100');
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe de funcionar el botón de reset", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByRole("button", { name: 'btn-rst' }).innerHTML).toBeTruthy();

  });
});
