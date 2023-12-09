import { Box, Typography, InputAdornment, Button } from "@mui/material";
import React from "react";
import TextFields from "../Components/TextFields";
import SelectFields from "../Components/SelectFields";
import CheckboxField from "../Components/CheckboxField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const phoneReg =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const RegisterForm = () => {
  const schema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().required("Email is required").email(),
    mobile: yup
      .string()
      .required("Mobile is required")
      .matches(phoneReg, "Phone number is no valid"),
    country: yup.string().required("Country is required"),
    password: yup
      .string()
      .min(6, "Min characters - 6")
      .max(20, "Max characters - 20")
      .matches(/[A-Z]/, "Include at least one uppercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Include at least one special character"
      )
      .matches(/[0-9]/, "Include at least one number")
      .required("This line is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(" is required"),
    privacy: yup
      .bool()
      .oneOf([true], "Must be accepted")
      .required("This line is required"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      privacy: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "4rem",
        alignItems: "center",
      }}
    >
      <Typography component="h1">SignUp</Typography>

      {/* Form */}
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", mt: "2rem" }}
      >
        <TextFields
          errors={errors}
          control={control}
          name="fullName"
          label="Full Name"
        ></TextFields>
        <TextFields
          errors={errors}
          control={control}
          name="email"
          label="Email"
        ></TextFields>
        <TextFields
          errors={errors}
          name="mobile"
          control={control}
          label="Mobile Phone"
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">+380</InputAdornment>
            ),
            type: "number",
          }}
        ></TextFields>
        <SelectFields
          errors={errors}
          name="country"
          control={control}
          label="Country"
        />
        <TextFields
          errors={errors}
          name="password"
          control={control}
          label="Password"
        ></TextFields>
        <TextFields
          errors={errors}
          name="confirmPassword"
          control={control}
          label="Confirm Password"
        ></TextFields>
        <CheckboxField
          errors={errors}
          name="privacy"
          control={control}
          label="I Agree to App Terms and Privacy Policy"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
