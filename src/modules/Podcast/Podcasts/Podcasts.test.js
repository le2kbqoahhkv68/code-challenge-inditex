import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Podcasts from "./Podcasts";
import getTopPodcastsStub from "./api/getTopPodcasts.stub";
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

describe("Podcasts component test", () => {
  it("renders podcasts count correctly", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(getTopPodcastsStub));

    await act(async () => {
      render(<Podcasts />, container);
      expect(container.querySelector(".podcasts__count").textContent).toBe("0");
    });

    expect(container.querySelector(".podcasts__count").textContent).toBe("10");
  });
});
