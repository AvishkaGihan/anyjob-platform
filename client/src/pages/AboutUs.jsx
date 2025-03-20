import React, { useRef } from "react";
import PageHeader from "../components/common/pageHeader/PageHeader";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Link } from "react-router";
import { ChevronRight, Users, Award, Target, Clock } from "lucide-react";

const AboutUs = () => {
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);

  const missionVisible = useIntersectionObserver(missionRef, {
    threshold: 0.2,
  });
  const teamVisible = useIntersectionObserver(teamRef, { threshold: 0.2 });
  const statsVisible = useIntersectionObserver(statsRef, { threshold: 0.2 });

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "With over 15 years of experience in marketplace platforms, Sarah founded AnyJob with a vision to connect skilled professionals with those who need their services.",
    },
    {
      name: "David Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "David leads our engineering team with expertise in building scalable platforms. He previously worked at top tech companies before joining AnyJob.",
    },
    {
      name: "Amara Rodriguez",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Amara ensures that our platform runs smoothly for both service providers and customers. She's passionate about creating efficient processes.",
    },
    {
      name: "Michael Lewis",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      bio: "Michael brings creative marketing strategies that have helped AnyJob grow its user base consistently since launch.",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-blue-green-500" />,
      value: "10,000+",
      label: "Service Providers",
    },
    {
      icon: <Award className="h-8 w-8 text-ut-orange-500" />,
      value: "4.8/5",
      label: "Average Rating",
    },
    {
      icon: <Target className="h-8 w-8 text-selective-yellow-500" />,
      value: "50+",
      label: "Service Categories",
    },
    {
      icon: <Clock className="h-8 w-8 text-prussian-blue-500" />,
      value: "30 min",
      label: "Average Response Time",
    },
  ];

  return (
    <div>
      <PageHeader
        title="About AnyJob Platform"
        description="Learn about our mission, our team, and how we're connecting professionals with customers around the world."
      />

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div
              className={`md:w-1/2 transition-all duration-1000 transform ${
                missionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-green-500/20 rounded-full blur-md"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ut-orange-500/20 rounded-full blur-md"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="AnyJob Mission"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute inset-0 rounded-xl border-2 border-blue-green-500/30"></div>
              </div>
            </div>

            <div
              className={`md:w-1/2 transition-all duration-1000 delay-300 transform ${
                missionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-6 text-prussian-blue-500 relative inline-block">
                Our Mission
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-green-500"></span>
              </h2>
              <p className="text-prussian-blue-400 mb-6 text-lg leading-relaxed">
                At AnyJob, our mission is to transform how people connect with
                service professionals. We're building a trusted marketplace
                where finding skilled help is seamless, transparent, and
                reliable.
              </p>
              <p className="text-prussian-blue-400 mb-8 text-lg leading-relaxed">
                We believe everyone deserves access to quality services at fair
                prices, with the confidence that comes from verified reviews,
                secure payments, and outstanding customer support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-green-500/10 flex items-center justify-center mr-4">
                    <span className="text-blue-green-500 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-prussian-blue-500 mb-1">
                      Quality First
                    </h3>
                    <p className="text-prussian-blue-300">
                      We verify all service providers through a rigorous
                      screening process
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-selective-yellow-500/10 flex items-center justify-center mr-4">
                    <span className="text-selective-yellow-500 text-xl">
                      💡
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-prussian-blue-500 mb-1">
                      Innovation
                    </h3>
                    <p className="text-prussian-blue-300">
                      Constantly improving our platform with new features
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ut-orange-500/10 flex items-center justify-center mr-4">
                    <span className="text-ut-orange-500 text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-prussian-blue-500 mb-1">
                      Community
                    </h3>
                    <p className="text-prussian-blue-300">
                      Building relationships between customers and service
                      providers
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-blue-500/10 flex items-center justify-center mr-4">
                    <span className="text-sky-blue-500 text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-prussian-blue-500 mb-1">
                      Security
                    </h3>
                    <p className="text-prussian-blue-300">
                      Secure platform with protected payments and privacy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 bg-gradient-to-b from-sky-blue-900/10 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-ut-orange-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-green-500 rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-prussian-blue-500 text-center relative inline-block">
            Platform Statistics
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-selective-yellow-500"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white rounded-xl shadow-md p-6 text-center transition-all duration-700 transform ${
                  statsVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${150 * (index % 4)}ms` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-prussian-blue-500/5 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-prussian-blue-500 mb-1">
                  {stat.value}
                </h3>
                <p className="text-prussian-blue-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-prussian-blue-500 relative inline-block">
              Meet Our Team
              <span className="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-ut-orange-500"></span>
            </h2>
            <p className="text-prussian-blue-400 max-w-2xl mx-auto text-lg">
              The passionate people behind AnyJob, working to connect skilled
              professionals with customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 transform ${
                  teamVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                } hover:-translate-y-2 hover:shadow-lg`}
                style={{ transitionDelay: `${150 * (index % 4)}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-prussian-blue-500 text-lg">
                    {member.name}
                  </h3>
                  <p className="text-blue-green-500 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-prussian-blue-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
              teamVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Link
              to="/careers"
              className="group inline-flex items-center px-6 py-3 bg-blue-green-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-green-600 hover:-translate-y-1 hover:shadow-glow-blue"
            >
              <span>Join Our Team</span>
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
