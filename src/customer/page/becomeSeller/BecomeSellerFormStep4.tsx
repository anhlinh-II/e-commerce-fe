import { TextField } from "@mui/material";

const BecomeSellerFormStep4 = ({ formik }: any) => {
     return (
          <div className="space-y-5">
               <TextField
                    fullWidth
                    name="businessDetails.businessName"
                    label="Business Name"
                    value={formik.values.businessDetails.businessName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.businessDetails?.businessName && Boolean(formik.errors.businessDetails?.businessName)}
                    helperText={formik.touched.businessDetails?.businessName && formik.errors.businessDetails?.businessName}
               />
               <TextField
                    fullWidth
                    name="businessDetails.sellerName"
                    label="Seller Name"
                    value={formik.values.businessDetails.sellerName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.businessDetails?.sellerName && Boolean(formik.errors.businessDetails?.sellerName)}
                    helperText={formik.touched.businessDetails?.sellerName && formik.errors.businessDetails?.sellerName}
               />
               <TextField
                    fullWidth
                    name="businessDetails.email"
                    label="Email"
                    value={formik.values.businessDetails.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.businessDetails?.email && Boolean(formik.errors.businessDetails?.email)}
                    helperText={formik.touched.businessDetails?.email && formik.errors.businessDetails?.email}
               />
               <TextField
                    fullWidth
                    name="businessDetails.password"
                    label="Password"
                    value={formik.values.businessDetails.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.businessDetails?.password && Boolean(formik.errors.businessDetails?.password)}
                    helperText={formik.touched.businessDetails?.password && formik.errors.businessDetails?.password}
               />
          </div>
     )
};

export default BecomeSellerFormStep4;
