const features = [
  { icon: "⚡", text: "Fast & Reliable" },
  { icon: "🔒", text: "Secure Payments" },
  { icon: "🌟", text: "Verified Providers" },
];

const FeatureBadges = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 rounded-full lg:bg-white/10 bg-blue-green-500 backdrop-blur-sm border border-blue-green-500/30"
        >
          <span className="text-lg">{feature.icon}</span>
          <span className="text-white text-sm font-medium drop-shadow-xs">
            {feature.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureBadges;
