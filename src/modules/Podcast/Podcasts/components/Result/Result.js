import React from "react";
import "./Result.scss";

export function Result(props) {
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
