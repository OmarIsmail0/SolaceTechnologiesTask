/* eslint-disable react/prop-types */
import {
  Box,
  Breadcrumbs,
  Link,
  IconButton,
  Avatar,
  Typography,
  Badge,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Employee from "../assets/employee.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Header = ({ name }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontWeight: 600,
            fontSize: 26,
            lineHeight: "39px",
            letterSpacing: "0.5px",
            color: "#151D48",
          }}
        >
          {name} Profile
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link color="inherit" href="#" sx={{ textDecoration: "none" }}>
            Dashboard
          </Link>
          <Link color="inherit" href="#" sx={{ textDecoration: "none" }}>
            HR manage
          </Link>
          <Link color="textPrimary" href="#" sx={{ textDecoration: "none" }}>
            Employees
          </Link>
          <Link href="#" sx={{ textDecoration: "none" }}>
            John Smith Profile
          </Link>
        </Breadcrumbs>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton sx={{ px: "16px" }}>
          <Badge
            color="error"
            variant="dot"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsOutlinedIcon
              sx={{ color: "#004A3F", width: "22px", height: "22px" }}
            />
          </Badge>
        </IconButton>
        <IconButton sx={{ px: "16px" }}>
          <MailOutlineOutlinedIcon
            sx={{ color: "#004A3F", width: "22px", height: "22px" }}
          />
        </IconButton>
        <IconButton sx={{ px: "16px" }}>
          <SettingsOutlinedIcon
            sx={{ color: "#004A3F", width: "22px", height: "22px" }}
          />
        </IconButton>
        <div className="px-[16px]">
          <Avatar
            alt="John Smith"
            src={Employee}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "16px",
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Header;
