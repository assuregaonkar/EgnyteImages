import { Modal as MUIModal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <MUIModal
      sx={{ display: "flex", justifyContent: "center" }}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </MUIModal>
  );
};

export default Modal;
