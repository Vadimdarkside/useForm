import { FormControl, TextField, MenuItem } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../util/addErrorIntoField";
import ErrorMessage from "./ErrorMessage";

const SelectFields = ({ label, name, control, errors }) => {
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
            select
            label={label}
            variant="filled"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Ukraine">Ukraine</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Poland">Poland</MenuItem>
            <MenuItem value="England">England</MenuItem>
            {/* {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))} */}
          </TextField>
        )}
      ></Controller>
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

export default SelectFields;
