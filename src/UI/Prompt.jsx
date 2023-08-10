import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import ListaPersonas from "./ListaPersonas";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 4
};

const personas = [
  { id: 1, nom: "Linkedin", titulo: "Social media" },
  { id: 2, nom: "Facebook", titulo: "Social media" },
  { id: 3, nom: "Twitter", titulo: "Social media" },
  { id: 4, nom: "YouTube", titulo: "Social media" }
];

export default function Prompt({ titulo }) {
  console.log(titulo);
  const [open, setOpen] = React.useState(false);
  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)} aria-label="share">
        <ShareIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {titulo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please recommend our article to your family and friends.
          </Typography>
          <ListaPersonas personas={personas} />
        </Box>
      </Modal>
    </div>
  );
}
