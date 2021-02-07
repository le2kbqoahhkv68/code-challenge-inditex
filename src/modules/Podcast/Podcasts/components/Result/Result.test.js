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

it("renders component according to its properties", () => {
  const fakeTitle = "Wonderwall";
  const fakeAuthor = "Oasis";

  act(() => {
    render(<Result title={fakeTitle} author={fakeAuthor} />, container);
  });

  expect(container.querySelector(".result__title").textContent).toBe(fakeTitle);
  expect(container.querySelector(".result__author-name").textContent).toBe(
    fakeAuthor
  );
  expect(container.querySelector(".result__img").getAttribute("alt")).toBe(
    fakeTitle
  );
});
