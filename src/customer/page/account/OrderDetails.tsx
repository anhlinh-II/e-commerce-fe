import { Box, Button, Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import OrderStepper from "./OrderStepper";
import { Payments } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { useEffect } from "react";
import { fetchOrderById, fetchOrderItemById } from "../../../state/customer/orderSlice";

const OrderDetails = () => {
     const navigate = useNavigate();
     const dispatch = useAppDispatch();
     const { orderId, orderItemId } = useParams();
     const { order } = useAppSelector(store => store)

     useEffect(() => {
          dispatch(fetchOrderById({ orderId: Number(orderId), jwt: localStorage.getItem("jwt") || "" }))
          dispatch(fetchOrderItemById({ orderItemId: Number(orderItemId), jwt: localStorage.getItem("jwt") || "" }))
     }, [])
     return (
          <Box className="space-y-5">
               <section className="flex flex-col gap-5 justify-center items-center">
                    <img className="w-[100px]" src={order.orderItem?.product.images[0]} alt="" />
                    <div className="text-sm space-y-1 text-center">
                         <h1 className="font-bold">{order.orderItem?.product.seller?.businessDetails.businessName}</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione, eveniet quae facilis vitae, temporibus suscipit consectetur fugit voluptatum perspiciatis possimus! Consectetur, velit. Deleniti optio neque, eos beatae officiis saepe?</p>
                         <p><strong>Size: </strong> M</p>
                    </div>
                    <div>
                         <Button onClick={() => navigate(`/reviews/${1}/create`)}>
                              Write Review
                         </Button>
                    </div>
               </section>

               <section className="border p-5">
                    <OrderStepper orderStatus="SHIPPED" />
               </section>
               <div className="border p-5">
                    <h1 className="font-bold pb-3">Delivery Address</h1>
                    <div className="text-sm space-y-2">
                         <div className="flex gap-5 font-medium">
                              <p>{order.currentOrder?.shhippingAdress.name}</p>
                              <Divider flexItem orientation="vertical" />
                              <p>{order.currentOrder?.shhippingAdress.mobile}</p>
                         </div>
                         <p>
                              {order.currentOrder?.shhippingAdress.address},{" "}
                              {order.currentOrder?.shhippingAdress.region}, {" "}
                              {order.currentOrder?.shhippingAdress.city},{" - "}
                              {order.currentOrder?.shhippingAdress.pinCode}
                         </p>
                    </div>
               </div>

               <div className="border space-y-4">
                    <div className="flex justify-between text-sm pt-5 px-5">
                         <div className="space-y-1">
                              <p className="font-bold">Total Item Price</p>
                              <p>You Saved <span className="text-primary-color font-medium text-xs">699.00 $</span> on this item</p>
                         </div>
                         <p className="font-medium">{order.orderItem?.sellingPrice} $</p>
                    </div>
                    <div className="px-5">
                         <div className="bg-blue-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
                              <Payments />
                              <p>Pay On Delivery</p>
                         </div>
                    </div>
                    <Divider />
                    <div className="px-5 pb-5">
                         <p className="text-xs"><strong>Sold by: </strong>{order.orderItem?.product.seller?.businessDetails.businessName}</p>
                    </div>
                    <div className="p-10">
                         <Button
                              disabled={false}
                              color="error"
                              fullWidth
                              sx={{ py: "0.7rem" }}
                              className=""
                              variant="outlined"
                         >
                              {false ? "Order Canceled" : "Cancel Order"}
                         </Button>
                    </div>
               </div>
          </Box>
     )
};

export default OrderDetails;
