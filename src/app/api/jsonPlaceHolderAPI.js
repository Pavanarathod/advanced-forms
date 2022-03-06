import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jsonPlaceHolderAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3006",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => {
        return {
          url: "/posts",
          method: "GET",
        };
      },
      providesTags: ["Post"],
    }),
    createNewPost: builder.mutation({
      query: (data) => {
        return {
          url: "/posts",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetAllPostsQuery, useCreateNewPostMutation } =
  jsonPlaceHolderAPI;
export default jsonPlaceHolderAPI;
