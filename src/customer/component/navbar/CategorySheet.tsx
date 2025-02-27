import { Box } from "@mui/material";
import { electronicsLevelThree } from "../../../data/category/levelThree/electronicsLevelThree";
import { furnitureLevelThree } from "../../../data/category/levelThree/furnitureLevelThree";
import { menLevelThree } from "../../../data/category/levelThree/menLevelThree";
import { womenLevelThree } from "../../../data/category/levelThree/womenLevelThree";
import { electronicsLevelTwo } from "../../../data/category/levelTwo/electronicsLevelTwo";
import { furnitureLevelTwo } from "../../../data/category/levelTwo/furnitureLevelTwo";
import { menLevelTwo } from "../../../data/category/levelTwo/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/levelTwo/womenLevelTwo";

const categoryTwo: {[key:string]:any[]} = {
     men: menLevelTwo,
     women: womenLevelTwo,
     electronics: electronicsLevelTwo,
     home_furniture: furnitureLevelTwo
}

const categoryThree: {[key:string]:any[]} = {
     men: menLevelThree,
     women: womenLevelThree,
     electronics: electronicsLevelThree,
     home_furniture: furnitureLevelThree
}

const CategorySheet = ({selectedCategory, setShowSheet}: any) => {
     const childCategory = (category: any, parentCategoryId: any) => {
          return category.filter((child: any) => child.parentCategoryId === parentCategoryId);
     }

     return (
          <Box sx={{ zIndex: 2 }} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
               <div className="flex text-sm flex-wrap">
                    {
                         categoryTwo[selectedCategory]?.map((item, index) =>
                              <div className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                                   <p className="text-primary-color mb-5 font-semibold">{item.name}</p>
                                   <ul className="space-y-3">
                                        {childCategory(categoryThree[selectedCategory], item.categoryId).map((item: any, index: any) =>
                                             <div>
                                                  <li className="hover:text-primary-color cursor-pointer">
                                                       {item.name}
                                                  </li>
                                             </div>
                                        )}

                                   </ul>
                              </div>
                         )
                    }
               </div>

          </Box>
     )
};

export default CategorySheet;
