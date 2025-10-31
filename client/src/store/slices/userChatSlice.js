import { axiosInstance } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("cha/getUsers", async () => {
    try {
        const response = await axiosInstance.get("/message/users");
        return response.data;
    } catch (error) {
        console.log("error in fetching users", error);
    }
})

export const getMessages = createAsyncThunk("chat/getMessages", async (userId) => {
    try {
        const response = await axiosInstance.get(`/message/${userId}`);
        return response.data;
    } catch (error) {
        console.log("error in fetching messages", error);
    }
})

const initialState = {
    users: [],
    messages: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    },
    extraReducers: (builder) => {
        //user fetch
        builder.addCase(getUsers.pending, (state) => {
            state.isUsersLoading = true;
        }),
            builder.addCase(getUsers.fulfilled, (state, action) => {
                state.isUsersLoading = false;
                state.users = action.payload;
            }),
            builder.addCase(getUsers.rejected, (state, action) => {
                state.isUsersLoading = false;
            })
        //messages fetch
        builder.addCase(getMessages.pending, (state) => {
            state.isMessagesLoading = true;
        }),
            builder.addCase(getMessages.fulfilled, (state, action) => {
                state.isMessagesLoading = false;
                state.messages = action.payload;
                console.log("fetched messages: ", state.messages);
            }),
            builder.addCase(getMessages.rejected, (state, action) => {
                state.isMessagesLoading = false;
            })

    }
})

export const { setSelectedUser } = chatSlice.actions;
export default chatSlice.reducer;

