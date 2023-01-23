import React from "react";
import { useSelector } from "react-redux";
import localStorageService from "../../../../services/localStorrage.service";
import { getProjectById } from "../../../../store/projects";
import CommentForm from "../../../ui/commentForm/commentForm";
import "./card.sass";

const Card = ({ id }) => {
  const project = useSelector(getProjectById(id));
  const { owner } = project;

  const addComment = (project, value) => {
    localStorageService.addComment(project, value);
  };

  const relocate = (e) => {
    if (!e.target.closest(".comment")) {
      window.location.href = project.html_url;
    }
  };

  return (
    <div className="card cards__item" role="button" onClick={relocate}>
      <h2 className="card__title">{project.name}</h2>
      <div className="card__author">
        <img src={owner.avatar_url} alt="" className="card__author_img" />
        <h3 className="card__author_name">{owner.login}</h3>
      </div>
      <div className="card__statistics">
        <div className="card__statistic_stars">
          <i className="bi bi-star-fill"></i>
          <span className="px-2">{project.watchers}</span>
        </div>
        <div className="card__statistic_watchers">
          <i className="bi bi-eye-fill"></i>
          <span className="px-2">{project.forks_count}</span>
        </div>
      </div>
      <CommentForm onSubmit={(value) => addComment(project, value)} />
    </div>
  );
};

export default Card;
