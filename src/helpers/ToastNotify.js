import { toast } from "react-toastify";

export const toastWarning=(msg)=>  {
  
  toast.warn(msg, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });
}
export const toastSuccess=(msg)=>  {
  
  toast.success(msg, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  });
}