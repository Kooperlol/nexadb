"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export function ParallaxProvider_({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}

export default ParallaxProvider_;
