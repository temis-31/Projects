import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  // test("debe de hacer match con el snapshot ", () => {
  //   const title = "Hello, Im Goku";
  //   const { container } = render(<FirstApp title={title} />);
  //
  //   expect(container).toMatchSnapshot();
  // });
  //
  // test("debe de mostrar el título en un h1", () => {
  //   const title = "Hello, Im Goku";
  //   const { container, getByText, getByTestId } = render(
  //     <FirstApp title={title} />
  //   );
  //
  //   // expect(getByText(title)).toBeTruthy();
  //   // expect(getByTestId("test-title")).toBeTruthy();
  //   expect(getByTestId("test-title").innerHTML).toContain(title);
  //
  //   // const h1 = container.querySelector('h1');
  //   // expect(h1.innerHTML).toContain(title)
  // });

  test("debe de mostrar el subtitulo enviado por props ", () => {
    const title = "Hello, Im Goku";
    const subTitle = "Soy un subtitulo";
    const { container, getAllByText, getByTestId } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle)).toBeTruthy();
  });
});
