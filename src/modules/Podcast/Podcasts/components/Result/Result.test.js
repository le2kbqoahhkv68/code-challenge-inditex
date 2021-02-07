import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import { Result } from "./Result";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders component according to the properties passed", () => {
  const fakeTitle = "Wonderwall";
  const fakeAuthor = "Oasis";
  const fakeImg = "fake-img.png";

  act(() => {
    render(
      <Result title={fakeTitle} author={fakeAuthor} img={fakeImg} />,
      container
    );
  });

  expect(container.querySelector(".result__title").textContent).toBe(fakeTitle);
  expect(container.querySelector(".result__author-name").textContent).toBe(
    fakeAuthor
  );
  expect(container.querySelector(".result__img").getAttribute("alt")).toBe(
    fakeTitle
  );
  expect(container.querySelector(".result__img").getAttribute("src")).toBe(
    fakeImg
  );
});

it("doesn't render the component if title or img are not provided", () => {
  const fakeTitle = "Wonderwall";
  const fakeImg = "fake-img.png";

  act(() => {
    render(<Result title={fakeTitle} />, container);
  });

  expect(container.querySelector(".result")).toBe(null);

  act(() => {
    render(<Result img={fakeImg} />, container);
  });

  expect(container.querySelector(".result")).toBe(null);
});
