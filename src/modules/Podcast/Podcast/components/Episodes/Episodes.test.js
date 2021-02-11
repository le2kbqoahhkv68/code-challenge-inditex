import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Episodes from "./Episodes";
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

describe("Episodes component test", () => {
  it("renders episodes info correctly", async () => {
    await act(async () => {
      render(<Episodes episodes={getFeedStub.episodes} />, container);
    });

    expect(container.querySelector(".episodes__count").textContent).toBe(
      "Episodes: 10"
    );

    expect(container.querySelectorAll(".episodes__row").length).toBe(10);
  });

  it("renders episode info correctly", async () => {
    await act(async () => {
      render(<Episodes episodes={getFeedStub.episodes} />, container);
    });

    // first item

    expect(container.querySelector('[data-test="link"]').textContent).toBe(
      "title_0"
    );

    expect(container.querySelector('[data-test="date"]').textContent).toBe(
      "2/2/2021"
    );
    expect(container.querySelector('[data-test="duration"]').textContent).toBe(
      "01:00:00"
    );
  });
});
