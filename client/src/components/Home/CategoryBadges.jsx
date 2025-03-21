import { Link } from "react-router";

const categories = [
  { name: "Plumbing", icon: "🔧" },
  { name: "Cleaning", icon: "🧹" },
  { name: "Electrical", icon: "⚡" },
  { name: "Moving", icon: "📦" },
];

const CategoryBadges = () => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/services?category=${category.name.toLowerCase()}`}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white text-sm transition-colors duration-300"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBadges;
