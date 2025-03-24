import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useFormik } from "formik";
import { Box, Button, Grid2, TextField } from "@mui/material";

interface CouponFormValues {
     code: string,
     discountPercentage: number,
     validityStartDate: Dayjs | null,
     validityEndDate: Dayjs | null,
     minimumOrderValue: number,
}

const AddNewCouponForm = () => {
     const formik = useFormik<CouponFormValues>({
          initialValues: {
               code: "",
               discountPercentage: 0,
               validityStartDate: null,
               validityEndDate: null,
               minimumOrderValue: 0
          },
          onSubmit: (values) => {
               const formatedValues = {
                    ...values,
                    validityStartDate: values.validityStartDate?.toISOString(),
                    validityEndDate: values.validityStartDate?.toISOString(),
               }
               console.log("form submited", values, formatedValues);
          }
     });
     return (
          <div>
               <h1 className="text-2xl font-bold text-primary-color pb-5 text-center">Create New Coupon</h1>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                         <Grid2 container spacing={2}>
                              <Grid2 size={{ xs: 12, sm: 6 }}>
                                   <TextField
                                        name="code"
                                        label="Coupon Code"
                                        fullWidth
                                        value={formik.values.code}
                                        onChange={formik.handleChange}
                                        error={formik.touched.code && Boolean(formik.errors.code)}
                                        helperText={formik.touched.code && formik.errors.code}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 12, sm: 6 }}>
                                   <TextField
                                        name="discountPercentage"
                                        label="Discount Percentage"
                                        fullWidth
                                        value={formik.values.discountPercentage}
                                        onChange={formik.handleChange}
                                        error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                                        helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 12, sm: 6 }}>
                                   <DatePicker
                                        label="Validity Start Date"
                                        sx={{ width: "100%" }}
                                        name="validityStartDate"
                                        value={formik.values.validityStartDate}
                                        onChange={formik.handleChange}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 12, sm: 6 }}>
                                   <DatePicker
                                        label="Validity End Date"
                                        sx={{ width: "100%" }}
                                        name="validityEndDate"
                                        value={formik.values.validityEndDate}
                                        onChange={formik.handleChange}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 12 }}>
                                   <TextField
                                        name="minimumOrderValue"
                                        label="Minimum Order Value"
                                        fullWidth
                                        value={formik.values.minimumOrderValue}
                                        onChange={formik.handleChange}
                                        error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                                        helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
                                   />
                              </Grid2>
                              <Grid2 size={{ xs: 12 }}>
                                   <Button variant="contained" fullWidth sx={{py: ".8rem"}}>
                                        Create Coupon
                                   </Button>
                              </Grid2>
                         </Grid2>
                    </Box>
               </LocalizationProvider>
          </div>
     )
};

export default AddNewCouponForm;
