// src/components/common/Footer/Footer.js
import { useRef } from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import ContactInfo from "./ContactInfo";
import LegalLinks from "./LegalLinks";
import SocialLinks from "./SocialLinks";
import QuickLinks from "./QuickLinks";
import NewsletterSubscription from "./NewsletterSubscription";
import Copyright from "./Copyright";

const Footer = () => {
  const footerRef = useRef(null);
  const isVisible = useIntersectionObserver(footerRef, { threshold: 0.1 });

  return (
    <footer
      ref={footerRef}
      className="bg-prussian-blue-500 py-16 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-32 right-1/3 w-80 h-80 bg-selective-yellow-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-green-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Newsletter */}
        <div className="mb-8">
          <NewsletterSubscription isVisible={isVisible} />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Socials */}
          <div className="space-y-6">
            <div className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <SocialLinks isVisible={isVisible} />
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-opacity duration-500 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <QuickLinks isVisible={isVisible} />
          </div>


          {/* Legal Links */}
          <div className={`transition-opacity duration-500 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <LegalLinks isVisible={isVisible} />
          </div>

          {/* Contact Info */}
          <div className={`transition-opacity duration-500 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <ContactInfo isVisible={isVisible} />
          </div>
        </div>

        {/* Copyright Section */}
        <Copyright isVisible={isVisible} />
      </div>
    </footer>
  );
};

export default Footer;