/* eslint-disable react/prop-types */
import { Avatar, CardContent, Typography } from "@mui/material";

import CameraIcon from "../assets/CameraIcon";
import Employee from "../assets/employee.png";

const CardDetails = ({ name, title }) => {
  return (
    <div>
      <CardContent>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Avatar
            variant="rounded"
            src={Employee}
            alt={name}
            sx={{
              width: 120,
              height: 120,
              margin: "auto",
              borderRadius: "39px",
            }}
          />
          <Avatar
            sx={{
              background: "#F0F0F0",
              position: "absolute",
              top: 88,
              left: 88,
              padding: "5px",
            }}
          >
            <CameraIcon fontSize="small" />
          </Avatar>
        </div>

        <Typography
          sx={{
            marginTop: "16px",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            fontFamily: "poppins",
            color: "#051D49",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            mt: "8px",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "20px",
            fontFamily: "poppins",
            color: "#737791",
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </div>
  );
};

export default CardDetails;
