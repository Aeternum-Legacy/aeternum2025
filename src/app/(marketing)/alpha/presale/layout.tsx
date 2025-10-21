import React from "react";
import NoHorizontalScrollClient from "@/components/NoHorizontalScrollClient";

export default function SaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        boxSizing: "border-box",
        overflowX: "hidden",
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: "-2rem",
        marginBottom: "-2rem",
      }}
    >
      <NoHorizontalScrollClient />
      {children}
    </div>
  );
}
