import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface modalItems {
  isModalOpen: boolean;
  title: string;
  body: string;
}

const TransitionsModal: React.FC<modalItems> = ({
  isModalOpen,
  title,
  body,
}): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(!isModalOpen);
    // isModalOpen = false;
  };
  useEffect(() => {
    setOpen(isModalOpen);
  }, [isModalOpen]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {body}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
