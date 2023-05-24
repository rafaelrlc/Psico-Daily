import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth/authProvider";
const PrivateRoute = ({ allowedRoute, children }) => {
  const router = useRouter();
  const auth = useAuth();
  const role = auth.role;

  useEffect(() => {
    if (auth.accessToken === null) {
      router.push("/");
    } else if (allowedRoute !== role) {
      router.push("/");
    }
  }, [auth.accessToken]);

  return <div>{children}</div>;
};

export default PrivateRoute;
