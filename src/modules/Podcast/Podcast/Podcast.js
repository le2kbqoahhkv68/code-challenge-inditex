import React from "react";
import "./Podcast.scss";
import { Route, Switch } from "react-router-dom";
import { getTopPodcast } from "../api/apiTopPodcasts";

/**
 * View responsible of displaying podcast detail.
 * It's accesible clicking a podcast from the main page or directly from
 * url. See how *apiTopPodcast* works.
 */
export default class Podcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: null,
    };
  }

  /**
   * React hook executed after mounting the component.
   *
   * It's responsible for getting podcast information.
   */
  async componentDidMount() {
    const {
      match: {
        params: { podcastId },
      },
    } = this.props;

    await getTopPodcast(podcastId).then((podcast) => {
      this.setState({ podcast });
    });
  }

  render() {
    if (!this.state.podcast) {
      return <h2 className="podcast__not-found">Podcast not found</h2>;
    }

    return (
      <section className="podcast">
        <article className="podcast__info">
          <img
            className="podcast__img"
            alt="Podcast"
            src={this.state.podcast.img}
          />
          <div className="podcast__id">
            <p className="podcast__title">{this.state.podcast.title}</p>
            <p className="podcast__author">by {this.state.podcast.author}</p>
          </div>
          <div className="podcast__summary">
            <p className="podcast__desc-title">Description:</p>
            <p className="podcast__desc">{this.state.podcast.summary}</p>
          </div>
        </article>
        <article className="podcast__route">
          {/* <Switch>
            <Route
              exact
              path={`/podcast/${this.props.match.params.podcastId}/episode`}
              component={() => <p>olé!</p>}
            />
          </Switch> */}
        </article>
      </section>
    );
  }
}
