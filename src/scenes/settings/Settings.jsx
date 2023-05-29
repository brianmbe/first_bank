import React, { useState } from "react";
// prettier-ignore
import { Box, Typography, Grid, Card, Container, CardContent } from "@mui/material";
// prettier-ignore
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses} from "react-pro-sidebar";

import { Notifications } from "./index";

// Icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

export default function Settings() {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleMenuItemClick = (id) => {
    setActiveMenuItem(id);
  };

  return (
    <Box bgcolor="#E5E5E5">
      <Grid container spacing={2}>
        {/* SideBar */}
        <Grid item xs={12} sm={2.2}>
          <Sidebar
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                backgroundColor: "transparent",
                fontWeight: "bold",
              },
            }}
            style={{
              position: "relative",
              height: "90vh",
            }}
          >
            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  if (level === 0)
                    return {
                      color: active ? "#fff" : "#000",
                      backgroundColor: active ? "#13395e" : undefined,
                      ":hover": {
                        color: "#fff",
                        backgroundColor: "#001E3D",
                        transition: "all 1s ease-out",
                      },
                    };
                  if (level === 1)
                    return {
                      color: active ? "#fff" : "#000",
                      backgroundColor: active ? "#000" : undefined,
                      ":hover": {
                        color: "#fff",
                        backgroundColor: "#2A474B",
                        transition: "all 1s ease-out",
                      },
                    };
                },
              }}
            >
              <SubMenu
                id="account"
                active={activeMenuItem === "account"}
                onClick={() => handleMenuItemClick("account")}
                label="Account"
                icon={<AccountCircleOutlinedIcon />}
                rootStyles={{
                  [`.${menuClasses.subMenuContent}`]: {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <MenuItem
                  id="myDetails"
                  active={activeMenuItem === "myDetails"}
                  onClick={() => handleMenuItemClick("myDetails")}
                  icon={<ManageAccountsOutlinedIcon />}
                >
                  {" "}
                  My details{" "}
                </MenuItem>
                <MenuItem
                  id="profile"
                  active={activeMenuItem === "profile"}
                  onClick={() => handleMenuItemClick("profile")}
                  icon={<PersonIcon />}
                >
                  {" "}
                  Profile{" "}
                </MenuItem>
              </SubMenu>
              <MenuItem
                id="notifications"
                active={activeMenuItem === "notifications"}
                onClick={() => handleMenuItemClick("notifications")}
                icon={<NotificationsOutlinedIcon />}
              >
                {" "}
                Notifications{" "}
              </MenuItem>
              <MenuItem
                id="privacyAndSecurity"
                active={activeMenuItem === "privacyAndSecurity"}
                onClick={() => handleMenuItemClick("privacyAndSecurity")}
                icon={<SecurityOutlinedIcon />}
              >
                {" "}
                Prvacy & Security{" "}
              </MenuItem>
              <MenuItem
                id="billingDetails"
                active={activeMenuItem === "billingDetails"}
                onClick={() => handleMenuItemClick("billingDetails")}
                icon={<CreditCardOutlinedIcon />}
              >
                {" "}
                Billing Details{" "}
              </MenuItem>
              <MenuItem
                id="iandFirstBank"
                active={activeMenuItem === "iandFirstBank"}
                onClick={() => handleMenuItemClick("iandFirstBank")}
                icon={<AttachMoneyOutlinedIcon />}
              >
                {" "}
                <span>I and</span>{" "}
                <span style={{ fontWeight: "bold", color: "blue" }}>
                  {" "}
                  FirstBank LTD
                </span>
              </MenuItem>
              <MenuItem
                id="records"
                active={activeMenuItem === "records"}
                onClick={() => handleMenuItemClick("records")}
                icon={<TopicOutlinedIcon />}
              >
                {" "}
                Records{" "}
              </MenuItem>
              <MenuItem
                id="languages"
                active={activeMenuItem === "languages"}
                onClick={() => handleMenuItemClick("languages")}
                icon={<LanguageOutlinedIcon />}
              >
                {" "}
                Languages{" "}
              </MenuItem>
              <MenuItem
                id="reset"
                active={activeMenuItem === "reset"}
                onClick={() => handleMenuItemClick("reset")}
                icon={<RestartAltOutlinedIcon />}
              >
                {" "}
                Reset Settings{" "}
              </MenuItem>
            </Menu>

            {/* Version Box */}
            <Container sx={{ position: "absolute", bottom: "10px" }}>
              <Card sx={{ bgcolor: "#001E3D" }}>
                <CardContent>
                  <Typography fontWeight="bold" color="yellow">
                    What is in version 1.3.9
                  </Typography>
                  <Typography mt="10px" color="#fff">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </Sidebar>
        </Grid>
        {/* Main content */}
        <Grid item xs={12} sm={9.8}>
          <Notifications />
        </Grid>
      </Grid>
    </Box>
  );
}
