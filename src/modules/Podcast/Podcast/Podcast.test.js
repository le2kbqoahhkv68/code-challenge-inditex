import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Podcast from "./Podcast";
import getLookupStub from "../api/stubs/getLookup.stub";
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

describe("Podcast component test", () => {
  it("renders podcast info correctly", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(getLookupStub));
    axios.get.mockImplementationOnce(() => Promise.resolve(null));

    await act(async () => {
      render(
        <Podcast match={{ params: { podcastId: "788236947" } }} />,
        container
      );
    });

    expect(container.querySelector(".podcast__img").getAttribute("src")).toBe(
      "https://is5-ssl.mzstatic.com/image/thumb/Podcasts114/v4/e0/46/bd/e046bd86-626c-cbc8-2c8c-1cc73d15f282/mza_9056037259982186445.png/170x170bb.png"
    );

    expect(container.querySelector(".podcast__title").textContent).toBe(
      "Song Exploder - Hrishikesh Hirway"
    );

    expect(container.querySelector(".podcast__author").textContent).toBe(
      "by Hrishikesh Hirway"
    );

    expect(container.querySelector(".podcast__desc").textContent).toBe(
      "Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway."
    );
  });

  it("renders not found message", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(getLookupStub));

    await act(async () => {
      render(
        <Podcast match={{ params: { podcastId: "fake123" } }} />,
        container
      );
    });

    expect(container.querySelector(".podcast__not-found").textContent).toBe(
      "Podcast not found"
    );
  });
});
