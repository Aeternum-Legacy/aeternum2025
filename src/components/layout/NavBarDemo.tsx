

"use client";

import { useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarBrowserLogo,
  NavbarMdLogo,
} from "@/components/ui/ResizableNavbar";
import { SignUpButton } from "../ui/SignUpButton";
import { useRouter } from "next/navigation";
import { useMobileNav } from "@/context/MobileNavContext";

const navItems = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/pricing", label: "Pricing Information" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Updates",
    links: [
      { href: "/news", label: "News" },
      { href: "/development", label: "Development Progress" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/#signup", label: "Sign Up" },
    ],
  },
];

export function NavbarDemo() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileNav();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarMdLogo />
          <NavbarBrowserLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton href="/#signup" variant="primary">
              Sign Up
            </NavbarButton> */}
          </div>
        </NavBody>

        <MobileNav className="fixed top-0 left-0 w-full z-50 md:relative">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={navItems}
          >
            <div className="flex flex-col gap-4 px-8 pb-8">
              <SignUpButton
                text="Sign Up"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("/#signup");
                }}
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
