import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";

const ReviewCard = () => {
     return (
          <div className="flex justify-between">
               <Grid2 container spacing={9}>
                    <Grid2 size={{ xs: 1 }}>
                         <Box>
                              <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}>
                                   Z
                              </Avatar>
                         </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 9 }}>
                         <div className="space-y-2">
                              <div>
                                   <p className="font-semibold text-lg">
                                        Eirei
                                   </p>
                                   <p className="opacity-70">25-03-04</p>
                              </div>
                         </div>
                         <Rating
                              readOnly
                              value={4.5}
                              precision={0.5}
                         />
                         <p>value for money product, great product</p>
                         <div>
                              <img className="w-24 h-24 object-cover" src="https://down-vn.img.susercontent.com/file/sg-11134201-7rd5q-lx28n0i5dg9r64.webp" alt="" />
                         </div>
                    </Grid2>

               </Grid2>
               <div>
                    <IconButton>
                         <Delete sx={{ color: red[700] }} />
                    </IconButton>
               </div>
          </div>
     )
};

export default ReviewCard;
