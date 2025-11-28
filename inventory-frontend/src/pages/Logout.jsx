import { useEffect, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function LogoutPage() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  return null; // or small message if you want
}
