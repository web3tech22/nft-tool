import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Blog1 from "../../assets/images/w1-min.jpeg";
import Blog2 from "../../assets/images/item3.png";
import Blog3 from "../../assets/images/w3-min.jpeg";
import Blog4 from "../../assets/images/w16-min.jpeg";
import Blog5 from "../../assets/images/w4-min.jpeg";
import Blog6 from "../../assets/images/w5-min.jpeg";
import Blog7 from "../../assets/images/w6-min.jpeg";
import Blog8 from "../../assets/images/w7-min.jpeg";
import Blog9 from "../../assets/images/w8-min.jpeg";
import Blog10 from "../../assets/images/w15-min.jpeg";
import Blog11 from "../../assets/images/w10-min.jpeg";
import Blog12 from "../../assets/images/w11-min.jpeg";
import Blog13 from "../../assets/images/w12-min.jpeg";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

export default function RecipeReviewCard() {
  const cardUI = (img, tokenId) => {
    return (
      <Box
        sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}
        onClick={(e) => window.open(`/details/${tokenId}`)}
      >
        <ImageButton
          focusRipple
          style={{
            width: "100%",
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${img})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image></Image>
        </ImageButton>
      </Box>
    );
  };

  return (
    <>
      <Grid container spacing={1} style={{ marginTop: 20 }}>
        <Grid item xs={12}>
          <Typography
            component="h3"
            variant="h7"
            textAlign="left"
            color="text.primary"
            style={{ fontSize: 17, fontWeight: "bold" }}
          >
            Some Exclusives
          </Typography>
          <br />
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog1, 1)}
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          {cardUI(Blog2, 2)}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog3, 3)}
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          {cardUI(Blog4, 4)}
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          {cardUI(Blog5, 5)}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog6, 3)}
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          {cardUI(Blog7, 3)}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog8, 3)}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog9, 3)}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog10, 3)}
        </Grid>

        <Grid item xs={4} sm={4} md={4} lg={4}>
          {cardUI(Blog11, 1)}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog12, 2)}
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {cardUI(Blog13, 3)}
        </Grid>
      </Grid>
    </>
  );
}
