import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";

import Logo from "../assets/logo.png";
import ReportIcon from "../assets/ReportIcon";
import ResearchIcon from "../assets/ResearchIcon";
import TeamsIcon from "../assets/TeamsIcon";
import BoxIcon from "../assets/BoxIcon";
import DashboardIcon from "../assets/DashboardIcon";

const SideBar = () => {
  const iconStyle = {
    width: 50,
    height: 48,
  };
  const menu = [
    <img src={Logo} key={0} />,
    <DashboardIcon sx={iconStyle} key={5} />,
    <ResearchIcon sx={iconStyle} key={1} />,
    <ReportIcon sx={iconStyle} key={2} />,
    <TeamsIcon sx={iconStyle} key={3} />,
    <BoxIcon sx={iconStyle} key={4} />,
  ];

  const DrawerList = (
    <Box sx={{ mt: 2 }}>
      <List>
        {menu.map((text, index) => (
          <ListItem key={index}>
            <IconButton
              sx={{
                justifyContent: "center",
                height: "50px",
                width: "60px",
                mt: 1.5,
              }}
            >
              {text}
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return <Drawer variant="permanent">{DrawerList}</Drawer>;
};

export default SideBar;
