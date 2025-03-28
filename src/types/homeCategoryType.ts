import { Deal } from "./dealType";

export interface HomeData {
     id: number;
     grid: HomeCategory[];
     shopByCategories: HomeCategory[];
     electricCategory: HomeCategory[];
     deals: Deal[];
     dealCategories: HomeCategory[];
}

export interface HomeCategory {
     id: number;
     categoryId: string;
     section: string;
     name: string;
     image: string;
     parantCategoryId: string;
}