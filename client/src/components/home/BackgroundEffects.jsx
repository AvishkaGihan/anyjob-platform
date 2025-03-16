const BackgroundEffects = () => {
  return (
    <>
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <div
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-blue-green-500 opacity-10 blur-3xl"
          style={{ animation: "pulse 15s infinite ease-in-out" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-selective-yellow-500 opacity-5 blur-3xl"
          style={{ animation: "pulse 20s infinite ease-in-out" }}
        />
        <div
          className="absolute -top-32 left-0 w-72 h-72 rounded-full bg-ut-orange-500 opacity-5 blur-3xl"
          style={{ animation: "pulse 18s infinite ease-in-out" }}
        />

        {/* Floating particles - more subtle */}
        <div className="hidden lg:block">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-sky-blue-500 rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${3 + Math.random() * 7}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
    </>
  );
};

export default BackgroundEffects;
