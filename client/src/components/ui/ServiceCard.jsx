import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { id, title, icon, description } = service;

  return (
    <Link
      to={`/services/${id}`}
      className="group bg-white rounded-xl shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
    >
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-selective-yellow-500 opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10">
        <div className="text-3xl mb-4 w-14 h-14 flex items-center justify-center bg-sky-blue-800 text-prussian-blue-500 rounded-lg group-hover:bg-selective-yellow-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
          {icon}
        </div>

        <h3 className="text-lg font-semibold mb-2 text-prussian-blue-500 group-hover:text-blue-green-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-prussian-blue-300 text-sm group-hover:text-prussian-blue-400 transition-colors duration-300">
          {description}
        </p>

        <div className="mt-4 flex items-center text-sm text-blue-green-500 font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span>Learn more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
