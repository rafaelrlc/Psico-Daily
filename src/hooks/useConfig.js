import { useMemo } from "react";

const useConfig = (authToken) => {
  const config = useMemo(
    () => ({
      headers: {
        "Content-Type": "application/json",
        "x-access-token": authToken,
      },
    }),
    [authToken]
  );

  return config;
};

export default useConfig;
