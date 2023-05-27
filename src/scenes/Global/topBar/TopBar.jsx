import React from "react";
import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { SearchOffOutlined } from "@mui/icons-material";

export default function TopBar() {
  return (
    <Box display="flex" p={2} justifyContent="space-between">
      {/* SearchBox */}
      <Box display="flex" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} />
        <IconButton>
          <SearchOffOutlined />
        </IconButton>
      </Box>
    </Box>
  );
}
