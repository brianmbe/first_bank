// icons
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WaterIcon from "@mui/icons-material/Water";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SavingsIcon from "@mui/icons-material/Savings";
import SecurityIcon from "@mui/icons-material/Security";
import ChatIcon from "@mui/icons-material/Chat";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

// Upcoming objects
export const upcomingTransactions = [
  {
    title: "Dstv",
    previousPaymentAmount: 50,
    nextPaymentAmount: 50 + 50 * 0.3, // Increase by 30%
    nextPaymentDate: "2023-06-01",
    icon: <LiveTvIcon />,
    totalAmountToBeDeducted: 50,
    currency: "Ksh",
  },
  {
    title: "National water",
    previousPaymentAmount: 30,
    nextPaymentAmount: 30,
    nextPaymentDate: "2023-06-05",
    icon: <WaterIcon />,
    totalAmountToBeDeducted: 30,
    currency: "$",
  },
  {
    title: "Gym",
    previousPaymentAmount: 80,
    nextPaymentAmount: 80,
    nextPaymentDate: "2023-06-10",
    icon: <FitnessCenterIcon />,
    totalAmountToBeDeducted: 80,
    currency: "UGX",
  },
  {
    title: "KCCA season subscription",
    previousPaymentAmount: 100,
    nextPaymentAmount: 100,
    nextPaymentDate: "2023-06-15",
    icon: <SportsSoccerIcon />,
    totalAmountToBeDeducted: 100,
    currency: "$",
  },
  {
    title: "Garbage collection",
    previousPaymentAmount: 20,
    nextPaymentAmount: 20,
    nextPaymentDate: "2023-06-20",
    icon: <CleaningServicesIcon />,
    totalAmountToBeDeducted: 20,
    currency: "Pounds",
  },
  {
    title: "NSSF",
    previousPaymentAmount: 200,
    nextPaymentAmount: 200,
    nextPaymentDate: "2023-06-25",
    icon: <SavingsIcon />,
    totalAmountToBeDeducted: 200,
    currency: "UGX",
  },
  {
    title: "Security",
    previousPaymentAmount: 150,
    nextPaymentAmount: 150,
    nextPaymentDate: "2023-06-30",
    icon: <SecurityIcon />,
    totalAmountToBeDeducted: 150,
    currency: "UGX",
  },
  {
    title: "Netflix",
    previousPaymentAmount: 120,
    nextPaymentAmount: 120 + 120 * 0.45, // Increase by 45%
    nextPaymentDate: "2023-07-01",
    icon: <OndemandVideoIcon />,
    totalAmountToBeDeducted: 120,
    currency: "UGX",
  },
  {
    title: "ChatGPT+",
    previousPaymentAmount: 10,
    nextPaymentAmount: 10,
    nextPaymentDate: "2023-07-05",
    icon: <ChatIcon />,
    totalAmountToBeDeducted: 10,
    currency: "UGX",
  },
  {
    title: "YouTube Premium",
    previousPaymentAmount: 15,
    nextPaymentAmount: 15,
    nextPaymentDate: "2023-07-10",
    icon: <YouTubeIcon />,
    totalAmountToBeDeducted: 15,
    currency: "UGX",
  },
];
