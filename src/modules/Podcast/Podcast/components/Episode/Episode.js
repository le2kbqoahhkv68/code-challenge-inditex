import React from "react";
import "./Episode.scss";

/**
 * View responsible of displaying episode detail.
 */
export default class Episode extends React.Component {
  render() {
    const { episode } = this.props;

    if (!episode) {
      return <h2 className="episode__not-found">Episode not found</h2>;
    }

    return (
      <section className="episode">
        <h2 className="episode__title">{episode.title}</h2>

        {/* Description */}
        <p
          className="episode__description"
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />

        {/* Player */}
        <article className="episode__player">
          <audio controls className="episode__audio">
            <source src={episode.media.url} type={episode.media.type} />
            Your browser does not support the audio element.
          </audio>
        </article>
      </section>
    );
  }
}
