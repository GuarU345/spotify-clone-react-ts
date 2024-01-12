import { useState } from "react";

export const useOpen = () => {
  const [open, setOpen] = useState(false);

  const handleZoomImage = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return { open, handleClose, handleZoomImage };
};
