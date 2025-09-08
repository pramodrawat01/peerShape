import React from "react";

const competitionsData = [
  {
    id: 1,
    title: "Web Development Hackathon",
    date: "12 Sep 2025",
    description: "Build innovative web apps in 24 hours. Show your creativity and coding skills.",
    status: "upcoming",
  },
  {
    id: 2,
    title: "AI Innovation Challenge",
    date: "20 Oct 2025",
    description: "Use AI/ML to solve real-world problems. Collaborate and innovate with peers.",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Design Sprint 2024",
    date: "18 Dec 2024",
    description: "A creative design challenge for UI/UX enthusiasts.",
    status: "past",
  },
];

const Competitions = () => {
  const upcoming = competitionsData.filter((c) => c.status === "upcoming");
  const past = competitionsData.filter((c) => c.status === "past");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">🏆 Competitions</h1>
        <p className="text-gray-600">
          Explore exciting hackathons, challenges, and design sprints on Peershape.  
          Learn, compete, and grow with peers.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <input
          type="text"
          placeholder="Search competitions..."
          className="w-full max-w-md px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl">
          Filter
        </button>
      </div>

      {/* Upcoming Competitions */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Competitions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((comp) => (
            <div
              key={comp.id}
              className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-5"
            >
              <h3 className="text-lg font-bold text-gray-800">{comp.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{comp.description}</p>
              <p className="text-xs text-gray-500 mt-2">📅 {comp.date}</p>
              <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Past Competitions */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Past Competitions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {past.map((comp) => (
            <div
              key={comp.id}
              className="bg-white border rounded-2xl p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-800">{comp.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{comp.description}</p>
              <p className="text-xs text-gray-500 mt-2">📅 {comp.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Competitions;
