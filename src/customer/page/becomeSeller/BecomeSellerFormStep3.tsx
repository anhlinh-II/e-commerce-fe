import { TextField } from "@mui/material";

const BecomeSellerFormStep3 = ({ formik }: any) => {
     return (
          <div className="space-y-5">
               <TextField
                    fullWidth
                    name="bankDetails.accountNumber"
                    label="Account Number"
                    value={formik.values.bankDetails.accountNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
                    helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
               />
               <TextField
                    fullWidth
                    name="bankDetails.isfcCode"
                    label="IFSC Code"
                    value={formik.values.bankDetails.isfcCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.bankDetails?.isfcCode && Boolean(formik.errors.bankDetails?.isfcCode)}
                    helperText={formik.touched.bankDetails?.isfcCode && formik.errors.bankDetails?.isfcCode}
               />
               <TextField
                    fullWidth
                    name="bankDetails.accountHolderName"
                    label="Account Holder Name"
                    value={formik.values.bankDetails.accountHolderName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
                    helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
               />
          </div>
     )
};

export default BecomeSellerFormStep3;
