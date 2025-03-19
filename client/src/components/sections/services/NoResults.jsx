import { Search } from "lucide-react";
import { Link } from "react-router";

const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-sky-blue-800/10 flex items-center justify-center mb-4">
        <Search className="h-8 w-8 text-blue-green-500" />
      </div>
      <h3 className="text-2xl font-bold text-prussian-blue-500 mb-2">
        No matching providers
      </h3>
      <p className="text-prussian-blue-400 max-w-md mb-6">
        We couldn't find any service providers matching your current filters.
        Try adjusting your search criteria.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-2.5 bg-selective-yellow-500 text-prussian-blue-500 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-yellow">
          Reset Filters
        </button>
        <Link
          to="/"
          className="px-6 py-2.5 border border-blue-green-500 text-blue-green-500 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-green-50"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NoResults;
