import React from "react"
import { CardMedia } from "@mui/material";
import Modal from "../../modal";
const ModalView = ({image, index, currentIndex, onClose, modalToggle, isVideo}) => {
  return (
    <React.Fragment>
      {modalToggle >= 0 ? (
         <Modal
         isOpen={index === currentIndex}
         onClose={() => onClose()}
       >
         {isVideo(image.url) ? (
           <CardMedia
             component="video"
             image={image.url}
             title="title"
             controls
             sx={{ height: "500px" }}
           />
         ) : (
           <img src={image.url} style={{ height: "500px" }} />
         )}
       </Modal>
      ): null}
   
    </React.Fragment>
  )
}

export default React.memo(ModalView)