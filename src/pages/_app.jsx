import "../../styles/global.css";
import AuthContextProvider from "@/context/auth/authProvider";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}