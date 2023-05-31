import AuthContext from "@/context/auth/authContext";
import { useContext } from "react";
const useAuth = () => useContext(AuthContext);

export default useAuth;
