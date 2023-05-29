import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

const toggleOffOutlined = "#B8C1C3";
const toggleOnOutlined = "blue";

export const notificationsData = [
  {
    title: "Emails Settings",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam`,
    icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
  },
  {
    title: "Tips & tutorials",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam minima saepe amet tempora animi nobis.",
    icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
  },
  {
    title: "User Research",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam minima saepe amet tempora
      animi nobis fuga error iusto molestias veniam, Totam minima saepe amet tempora 
      animi nobis fuga error iusto molestias veniam?`,
    icon: <ToggleOffOutlinedIcon sx={{ color: toggleOffOutlined }} />,
  },
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
    icon: <ToggleOffOutlinedIcon sx={{ color: toggleOffOutlined }} />,
  },
  {
    title: "Your frequent activities",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Totam minima saepe amet tempora animi nobis fuga error iusto molestias veniam?`,
    icon: <ToggleOnOutlinedIcon sx={{ color: toggleOnOutlined }} />,
  },
];
