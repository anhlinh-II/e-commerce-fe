import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeCategory, HomeData } from "../../types/homeCategoryType";
import { api } from "../../config/Api";

export const fetchHomePageData = createAsyncThunk<HomeData>(
     'home/fetchHomePageData',
     async (_, {rejectWithValue}) => {
          try {
               const response = await api.get('/home-page')
               console.log("home page >> ", response.data)
               return response.data;
          } catch (error: any) {
               const errorMessage = error.response.data.message || error.message || "failed"
               console.log("error >>" , errorMessage, error)
               return rejectWithValue(errorMessage);
          }
     }
)

export const createHomeCategories = createAsyncThunk<HomeData, HomeCategory[]>(
     'home/createHomeCategories',
     async (homeCategories, {rejectWithValue}) => {
          try {
               const response = await api.get('/home/categories')
               console.log("home categories >> ", response.data)
               return response.data;
          } catch (error: any) {
               const errorMessage = error.response.data.message || error.message || "failed"
               console.log("error >>" , errorMessage, error)
               return rejectWithValue(errorMessage);
          }
     }
)

interface HomeState {
     homePageData: HomeData | null;
     homeCategories: HomeCategory[];
     loading: boolean;
     error: string | null;
}

const initialState: HomeState = {
     homePageData: null,
     homeCategories: [],
     loading: false,
     error: null,
}

const homeSlice = createSlice({
     name: "home",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(createHomeCategories.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(createHomeCategories.fulfilled, (state, action) => {
                    state.loading = false;
                    state.homePageData = action.payload;
               })
               .addCase(createHomeCategories.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || "failed  to create homeCategory";
               })

                            
     }
})

export default homeSlice.reducer;