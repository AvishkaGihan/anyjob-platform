// src/components/common/Footer/NewsletterSubscription.js
import { AlertCircle, ArrowRight, Mail, MailIcon } from "lucide-react";
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
      className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-8 border-b border-white/20 transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-8 md:mb-0">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-glow-blue transition-transform duration-500 group-hover:rotate-12">
            <span className="text-prussian-blue-500 font-bold text-2xl">A</span>
          </div>
          <span className="text-3xl font-bold text-white">AnyJob</span>
        </Link>
        <p className="text-white mt-4 max-w-md text-lg">
          Connecting customers with trusted professionals for any service you
          need, anywhere, anytime.
        </p>
      </div>

      {/* Enhanced newsletter component */}
      <div className="w-full md:w-auto">
        <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="w-5 h-5" />
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
                <ArrowRight className="w-5 h-5 cursor-pointer" />
              </button>
            </div>
          </div>

          {/* Feedback messages */}
          {!isValidEmail && (
            <p className="text-ut-orange-500 text-sm flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Please enter a valid email address
            </p>
          )}

          {isSubscribed && (
            <p className="text-blue-green-500 text-sm flex items-center">
              <ArrowRight className="w-5 h-5" />
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
