import { useState } from "react";

import styles from "./Navbar.module.css"; // CSS module for clean styling

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <svg className={styles.logo} width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b35" />
            <stop offset="100%" stopColor="#f7931e" />
          </linearGradient>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 107, 53, 0.1)" />
            <stop offset="100%" stopColor="rgba(247, 147, 30, 0.1)" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="50" height="40" rx="10" ry="10" fill="url(#bgGradient)" stroke="url(#logoGradient)" strokeWidth="2" />
        <text x="15" y="32" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="900" fill="url(#logoGradient)" textTransform="uppercase" letterSpacing="2">JB</text>
        <line x1="60" y1="25" x2="70" y2="25" stroke="url(#logoGradient)" strokeWidth="2" />
        <circle cx="75" cy="25" r="3" fill="url(#logoGradient)" />
      </svg>

      {/* Desktop Links */}
      <div className={styles.links}>
        <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); }}>Home</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>Projects</a>
        <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience').scrollIntoView({ behavior: 'smooth' }); }}>Experience</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>About</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
      </div>

 
      {/* Hamburger (mobile) */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : ""}`}>
        <a href="#hero" onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); }}>Home</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); }}>Projects</a>
        <a href="#experience" onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('experience').scrollIntoView({ behavior: 'smooth' }); }}>Experience</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>About</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); setIsOpen(false); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
      </div>
    </nav>
  );
}