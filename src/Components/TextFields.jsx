import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";
import { addErrorIntoField } from "../util/addErrorIntoField";
import ErrorMessage from "./ErrorMessage";

const TextFields = ({ label, inputProps, control, name, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...addErrorIntoField(errors[name])}
            required
            label={label}
            variant="filled"
            InputProps={inputProps}
          />
        )}
      ></Controller>
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

export default TextFields;
