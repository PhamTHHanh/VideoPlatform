import { createSlice } from "@reduxjs/toolkit";
import { postCourse, postFiles, postFile } from "../actions/course";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    processing: false,
    course: {
      id: "",
      title: "",
      des: "",
      benefit: "",
      image: "",
      amount_practice: "",
      amount_labs: "",
      amount_article: "",
      amount_exer: "",
      amount_resource: "",
      requirements: [],
    },
    content: [],
    // files: [],
  },
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    removeRequirement: (state, action) => {
      state = state.course.requirements.splice(action.payload, 1);
    },
    addReqContent: (state, action) => {
      state.course.requirements[action.payload.index] = action.payload.value;
    },
    clearContent: (state, action) => {
      state.course.requirements[action.payload] = "";
    },
    setCourseContent: (state, action) => {
      state.content[action.payload.index] = action.payload.value;
    },
    // setFileContent: (state, action) => {
    //   state.files[action.payload.index] = action.payload.value;
    //   // state.files = [...state.files, action.payload]
    // },
    removeSection: (state, action) => {
      state = state.content.splice(action.payload, 1);
      // console.log(action.payload)
    },
    addNewSec: (state, action) => {
      state.content = [...state.content, action.payload];
    },
    // addNewSetFile: (state, action) => {
    //   state.files = [...state.files, action.payload];
    // },
    removeLec: (state, action) => {
      state = state.content[action.payload.indexCate].lectures.splice(
        action.payload.indexLec,
        1
      );
    },
    addLectureContent: (state, action) => {
      state.content[action.payload.indexSec].lectures[action.payload.indexLec][
        action.payload.key
      ] = action.payload.value;
      //console.log(state.list[0].lectures)
    },
    // onChangeFile: (state, action) => {
    //   state.files[action.payload.indexSec].lectures[action.payload.indexLec][
    //     action.payload.key
    //   ] = action.payload.value;
    //   // console.log(state.files)
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCourse.pending, (state) => {
        state.processing = true;
      })
      .addCase(postCourse.fulfilled, (state, action) => {
        state.processing = false;
        // state.articles = action.payload;
      })
      .addCase(postCourse.rejected, (state) => {
        state.processing = false;
      })
      .addCase(postFiles.pending, (state) => {
        state.processing = true;
      })
      .addCase(postFiles.fulfilled, (state, action) => {
        state.processing = false;
        // state.articles = action.payload;
      })
      .addCase(postFiles.rejected, (state) => {
        state.processing = false;
      })
      .addCase(postFile.pending, (state) => {
        state.processing = true;
      })
      .addCase(postFile.fulfilled, (state, action) => {
        state.processing = false;
        // state.articles = action.payload;
      })
      .addCase(postFile.rejected, (state) => {
        state.processing = false;
      });;
  },
});
export const {
  setCourse,
  removeRequirement,
  addReqContent,
  clearContent,
  setCourseContent,
  // setFileContent,
  removeSection,
  addNewSec,
  // addNewSetFile,
  removeLec,
  addLectureContent,
  // onChangeFile,
} = courseSlice.actions;
export default courseSlice.reducer;
