import React from "react";
import { Link } from "react-router-dom";
import "./Episodes.scss";
import { dateToString, timeToString } from "@/utils/dateTime";

/**
 * View responsible of displaying episodes overview.
 */
export default class Episodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: this.props.episodes || [],
    };
  }

  render() {
    if (!this.state.episodes.length) {
      return <h2 className="episodes__not-found">Episodes not found</h2>;
    }

    return (
      <section className="episodes">
        {/** Count */}
        <article className="episodes__count">
          Episodes: {this.state.episodes.length}
        </article>

        {/** Table */}
        <article className="episodes__data">
          <table className="episodes__table">
            <thead>
              <tr>
                <th className="episodes__header">Title</th>
                <th className="episodes__header">Date</th>
                <th className="episodes__header">Duration</th>
              </tr>
            </thead>
            <tbody>
              {this.state.episodes.map((episode) => (
                <tr className="episodes__row" key={episode.id}>
                  <td className="episodes__cell">
                    <a
                      className="episodes__link"
                      href={`${this.props.match.url}/episode/${episode.id}`}
                    >
                      {episode.title}
                    </a>
                  </td>
                  <td className="episodes__cell" width="100px">
                    {dateToString(episode.date)}
                  </td>
                  <td className="episodes__cell" width="100px">
                    {timeToString(episode.duration)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    );
  }
}
