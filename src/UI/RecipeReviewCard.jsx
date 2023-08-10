import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Prompt from "../UI/Prompt";
import Paises from "./Paises";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Travel over the world"
        subheader="Search for the perfect place to travel."
      />
      <CardMedia
        component="img"
        height="194"
        image="images/map-of-the-world.jpg"
        alt="World map"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" paragraph>
          Travel is the movement of people between distant geographical
          locations. Travel can be done by foot, bicycle, automobile, train,
          boat, bus, airplane, ship or other means, with or without luggage, and
          can be one way or round trip. Travel can also include relatively short
          stays between successive movements, as in the case of tourism.
          <br />
        </Typography>
        <Typography
          style={{ paddingBottom: "8px" }}
          variant="body2"
          color="text.secondary"
          paragraph
        >
          From Wikipedia, the free encyclopedia
          <br />
        </Typography>

        <Typography style={{ padding: "8px" }} paragraph>
          <Paises />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Prompt titulo="Share our post" />

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary" paragraph>
            <h3>Purpose and motivation</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Reasons for traveling include recreation, holidays, rejuvenation,
            tourism or vacationing, research travel, the gathering of
            information, visiting people, volunteer travel for charity,
            migration to begin life somewhere else, religious pilgrimages and
            mission trips, business travel, trade, commuting, obtaining health
            care, waging or fleeing war, for the enjoyment of traveling, or
            other reasons. Travelers may use human-powered transport such as
            walking or bicycling; or vehicles, such as public transport,
            automobiles, trains, ferries, boats, cruise ships and airplanes.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Motives for travel include:
            <ul>
              <li>Pleasure</li>
              <li>Relaxation</li>
              <li>Discovery and exploration</li>
              <li>Adventure</li>
              <li>Intercultural communications</li>
              <li>
                Taking personal time for building interpersonal relationships.
              </li>
              <li>Avoiding stress</li>
              <li>Forming memories</li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
