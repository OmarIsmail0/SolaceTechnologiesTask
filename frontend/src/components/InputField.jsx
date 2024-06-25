/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const inputStyle = {
  color: "#151D48",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: 0, // Removes the border
    },
    "&:hover fieldset": {
      borderWidth: 0, // Removes the border on hover
    },
    "&.Mui-focused fieldset": {
      borderWidth: 0, // Removes the border on focus
    },
  },
};

const InputField = ({ control, name, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          sx={inputStyle}
          inputProps={{
            style: {
              color: "#151D48",
              fontSize: "16px",
              fontWeight: 500,
            },
          }}
        />
      )}
    />
  );
};

export default InputField;
