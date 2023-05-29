import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header({ title, subtitle, color }) {
  return (
    <Box mb="20px">
      <Typography component="h1" variant="h4" color={color} fontWeight="bold">
        {title}.
      </Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  );
}
