import { createAsyncThunk } from "@reduxjs/toolkit";
import { Storage, API } from "aws-amplify";
import { errorGlobal, successGlobal } from "../reducers/notifications";
const api_name = "fcjvideoplatformapi";

