import { Divider } from "@mui/material";

const PricingCart = () => {
     return (
          <>
               <div className="space-y-3 p-5">
                    <div className="flex justify-between items-center">
                         <span>Subtotal</span>
                         <span>899$</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span>Discount</span>
                         <span>59$</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span>Shipping</span>
                         <span>9$</span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span>Platform fee</span>
                         <span>Free</span>
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center text-primary-color">
                         <span>Total</span>
                         <span>799$</span>
                    </div>
               </div>
          </>
     )
};

export default PricingCart;
