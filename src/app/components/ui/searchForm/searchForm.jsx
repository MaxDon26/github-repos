import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import localStorageService from "../../../services/localStorrage.service";
import { fetchProjects } from "../../../store/projects";
import SubmitButton from "../../common/form/submitButton/submitButton";
import TextField from "../../common/form/textField/textField";
import "./searchForm.sass";

const SearchForm = () => {
  const query = localStorageService.getQuery();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!!query) setValue(query);
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProjects(value));
  };

  const isValid = value.length > 0;

  return (
    <div className="search">
      <form className="search__form">
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Начните вводить текст для поиска (не менее трех символов)"
          classes="search__form_input"
        />
        <SubmitButton
          onSubmit={handleSubmit}
          disabled={!isValid}
          classes="search__form_submit"
          icon="bi bi-search"
        />
      </form>
    </div>
  );
};

export default SearchForm;
