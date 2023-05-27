import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Container,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Header({ title, description, bgcolor }) {
  return (
    // Hero section
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "65vh",
          bgcolor: "orange",
          backgroundImage: `url('../../neom.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <AccountBalanceIcon color="#fff" />
          <Typography variant="h3" fontWeight="bold" color="#fff">
            {title}
          </Typography>
          <Card style={{ marginRight: "20px" }}>
            <CardActionArea>
              <CardContent>
                <Typography mr="30px" color="blue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  voluptatibus hic aliquid assumenda, ullam necessitatibus harum
                  quos quae expedita deserunt? Sit, aspernatur distinctio veniam
                  molestias perferendis tempore molestiae nemo, exercitationem
                  dicta numquam deleniti necessitatibus quas soluta ab sint
                  quasi odit atque, reiciendis ut architecto! Porro, quaerat?
                  Tempore, quaerat. Atque, error?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Button
            startIcon={<AccountBalanceIcon />}
            variant="contained"
            color="info"
            sx={{ mt: 2 }}
          >
            Contained
          </Button>
        </Box>
        <Card sx={{ maxWidth: 345, padding: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../credit-card.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species accrss the world.
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardContent>
            <Typography variant="h6" fontWeight="bold" color="blue" mb="10px">
              {title}
            </Typography>
            <Typography component="div" variant="body2">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button startIcon={<ShareIcon />} size="small" color="primary">
              Share
            </Button>
            <Button startIcon={<LocationOnIcon />} size="small" color="primary">
              Locate
            </Button>
            <Button
              startIcon={<AccountBalanceIcon />}
              size="small"
              color="primary"
            >
              Deadline
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
