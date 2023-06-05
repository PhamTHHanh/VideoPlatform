import { createSlice } from "@reduxjs/toolkit";
import { postCourse, postFiles } from "../actions/course";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    homeSort:{
        sortby:"title",
        order:"desc",
        limit:4,
        skip:0
    },
    loading: false,
    courses: []
  },

})