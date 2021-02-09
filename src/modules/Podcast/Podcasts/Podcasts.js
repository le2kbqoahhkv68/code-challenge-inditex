import React from "react";
import "./Podcasts.scss";
import { Result } from "./components/Result/Result";
import { getTopPodcasts } from "../api/apiTopPodcasts";
import { Link, BrowserRouter as Router } from "react-router-dom";

/**
 * View responsible of displaying a list of podcasts, top 100 by default, and filter
 * them with a search box by title and author.
 *
 * @property {Array} topPodcasts Array of topPodcasts objects
 * @property {string} topPodcasts[].id Podcast id.
 * @property {string} topPodcasts[].title Podcast title.
 * @property {string} topPodcasts[].author Podcast author.
 * @property {string} topPodcasts[].img Podcast img url.
 * @property {string} topPodcasts[].summary Podcast summary.
 * @property {string} filter Input filter value.
 */
export default class PodcastsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topPodcasts: [],
      filter: "",
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  /**
   * It sets filter local state with input value.
   *
   * @param {Object} event
   * @param {string} event.target.value Input value.
   */
  handleFilterChange({ target: { value: filter } }) {
    this.setState({ filter });
  }

  /**
   * Returns true if the provided podcast complies with the filters functions
   * below.
   *
   * @param {Object} podcast Podcast object.
   * @param {string} podcast.title Podcast title.
   * @param {string} podcast.author Podcast author.
   */
  filterPodcast(podcast) {
    return this.filterString(this.state.filter, podcast.title, podcast.author);
  }

  /**
   * Filters by string. Returns true if the provided filter string is included
   * in the title or in the author.
   *
   * @param {string} filter String filter.
   * @param {string} title Podcast title.
   * @param {string} author Author title.
   */
  filterString(filter, title, author) {
    const filterLowerCase = filter.toLowerCase();
    const titleLowerCase = title.toLowerCase();
    const authorLowerCase = author.toLowerCase();

    return (
      titleLowerCase.includes(filterLowerCase) ||
      authorLowerCase.includes(filterLowerCase)
    );
  }

  /**
   * React hook executed after mounting the component.
   *
   * It's responsible for filling the state podcasts list with the ones obtained
   * from getTopPodcasts request.
   */
  async componentDidMount() {
    await getTopPodcasts().then((topPodcasts) => {
      this.setState({ topPodcasts });
    });
  }

  render() {
    const filteredPodcasts = this.state.topPodcasts.filter(
      this.filterPodcast.bind(this)
    );

    return (
      <section className="podcasts">
        {/** Filter */}
        <article className="podcasts__filter">
          <span className="podcasts__count">{filteredPodcasts.length}</span>
          <input
            type="text"
            onChange={this.handleFilterChange}
            value={this.state.filter}
            className="podcasts__search-box"
            placeholder="Filter podcasts..."
          ></input>
        </article>

        {/** Results */}
        <ul className="podcasts__results">
          {filteredPodcasts.map((topPodcast) => (
            <li className="podcasts__result" key={topPodcast.id}>
              <a href={`/podcast/${topPodcast.id}`}>
                <Result
                  title={topPodcast.title}
                  author={topPodcast.author}
                  img={topPodcast.img}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
