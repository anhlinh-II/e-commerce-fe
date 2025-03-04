import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";

const CartItem = () => {
     const handleUpdateQuantity = () => {
          // update cart item quantity
     }
     return (
          <div className="border rounded-md relative">
               <div className="p-5 flex gap-3">
                    <img className="w-[90px] rounded-md" src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq4sf0sg0d2v26.webp" alt="" />
                    <div className="space-y-2">
                         <h1 className=" font-semibold text-lg">Eirei Clothing</h1>
                         <p className="text-gray-500 font-medium text-sm">Blue Shirt
                              Blue Shirt For Cute Girl
                              <p className="text-gray-400 text-xs"><strong>Sold by: </strong>Natural Lifestyle Products Private Limited</p>
                              <p className="text-sm">7 days replacement available</p>
                              <p className="text-sm text-gray-500"><strong>quantity</strong> 5</p>
                         </p>
                    </div>
               </div>
               <Divider />
               <div className="flex justify-between items-center">
                    <div className="px-5 py-2 flex justify-between items-center">
                         <div className="flex items-center justify-between gap-2 w-[140px]">
                              <Button onClick={handleUpdateQuantity} disabled={true}>
                                   <Remove />
                              </Button>
                              <span>{5}</span>
                              <Button onClick={handleUpdateQuantity}>
                                   <Add />
                              </Button>
                         </div>
                    </div>
                    <div className="pr-5">
                         <p className="text-gray-700 font-medium">799$</p>
                    </div>
               </div>
               <div className="absolute top-1 right-1">
                    <IconButton color="primary">
                         <Close />
                    </IconButton>
               </div>
          </div>
     )
};

export default CartItem;
