import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Podcasts from "./Podcasts";
import getTopPodcastsStub from "../api/stubs/getTopPodcasts.stub";
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
  it("renders related tags count correctly", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(getTopPodcastsStub));
    let podcastsComponent;

    await act(async () => {
      podcastsComponent = render(<Podcasts />, container);
      expect(container.querySelector(".podcasts__count").textContent).toBe("0");
    });

    expect(container.querySelector(".podcasts__count").textContent).toBe("10");

    podcastsComponent.setState({ filter: "dolly" });
    expect(container.querySelector(".podcasts__count").textContent).toBe("1");

    podcastsComponent.setState({ filter: "ll" });
    expect(container.querySelector(".podcasts__count").textContent).toBe("4");

    podcastsComponent.setState({ filter: "asdf1234" });
    expect(container.querySelector(".podcasts__count").textContent).toBe("0");
  });

  it("renders related tags correctly", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(getTopPodcastsStub));
    let podcastsComponent;

    await act(async () => {
      podcastsComponent = render(<Podcasts />, container);
      expect(container.querySelectorAll(".podcasts__result").length).toBe(0);
    });

    expect(container.querySelectorAll(".podcasts__result").length).toBe(10);

    podcastsComponent.setState({ filter: "dolly" });
    expect(container.querySelectorAll(".podcasts__result").length).toBe(1);

    podcastsComponent.setState({ filter: "ll" });
    expect(container.querySelectorAll(".podcasts__result").length).toBe(4);

    podcastsComponent.setState({ filter: "asdf1234" });
    expect(container.querySelectorAll(".podcasts__result").length).toBe(0);
  });
});
