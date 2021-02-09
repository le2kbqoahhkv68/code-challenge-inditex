import React from "react";
import "./Podcast.scss";
import { Route, Switch, Router } from "react-router-dom";

/**
 * View responsible of displaying podcast detail.
 *
 */
export default class Podcast extends React.Component {
  /**
   * React hook executed after mounting the component.
   *
   * It's responsible for getting podcast information.
   */
  async componentDidMount() {}

  render() {
    return (
      <section className="podcast">
        <article className="podcast__info">
          <img
            className="podcast__img"
            alt="Postcad"
            src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/08/16/15344206335212.jpg"
          />
          <div className="podcast__id">
            <p className="podcast__title">Song exploder</p>
            <p className="podcast__author">by Song exploder</p>
          </div>
          <div className="podcast__summary">
            <p className="podcast__desc-title">Description:</p>
            <p className="podcast__desc">
              A podcast where musicians take apart their songs and piece by
              piece, tell the story of how they were made.
            </p>
          </div>
        </article>
        <article className="podcast__route">
          <Switch>
            <Route
              path={`/podcast/${this.props.match.params.podcastId}/episode`}
              component={() => <p>olé!</p>}
            />
          </Switch>
        </article>
      </section>
    );
  }
}
