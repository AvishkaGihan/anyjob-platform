import { CONTACT_INFO } from "../../../utils/constants/contactInfo";

const ContactInfo = ({ isVisible }) => (
  <div
    className={`transition-all duration-700 transform ${isVisible
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
);

export default ContactInfo;
