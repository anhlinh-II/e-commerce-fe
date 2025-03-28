import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../state/store";
import { useEffect } from "react";
import { paymentSuccess } from "../../state/customer/orderSlice";
import { clearCart } from "../../state/customer/cartSlice";

const PaymentSucess = () => {
     const navigate = useNavigate();
     const dispatch = useAppDispatch();
     const location = useLocation();

     

     useEffect(() => {
          dispatch(clearCart()); 
      }, [dispatch]);

     return (
          <div className="min-h-[90vh] flex justify-center items-center">
               <div className="bg-primary-color text-white p-8 w-[90%] lg:w-[25%] border rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center">
                    <h1 className="text-3xl font-semibold">
                         Congratulation!
                    </h1>
                    <h1 className="text-2xl font-semibold">your order get success</h1>
                    <div>
                         <Button color="secondary" variant="contained" onClick={() => navigate("/")}>Shopping More</Button>
                    </div>
               </div>
          </div>
     )
};

export default PaymentSucess;
