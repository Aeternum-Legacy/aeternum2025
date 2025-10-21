"use client";
import { useEffect } from "react";

export default function NoHorizontalScrollClient() {
  useEffect(() => {
    const originalOverflowX = document.documentElement.style.overflowX;
    const originalBodyOverflowX = document.body.style.overflowX;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = originalOverflowX;
      document.body.style.overflowX = originalBodyOverflowX;
    };
  }, []);

  return null;
}
