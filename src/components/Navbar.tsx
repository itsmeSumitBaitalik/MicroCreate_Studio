import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, ArrowUpRightIcon } from "lucide-react";
import { navLinks, LOGO_SRC } from "../data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Handle navbar background when scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu whenever the route changes (key changes even for same-path navigations)
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.key]);

  // Close mobile menu when clicking/tapping outside the navbar
  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [open]);

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-ink/10 py-2 pl-3 pr-2 transition-all duration-500 sm:pl-5 ${
          scrolled
            ? "bg-cream/95 shadow-[0_18px_50px_-24px_rgba(26,22,19,0.55)] backdrop-blur-md"
            : "bg-cream/80 shadow-[0_10px_40px_-28px_rgba(26,22,19,0.45)] backdrop-blur"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Microcrete Studio — home"
        >
          <img
            src={LOGO_SRC}
            alt="Microcrete Studio"
             className="h-14 max-w-none origin-left scale-[1.35] sm:scale-[1.45] lg:scale-[1.45] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative block rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    isActive ? "bg-sand text-ink" : "text-ink/70 hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Desktop Get Quote */}
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-medium tracking-wide text-cream transition-colors hover:bg-gold sm:inline-flex"
          >
            Get Quote
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-cream lg:hidden"
          >
            {open ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-ink/10 bg-cream/95 p-3 shadow-xl backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 font-display text-2xl transition-colors ${
                        isActive ? "bg-sand text-ink" : "text-ink hover:bg-sand"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Get Quote */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-2xl bg-ink px-5 py-4 text-sm font-medium text-cream transition-colors hover:bg-gold"
            >
              Get Quote
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
