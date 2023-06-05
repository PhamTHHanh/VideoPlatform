import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { Storage, API } from "aws-amplify";
import { errorGlobal, successGlobal } from "../reducers/notifications";
const api_name = "fcjvideoplatformapi";

// export const postCourse = createAsyncThunk(
//   "course/postCourse",
//   async (data, { dispatch, getState }) => {
//     try {
//       const category = await axios.post(`${URL_SERV}/course`, data);

//       return category;
//     } catch (error) {
//       dispatch(errorGlobal(error.response.data.message))
//       throw error;
//     }
//   }
// );

export const postCourse = createAsyncThunk(
  "course/postCourse",
  async (data, { dispatch, getState }) => {
    try {
      await API.put(api_name, "/course", { body: data });
      dispatch(successGlobal("Course updated !!"));
      return data;
    } catch (error) {
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);

export const postFiles = createAsyncThunk(
  "course/postFiles",
  async (data, { dispatch, getState }) => {
    try {
      let i, j;
      for (i = 0; i < data.length; i++) {
        // progressBar[0] = progressBarFactory(files[i]);
        for (j = 0; j < data[i].lectures.length; j++) {
          const setFiles = data[i].lectures[j];
          console.log(setFiles.video);
          if (setFiles.video) {
            await Storage.put(setFiles.video.name, setFiles.video, {
              level: "public",
            });
            // await Storage.put(setFiles.video.name, setFiles.video)
          }

          if (setFiles.resource) {
            await Storage.put(setFiles.resource.name, setFiles.video, {
              // progressCallback: progressBar[0],
              level: "public",
            });
          }

          if (setFiles.quiz) {
            await Storage.put(setFiles.quiz.name, setFiles.video, {
              level: "public",
            });
          }
        }
      }
      dispatch(successGlobal("Course updated !!"));
    } catch (error) {
      console.log(error);
      dispatch(errorGlobal(error.response.data.message));
      throw error;
    }
  }
);
