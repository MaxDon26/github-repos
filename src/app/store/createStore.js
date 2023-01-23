import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects";

export function createStore() {
  return configureStore({
    reducer: { projects: projectsReducer },
  });
}
