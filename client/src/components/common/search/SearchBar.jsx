import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
const SearchBar = ({ className = "", variant = "light" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search functionality
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLight = variant === "light";

  return (
    <form
      ref={inputRef}
      onSubmit={handleSearch}
      className={`relative flex items-center transition-all duration-300 ${
        isFocused ? "w-72" : "w-60"
      } ${className}`}
    >
      <input
        type="text"
        placeholder="Search services..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        className={`py-2 px-4 pr-10 w-full rounded-lg transition-all duration-300 outline-none ${
          isLight
            ? "bg-white border border-sky-blue-600 placeholder-sky-blue-400 focus:ring-2 focus:ring-blue-green-500 focus:border-blue-green-500"
            : "bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/60"
        }`}
      />
      <button
        type="submit"
        className={`absolute right-3 transition-colors duration-200 ${
          isLight
            ? "text-sky-blue-400 hover:text-blue-green-500"
            : "text-white/60 hover:text-white"
        }`}
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;
