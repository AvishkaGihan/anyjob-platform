const PageHeader = ({ title, description }) => {
  return (
    <div className="pt-20 bg-gradient-to-br from-prussian-blue-500 via-prussian-blue-600 to-prussian-blue-700 text-white">
      <div className="container mx-auto px-4 pt-10 pb-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-sky-blue-700 font-light leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
