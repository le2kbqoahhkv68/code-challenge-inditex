import React from "react";
import "./Result.scss";

/**
 * It renders Result component or null if title or image are not provided
 * within the props.
 *
 * @param {Object} props
 * @param {string} props.title Result title.
 * @param {string} props.description Result description.
 * @param {string} props.author Result author.
 * @returns React component or null.
 */
export function Result(props) {
  if (!props.title || !props.img) {
    return null;
  }

  return (
    <article className="result">
      <img className="result__img" alt={props.title} src={props.img} />
      <div className="result__description">
        <p className="result__title">{props.title}</p>
        <p className="result__author">
          <span>Author: </span>
          <span className="result__author-name">{props.author}</span>
        </p>
      </div>
    </article>
  );
}
