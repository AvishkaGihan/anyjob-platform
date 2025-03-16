const ScrollIndicator = ({ isVisible }) => {
  return (
    <div
      className={`absolute bottom-14 left-1/2 -translate-x-1/2 z-50 transition-all duration-1000 delay-1000 pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="text-white/70 text-xs uppercase tracking-wider font-light mb-2">
          Discover More
        </span>
        <div className="w-6 h-10 rounded-full border border-white/50 flex justify-center items-start p-1.5">
          <div className="w-1.5 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
