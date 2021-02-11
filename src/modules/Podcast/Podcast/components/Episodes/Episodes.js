import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./Episodes.scss";
import { dateToString, timeToString } from "@/utils/dateTime";

/**
 * View responsible of displaying episodes overview.
 */
export default class Episodes extends React.Component {
  render() {
    const { episodes } = this.props;

    if (!episodes) return null;

    return (
      <section className="episodes">
        {/** Count */}
        <article className="episodes__count">
          Episodes: {episodes.length}
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
              {episodes.map((episode) => (
                <tr className="episodes__row" key={episode.id}>
                  <td className="episodes__cell">
                    <a
                      data-test="link"
                      className="episodes__link"
                      href={`${this.props.match?.url}/episode/${episode.id}`}
                    >
                      {episode.title}
                    </a>
                  </td>
                  <td data-test="date" className="episodes__cell" width="100px">
                    {dateToString(episode.date)}
                  </td>
                  <td
                    data-test="duration"
                    className="episodes__cell"
                    width="100px"
                  >
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
