import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from "@mui/icons-material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../state/store";

const NavBar = () => {
     const theme = useTheme();
     const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
     const [selectedCategory, setSelectedCategory] = useState<any>();
     const [showCategorySheet, setShowCategorySheet] = useState<boolean>();
     const navigate = useNavigate();
     const {auth} = useAppSelector(store => store)

     return (
          <>
               <Box className="sticky top-0 left-0 right-0 bg-white opacity-95" sx={{ zIndex: 2 }}>
                    <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
                         <div className="flex items-center">
                              <div className="flex items-center gap-2">
                                   {!isLarge && <IconButton>
                                        <MenuIcon />
                                   </IconButton>}
                                   <h1 onClick={() => navigate('/')} className="logo cursor-pointer font-extrabold text-lg md:text-2xl text-primary-color">Eirei Yeager</h1>
                              </div>
                              <ul className="flex items-center font-medium text-gray-800">
                                   {mainCategory.map((item) =>
                                        <li
                                             onMouseLeave={() => {
                                                  setShowCategorySheet(false)
                                             }}
                                             onMouseEnter={() => {
                                                  setShowCategorySheet(true);
                                                  setSelectedCategory(item.categoryId)
                                             }}
                                             className="mainCategory cursor-pointer hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                                        >
                                             {item.name}
                                        </li>)
                                   }
                              </ul>
                         </div>
                         <div className="flex gap-1 lg:gap-6 items-center">
                              <IconButton>
                                   <SearchIcon />
                              </IconButton>
                              {
                                   auth.isLoggedIn
                                        ? <Button onClick={() => navigate('/account')} className="flex items-center gap-2">
                                             <Avatar sx={{ width: 29, height: 29 }} src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/471817599_1601536043788792_7952900494001433727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=413c3FXbmPMQ7kNvgEYi6IH&_nc_oc=AdgO2z_o_HrZF4yBWGmDcjCwWmt4BDu4HBd8lraA97CY0hbfevIMnyxkbHgjbhtrRC4&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_gid=AbdSO6jtdwOZgJtn2ZzkcYO&oh=00_AYDVpQl0n7sopPi6RB7YfUvA3IR0Opp80dFqYakbfoAziw&oe=67C2878F" />
                                             <h1 className="font-semibold hidden lg:block">{auth.user?.fullName}</h1>
                                        </Button>
                                        : <Button onClick={() => navigate('login')} variant="contained">Login</Button>
                              }
                              <IconButton>
                                   <FavoriteBorder sx={{ fontSize: 29 }} />
                              </IconButton>
                              <IconButton onClick={() => navigate('/cart')}>
                                   <AddShoppingCart className="text-gray-700" sx={{ fontSize: 29 }} />
                              </IconButton>
                              {isLarge && <Button onClick={() => navigate('/become-seller')} startIcon={<Storefront />} variant="outlined">
                                   Become Seller
                              </Button>}
                         </div>
                    </div>
                    {
                         showCategorySheet &&
                         <div
                              onMouseLeave={() => setShowCategorySheet(false)}
                              onMouseEnter={() => setShowCategorySheet(true)}
                              className="categorySheet absolute top-[4.41rem] left-20 right-20 border bg-slate-500">
                              <CategorySheet selectedCategory={selectedCategory} />
                         </div>
                    }
               </Box>
          </>
     )
};

export default NavBar;
