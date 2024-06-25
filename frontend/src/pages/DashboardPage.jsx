import { Box, Grid } from "@mui/material";

import { Card, CardContent, Divider, Tab } from "@mui/material";
import { useEffect, useState } from "react";

import CardDetails from "../components/CardDetails";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import SideBar from "../components/SideBar";
import axios from "axios";
import PersonalInformationTab from "./tabs/PersonalInformationTab";
import FinancialInformation from "./tabs/FinancialInformation";
import Header from "../components/Header";

import DownloadingOutlinedIcon from "@mui/icons-material/DownloadingOutlined";

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [userId] = useState(1);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:3000/graphql", {
          query: `
            query User($userId: Int!) {
                user(userId: $userId) {
                firstName
                fatherName
                grandfatherName
                familyName
                dateOfBirth
                gender
                title
                passportNumber
                passportIssueDate
                passportExpiryDate
                localizedName {
                firstName
                fatherName
                grandfatherName
                familyName
                }
                nationalId {
                idNumber
                expiryDate
                }
                nationalities {
                country {
                    id
                    name
                }
                countryId
                }
                maritalStatus {
                id
                name
                }
                dependants
            }
        }
              `,
          variables: {
            userId: userId,
          },
        });
        console.log(response.data.data.user);
        setUser(response.data.data.user);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const tabs = [
    { tabIndex: "1", text: "Personal Information" },
    { tabIndex: "2", text: "Financial Information" },
  ];
  const ListStyle = {
    "&.Mui-selected": {
      borderRadius: "8px",
      backgroundColor: "#DCEEFF",
      color: "#0F6CBD",
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#DCEEFF",
    },
    "&:hover:not(.selected)": {
      backgroundColor: "#f5f5f5",
    },
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <DownloadingOutlinedIcon sx={{ width: 250, height: 250 }} />
      </div>
    );
  return (
    <TabContext value={value}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={1}
          bgcolor={"#FAFAFA"}
          height={"100%"}
          minHeight={"100vh"}
        >
          <Grid item md={1.4} lg={0.8}>
            <SideBar />
          </Grid>
          <Grid item md={10.6} lg={11.2}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Header name={`${user?.firstName} ${user?.familyName}`} />
              </Grid>

              <Grid item md={12}>
                <Grid container spacing={2}>
                  <Grid item md={5} lg={3}>
                    <Card sx={{ borderRadius: "24px" }}>
                      <CardDetails
                        name={`${user?.firstName} ${user?.familyName}`}
                        title={"Senior Product Manager"}
                      />
                      <Divider variant="middle" />
                      <CardContent>
                        <TabList
                          onChange={handleChange}
                          orientation="vertical"
                          sx={{
                            "& .MuiTabs-indicator": {
                              display: "none",
                            },
                          }}
                        >
                          {tabs.map(({ tabIndex, text }) => (
                            <Tab
                              value={tabIndex}
                              key={tabIndex}
                              label={text}
                              sx={ListStyle}
                            />
                          ))}
                        </TabList>
                      </CardContent>
                    </Card>
                  </Grid>
                  {/* Second Column */}
                  <Grid item md={7} lg={9}>
                    <TabPanel sx={{ padding: 0 }} value="1">
                      {user && <PersonalInformationTab userData={user} />}
                    </TabPanel>
                    <TabPanel sx={{ padding: 0 }} value="2">
                      <FinancialInformation />
                    </TabPanel>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </TabContext>
  );
};

export default DashboardPage;
