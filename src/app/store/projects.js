import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import httpService from "../services/http.service";
import localStorageService from "../services/localStorrage.service";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    entities: [],
    isLoading: false,
  },
  reducers: {
    projectsRequested: (state) => {
      state.isLoading = true;
    },
    projectsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: projectsReducer, actions } = projectsSlice;

const { projectsReceived, projectsRequested } = actions;

export const loadPrevProjects = () => (dispatch) => {
  const items = localStorageService.getItems();
  if (items) {
    dispatch(projectsReceived(items));
  }
};

export const fetchProjects = (query) => async (dispatch) => {
  dispatch(projectsRequested());

  try {
    const { data } = await httpService.get(query);

    dispatch(projectsReceived(data));
    localStorageService.setItems(query, data);
  } catch (error) {}
};

export const getProjectById = (id) => (state) =>
  state.projects.entities?.items.find((item) => item.id === id);

export const getProjects = () => (state) => state.projects.entities;

export default projectsReducer;
