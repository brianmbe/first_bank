import React from "react";
// prettier-ignore
import { Box, Typography, Card, CardActions, CardContent, CardHeader, Grid, Container, Avatar, CardMedia, Button, IconButton } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Balance } from "@mui/icons-material";

export default function ActivitySummary() {
  return (
    <Box bgcolor="#E5E5E5">
      <Box m="0 20px">
        {/* Most paid for services from your account */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9} height="100%">
            <Box>
              <Typography
                component="h1"
                variant="h6"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Banking Summary
              </Typography>
              <Typography>
                Here is your banking summayry with{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "blue",
                  }}
                >
                  First Bank LTD
                </span>
              </Typography>
            </Box>

            {/* Summary details */}
            <Box mt={3}>
              <Box display="flex" alignContent="center">
                <Box
                  sx={{
                    height: "30px",
                    width: "5px",
                    bgcolor: "black",
                    borderRadius: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, ml: 2 }}
                >
                  Favourites
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ bgcolor: "#224263", color: "#fff" }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#ed6c02" }}>
                          <FavoriteOutlinedIcon />
                        </Avatar>
                      }
                      action={
                        <Typography fontWeight="bold">
                          01.02.2023 - 31.06.2023
                        </Typography>
                      }
                      title={
                        <Typography
                          textTransform="uppercase"
                          fontWeight="bold"
                          color="red"
                        >
                          Netflix
                        </Typography>
                      }
                      subheader={<Typography fontWeight="bold">75%</Typography>}
                    />
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="150"
                        image="../../netflix.jpg"
                        alt="Paella dish"
                      />

                      <Typography sx={{ mt: 1.5 }}>
                        Last updated 1hr ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#ed6c02" }}>
                          <LiveTvOutlinedIcon />
                        </Avatar>
                      }
                      title={
                        <Typography
                          textTransform="uppercase"
                          fontWeight="bold"
                          color="blue"
                        >
                          DSTV
                        </Typography>
                      }
                      subheader={<Typography fontWeight="bold">15%</Typography>}
                    />
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="150"
                        image="../../dstv.jpg"
                        alt="DSTV"
                      />
                      <Typography sx={{ mt: 1.5 }}>
                        Last updated 1hr ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: "#ed6c02" }}>
                          <WaterDamageOutlinedIcon />
                        </Avatar>
                      }
                      title={
                        <Typography textTransform="uppercase" fontWeight="bold">
                          NSSF
                        </Typography>
                      }
                      subheader={<Typography fontWeight="bold">10%</Typography>}
                    />
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="150"
                        image="../../nssf.png"
                        alt="Water"
                      />

                      <Typography sx={{ mt: 1.5 }}>
                        Last updated 1hr ago
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            {/* Activity */}
            <Box mt={3}>
              <Box display="flex" alignContent="center">
                <Box
                  sx={{
                    height: "30px",
                    width: "5px",
                    bgcolor: "black",
                    borderRadius: "10px",
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, ml: 2 }}
                >
                  Activity
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <Card sx={{ height: "100%" }}>
                    <CardHeader
                      title={
                        <Typography
                          textTransform="uppercase"
                          fontWeight="bold"
                          color="red"
                        >
                          Statistics
                        </Typography>
                      }
                      action={
                        <Button
                          variant="outlined"
                          endIcon={<ExpandMoreOutlinedIcon />}
                          color="warning"
                        >
                          More
                        </Button>
                      }
                    />
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image="../../bar_graph.png"
                        alt="Paella dish"
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Card sx={{ height: "100%" }}>
                    <CardHeader
                      title={
                        <Typography
                          textTransform="uppercase"
                          color="blue"
                          fontWeight="bold"
                        >
                          Gym Subscription
                        </Typography>
                      }
                    />
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="150"
                        image="../../gym.jpg"
                        alt="DSTV"
                        sx={{ borderRadius: "10px" }}
                      />
                      <Typography
                        sx={{ mt: 1.5, fontWeight: "bold", mt: "20px" }}
                      >
                        Workout Team
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: "20px",
                        }}
                      >
                        <Box>
                          <img
                            src="../../neom.jpg"
                            alt="image_1"
                            height="30px"
                            width="30px"
                            style={{ borderRadius: "50%" }}
                          />
                          <img
                            src="../../netflix.jpg"
                            alt="image_1"
                            height="34px"
                            width="34px"
                            style={{
                              borderRadius: "50%",
                              marginLeft: "-10px",
                              border: "2px solid white",
                            }}
                          />
                          <img
                            src="../../tv.jpg"
                            alt="image_1"
                            height="34px"
                            width="34px"
                            style={{
                              borderRadius: "50%",
                              marginLeft: "-10px",
                              border: "2px solid white",
                            }}
                          />
                        </Box>
                        <Button variant="contained">View Team</Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Profile */}
          <Grid item xs={12} sm={3} height="100%">
            <Card>
              <CardHeader
                title={
                  <Box display="flex" alignContent="center">
                    <Box
                      sx={{
                        height: "30px",
                        width: "5px",
                        bgcolor: "black",
                        borderRadius: "10px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ mb: 2, ml: 2 }}
                    >
                      Profile
                    </Typography>
                  </Box>
                }
                action={
                  <IconButton>
                    <EditNoteOutlinedIcon />
                  </IconButton>
                }
              />
              <Box position="relative">
                <CardMedia
                  component="img"
                  height="50"
                  image="../../dog.jpg"
                  alt="User profile"
                />
                <img
                  src="../../dog.jpg"
                  alt="User profile"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    position: "relative",
                    top: "-30px",
                    left: "20px",
                    border: "2px solid #fff",
                  }}
                />
                <Box sx={{ position: "relative", top: "-30px", left: "20px" }}>
                  <Typography variant="h6" component="h4" fontWeight="bold">
                    Mr. Brian
                  </Typography>
                  <Typography>Customer</Typography>
                </Box>
              </Box>

              <CardContent>
                <Card>
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ bgcolor: "#ed6c02", color: "#fff" }}>
                        <PaidOutlinedIcon />
                      </Avatar>
                      <Typography>UGX. 35,670000</Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar sx={{ bgcolor: "#ed6c02", color: "#fff" }}>
                        <AccountBalanceWalletOutlinedIcon />
                      </Avatar>
                      <Typography>No Active Loan</Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Box display="flex" alignContent="center" mt="30px">
                  <Box
                    sx={{
                      height: "30px",
                      width: "5px",
                      bgcolor: "black",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mb: 2, ml: 2 }}
                  >
                    Calendar
                  </Typography>
                </Box>

                {/* Calendar */}
                <Card sx={{ bgcolor: "#888", color: "white" }}>
                  <CardHeader
                    title={<Typography>Your daily activities</Typography>}
                    action={
                      <IconButton>
                        <CalendarMonthOutlinedIcon color="#fff" />
                      </IconButton>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="250"
                    image="../../calendar_2023.jpg"
                    alt="Paella dish"
                  />
                </Card>

                {/* My scheduled payments */}
                <Box display="flex" alignContent="center" mt="30px">
                  <Box
                    sx={{
                      height: "30px",
                      width: "5px",
                      bgcolor: "black",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mb: 2, ml: 2 }}
                  >
                    My Scheduled Payments
                  </Typography>
                </Box>

                {/* Payment is soon approaching */}
                <Card>
                  <CardContent sx={{ display: "flex" }}>
                    <RadioButtonCheckedOutlinedIcon sx={{ color: "blue" }} />
                    <Box pl="10px">
                      <Typography fontWeight="bold">Netflix</Typography>
                      <Typography>31.07.2023 at 12:00am</Typography>
                    </Box>
                  </CardContent>
                </Card>

                {/* next upcoming approaching */}
                <Card sx={{ mt: "10px" }}>
                  <CardContent sx={{ display: "flex" }}>
                    <FiberManualRecordOutlinedIcon />
                    <Box pl="10px">
                      <Typography fontWeight="bold">Gym</Typography>
                      <Typography>15.08.2023</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Hero section */}
      <Box bgcolor="#224263">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            mt: "20px",
          }}
        >
          <img
            src="../../credit_card.svg"
            alt="Bank Hero"
            height="400px"
            width="400px"
          />
          <Box>
            <Typography
              component="h4"
              variant="h4"
              textTransform="capitalize"
              fontWeight="bold"
              color="yellow"
            >
              Best way to manage your finances
            </Typography>
            <Typography
              sx={{
                width: { md: "500px", sm: undefined },
                mt: "15px",
                color: "#fff",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              voluptatem sed hic soluta distinctio perferendis laboriosam in,
              dolore sit ea maxime enim itaque harum, assumenda necessitatibus
              eveniet repellendus nemo at totam quas dolores? Labore aliquid
              nihil nostrum. Unde, temporibus placeat recusandae iste laudantium
              similique libero cumque, quod ab quia impedit.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box bgcolor="#000" mb="20px">
        <Container sx={{ position: "relative" }}>
          <Box
            position="relative"
            bgcolor="whitesmoke"
            borderRadius="10px"
            p={2}
            width="700px"
            top="-100px"
            left="200px"
          >
            <Typography
              component="h1"
              variant="h6"
              fontWeight="bold"
              color="#224263"
            >
              Lorem ipsum dolor sit, amet consectetur.
            </Typography>

            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              corporis eveniet non saepe asperiores quam quasi assumenda
              laudantium explicabo. Alias voluptatibus aperiam quo dolor in,
              placeat animi nihil maxime ducimus quos! Recusandae quia alias
              commodi reprehenderit magnam, officia sed incidunt nisi eligendi
              nesciunt necessitatibus repellendus qui possimus mollitia
              laudantium cupiditate?
            </Typography>
          </Box>
          <Box>
            <Grid container color="#fff" spacing={3}>
              <Grid xs={12} sm={4}>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "orange" }}>
                    <FavoriteOutlinedIcon />
                  </Avatar>
                  <Typography ml={2}>Successful</Typography>
                </Box>
                <Box mt={2}>
                  <Typography>Contact us : (+256) 7850 6475</Typography>
                  <Typography>Office : (+256) 3200 0070</Typography>
                  <Typography>Email us : firstbank@gmail.com</Typography>
                </Box>
              </Grid>

              <Grid xs={12} sm={4}>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "orange" }}>
                    <Balance />
                  </Avatar>
                  <Typography ml={2}>Easy Banking</Typography>
                </Box>
                <Typography mt={2}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nostrum enim iste minus! Quisquam placeat nemo veniam eveniet
                  minus! Enim repudiandae sunt ipsa dicta mollitia doloribus
                  nisi quibusdam accusantium libero.
                </Typography>
              </Grid>

              <Grid xs={12} sm={4}>
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: "orange" }}>
                    <Balance />
                  </Avatar>
                  <Typography ml={2}>We are global</Typography>
                </Box>
                <img src="../../world_map.svg" alt="world map" />
              </Grid>
            </Grid>
          </Box>

          {/* Footer */}
          <footer
            style={{ marginTop: "20px", textAlign: "center", color: "yellow" }}
          >
            <Typography>
              You do not have an account yet? Apply for now with no hustle.
            </Typography>
            <Typography>&copy; FIRST BANK LTD. 2023</Typography>
          </footer>
        </Container>
      </Box>
    </Box>
  );
}
