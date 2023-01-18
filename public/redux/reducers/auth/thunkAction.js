import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import config from "../../../../config/api";
import useAxios from "../../../hooks/UseAxios";

export const signUp = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    console.log('data', data)
    delete data.confirm_password
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/users/signup`,
        method: "post",
        data: data,
      });

      console.log(response);

      if (typeof window !== "undefined") {
        // localStorage.setItem("user", JSON.stringify(authData.data.user));
        // localStorage.setItem("token", authData.data.token);
      }
      return response.data;
    } catch (error) {
      toast.error(error.response.data.meta.error);


      if (axios.isAxiosError(error) && error.response) {
       

        const msg = error.response.data.message[0] 
        toast.error(msg);
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await useAxios({
        url: `${config.API_BASE_URL}/users/login`,
        method: "post",
        data: data,
      });


      const authData = response;

      if (typeof window !== "undefined") {
        console.log(authData.data)
        localStorage.setItem("user", JSON.stringify(authData.data.email));
        localStorage.setItem("token", authData.data.token);
      }
      return response.data.user
    } catch (error) {

      toast.error(error.response.data.meta.error);

      console.log(error.response.data.meta.error)

      if (axios.isAxiosError(error) && error.response) {
        

        const msg = error.response.data.message 
        return thunkAPI.rejectWithValue(msg);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);
