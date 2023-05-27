import React from "react";
import Header from "../../components/header/Header";
import {
  Box,
  Card,
  IconButton,
  Typography,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";
import { FaMoneyCheckAlt } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaidIcon from "@mui/icons-material/Paid";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import PaymentIcon from "@mui/icons-material/Payment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalculateIcon from "@mui/icons-material/Calculate";
import PercentIcon from "@mui/icons-material/Percent";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

// Data
import { upcomingTransactions } from "../../data/dataFiles";

export default function CustomerPage() {
  const title = "Lorem ipsum.";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto maiores dolor ipsa voluptas sit sequi animi at! Obcaecati, distinctio necessitatibus? Quia veniam qui hic.";

  return (
    <Box>
      <Header title={title} description={description} />
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap={"20px"}
        mt={5}
      >
        <Box gridColumn="span 5" bgcolor="yellow">
          Hello
        </Box>
        <Box gridColumn="span 3" bgcolor="yellow">
          Hello
        </Box>
        <Box gridColumn="span 4" bgcolor="yellow">
          Hello
        </Box>

        {/* Grid 2 */}
        <Box
          p={2}
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor="#E3E9EA"
          overflow="scroll"
        >
          <Box display="flex" justifyContent="space-between">
            <Typography>Current & Savings</Typography>
            <IconButton sx={{ mt: "-5px" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            borderBottom="1px solid #000"
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Nyingambe Brian
              </Typography>
              <Typography variant="body2">*********1034 - Wolverine</Typography>
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{ mb: 2 }}
              >
                Visit
              </Button>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography>UGX 200000</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            borderBottom="1px solid #000"
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Nyingambe Brian
              </Typography>
              <Typography variant="body2">*********1034 - Wolverine</Typography>
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{ mb: 2 }}
              >
                Visit
              </Button>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography>UGX 200000</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            borderBottom="1px solid #000"
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Nyingambe Brian
              </Typography>
              <Typography variant="body2">*********1034 - Wolverine</Typography>
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{ mb: 2 }}
              >
                Visit
              </Button>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography>UGX 200000</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            borderBottom="1px solid #000"
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Nyingambe Brian
              </Typography>
              <Typography variant="body2">*********1034 - Wolverine</Typography>
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{ mb: 2 }}
              >
                Visit
              </Button>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Typography>UGX 200000</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          p={2}
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor="#2A0D66"
          color="#fff"
        >
          <Typography>Recent Payments</Typography>

          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="70px"
            gap={"20px"}
          >
            <Box
              display="flex"
              gridColumn={"span 4"}
              flexDirection={"column"}
              alignItems="center"
            >
              <AccountBalanceWalletIcon />
              <Typography>Money Transfer</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 4"}
              flexDirection={"column"}
              alignItems="center"
            >
              <CurrencyPoundIcon />
              <Typography>Pay Bills</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 4"}
              flexDirection={"column"}
              alignItems="center"
            >
              <FavoriteIcon />
              <Typography>Favourites</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 4"}
              flexDirection={"column"}
              alignItems="center"
            >
              <EngineeringIcon />
              <Typography>Manage Workers Payments</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 4"}
              flexDirection={"column"}
              alignItems="center"
            >
              <PaidIcon />
              <Typography>Request Money</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 4"}
              flexDirection={"column"}
              alignItems="center"
            >
              <ReceiptIcon />
              <Typography>View Transactions</Typography>
            </Box>
          </Box>
        </Box>

        {/* Upcoming payments */}
        <Box
          p={2}
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor="#DCD8E6"
          overflow="scroll"
        >
          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight="bold">
              Upcoming connected Transactions
            </Typography>
            <IconButton sx={{ mt: "-5px" }}>
              <MoreVertIcon />
            </IconButton>
          </Box>
          {upcomingTransactions.map((upcoming) => (
            <Card sx={{ mb: "20px" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Box>
                  <Typography
                    textTransform="capitalize"
                    variant="h6"
                    fontWeight="bold"
                  >
                    {upcoming.icon} {upcoming.title}
                  </Typography>
                  <Typography variant="body2">
                    Next Payment Date: {upcoming.nextPaymentDate}
                  </Typography>
                  <Typography variant="body2">
                    Previous paid amount:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {upcoming.previousPaymentAmount}
                    </span>
                  </Typography>
                  <Button
                    startIcon={<PaymentIcon />}
                    size="small"
                    variant="outlined"
                    color="warning"
                    sx={{ mb: 2, mt: 2 }}
                  >
                    Pay Now
                  </Button>
                </Box>

                <Box display="flex" justifyContent="space-between">
                  <Typography>
                    {upcoming.currency} {upcoming.nextPaymentAmount}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Grid 2 */}

        <Box p={2} gridColumn="span 4" gridRow="span 2" bgcolor="#EAD2C2">
          <Typography>Quick Access</Typography>

          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="70px"
            gap={"20px"}
          >
            <Box
              display="flex"
              gridColumn={"span 6"}
              flexDirection={"column"}
              alignItems="center"
            >
              <ReceiptLongIcon />
              <Typography>View Your Statements</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 6"}
              flexDirection={"column"}
              alignItems="center"
            >
              <FaMoneyCheckAlt />
              <Typography>Cheque Book Request</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 6"}
              flexDirection={"column"}
              alignItems="center"
            >
              <PaymentsIcon />
              <Typography>New Debit Card</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 6"}
              flexDirection={"column"}
              alignItems="center"
            >
              <CreditCardIcon />
              <Typography>New Credit Card</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 6"}
              flexDirection={"column"}
              alignItems="center"
            >
              <PercentIcon />
              <Typography>Eligibility Calculator</Typography>
            </Box>
            <Box
              display="flex"
              gridColumn={"span 6"}
              flexDirection={"column"}
              alignItems="center"
            >
              <CalculateIcon />
              <Typography>Installments Calculator</Typography>
            </Box>
          </Box>
        </Box>
        <Box p={2} gridColumn="span 4" gridRow="span 2" bgcolor="#EAD2C2">
          <Typography>Transfer money across Africa</Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            mt="20px"
            mb="20px"
          >
            <Box>
              <img
                src="../../trading.jpg"
                height="80px"
                width="80px"
                alt="Best offer"
                style={{ borderRadius: "50%" }}
              />
            </Box>

            <Box ml={5}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                aut?
              </Typography>
              <Button
                variant="outlined"
                startIcon={<CalculateIcon />}
                style={{ marginTop: "10px" }}
              >
                Transfer Now
              </Button>
            </Box>
          </Box>

          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint non
            voluptatum temporibus hic, autem architecto quo nemo velit rem?
            Facilis quo optio unde soluta iure deleniti libero sit porro ipsum!
          </Typography>
        </Box>
        <Box
          gridColumn="span 4"
          sx={{
            backgroundImage: `url('../../tv.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fit-object",
          }}
        >
          <Typography>Create </Typography>
          <Button
            variant="outlined"
            startIcon={<CalculateIcon />}
            style={{ marginTop: "10px" }}
          >
            Estimate
          </Button>
        </Box>
        <Box gridColumn="span 4" bgcolor="yellow">
          Hello
        </Box>
      </Box>
    </Box>
  );
}
