import React from "react";
import "./Episodes.scss";
import getLookup from "../../../api/apiLookup";
import { dateToString } from "@/utils/date";

/**
 * View responsible of displaying episodes overview.
 */
export default class Episodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      episodes: [],
    };
  }

  /**
   * React hook executed after mounting the component.
   *
   * It's responsible for getting podcast information.
   */
  async componentDidMount() {
    await getLookup(this.props.podcastId).then(({ count, episodes }) => {
      this.setState({ count, episodes });
    });
  }

  render() {
    if (!this.props.podcastId || !this.state.episodes.length) {
      return <h2 className="episodes__not-found">Episodes not found</h2>;
    }

    return (
      <section className="episodes">
        {/** Count */}
        <article className="episodes__count">
          Episodes: {this.state.count}
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
                  <td className="episodes__cell" width="60%">
                    <a className="episodes__link" href="/">
                      {episode.title}
                    </a>
                  </td>
                  <td className="episodes__cell">
                    {dateToString(episode.date)}
                  </td>
                  <td className="episodes__cell">{episode.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    );
  }
}
