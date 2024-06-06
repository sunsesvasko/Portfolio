import { apiSlice } from "./apiSlice";

const PROJECTS_URL = "/api/projects";

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getProjectById:
    getProjects: builder.query({
      query: () => ({
        url: `${PROJECTS_URL}/`,
        method: "GET",
      }),
    }),
    // getBooks:,
    // getBooks:,
    // getBooks:,
  }),
});

export const { useGetProjectsQuery } = projectsApiSlice;
