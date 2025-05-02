"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MobileNavContextType {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const MobileNavContext = createContext<MobileNavContextType | undefined>(
  undefined
);

export const MobileNavProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MobileNavContext.Provider
      value={{ isMobileMenuOpen, setIsMobileMenuOpen }}
    >
      {children}
    </MobileNavContext.Provider>
  );
};

export const useMobileNav = () => {
  const context = useContext(MobileNavContext);
  if (!context)
    throw new Error("useMobileNav must be used within MobileNavProvider");
  return context;
};
