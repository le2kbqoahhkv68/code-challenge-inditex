import React from "react";
import "./Podcasts.scss";
import { Result } from "./components/Result/Result";
import getTopPodcasts from "./api/getTopPodcasts";

/**
 * View responsible to get podcasts and also lets you to filter them.
 */
export default class PodcastsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      topPodcasts: [],
    };
  }

  async componentDidMount() {
    await getTopPodcasts().then((topPodcasts) => {
      this.setState({ isLoaded: true, topPodcasts });
    });
  }

  render() {
    console.log(this.state);

    return (
      <section className="podcasts">
        <header className="podcasts__header">
          <h1 className="podcasts__title">Podcaster</h1>
        </header>
        <ul className="podcasts__results">
          {this.state &&
            this.state.topPodcasts.map((topPodcast) => (
              <li className="podcasts__result">
                <Result
                  title={topPodcast.title}
                  author={topPodcast.author}
                  img={topPodcast.img}
                />
              </li>
            ))}
        </ul>
      </section>
    );
  }
}
