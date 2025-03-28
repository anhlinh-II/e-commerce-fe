import { Divider } from "@mui/material";
import { Cart } from "../../../types/cartType";

const PricingCart = ({data}: {data: Cart | null}) => {
     return (
          <>
               <div className="space-y-3 p-5">
                    <div className="flex justify-between items-center">
                         <span>Subtotal</span>
                         <span>{data?.totalMrpPrice} VND</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span>Discount</span>
                         <span>{data?.discount} VND</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span>Shipping</span>
                         <span>FREE</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span>Platform fee</span>
                         <span>Free</span>
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center text-primary-color">
                         <span>Total</span>
                         <span>{data?.totalSellingPrice} VND</span>
                    </div>
               </div>
          </>
     )
};

export default PricingCart;
