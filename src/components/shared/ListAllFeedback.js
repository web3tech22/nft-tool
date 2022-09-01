import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RatingView from "./Rating";

const getDateStringServ = (timestamp) => {
  const plus0 = (num) => `0${num.toString()}`.slice(-2);

  const d = new Date(timestamp);

  const year = d.getFullYear();
  const monthTmp = d.getMonth() + 1;
  const month = plus0(monthTmp);
  const date = plus0(d.getDate());
  const hour = plus0(d.getHours());
  const minute = plus0(d.getMinutes());
  const second = plus0(d.getSeconds());
  //   const rest = timestamp.toString().slice(-5);

  return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { authorName, date, description, value } = data;

  const conditionForAccordian = description?.length > 150;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={authorName}
        subheader={date && getDateStringServ(date)}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {value && <RatingView rating={value} />}
          {description && description?.slice(0, 150)}{" "}
          {conditionForAccordian && `...`}
        </Typography>
      </CardContent>
      {conditionForAccordian && (
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
