import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

const toggleOffOutlined = "#B8C1C3";
const toggleOnOutlined = "blue";

export const fullPageData = [
  {
    headings: {
      title: "Email Settings",
      shortDescrition: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam`,
    },

    notificationsDataFile: [
      {
        title: "Emails Settings",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam`,
        icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
      },
      {
        title: "Tips & tutorials",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
      },
      {
        title: "User Research",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam minima saepe amet tempora
      animi nobis fuga error iusto molestias.`,
        icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
      },
      {
        title: "Comments",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam?`,
        icon: <ToggleOffOutlinedIcon sx={{ color: toggleOffOutlined }} />,
      },
      {
        title: "Reminders",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam?`,
        icon: <ToggleOffOutlinedIcon sx={{ color: toggleOffOutlined }} />,
      },
    ],
  },
  {
    headings: {
      title: "Push notifications",
      shortDescrition: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam`,
    },

    notificationsDataFile: [
      {
        title: "Comments",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam?`,
        icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
      },
      {
        title: "Reminders",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam?`,
        icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
      },
      {
        title: "Your frequent activities",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam?`,
        icon: <ToggleOffOutlinedIcon sx={{ color: toggleOffOutlined }} />,
      },
    ],
  },
];

export const records = [
  {
    date: "20/04/2023",
    type: "Digital Banking",
    description: "DSTV",
    paidIn: 0,
    paidOut: 56700,
    balance: 21000000,
  },
  {
    date: "18/04/2023",
    type: "Digital Banking",
    description: "Netflix",
    paidIn: 0,
    paidOut: 56700,
    balance: 21000000 + 56700,
  },
  {
    date: "16/04/2023",
    type: "Auto Banking",
    description: "NSSF",
    paidIn: 0,
    paidOut: 56700,
    balance: 21000000 + 56700 + 56700,
  },
  {
    date: "16/04/2023",
    type: "Faster Payment",
    description: "Amazon",
    paidIn: 0,
    paidOut: 200000,
    balance: 21000000 + 56700 + 56700 + 56700,
  },
  {
    date: "16/04/2023",
    type: "BL@21",
    description: "Business Loan",
    paidIn: 33000000,
    paidOut: 0,
    balance: 21000000 + 56700 + 56700 + 56700 + 200000,
  },
  {
    date: "16/04/2023",
    type: "School Pay",
    description: "St. Mary's College Kisubi",
    paidIn: 0,
    paidOut: 2100000,
    balance: 21000000 + 56700 + 56700 + 56700 + 200000,
  },
  {
    date: "16/04/2023",
    type: "School Pay",
    description: "St. Mary's Kitende S.S",
    paidIn: 0,
    paidOut: 1700000,
    balance: 21000000 + 56700 + 56700 + 56700 + 200000,
  },
];
