/* eslint-disable react/prop-types */
import { Box, Button, Paper, Typography } from "@mui/material";

const FormSection = ({ title, onSubmit, children }) => (
  <Box component="form" onSubmit={onSubmit}>
    <Paper sx={{ p: 2, mb: 3, borderRadius: "24px" }}>
      <Box display="flex" justifyContent="space-between" sx={{ px: 2 }}>
        <Typography
          color={"#151D48"}
          variant="h6"
          sx={{ fontFamily: "poppins", lineHeight: "30px", fontSize: "20px" }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "104px", height: "36px" }}
        >
          EDIT
        </Button>
      </Box>
      <Box sx={{ mt: "24px" }}>{children}</Box>
    </Paper>
  </Box>
);

export default FormSection;
