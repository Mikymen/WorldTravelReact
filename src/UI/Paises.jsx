import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import agent from "../API/agent";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MapIcon from "@mui/icons-material/Map";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";

const regiones = ["america", "europe", "asia", "africa", "oceania"];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "90%",
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 4,
  typography: "body1"
};

export default function Paises() {
  const [region, setRegion] = React.useState("");
  const [paises, setPaises] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [mapa, setMapa] = React.useState("");
  const handleClose = () => setOpen(false);

  const handleRegion = (event) => {
    setRegion(event.target.value);

    agent.Countries.region(event.target.value).then((response) => {
      setPaises(response);
    });
  };
  const urlMapa = "https://geology.com/world";

  const handlePais = (event, con) => {
    setOpen(true);
    let pais = con.name.common.split(" ").join("-");
    let ruta = urlMapa + ("/" + pais + "-map.gif").toLowerCase();
    setMapa(ruta);
    console.log(ruta);
  };

  // React.useEffect(() => {

  // }, []);

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Select region"
            onChange={handleRegion}
          >
            {regiones.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>

          <List
            sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
          >
            {paises.map((con) => (
              <div key={con.name.common}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Flag image"
                      src={con.flags.png}
                      variant="rounded"
                      sx={{
                        width: 76,
                        height: 56,
                        margin: 2,
                        border: "1px solid black"
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={con.name.official}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {con.name.common}
                        </Typography>
                        {con.flags.alt}
                      </React.Fragment>
                    }
                  />
                  <IconButton
                    aria-label="map"
                    onClick={(e) => handlePais(e, con)}
                  >
                    <MapIcon />
                  </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
          </List>
        </FormControl>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img alt="mapa" style={{ height: "100%" }} src={mapa} />
          <div style={{ width: "100%", display: "inline-block" }}>
            <span>You can find more information at: </span>
            <Link
              target="_blank"
              rel="noreferrer"
              href={urlMapa}
              underline="always"
            >
              {urlMapa}
            </Link>
          </div>
        </Box>
      </Modal>
    </>
  );
}
