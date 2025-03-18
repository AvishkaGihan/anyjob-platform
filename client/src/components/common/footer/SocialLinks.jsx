import { SOCIAL_LINKS } from "../../../utils/constants/socialLinks";

const SocialLinks = ({ isVisible }) => (
  <div
    className={`transition-all duration-700 transform ${isVisible
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
      {SOCIAL_LINKS.map((platform) => (
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
);

export default SocialLinks;
