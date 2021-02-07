import React from "react";
import "./Podcasts.scss";
import { Result } from "./components/Result/Result";

/**
 * View responsible to get podcasts and also lets you to filter them.
 */
export default class PodcastsView extends React.Component {
  render() {
    return (
      <section className="podcasts">
        <header className="podcasts__header">
          <h1 className="podcasts__title">Podcaster</h1>
        </header>
        <ul className="podcasts__results">
          <li className="podcasts__result">
            <Result />
          </li>
          <li className="podcasts__result">
            <Result />
          </li>
          <li className="podcasts__result">
            <Result />
          </li>
          <li className="podcasts__result">
            <Result />
          </li>
          <li className="podcasts__result">
            <Result />
          </li>
          <li className="podcasts__result">
            <Result />
          </li>
          <li className="podcasts__result">
            <Result />
          </li>
          <li className="podcasts__result">
            <Result />
          </li>
        </ul>
      </section>
    );
  }
}
