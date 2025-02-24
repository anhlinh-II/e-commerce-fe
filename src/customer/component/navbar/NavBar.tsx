import { Box, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = () => {
     return (
          <div>
               <Box>
                    <div>
                         <div>
                              <div>
                                   <IconButton>
                                        <MenuIcon />
                                   </IconButton>
                                   <h1 className="logo cursor-pointer text-lg md:text-2xl text-sky-500">Eirei Yeager</h1>
                              </div>
                         </div>
                    </div>
               </Box>
          </div>
     )
};

export default NavBar;
