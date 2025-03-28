import { Box, Button, FormControlLabel, imageListClasses, Modal, Radio, RadioGroup, Typography } from "@mui/material";
import AddressCart from "./AddressCard";
import React, { use, useEffect } from "react";
import AddressForm from "./AddressForm";
import PricingCart from "../cart/PricingCart";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { stat } from "fs";
import { fetchAddressesByUser } from "../../../state/customer/addressSlice";
import { api } from "../../../config/Api";
import { createOrder } from "../../../state/customer/orderSlice";
import { Address } from "../../../types/UserType";

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 600,
     bgcolor: 'background.paper',
     boxShadow: 24,
     p: 4,
};

const paymentGatewayList = [
     {
          value: "vnpay",
          image: "https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg",
          label: ""
     },
     {
          value: "momo",
          image: "https://img.mservice.com.vn/app/img/portal_documents/mini-app_design-guideline_branding-guide-2-2.png",
          label: ""
     }
]

const Checkout = () => {

     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const { address, order, cart } = useAppSelector(state => state);
     const dispatch = useAppDispatch();
     const [selectedAddress, setSelectedAddress] = React.useState<string>("");

     useEffect(() => {
          dispatch(fetchAddressesByUser(localStorage.getItem("jwt") || ""))
     }, [])

     const [paymentGateway, setPaymentGateway] = React.useState("vnpay");

     const handlePaymentChange = (e: any) => {
          setPaymentGateway(e.target.value);
     }

     const handleCheckOut = async (selectedAddress: string) => {
          // if(address.addresses) {
          //      const a = address.addresses.find((item: Address) => item.id === Number(selectedAddress));
          //      if(a) {
          //           dispatch(createOrder({address: a, jwt: localStorage.getItem("jwt") || ""}))
          //      }
          // }
          const response = await api.get('/payment/vn-pay', {
               headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
               },
               params: {
                    bankCode: "NCB",
                    amount: cart.cart?.totalSellingPrice,
               }
          })
          if (response.data.code === "ok") {
               window.location.href = response.data.paymentUrl;
          }
     }

     return (
          <>
               <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
                    <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
                         <div className="col-span-2 space-y-5">
                              <div className="flex justify-between items-center">
                                   <h1 className="font-semibold">Selected Address</h1>
                                   <Button>
                                        Add new Address
                                   </Button>
                              </div>
                              <div className="text-xs font-medium space-y-5">
                                   <p>Saved Addresses</p>
                                   <div className="space-y-3">
                                        {address.addresses && address.addresses.map(item => <AddressCart item={item} selectedItem={selectedAddress} setSelectedItem={setSelectedAddress} />)}
                                   </div>
                              </div>

                              <div className="py-4 px-5 rounded-md border">
                                   <Button onClick={handleOpen}>
                                        Add new Address
                                   </Button>
                              </div>
                         </div>
                         <div>
                              <div>
                                   <div className="space-y-3 border  p-5 rounded-md">
                                        <h1 className="text-primary-color font-medium pb-2 text-center">Choose Payment Gateway</h1>
                                        <RadioGroup
                                             row
                                             aria-labelledby="demo-row-radio-buttons-group-label"
                                             name="row-radio-buttons-group"
                                             className="flex justify-between pr-0"
                                             onChange={handlePaymentChange}
                                             value={paymentGateway}
                                        >
                                             {paymentGatewayList.map(item =>
                                                  <FormControlLabel className="border w-[45%] pr-2 rounded-md flex justify-center" value={item.value} control={<Radio />} label={<img className={item.value === "vnpay" ? "w-14" : ""} src={item.image} alt={item.label} />} />
                                             )}
                                        </RadioGroup>
                                   </div>
                              </div>
                              <div className="border rounded-md">

                                   <PricingCart data={cart.cart} />
                                   <div className="p-5">
                                        <Button onClick={() => handleCheckOut(selectedAddress)} fullWidth variant="contained" sx={{ py: "11px" }}>Checkout</Button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={style}>
                         <AddressForm paymentGateway={paymentGateway} />
                    </Box>
               </Modal>
          </>
     )
};

export default Checkout;
