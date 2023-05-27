import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Container,
  Button,
  Avatar,
  CardMedia,
  CardHeader,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AddCardIcon from "@mui/icons-material/AddCard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import SignUp from "./Form";

export default function LoanRequestPage() {
  return (
    <Box sx={{ position: "relative", bgcolor: "#E5E5E5" }}>
      {/* Hero section */}
      <Box
        sx={{
          display: { sm: undefined, md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "70vh",
          bgcolor: "#323C66",
          p: "0 50px",
        }}
      >
        <Box mr="200px">
          <Typography variant="h4" color="#fff" mr="180px">
            Get a loan of upto UGX{" "}
            <span style={{ color: "yellow", fontWeight: "bold" }}>
              100,000,000
            </span>{" "}
            millions, with{" "}
            <span style={{ color: "yellow", textTransform: "uppercase" }}>
              no quick
            </span>{" "}
            payback
          </Typography>
          <Typography variant="h6" mt="25px" mr="180px" color="#FFDBC1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo totam
            reiciendis ab quibusdam obcaecati ex provident, fuga et pariatur,
            tempora minima illum exercitationem facilis sapiente perspiciatis
            odit in nihil hic sit odio nisi qui minus culpa? Numquam quia eaque
            amet molestiae at aperiam eveniet, incidunt pariatur architecto
            necessitatibus in quibusdam.
          </Typography>
        </Box>
        <Box>
          <img
            src="../../bank_svg.svg"
            height="400px"
            width="400px"
            alt="Bank"
          />
        </Box>
      </Box>
      {/* Form */}
      <Container sx={{ mt: "25px" }}>
        <Card>
          <CardContent>
            <Typography
              fontWeight="bold"
              color="323C66"
              textTransform="uppercase"
            >
              Loan Application form
            </Typography>

            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="140px"
              gap={"20px"}
              mt="15px"
            >
              <Card
                style={{ gridColumn: "span 4", backgroundColor: "#696960" }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  <Avatar sx={{ bgcolor: "#ed6c02" }}>
                    <CreditScoreIcon />
                  </Avatar>

                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      Loan Amount Qualification
                    </Typography>
                    <Typography>UGX 10,000,000</Typography>
                  </Box>
                </CardContent>
              </Card>
              <Card style={{ gridColumn: "span 4", minWidth: 50 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="h1" variant="h6" fontWeight="bold">
                    Loan Request Amount
                  </Typography>
                  <Box mt="10px">
                    <Grid container>
                      <Grid item sm={12}>
                        <TextField
                          name="Loan Amount"
                          required
                          label="Your loan amount here"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
              <Card style={{ gridColumn: "span 4", minWidth: 50 }}>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>Loan Type</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Form inputs */}
            <Box mt="20px">
              <Card>
                <CardContent>
                  <SignUp />
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/*  */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          p: 4,
          bgcolor: "#323C66",
          mt: 3,
        }}
      >
        <Typography component={"h1"} variant="h6" color="#fff">
          You do not have an account yet? Apply for now with no hustle.
        </Typography>
        <Button variant="contained" color="warning" startIcon={<AddCardIcon />}>
          Apply Now
        </Button>
      </Box>

      {/* Cards Component */}
      <Box mt={3}>
        <Container>
          <Typography
            component={"h1"}
            variant="h6"
            textAlign="center"
            fontWeight="bold"
          >
            More with First Bank LTD
          </Typography>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={3}>
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#ed6c02" }}>
                      <ApiOutlinedIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <Typography component="h1" variant="h6" fontWeight="bold">
                      Customized Card
                    </Typography>
                  }
                  subheader="Customized according to your description"
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    repellendus hic vel magnam maxime ad eligendi, quidem alias
                    incidunt harum, corrupti cumque aperiam animi quisquam,
                    itaque eum? Eum, dolor omnis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#ed6c02" }}>
                      <AddBusinessIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <Typography component="h1" variant="h6" fontWeight="bold">
                      Fast
                    </Typography>
                  }
                  subheader="Just a click away"
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    repellendus hic vel magnam maxime ad eligendi, quidem alias
                    incidunt harum, corrupti cumque aperiam animi quisquam,
                    itaque eum? Eum, dolor omnis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#ed6c02" }}>
                      <MonetizationOnOutlinedIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <Typography component="h1" variant="h6" fontWeight="bold">
                      Accurate
                    </Typography>
                  }
                  subheader="Accurate, concise & simple"
                />

                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    repellendus hic vel magnam maxime ad eligendi, quidem alias
                    incidunt harum, corrupti cumque aperiam animi quisquam,
                    itaque eum? Eum, dolor omnis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#ed6c02" }}>
                      <OndemandVideoOutlinedIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={
                    <Typography component="h1" variant="h6" fontWeight="bold">
                      Payment Ease
                    </Typography>
                  }
                  subheader="payment with ease"
                />
                <CardContent>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    repellendus hic vel magnam maxime ad eligendi, quidem alias
                    incidunt harum, corrupti cumque aperiam animi quisquam,
                    itaque eum? Eum, dolor omnis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 4, bgcolor: "#323C66", mt: 3, textAlign: "center" }}>
        <Container>
          <footer>
            <Typography color="#fff">
              You do not have an account yet? Apply for now with no hustle.
            </Typography>
            <Typography color="#fff">&copy; FIRST BANK LTD. 2023</Typography>
          </footer>
        </Container>
      </Box>
    </Box>
  );
}
