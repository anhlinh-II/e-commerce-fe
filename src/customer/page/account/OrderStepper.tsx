import { CheckCircle, FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const steps = [
     { name: "Order Placed", description: "On Thu, 11 July", value: "PLACED" },
     { name: "Packed", description: "Your order has been packed", value: "PACKED" },
     { name: "Shipped", description: "Your order is on the way", value: "SHIPPED" },
     { name: "Arriving", description: "Your order is arriving soon", value: "ARRIVING" },
     { name: "Arrived", description: "Your order has been delivered", value: "ARRIVED" }
];

const canceledStep = [
     { name: "Order Placed", description: "On Thu, 11 July", value: "PLACED" },
     { name: "Canceled", description: "Your order has been canceled", value: "CANCELED" }
]

const currentStep = 2;

const OrderStepper = ({ orderStatus }: any) => {
     const [statusStep, setStatusStep] = useState(steps);

     useEffect(() => {
          if (orderStatus === "CANCELED") {
               setStatusStep(canceledStep);
          } else {
               setStatusStep(steps);
          }
     }, [orderStatus])
     return (
          <Box className="mx-auto my-10">
               {
                    statusStep.map((steps, index) => (
                         <>
                              <div key={index} className="flex px-4">
                                   <div className="flex flex-col items-center">
                                        <Box
                                             sx={{ zIndex: -1 }}
                                             className={
                                                  `w-8 h-8 rounded-full flex items-center justify-center
                                             ${index <= currentStep ? "bg-gray-200 text-blue-500" : "bg-gray-300 text-gray-600"}
                                             `
                                             }
                                        >
                                             {steps.value === orderStatus ? (
                                                  <CheckCircle />
                                             ) : (
                                                  <FiberManualRecord sx={{ zIndex: -1 }} />
                                             )}
                                        </Box>
                                        {
                                             index < statusStep.length - 1 && (
                                                  <div
                                                       className={`border h-20 w-[2px] 
                                                       ${index < currentStep ? "bg-blue-500" : "bg-gray-300 text-gray-600"}`}

                                                  >
                                                  </div>
                                             )
                                        }
                                   </div>

                                   <div className={`ml-2 w-full`}>
                                        <div
                                             className={`
                                                  ${steps.value === orderStatus ? "bg-primary-color p-2 text-white font-medium rounded-md -translate-y-3" : ""}
                                                  ${orderStatus === "CANCELED" && steps.value === orderStatus ? "bg-red-500" : ""} w-full
                                             `}
                                        >
                                             <p className=""> 
                                                  {steps.name}
                                             </p>
                                             <p className={`${steps.value === orderStatus ? "text-gray-200" : "text-gray-500"} text-xs`}>
                                                  {steps.description}
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </>
                    ))
               }
          </Box>
     )
};

export default OrderStepper;
