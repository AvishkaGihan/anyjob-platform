import React from "react";
import { Link } from "react-router";
import { NAV_ITEMS } from "../../../utils/constants/navItems";
import { ChevronRight } from "lucide-react";

const QuickLinks = ({ isVisible }) => {
  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
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
              <ChevronRight className="h-5 w-5" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
