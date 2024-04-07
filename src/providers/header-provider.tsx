"use client";
import AdminHeader from "@/components/admin/header";
import Header from "@/components/header/header";
import { usePathname } from "next/navigation";

import React from "react";

const HeaderProvider = () => {
  const path = usePathname();
  if (path.includes("admin")) {
    return <AdminHeader />;
  }
  return <Header />;
};

export default HeaderProvider;
