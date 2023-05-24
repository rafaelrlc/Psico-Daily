import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth/authProvider";
const PrivateRoute = ({ allowedRoute, children }) => {
  const router = useRouter();
  const auth = useAuth();
  const role = auth.role;

  useEffect(() => {
    console.log("ROLE", role);
    if (auth.accessToken === null) {
      console.log("1");
      router.push("/");
    } else if (allowedRoute !== role) {
      console.log("2");
      router.push("/");
    }
  }, [auth.accessToken]);

  return <div>{children}</div>;
};

export default PrivateRoute;
