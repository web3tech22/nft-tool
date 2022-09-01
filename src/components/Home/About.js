import * as React from "react";
import ImgGif from "../../assets/images/download.jpg";
import OffsetImg from "../../assets/images/img-strategyand-history.png";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

export default function MultiActionAreaCard() {
  return (
    <Grid container spacing={0} style={{ marginBottom: 50 }}>
      <Grid item xs={12} md={6} sm={12} style={{ overflow: "hidden" }}>
        <img
          src={ImgGif}
          alt="gg"
          height={510}
          width={590}
          style={{ float: "left" }}
        />
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <Card style={{ padding: 20, borderRadius: 0 }}>
          <Typography
            component="h3"
            variant="h7"
            textAlign="left"
            color="text.primary"
            style={{ fontSize: 17, fontWeight: "bold" }}
          >
            Calcutta in 1880
          </Typography>
          <Typography
            component="h5"
            variant="h7"
            textAlign="left"
            color="text.primary"
            style={{ fontSize: 17, marginTop: 30 }}
          >
            Hark back to 1880. The city which Job Charnock, then agent of the
            East India Company, founded on that monsoon afternoon of 24th August
            1690 and which grew on the site of the three fishing villages of
            Gobindapur, Sutanuti and Dihi Kolikata (which his successor and son
            in law Charles Eyre purchased for the Company, for a sum of Rupees
            1,300 from the Sabarno Roy Chaudhuri family on 10th November 1698)
            had, by 1880, become the most important centre of economic and
            administrative activity east of the Suez
          </Typography>
        </Card>
        <img
          src={OffsetImg}
          alt="gg"
          height={260}
          width="100%"
          style={{ float: "left" }}
        />
      </Grid>
    </Grid>
  );
}
