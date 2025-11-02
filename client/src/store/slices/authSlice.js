import { axiosInstance } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


//api to check authentication
export const checkAuth = createAsyncThunk("user/checkAuth", async () => {
    try {
        const response = await axiosInstance.get("/auth/check");
        return response.data;
    } catch (error) {
        console.log("Error in checkAuth", error);
    }
})

//api to sign up user
export const signUpUser = createAsyncThunk("user/signUp", async (data) => {
    try {
        const response = await axiosInstance.post("/auth/signup", data);
        toast.success("Account Created Successfully");
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message);
        console.log("Error in sign up", error);
    }
})

//api to login user
export const loginUser = createAsyncThunk("user/login", async (data) => {
    try {
        const response = await axiosInstance.post("/auth/login", data);
        toast.success("Logged in Successfully");
        return response.data
    } catch (error) {
        toast.error(error.response?.data?.message);
        console.log("Error in login", error);
    }
})

//api to logout
export const logoutUser = createAsyncThunk("user/logout", async () => {
    try {
        const response = await axiosInstance.get("/auth/logout");
        toast.success(response.data.message);
        return response.data;
    } catch (error) {

    }
})

//api to update profile
export const updateProfile = createAsyncThunk("user/updateProfile", async (data) => {
    try {
        const response = await axiosInstance.put("/auth/update-profile", data);
        toast.success("Profile Updated Successfully");
        return response.data;
    } catch (error) {

    }
})



const initialState = {
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: []
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(checkAuth.pending, (state, action) => {
            state.isCheckingAuth = true;
        }),
            builder.addCase(checkAuth.fulfilled, (state, action) => {
                state.isCheckingAuth = false;
                state.authUser = action.payload;
            }),
            builder.addCase(checkAuth.rejected, (state, action) => {
                state.isCheckingAuth = false;
                state.authUser = null;
            })

        //sign up 
        builder.addCase(signUpUser.pending, (state, action) => {
            state.isSigningUp = true;
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.isSigningUp = false;
            //state.authUser = action.payload;
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.isSigningUp = false;
            state.authUser = null;
        })
        //login
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoggingIn = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoggingIn = false;
            state.authUser = action.payload;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoggingIn = false;
            state.authUser = null;
        })
        //logout
        builder.addCase(logoutUser.pending, (state, action) => {
            // add state to show loading spinner if needed
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.authUser = null;
        })
        //update profile
        //TODO - update profile logic here

    }
})

export default authSlice.reducer;
