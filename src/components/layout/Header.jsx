"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { contactEmail, navigation } from "@/data/siteData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="BrandStory home">
        BRANDSTORY<sup>®</sup>
      </Link>
      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="primary-navigation" className={`primary-navigation${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {navigation.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setIsOpen(false)}>
            {label}<ChevronDown size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <a className="quote-button" href= "#">Get quote</a>
    </header>
  );
}
