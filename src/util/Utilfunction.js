import { toast } from "react-toastify";

export const toastErrMessage = (message) => {
    toast.error(message, {
      position: "bottom-center",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      autoClose: 3000,
    });
  };

  export const toastSuccessMessage = (message) => {
    toast.success(message, {
      position: "bottom-center",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      autoClose: 3000,
    });
  };