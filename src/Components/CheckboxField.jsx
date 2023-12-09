import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import { addErrorIntoField } from "../util/addErrorIntoField";
import { Controller } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const TextFields = ({ label, name, control, errors }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                // {...addErrorIntoField(errors[name])}
                required
              />
            }
            label={label}
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </>
  );
};

export default TextFields;
