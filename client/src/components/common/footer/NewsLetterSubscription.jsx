// src/components/common/Footer/NewsletterSubscription.js
import { useState } from "react";
import { Link } from "react-router";

const NewsletterSubscription = ({ isVisible }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    // API call would go here
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-8 border-b border-white/20 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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
              className={`px-10 py-4 rounded-lg bg-prussian-blue-400/70 backdrop-blur-sm w-full md:w-80 text-white placeholder-sky-blue-300 focus:outline-none ${isValidEmail
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
  );
};

export default NewsletterSubscription;
