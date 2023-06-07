import axios from "axios";
import useAuth from "@/hooks/useAuth";
const BASE_URL = "https://psicodaily-api-production-5d36.up.railway.app";

const AxiosApi = () => {
  const { accessToken } = useAuth();
  const privateApi = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
  });

  const api = axios.create({
    baseURL: BASE_URL,
  });

  return { privateApi, api };
};

export default AxiosApi;
