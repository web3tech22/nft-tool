import * as React from "react";

// import videoMp4 from "../../assets/images/VZqv.gif";
import videoData from "../../assets/images/video.mp4";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};

export default function MultiActionAreaCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            <video height="400" width="730" autoPlay controls>
              <source src={videoData} type="video/mp4" />
              <source src={videoData} type="video/ogg" />
              Your browser does not support HTML video.
            </video>
          </Typography>
        </Box>
      </Modal>

      <Box style={{ marginTop: 50 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={4} sm={12}>
            <Card style={{ padding: 20, borderRadius: 0, height: 420 }}>
              <Typography
                component="h3"
                variant="h7"
                textAlign="left"
                color="text.primary"
                style={{ fontSize: 17, fontWeight: "bold" }}
              >
                Our Metaverse
              </Typography>
              <Typography
                component="h5"
                variant="h7"
                textAlign="left"
                color="text.primary"
                style={{ fontSize: 17, marginTop: 30 }}
              >
                he person uses a tool to calculate the emissions released on
                that flight and then buys a carbon credit from a broker to
                offset that amount of emissions. The broker subtracts its fee
                and uses the rest of the money to invest in an emissions
                project, such as a reforestation effort.
              </Typography>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sm={12}
            style={{ overflow: "hidden", cursor: "pointer" }}
          >
            <CardMedia
              component="video"
              // onClick={(e) => window.open(videoData)}
              onClick={handleOpen}
              image={videoData}
            />
            {/* <img
            src={videoMp4}
            alt="gg"
            height={325}
            width={580}
            style={{ float: "left" }}
          /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
