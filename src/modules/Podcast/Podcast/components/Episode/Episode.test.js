import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Episode from "./Episode";
import getFeedStub from "../../../api/stubs/getFeed.stub";

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

describe("Episode component test", () => {
  it("renders episodes info correctly", async () => {
    await act(async () => {
      render(<Episode episode={getFeedStub.episodes[0]} />, container);
    });

    expect(container.querySelector(".episode__title").textContent).toBe(
      "title_0"
    );

    expect(container.querySelector(".episode__description").textContent).toBe(
      "description_0"
    );

    expect(
      container.querySelector(".episode__audio source").getAttribute("src")
    ).toBe("http://url_0");

    expect(
      container.querySelector(".episode__audio source").getAttribute("type")
    ).toBe("type_0");
  });
});
