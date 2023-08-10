import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";

export default function ListaPersonas({ personas }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {personas?.map((persona) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={persona.nom} secondary={persona.titulo} />
        </ListItem>
      ))}
    </List>
  );
}
