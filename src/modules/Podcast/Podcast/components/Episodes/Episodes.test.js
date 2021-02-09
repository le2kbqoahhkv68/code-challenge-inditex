import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Episodes from "./Episodes";
import getLookupStub from "../../../api/stubs/getLookup.stub";
import axios from "axios";

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

jest.mock("axios");

describe("Episodes component test", () => {
  it("renders count info correctly", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(getLookupStub));

    await act(async () => {
      render(<Episodes podcastId={"788236947"} />, container);
    });

    expect(container.querySelector(".episodes__count").textContent).toBe(
      "Episodes: 1"
    );

    expect(container.querySelectorAll(".episodes__row").length).toBe(1);

    expect(container.querySelectorAll(".episodes__cell")[0].textContent).toBe(
      "Song Exploder"
    );

    expect(container.querySelectorAll(".episodes__cell")[1].textContent).toBe(
      "3/1/2021"
    );

    expect(container.querySelectorAll(".episodes__cell")[2].textContent).toBe(
      "12:32"
    );
  });

  it("renders episodes not found", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { resultCount: 0, results: [] } })
    );

    await act(async () => {
      render(<Episodes podcastId={"788236947"} />, container);
    });

    expect(container.querySelector(".episodes__not-found").textContent).toBe(
      "Episodes not found"
    );
  });
});
