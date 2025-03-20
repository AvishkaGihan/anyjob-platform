import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import PageHeader from "../components/common/pageHeader/PageHeader";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Loader,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO } from "../utils/constants/contactInfo";
import { SOCIAL_LINKS } from "../utils/constants/socialLinks";

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);
  const mapRef = useRef(null);
  const infoRef = useRef(null);

  const formVisible = useIntersectionObserver(formRef, { threshold: 0.1 });
  const mapVisible = useIntersectionObserver(mapRef, { threshold: 0.1 });
  const infoVisible = useIntersectionObserver(infoRef, { threshold: 0.1 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) newErrors.name = "Name is required";

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formState.subject.trim()) newErrors.subject = "Subject is required";
    if (!formState.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after delay
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  // Animated input placeholder
  const AnimatedInput = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    icon: Icon,
  }) => {
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);

    return (
      <div className="mb-6">
        <label className="block text-prussian-blue-400 mb-1.5 text-sm font-medium">
          {label}
        </label>
        <div
          className={`relative group transition-all duration-300 ${
            error ? "animate-shake" : ""
          }`}
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-blue-400 group-hover:text-blue-green-500 transition-colors duration-300">
            <Icon size={18} strokeWidth={1.75} />
          </div>
          <input
            ref={inputRef}
            type={type || "text"}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`w-full py-3 pl-10 pr-3 rounded-lg border ${
              error
                ? "border-ut-orange-500 ring-1 ring-ut-orange-500/30"
                : focused
                ? "border-blue-green-500 ring-2 ring-blue-green-500/20"
                : "border-sky-blue-600"
            } focus:outline-none transition-all duration-300`}
            placeholder={label}
          />
          {error && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-ut-orange-500 transition-opacity duration-300">
              <AlertCircle size={18} strokeWidth={1.75} />
            </div>
          )}
        </div>
        {error && (
          <p className="text-ut-orange-500 text-xs mt-1 ml-1 flex items-center gap-1">
            {error}
          </p>
        )}
      </div>
    );
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-blue-green-500" />,
      title: "Email Us",
      description: "Send us an email and we'll get back to you within 24 hours",
      info: "info@anyjob.com",
      action: "Email now",
    },
    {
      icon: <Phone className="h-6 w-6 text-selective-yellow-500" />,
      title: "Call Us",
      description: "Call our customer service center from 9am to 5pm",
      info: "(123) 456-7890",
      action: "Call now",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-ut-orange-500" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time for quick answers",
      info: "Available 24/7",
      action: "Start chat",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Have questions or need assistance? Reach out to our team and we'll be happy to help you with any inquiries."
      />

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={infoRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 transform ${
              infoVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-transparent hover:border-blue-green-500/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-sky-blue-800/10">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-prussian-blue-500">
                  {method.title}
                </h3>
                <p className="text-prussian-blue-400 mb-3">
                  {method.description}
                </p>
                <p className="text-blue-green-500 font-semibold mb-4">
                  {method.info}
                </p>
                <button className="flex items-center text-selective-yellow-500 font-medium hover:text-selective-yellow-600 transition-colors group">
                  <span>{method.action}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-sky-blue-900/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-selective-yellow-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-green-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              ref={formRef}
              className={`transition-all duration-1000 transform ${
                formVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-green-500 via-selective-yellow-500 to-ut-orange-500"></div>
                <h2 className="text-2xl font-bold mb-2 text-prussian-blue-500">
                  Get in Touch
                </h2>
                <p className="text-prussian-blue-400 mb-6">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                {formSubmitted ? (
                  <div className="py-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-green-500/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-blue-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-prussian-blue-500 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-prussian-blue-400 max-w-sm mb-6">
                      Thank you for reaching out. We have received your message
                      and will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 border border-blue-green-500 text-blue-green-500 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-green-50"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <AnimatedInput
                      label="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      icon={User}
                    />

                    <AnimatedInput
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      icon={Mail}
                    />

                    <AnimatedInput
                      label="Subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      error={errors.subject}
                      icon={MessageCircle}
                    />

                    <div className="mb-6">
                      <label className="block text-prussian-blue-400 mb-1.5 text-sm font-medium">
                        Message
                      </label>
                      <div
                        className={`relative transition-all duration-300 ${
                          errors.message ? "animate-shake" : ""
                        }`}
                      >
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleInputChange}
                          rows="5"
                          className={`w-full py-3 px-4 rounded-lg border ${
                            errors.message
                              ? "border-ut-orange-500 ring-1 ring-ut-orange-500/30"
                              : "border-sky-blue-600 focus:border-blue-green-500 focus:ring-2 focus:ring-blue-green-500/20"
                          } focus:outline-none transition-all duration-300`}
                          placeholder="How can we help you?"
                        />
                        {errors.message && (
                          <div className="absolute right-3 top-3 text-ut-orange-500 transition-opacity duration-300">
                            <AlertCircle size={18} strokeWidth={1.75} />
                          </div>
                        )}
                      </div>
                      {errors.message && (
                        <p className="text-ut-orange-500 text-xs mt-1 ml-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-green-600 hover:-translate-y-1 hover:shadow-glow-blue disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none relative overflow-hidden group"
                    >
                      <span
                        className={`relative z-10 flex items-center justify-center gap-2 ${
                          isSubmitting ? "opacity-0" : "opacity-100"
                        }`}
                      >
                        <Send size={18} />
                        <span>Send Message</span>
                      </span>
                      {isSubmitting && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Loader className="h-5 w-5 animate-spin" />
                        </span>
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-0 bg-prussian-blue-500 group-hover:h-full transition-all duration-300 ease-in-out"></span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map & Contact Info */}
            <div
              ref={mapRef}
              className={`transition-all duration-1000 delay-300 transform ${
                mapVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                {/* Embedded Map (placeholder) */}
                <div className="h-64 bg-sky-blue-800/5 relative overflow-hidden">
                  <div className="absolute inset-0">
                    {/* Map Background with Grid Pattern */}
                    <div className="absolute inset-0 bg-white">
                      {/* Grid Pattern */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #e0e5ec 1px, transparent 1px), linear-gradient(to bottom, #e0e5ec 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      ></div>

                      {/* Main roads */}
                      <div className="absolute left-0 right-0 top-1/2 h-4 bg-sky-blue-200 transform -translate-y-1/2"></div>
                      <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-sky-blue-200"></div>

                      {/* Secondary roads */}
                      <div className="absolute left-0 right-0 bottom-1/4 h-2 bg-sky-blue-100"></div>
                      <div className="absolute top-0 bottom-0 right-1/4 w-2 bg-sky-blue-100"></div>

                      {/* Buildings/Blocks */}
                      <div className="absolute top-[20%] left-[15%] w-[12%] h-[15%] bg-prussian-blue-100 rounded"></div>
                      <div className="absolute top-[20%] left-[30%] w-[8%] h-[10%] bg-prussian-blue-100 rounded"></div>
                      <div className="absolute bottom-[30%] right-[15%] w-[15%] h-[12%] bg-prussian-blue-100 rounded"></div>
                      <div className="absolute top-[45%] right-[35%] w-[10%] h-[10%] bg-prussian-blue-100 rounded"></div>
                      <div className="absolute bottom-[15%] left-[40%] w-[12%] h-[8%] bg-prussian-blue-100 rounded"></div>
                    </div>

                    {/* Company Location Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {/* Pulsing Circle */}
                      <div className="absolute inset-0 rounded-full bg-blue-green-500/30 animate-ping"></div>

                      {/* Marker with Icon */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-blue-green-500 z-20">
                          <MapPin className="h-8 w-8 text-blue-green-600" />
                        </div>
                        {/* Shadow/Reflection */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-prussian-blue-500/20 rounded-full blur-sm"></div>
                      </div>
                    </div>

                    {/* Interactive Overlay with Company Details */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-sky-blue-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-full bg-blue-green-500 flex-shrink-0">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-prussian-blue-500 text-sm">
                            AnyJob Headquarters
                          </h4>
                          <p className="text-prussian-blue-400 text-xs">
                            123 Service Street, Marketplace City
                          </p>
                        </div>
                        <div className="ml-auto px-2 py-1 text-xs bg-prussian-blue-500 text-white rounded flex items-center gap-1 hover:bg-blue-green-500 transition-colors cursor-pointer">
                          <span>Directions</span>
                          <svg
                            className="h-3 w-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements Hint */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-prussian-blue-500/70 backdrop-blur-sm rounded text-white text-xs flex items-center gap-1 animate-pulse">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 15L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Interactive Map</span>
                  </div>

                  {/* Zoom Controls */}
                  <div className="absolute top-12 right-3 flex flex-col bg-white shadow rounded-md overflow-hidden">
                    <button className="p-1.5 hover:bg-sky-blue-50 border-b border-sky-blue-100 transition-colors">
                      <svg
                        className="h-4 w-4 text-prussian-blue-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <button className="p-1.5 hover:bg-sky-blue-50 transition-colors">
                      <svg
                        className="h-4 w-4 text-prussian-blue-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold mb-6 text-prussian-blue-500 border-b border-sky-blue-800/10 pb-2">
                    Office Location
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-green-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-blue-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-prussian-blue-500">
                          Address
                        </h4>
                        <p className="text-prussian-blue-400">
                          123 Service Street
                        </p>
                        <p className="text-prussian-blue-400">
                          Marketplace City, MP 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-selective-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-selective-yellow-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-prussian-blue-500">
                          Phone
                        </h4>
                        <p className="text-prussian-blue-400">(123) 456-7890</p>
                        <p className="text-prussian-blue-400">(987) 654-3210</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-ut-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-ut-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-prussian-blue-500">
                          Email
                        </h4>
                        <p className="text-prussian-blue-400">
                          info@anyjob.com
                        </p>
                        <p className="text-prussian-blue-400">
                          support@anyjob.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-sky-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-prussian-blue-500">
                          Business Hours
                        </h4>
                        <p className="text-prussian-blue-400">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                        <p className="text-prussian-blue-400">
                          Weekend: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-8 pt-6 border-t border-sky-blue-800/10">
                    <h4 className="font-semibold text-prussian-blue-500 mb-4">
                      Follow Us
                    </h4>
                    <div className="flex gap-3">
                      {SOCIAL_LINKS.map((platform, index) => (
                        <a
                          key={platform.name}
                          href={platform.url}
                          className="group"
                          aria-label={platform.name}
                        >
                          <div className="w-10 h-10 rounded-full bg-prussian-blue-500/5 flex items-center justify-center text-prussian-blue-400 border border-transparent hover:border-blue-green-500/30 group-hover:text-blue-green-500 transition-all duration-300 hover:-translate-y-1">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-prussian-blue-500 relative inline-block">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-ut-orange-500"></span>
            </h2>
            <p className="text-prussian-blue-400 max-w-2xl mx-auto">
              Find answers to the most common questions about our services and
              platform.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ items would go here */}
            <p className="text-center text-prussian-blue-400">
              Have more questions?{" "}
              <a
                href="#contact-form"
                className="text-blue-green-500 hover:underline"
              >
                Contact us
              </a>{" "}
              and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// User component would be missing in your codebase, so adding it here
const User = ({ size = 18, className = "", strokeWidth = 2 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
};

export default ContactUs;
