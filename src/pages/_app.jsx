import "../../styles/global.css";
import AuthContextProvider from "@/context/auth/authProvider";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
