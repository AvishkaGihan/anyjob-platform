import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  SOCIAL_PLATFORMS,
  NAV_ITEMS,
  LEGAL_LINKS,
  CONTACT_INFO,
  LANGUAGES,
} from "../../utils/constants";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const footerRef = useRef(null);

  // Validate email format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setIsValidEmail(true);
      return;
    }

    if (validateEmail(email)) {
      // Here you would normally send the email to your backend
      console.log("Subscribing with:", email);
      setIsSubscribed(true);
      setEmail("");

      // Reset subscription message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    } else {
      setIsValidEmail(false);
    }
  };

  useEffect(() => {
    const targetElement = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    console.log(`Changing language to: ${langCode}`);
    // Implement your language change logic here
  };

  return (
    <footer
      ref={footerRef}
      className="bg-prussian-blue-500 py-16 relative overflow-hidden"
    >
      {/* Background elements remain the same */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-32 right-1/3 w-80 h-80 bg-selective-yellow-500 rounded-full mix-blend-multiply opacity-3 blur-3xl"
          style={{ animation: "pulse 15s infinite ease-in-out" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-green-500 rounded-full mix-blend-multiply opacity-3 blur-3xl"
          style={{ animation: "pulse 18s infinite ease-in-out" }}
        ></div>
        <div
          className="absolute top-1/3 left-2/3 w-72 h-72 bg-ut-orange-500 rounded-full mix-blend-multiply opacity-3 blur-3xl"
          style={{ animation: "pulse 20s infinite ease-in-out" }}
        ></div>

        {/* Fine grid pattern for texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Footer top with logo and newsletter */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-8 border-b border-white/20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-glow-blue transition-transform duration-500 group-hover:rotate-12">
                <span className="text-prussian-blue-500 font-bold text-2xl">
                  A
                </span>
              </div>
              <span className="text-3xl font-bold text-white">AnyJob</span>
            </Link>
            <p className="text-white mt-4 max-w-md text-lg">
              Connecting customers with trusted professionals for any service
              you need, anywhere, anytime.
            </p>
          </div>

          {/* Enhanced newsletter component */}
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-sky-blue-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValidEmail(true); // Reset validation on change
                  }}
                  className={`px-10 py-4 rounded-lg bg-prussian-blue-400/70 backdrop-blur-sm w-full md:w-80 text-white placeholder-sky-blue-300 focus:outline-none ${
                    isValidEmail
                      ? "border border-sky-blue-500 focus:border-selective-yellow-500"
                      : "border-2 border-ut-orange-500"
                  } transition-all duration-300`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    type="submit"
                    className="h-full px-4 flex items-center justify-center text-white hover:text-selective-yellow-500 transition-colors duration-300"
                    aria-label="Subscribe"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Feedback messages */}
              {!isValidEmail && (
                <p className="text-ut-orange-500 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Please enter a valid email address
                </p>
              )}

              {isSubscribed && (
                <p className="text-blue-green-500 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Thanks for subscribing!
                </p>
              )}

              <p className="text-sky-blue-400 text-xs">
                Get the latest updates, news and special offers
              </p>
            </form>
          </div>
        </div>

        {/* Rest of the footer content remains the same */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-ut-orange-500 pb-2 inline-block">
              Company
            </h3>
            <p className="text-white/90 mb-8 leading-relaxed">
              Providing quality services through our network of skilled
              professionals since 2025.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-5">
              {SOCIAL_PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="group"
                  aria-label={platform.name}
                >
                  <div className="w-10 h-10 rounded-full bg-prussian-blue-400 flex items-center justify-center text-white border border-sky-blue-600 hover:border-blue-green-500 group-hover:bg-blue-green-500 transition-all duration-300">
                    <span className="sr-only">{platform.name}</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={platform.icon} />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links section remains the same */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-blue-green-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white hover:text-blue-green-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-blue-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal section remains the same */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-selective-yellow-500 pb-2 inline-block">
              Legal
            </h3>
            <ul className="space-y-4">
              {LEGAL_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white hover:text-selective-yellow-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-selective-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section remains the same */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-ut-orange-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item, index) => (
                <li key={index} className="flex items-center text-white">
                  <div className="mr-3 flex items-center justify-center w-8 h-8 bg-prussian-blue-400 rounded-full">
                    <span>{item.icon}</span>
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright section remains the same */}
        <div
          className={`pt-6 mt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-5 transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-white">
            &copy; {new Date().getFullYear()} AnyJob Platform. All rights
            reserved.
          </p>
          {/* Language selector */}
          <div className="flex gap-6">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className="text-white hover:text-blue-green-500 transition-colors duration-300"
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
