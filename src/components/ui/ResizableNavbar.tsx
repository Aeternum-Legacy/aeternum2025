"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed top-2 left-4 right-4 z-40 w-auto transition-shadow duration-300 md:shadow-none",
        visible && "shadow-md",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible
        ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
        : "none",
      width: visible ? "40%" : "100%",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    style={{ minWidth: "800px" }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-black px-6 py-2 text-white md:flex",
      className
    )}
  >
    {children}
  </motion.div>
);

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: { title: string; links: { href: string; label: string }[] }[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const menuRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isOutside = Object.values(menuRefs.current).every(
        (ref) => ref && !ref.contains(e.target as Node)
      );
      if (isOutside) {
        setOpenMenu(null);
        setHovered(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      onMouseLeave={() => openMenu === null && setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 md:flex lg:space-x-2",
        className
      )}
    >
      {items.map(({ title, links }, idx) => (
        <div
          key={title}
          className="relative"
          ref={(el) => {
            menuRefs.current[idx] = el;
          }}
        >
          <button
            onMouseEnter={() => setHovered(idx)}
            onClick={() => setOpenMenu((prev) => (prev === idx ? null : idx))}
            className="relative px-4 py-2 text-gray-300 hover:text-black dark:text-neutral-300"
          >
            {(hovered === idx || openMenu === idx) && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800 z-0"
              />
            )}
            <span className="relative z-20">{title}</span>
          </button>
          <AnimatePresence>
            {openMenu === idx && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-full mt-3 w-40 -translate-x-1/2 rounded-md bg-black text-white shadow-lg z-50 p-2"
              >
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={onItemClick}
                    className="block px-3 py-2 text-sm rounded hover:bg-white hover:text-black transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => (
  <div
    className={cn(
      "relative z-50 w-full md:hidden transition-shadow duration-300",
      visible && "shadow-md",
      className
    )}
  >
    {children}
  </div>
);

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "h-16 w-full flex items-center justify-between px-4 bg-white dark:bg-neutral-950 dark:border-neutral-800",
      className
    )}
  >
    {children}
  </div>
);

interface MobileNavMenuProps {
  navItems: {
    title: string;
    links: { href: string; label: string }[];
  }[];
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const MobileNavMenu = ({
  navItems,
  className,
  isOpen,
  onClose,
  children,
}: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        data-mobile-nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "fixed inset-0 z-50 bg-white dark:bg-neutral-950 overflow-y-auto",
          className
        )}
      >
        <div className="sticky top-0 z-50 h-16 px-4 flex items-center justify-between bg-white dark:bg-neutral-950 dark:border-neutral-800">
          <NavbarLogo onClick={onClose} />
          <button onClick={onClose} className="text-black dark:text-white">
            <IconX size={24} />
          </button>
        </div>

        <div className="space-y-5 p-8">
          {navItems.map((item) => {
            const filteredLinks = item.links.filter(
              (link) => !["Sign Up", "Login"].includes(link.label)
            );

            if (filteredLinks.length === 0) return null;

            return (
              <div key={item.title} className="w-full">
                <h3 className="text-gray-800 dark:text-white text-3xl mb-2 tracking-wider">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {filteredLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="text-xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) =>
  isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );

export const NavbarLogo = ({ onClick }: { onClick?: () => void }) => (
  <a
    href="/"
    onClick={onClick}
    className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
  >
    <img src="/icons/aeternum-logo4.svg" alt="logo" width={120} height={30} />
  </a>
);

export const NavbarBrowserLogo = ({ onClick }: { onClick?: () => void }) => (
  <a
    href="/"
    onClick={onClick}
    className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black dark:text-white"
  >
    <img src="/icons/aeternum-logo.svg" alt="logo" width={120} height={30} />
  </a>
);

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-full bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
