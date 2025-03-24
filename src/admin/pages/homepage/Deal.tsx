import { Button } from "@mui/material";
import { useState } from "react";
import DealTable from "./DealTable";
import DealCategoryTable from "./DealCategoryTable";
import CreateDealForm from "./CreateDealForm";

const tabs = [
     "Deals",
     "Category",
     "CreateDeal"
]

const Deal = () => {
     const [activeTab, setActiveTab] = useState("Deals")
     return (
          <div className="space-y-4">
               <div className="flex gap-4">
                    {tabs.map((item) => (
                         <Button onClick={() => setActiveTab(item)} variant={activeTab === item ? "contained" : "outlined"}>
                              {item}
                         </Button>
                    ))}
               </div>
               <div className="">
                    {activeTab === "Deals" ? <DealTable /> : <></>}
                    {activeTab === "Category" ? <DealCategoryTable /> : <></>}
                    {activeTab === "CreateDeal" ? <div className="mt-5 flex flex-col justify-center items-center h-[70vh]"><CreateDealForm /> </div> : <></>}
               </div>
          </div>
     )
};

export default Deal;
