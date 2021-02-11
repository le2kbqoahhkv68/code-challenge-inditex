import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Podcast from "./Podcast";
import getLookupStub from "../api/stubs/getLookup.stub";
import getFeedStub from "../api/stubs/getFeed.stub";
import axios from "axios";
import getFeed from "../api/apiFeed";

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
    await act(async () => {
      render(<Podcast podcast={getFeedStub} />, container);
    });

    expect(container.querySelector(".podcast__img").getAttribute("src")).toBe(
      "https://f.prxu.org/song-exploder/images/f648851c-d36e-4342-8a9f-521df2fc7a62/songexploder-logo.png"
    );

    expect(container.querySelector(".podcast__title").textContent).toBe(
      "Song Exploder"
    );

    expect(container.querySelector(".podcast__author").textContent).toBe(
      "by Hrishikesh Hirway"
    );

    expect(container.querySelector(".podcast__desc").textContent).toBe(
      "Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway."
    );
  });
});
