import React, { Suspense, lazy } from "react";
import "./Podcast.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import EpisodeView from "./components/Episode/Episode";
import getLookup from "../api/apiLookup";
import getFeed from "../api/apiFeed";

const EpisodesView = lazy(() => import("./components/Episodes/Episodes"));

/**
 * View responsible of displaying podcast detail.
 * It's accesible clicking a podcast from the main page or directly from
 * url. See how *apiTopPodcast* works.
 */
export default class Podcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedURL: null,
      podcast: null,
    };
  }

  /**
   * React hook executed after mounting the component.
   *
   * It's responsible for getting podcast information.
   */
  async componentDidMount() {
    /* Specially for testing purposes */
    if (this.props.podcast) {
      this.setState({ podcast: this.props.podcast });
      return;
    }

    const {
      match: {
        params: { podcastId },
      },
    } = this.props;

    await getLookup(podcastId).then((feedUrl) => {
      this.setState({ feedUrl });
    });

    await getFeed(this.state.feedUrl).then((podcast) => {
      this.setState({ podcast });
    });

    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.podcast) return null;

    const episode = this.state.podcast.episodes.find(
      (episode) => episode.id === this.props.match?.params?.episodeId
    );

    return (
      <section className="podcast">
        <article className="podcast__info">
          <a href={`/podcast/${this.props.match.params.podcastId}`}>
            <img
              className="podcast__img"
              alt={this.state.podcast.title}
              src={this.state.podcast.img}
            />
          </a>
          <div className="podcast__id">
            <a href={`/podcast/${this.props.match?.params.podcastId}`}>
              <p className="podcast__title">{this.state.podcast.title}</p>
            </a>
            <p className="podcast__author">by {this.state.podcast.author}</p>
          </div>
          <div className="podcast__summary">
            <p className="podcast__desc-title">Description:</p>
            <p
              className="podcast__desc"
              dangerouslySetInnerHTML={{
                __html: this.state.podcast.description,
              }}
            />
          </div>
        </article>
        <article className="podcast__route">
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route
                  path={`*/episode/:episodeId`}
                  render={(props) => (
                    <EpisodeView {...props} episode={episode} />
                  )}
                />
                <Route
                  path="*"
                  render={(props) => (
                    <EpisodesView
                      {...props}
                      episodes={this.state.podcast.episodes}
                    />
                  )}
                />
              </Switch>
            </Suspense>
          </Router>
        </article>
      </section>
    );
  }
}
