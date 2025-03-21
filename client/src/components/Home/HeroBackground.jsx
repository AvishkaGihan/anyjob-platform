const HeroBackground = () => {
  return (
    <>
      {/* SVG Waves */}
      <div className="absolute -bottom-1 w-full z-10">
        <div className="relative h-12">
          <svg
            className="absolute bottom-0 w-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,112L48,106.7C96,101,192,90,288,80C384,70,480,58,576,61.3C672,64,768,80,864,85.3C960,90,1056,85,1152,77.3C1248,70,1344,58,1392,53.3L1440,48L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 w-full opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,98.7C96,101,192,106,288,114.7C384,122,480,133,576,125.3C672,117,768,90,864,82.7C960,74,1056,85,1152,85.3C1248,85,1344,74,1392,69.3L1440,64V160H0Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,80L48,85.3C96,90,192,101,288,96C384,90,480,70,576,61.3C672,53,768,58,864,72C960,85,1056,106,1152,109.3C1248,112,1344,96,1392,88L1440,80V160H0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Glowing Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-blue-green-500 blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-selective-yellow-500 opacity-5 blur-3xl animate-pulseSlow" />
        <div className="absolute -top-32 left-0 w-72 h-72 rounded-full bg-ut-orange-500 opacity-5 blur-3xl animate-pulseMedium" />

        {/* Floating Dots */}
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
    </>
  );
};

export default HeroBackground;
