import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../types/cartType";
import { api } from "../../config/Api";
import { stat } from "fs";
import { sumCartItemMrpPrice, sumCartItemSellingPrice } from "../../utils/sumCartItemMrpPrice";
import { applyCoupon } from "./couponSlice";
import { Address } from "../../types/UserType";

const API_URL = "/api/addresses";

export const createAddress = createAsyncThunk(
     "address/createAddress",
     async ({ jwt, request }: { jwt: string; request: any }) => {
         try {
             const response = await api.post(`${API_URL}/add`, request, {
                 headers: {
                     Authorization: `Bearer ${jwt}`,
                 },
             });
             console.log("address created >> ", response.data);
             return response.data;
         } catch (e: any) {
             console.log("error >> ", e.message);
             throw e; // Quan trọng: Nên ném lỗi để Redux biết có lỗi xảy ra
         }
     }
 );
 

export const fetchAddressesByUser = createAsyncThunk(
     "address/fetchAddressesByUser",
     async (jwt: string) => {
          try {
               const response = await api.get(`${API_URL}`, {
                    headers: {
                         Authorization: `Bearer ${jwt}`
                    }
               });
               return response.data;
          } catch (error: any) {
               console.log("error >> ", error.message)
          }
     }
)

interface AddressState {
     addresses: Address[] | null;
     loading: boolean;
     error: string | null;
}

const initialState: AddressState = {
     addresses: [],
     loading: false,
     error: null
}

const addressSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(fetchAddressesByUser.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(fetchAddressesByUser.fulfilled, (state, action: PayloadAction<Address[]>) => {
                    state.addresses = action.payload;
                    state.loading = false;
               })
               .addCase(fetchAddressesByUser.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
               })
               .addCase(createAddress.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(createAddress.fulfilled, (state, action: PayloadAction<Address>) => {
                    if (state.addresses) {
                         state.addresses.push(action.payload);
                    }
                    state.loading = false;
               })
               .addCase(createAddress.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string
               })
     }
})

export default addressSlice.reducer;