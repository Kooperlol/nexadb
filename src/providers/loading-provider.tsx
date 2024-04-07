"use client";
import LoadingPage from "@/app/[locale]/loading";
import React, { createContext, useState } from "react";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: (value: boolean) => {},
});

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  console.log("isLoading", isLoading);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? <LoadingPage /> : children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => React.useContext(LoadingContext);
