import { Link } from "react-router";
import { LEGAL_LINKS } from "../../../utils/constants/legalLinks";

const LegalLinks = ({ isVisible }) => (
  <div
    className={`transition-all duration-700 transform ${isVisible
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
);

export default LegalLinks;
