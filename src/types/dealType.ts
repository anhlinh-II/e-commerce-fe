import { HomeCategory } from "./homeCategoryType";

export interface Deal {
     id?: number;
     discount: number;
     category: HomeCategory;
}

export interface DealsState {
     deals: Deal[];
     loading: boolean;
     error: string | null;
     dealCreated: boolean;
     dealUpdated: boolean;
}

export interface ApiResponse {
     message: string;
     status: boolean;
}