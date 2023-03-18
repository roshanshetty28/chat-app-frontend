import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type userType = string | null

const user = JSON.parse(localStorage.getItem("user") || "")

export interface authState {
    user: userType,
    isError: Boolean,
    isSuccess: Boolean,
    isLoading: Boolean,
    message: String,
}

const initialState: authState = {
    user: user !== "" ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

interface myData{
    email:String,
    name:String,
}
export const register = createAsyncThunk(
    'auth/register',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", data)
            // return (await response.json()) as myData
        } catch (e: unknown) {
            let message
            if (typeof e === "string") {
                message = e
            } else if (e instanceof Error) {
                message = e.message
            }
            return thunkAPI.rejectWithValue(message)
        }
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state: authState): authState => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(register.fulfilled,(state,{payload})=>{
            state.isLoading=false
            state.isSuccess=true
            // state.user=payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            // state.message=action.payload
        })
    }
})

export default authSlice.reducer