import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [activeField, setActiveField] = useState(null); // Track active input
  const [hasInteracted, setHasInteracted] = useState(false); // Track if user has started interacting

  const navigate = useNavigate();
  const formRef = useRef(null);
  const isVisible = useIntersectionObserver(formRef, { threshold: 0.1 });

  // For demo purposes, prefill with test account
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const demo = params.get("demo");
    if (demo === "true") {
      setFormState({
        email: "demo@anyjob.com",
        password: "demopassword",
      });
    }
  }, []);

  // Initialize background particles
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles effect
    if (isVisible && !hasInteracted) {
      const particleCount = 20;
      const newParticles = Array.from({ length: particleCount }).map(
        (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          speed: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.5 + 0.1,
          color:
            i % 3 === 0
              ? "blue-green"
              : i % 3 === 1
              ? "ut-orange"
              : "selective-yellow",
        })
      );
      setParticles(newParticles);

      // Clear particles when user starts interacting
      const clearParticles = () => {
        setHasInteracted(true);
        setParticles([]);
        document.removeEventListener("click", clearParticles);
        document.removeEventListener("keydown", clearParticles);
      };

      document.addEventListener("click", clearParticles);
      document.addEventListener("keydown", clearParticles);

      return () => {
        document.removeEventListener("click", clearParticles);
        document.removeEventListener("keydown", clearParticles);
      };
    }
  }, [isVisible, hasInteracted]);

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

  const handleInputFocus = (field) => {
    setActiveField(field);
  };

  const handleInputBlur = () => {
    setActiveField(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formState.password) {
      newErrors.password = "Password is required";
    } else if (formState.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Login successful
        setLoginSuccess(true);

        // Redirect after showing success message
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        setErrors({
          form: "Invalid email or password. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider) => {
    setIsSubmitting(true);

    // Simulate OAuth redirect
    setTimeout(() => {
      console.log(`Logging in with ${provider}`);
      // In a real app, you would redirect to the OAuth provider
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-sky-blue-900/10 to-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-ut-orange-500 rounded-full mix-blend-multiply opacity-5 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-green-500 rounded-full mix-blend-multiply opacity-5 blur-3xl animate-pulse-slower"></div>

        {/* Animated particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full bg-${particle.color}-500`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${10 / particle.speed}s infinite ease-in-out`,
              animationDelay: `${particle.id * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo with enhanced animation */}
      <Link
        to="/"
        className="flex items-center gap-2 group absolute top-8 left-8 z-10"
      >
        <div className="w-10 h-10 rounded-full bg-prussian-blue-500 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative">
          <span className="text-white font-bold text-xl relative z-10">A</span>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-green-500 to-prussian-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <span className="text-xl font-bold text-prussian-blue-500 group-hover:text-blue-green-500 transition-colors duration-300">
          AnyJob
        </span>
      </Link>

      <div className="container mx-auto px-4 z-10">
        <div
          ref={formRef}
          className={`max-w-md mx-auto transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden hover:shadow-xl transition-shadow duration-500">
            {/* Ambient highlight effect */}
            <div
              className={`absolute -inset-px bg-gradient-to-tr from-blue-green-500/20 via-transparent to-selective-yellow-500/20 rounded-xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                activeField ? "opacity-100" : "hover:opacity-70"
              }`}
            ></div>

            {/* Colorful bottom border with animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
              <div className="h-full w-[200%] bg-gradient-to-r from-blue-green-500 via-selective-yellow-500 to-blue-green-500 animate-gradient"></div>
            </div>

            {/* Login form header with staggered fade-in */}
            <div className="text-center mb-8">
              <h1
                className={`text-3xl font-bold text-prussian-blue-500 mb-2 transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                Welcome Back
              </h1>
              <p
                className={`text-prussian-blue-400 transition-all duration-700 delay-300 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                Log in to access your AnyJob account
              </p>
            </div>

            {/* Form */}
            {loginSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-green-500/10 flex items-center justify-center mb-4 animate-scale-in">
                  <CheckCircle className="h-8 w-8 text-blue-green-500" />
                </div>
                <h3 className="text-xl font-bold text-prussian-blue-500 mb-2 animate-fade-in">
                  Login Successful!
                </h3>
                <p className="text-prussian-blue-400 mb-4 animate-fade-in animation-delay-200">
                  Redirecting you to your account...
                </p>
                <div className="animate-spin w-6 h-6 border-2 border-blue-green-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errors.form && (
                  <div className="mb-6 p-3 bg-ut-orange-500/10 border border-ut-orange-500/20 rounded-lg animate-shake">
                    <p className="text-ut-orange-500 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                      {errors.form}
                    </p>
                  </div>
                )}

                {/* Email field with focus animation */}
                <div
                  className={`mb-6 transition-all duration-300 transform ${
                    activeField === "email" ? "scale-102" : ""
                  }`}
                >
                  <label
                    className={`block text-prussian-blue-400 mb-1.5 text-sm font-medium transition-colors duration-300 ${
                      activeField === "email" ? "text-blue-green-500" : ""
                    }`}
                  >
                    Email Address
                  </label>
                  <div
                    className={`relative group transition-all duration-300 ${
                      errors.email ? "animate-shake" : ""
                    }`}
                  >
                    <div
                      className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                        activeField === "email"
                          ? "text-blue-green-500 scale-110"
                          : "text-sky-blue-400 group-hover:text-blue-green-500"
                      }`}
                    >
                      <Mail
                        size={18}
                        strokeWidth={activeField === "email" ? 2 : 1.75}
                        className="transition-all duration-300"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus("email")}
                      onBlur={handleInputBlur}
                      className={`w-full py-3 pl-10 pr-3 rounded-lg border ${
                        errors.email
                          ? "border-ut-orange-500 ring-1 ring-ut-orange-500/30"
                          : activeField === "email"
                          ? "border-blue-green-500 ring-2 ring-blue-green-500/20"
                          : "border-sky-blue-600 focus:border-blue-green-500 focus:ring-2 focus:ring-blue-green-500/20"
                      } focus:outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-ut-orange-500 animate-bounce-gentle">
                        <AlertCircle size={18} strokeWidth={1.75} />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-ut-orange-500 text-xs mt-1 ml-1 animate-fade-in">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password field with focus animation */}
                <div
                  className={`mb-4 transition-all duration-300 transform ${
                    activeField === "password" ? "scale-102" : ""
                  }`}
                >
                  <label
                    className={`block text-prussian-blue-400 mb-1.5 text-sm font-medium transition-colors duration-300 ${
                      activeField === "password" ? "text-blue-green-500" : ""
                    }`}
                  >
                    Password
                  </label>
                  <div
                    className={`relative group transition-all duration-300 ${
                      errors.password ? "animate-shake" : ""
                    }`}
                  >
                    <div
                      className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                        activeField === "password"
                          ? "text-blue-green-500 scale-110"
                          : "text-sky-blue-400 group-hover:text-blue-green-500"
                      }`}
                    >
                      <Lock
                        size={18}
                        strokeWidth={activeField === "password" ? 2 : 1.75}
                        className="transition-all duration-300"
                      />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formState.password}
                      onChange={handleInputChange}
                      onFocus={() => handleInputFocus("password")}
                      onBlur={handleInputBlur}
                      className={`w-full py-3 pl-10 pr-12 rounded-lg border ${
                        errors.password
                          ? "border-ut-orange-500 ring-1 ring-ut-orange-500/30"
                          : activeField === "password"
                          ? "border-blue-green-500 ring-2 ring-blue-green-500/20"
                          : "border-sky-blue-600 focus:border-blue-green-500 focus:ring-2 focus:ring-blue-green-500/20"
                      } focus:outline-none transition-all duration-300`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                        activeField === "password"
                          ? "text-blue-green-500"
                          : "text-sky-blue-400 hover:text-blue-green-500"
                      }`}
                    >
                      {showPassword ? (
                        <EyeOff
                          size={18}
                          strokeWidth={1.75}
                          className="animate-fade-in"
                        />
                      ) : (
                        <Eye
                          size={18}
                          strokeWidth={1.75}
                          className="animate-fade-in"
                        />
                      )}
                    </button>
                    {errors.password && (
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-ut-orange-500 animate-bounce-gentle">
                        <AlertCircle size={18} strokeWidth={1.75} />
                      </div>
                    )}
                  </div>
                  {errors.password && (
                    <p className="text-ut-orange-500 text-xs mt-1 ml-1 animate-fade-in">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember me and Forgot password with hover effects */}
                <div className="flex justify-between items-center mb-6">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative h-5 w-5 flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="peer appearance-none h-5 w-5 rounded border-2 border-sky-blue-600 checked:border-blue-green-500 transition-all duration-300"
                      />
                      <CheckCircle
                        size={14}
                        className={`absolute text-blue-green-500 transition-all duration-300 ${
                          rememberMe
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-50"
                        }`}
                      />
                    </div>
                    <span className="text-sm text-prussian-blue-400 group-hover:text-prussian-blue-500 transition-colors duration-200">
                      Remember me
                    </span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-green-500 hover:text-blue-green-600 relative group"
                  >
                    <span>Forgot password?</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-green-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </div>

                {/* Submit button with enhanced hover effect */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-green-600 hover:-translate-y-1 hover:shadow-glow-blue disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none relative overflow-hidden group cursor-pointer"
                >
                  <span
                    className={`relative z-10 flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span>Log In</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center animate-fade-in">
                      <Loader className="h-5 w-5 animate-spin" />
                    </span>
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-prussian-blue-500 group-hover:h-full transition-all duration-300 ease-in-out"></span>
                </button>

                {/* Or divider with animated width */}
                <div className="flex items-center my-6 overflow-hidden">
                  <div className="flex-grow h-px bg-sky-blue-800/10 transform transition-transform duration-700 origin-right scale-x-0 animate-grow-x"></div>
                  <span className="px-4 text-sm text-prussian-blue-400 opacity-0 animate-fade-in animation-delay-300">
                    Or continue with
                  </span>
                  <div className="flex-grow h-px bg-sky-blue-800/10 transform transition-transform duration-700 origin-left scale-x-0 animate-grow-x"></div>
                </div>

                {/* Social login buttons with staggered entrance and hover effects */}
                <div className="grid grid-cols-3 gap-3">
                  {["Google", "Facebook", "Apple"].map((provider, index) => (
                    <button
                      key={provider}
                      type="button"
                      onClick={() => handleSocialLogin(provider)}
                      className={`flex justify-center items-center py-2.5 border border-sky-blue-600 rounded-lg hover:bg-sky-blue-800/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm opacity-0 animate-fade-in cursor-pointer`}
                      style={{ animationDelay: `${index * 100 + 500}ms` }}
                    >
                      {provider === "Google" && (
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                      )}
                      {provider === "Facebook" && (
                        <svg
                          className="w-5 h-5 text-[#1877F2]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                        </svg>
                      )}
                      {provider === "Apple" && (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.085 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>

                {/* Sign up link with animation */}
                <div className="text-center mt-8 opacity-0 animate-fade-in animation-delay-700">
                  <p className="text-prussian-blue-400">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-blue-green-500 hover:text-blue-green-600 font-medium relative group"
                    >
                      <span>Sign up</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-green-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
