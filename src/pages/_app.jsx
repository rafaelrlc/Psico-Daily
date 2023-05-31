import "../../styles/global.css";
import AuthContextProvider from "@/context/auth/authProvider";
import MainLayout from "@/components/Layouts/MainLayout";
import Particles from "react-tsparticles";
import { among } from "../../utils/backgrounds";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthContextProvider>
  );
}
