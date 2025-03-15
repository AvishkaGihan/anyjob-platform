import { Link } from "react-router"; // Fix import path
import { useState, useEffect, useRef } from "react";

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

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
            <div className="flex gap-5">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                (platform, index) => (
                  <a
                    key={platform}
                    href={`https://${platform.toLowerCase()}.com`}
                    className="group"
                    aria-label={platform}
                  >
                    <div className="w-10 h-10 rounded-full bg-prussian-blue-400 flex items-center justify-center text-white border border-sky-blue-600 hover:border-blue-green-500 group-hover:bg-blue-green-500 transition-all duration-300">
                      <span className="sr-only">{platform}</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d={
                            index === 0
                              ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                              : index === 1
                              ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              : index === 2
                              ? "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              : "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          }
                        />
                      </svg>
                    </div>
                  </a>
                )
              )}
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
            {/* ... existing quick links content ... */}
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-blue-green-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "")}`
                    }
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
                    {item}
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
            {/* ... existing legal content ... */}
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-selective-yellow-500 pb-2 inline-block">
              Legal
            </h3>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
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
                      {item}
                    </Link>
                  </li>
                )
              )}
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
            {/* ... existing contact content ... */}
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-ut-orange-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                { icon: "🏢", text: "AnyJob Inc." },
                { icon: "📍", text: "123 Service Street" },
                { icon: "🌆", text: "Marketplace City, MP 12345" },
                { icon: "✉️", text: "info@anyjob.com" },
                { icon: "📱", text: "(123) 456-7890" },
              ].map((item, index) => (
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
          <div className="flex gap-6">
            {["English", "Español", "Français"].map((lang) => (
              <button
                key={lang}
                className="text-white hover:text-blue-green-500 transition-colors duration-300"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
