import React from "react";
import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import Cards from "../components/ui/cards/cards";
import SearchForm from "../components/ui/searchForm/searchForm";

const Projects = () => {
  const isLoading = useSelector((state) => state.projects.isLoading);
  return (
    <div>
      <SearchForm />
      {!isLoading ? (
        <Cards />
      ) : (
        <GridLoader
          color="#00A3FF"
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      )}
    </div>
  );
};

export default Projects;
