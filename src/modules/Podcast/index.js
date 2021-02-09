import routes from "./routes";
import React from "react";

/**
 * modules / Podcast
 */
export const podcastRoutes = routes;

export default class PodcastModule extends React.Component {
  render() {
    return (
      <header className="podcasts__header">
        <h1 className="podcasts__title">Podcaster</h1>
      </header>
    );
  }
}
