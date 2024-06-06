import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Proxy is already set to the API's address so there's no need to set a base URL
const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Projects"],
  endpoints: (builder) => ({}),
});
