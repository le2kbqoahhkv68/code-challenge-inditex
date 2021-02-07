import React from "react";
import "./Podcasts.scss";
import { Result } from "./components/Result/Result";
import getTopPodcasts from "./api/getTopPodcasts";
import axios from "axios";

/**
 * View responsible to get podcasts and also lets you to filter them.
 */
export default class PodcastsView extends React.Component {
  constructor(props) {
    super(props);
    this.isLoaded = false;
    this.topPodcasts = [];
  }

  async componentDidMount() {
    await getTopPodcasts().then((topPodcasts) => {
      this.setState({ isLoaded: true });
      this.setState({ topPodcasts: topPodcasts });
    });
  }

  render() {
    return (
      <section className="podcasts">
        <header className="podcasts__header">
          <h1 className="podcasts__title">Podcaster</h1>
        </header>
        <ul className="podcasts__results">
          {this.state &&
            this.state.topPodcasts &&
            this.state.topPodcasts.map((topPodcast) => (
              <div>{topPodcast.title}</div>
            ))}
        </ul>
      </section>
    );
  }
}
