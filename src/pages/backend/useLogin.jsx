import { useEffect } from "react";
import Cookies from "js-cookie";

export const useLogin = () => {
  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      window.location.href = "/backend";
    }
    

    
  }, []);
};
