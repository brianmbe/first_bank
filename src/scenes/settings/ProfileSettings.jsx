import React from "react";
import { Header } from "./index";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RedeemIcon from "@mui/icons-material/Redeem";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export default function ProfileSettings() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box>
      <Header
        title="Profiles Settings"
        subtitle="Edit your profile and save all the changes made"
        color="purple"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card
            sx={{ backgroundColor: "transparent", border: "2px solid #eee" }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="../../neom.jpg"
                alt="Profile_photo"
                height="100px"
                width="100px"
                style={{ borderRadius: "50%", marginBottom: "10px" }}
              />
              <Typography variant="h5" fontWeight="bold">
                Mr. Brian
              </Typography>
              <Typography>brian.customer@firstbank.co</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box pr="30px">
            <Card
              sx={{ backgroundColor: "transparent", border: "2px solid #eee" }}
            >
              <CardContent>
                <Container>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="emailaddress"
                            label="Email"
                            name="emailaddress"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            name="OldPassword"
                            label="Old Password"
                            type="OldPassword"
                            id="OldPassword"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            name="newpassword"
                            label="New Password"
                            type="newpassword"
                            id="newpassword"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="country"
                            label="Country"
                            name="country"
                            autoComplete="country-name"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="city"
                            label="City"
                            name="city"
                            autoComplete="city-name"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            required
                            fullWidth
                            id="phonenumber"
                            label="Phone No."
                            name="phonenumber"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="phonenumber2"
                            label="Additional Phone Number"
                            name="phonenumber2"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            fullWidth
                            id="address1"
                            label="Main address"
                            name="address1"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="address2"
                            label="Address 2"
                            name="address2"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="banking_experience"
                            label="Experience with FirstBank"
                            name="banking_experience"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="additional_information"
                            label="Additional Information"
                            name="additional_information"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        startIcon={<SaveOutlinedIcon />}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Save details
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
