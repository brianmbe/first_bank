import React from "react";
import { Header } from "./index";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { notificationsData } from "./data";

export default function Notifications() {
  return (
    <Box>
      <Header
        title="Notifications"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        color="#13395e"
      />

      {/* content */}
      <Box pr="30px">
        <Card
          sx={{
            bgcolor: "transparent",
            border: "2px solid #eee",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography fontWeight="bold">Emails Settings</Typography>
            <Typography pr="120px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              minima saepe amet.
            </Typography>
          </CardContent>
          <CardContent>
            {notificationsData.map((data) => (
              <Box mb="10px">
                <Box display="flex">
                  {data.icon}
                  <Typography fontWeight="bold" pl="10px">
                    {data.title}
                  </Typography>
                </Box>
                <Typography pl="30px">{data.description}</Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
