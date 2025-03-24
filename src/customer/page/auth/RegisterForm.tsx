import { useFormik } from "formik";
import { sendLoginSignupOtp } from "../../../state/authSlice";
import { sellerLogin } from "../../../state/seller/sellerAuthSlice";
import { useAppDispatch } from "../../../state/store";
import { TextField, Button } from "@mui/material";

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullName: ""
    },
    onSubmit: (values) => {
      console.log("form data ", values)
      dispatch(sellerLogin(values))
    }
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }))
  }
  return (
    <div>
      <h1 className="text-center font-bold text-xl text-primary-color pb-8">Sign Up</h1>
      <div className="space-y-3">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {
          true &&
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="font-medium text-sm opacity-60">Enter OTP sent to your email</p>
              <TextField
                fullWidth
                name="otp"
                label="Otp"
                value={formik.values.otp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.otp && Boolean(formik.errors.otp)}
                helperText={formik.touched.otp && formik.errors.otp}
              />
            </div>
            <TextField
              fullWidth
              name="fullName"
              label="FullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </div>
        }
        <Button onClick={handleSendOtp} fullWidth variant="contained" sx={{ py: "11px" }}>
          Send OTP
        </Button>
        <Button onClick={() => formik.handleSubmit()} fullWidth variant="contained" sx={{ py: "11px" }}>
          Signup
        </Button>
      </div>
    </div>
  )
};

export default RegisterForm;
