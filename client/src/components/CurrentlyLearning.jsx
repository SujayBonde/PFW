import { motion } from "motion/react";
import {
  CheckCircle2,
  CircleDashed,
  Rocket,
  BookOpen,
} from "lucide-react";

const learningRoadmap = [
  {
    title: "Core Java & OOP",
    status: "Completed",
    icon: "☕",
    color: "green",
    description:
      "Collections Framework, Exception Handling, Multithreading, Java 8 Features.",
  },
  {
    title: "Spring Boot Development",
    status: "Learning",
    icon: "🌱",
    color: "purple",
    description:
      "REST APIs, Spring MVC, Spring Data JPA, Maven, Project Structure.",
  },
  {
    title: "Spring Security + JWT",
    status: "Learning",
    icon: "🔐",
    color: "pink",
    description:
      "Authentication, Authorization, Role-based Access Control, Secure APIs.",
  },
  {
    title: "PostgreSQL + Hibernate",
    status: "Learning",
    icon: "🐘",
    color: "blue",
    description:
      "Database Design, Entity Mapping, Relationships, Advanced SQL Queries.",
  },
  {
    title: "Docker & Deployment",
    status: "Next",
    icon: "🐳",
    color: "cyan",
    description:
      "Containerization, Docker Compose, Render Deployment, Production Builds.",
  },
  {
    title: "Microservices & System Design",
    status: "Next",
    icon: "🚀",
    color: "orange",
    description:
      "Spring Cloud, API Gateway, Load Balancing, Distributed Architecture.",
  },
];

const badgeStyle = {
  Completed:
    "bg-green-500/10 text-green-400 border border-green-500/30",
  Learning:
    "bg-purple-500/10 text-purple-300 border border-purple-500/30",
  Next: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
};

const StatusIcon = ({ status }) => {
  if (status === "Completed")
    return <CheckCircle2 className="text-green-400" size={22} />;
  if (status === "Learning")
    return <CircleDashed className="text-purple-400" size={22} />;
  return <Rocket className="text-cyan-400" size={22} />;
};

export function CurrentlyLearning() {
  return (
    <section
      id="learning"
      className="relative py-24 bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-20 w-72 h-72 bg-purple-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 uppercase tracking-[4px] text-sm mb-3">
            Learning Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Currently <span className="text-pink-500">Learning</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-5 mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Continuously improving my Java Full Stack Development skills while
            preparing for Software Engineering placements and building scalable
            backend applications.
          </p>
        </motion.div>

        {/* Roadmap Cards */}
        <div className="space-y-6">
          {learningRoadmap.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative"
            >
              <div className="absolute left-8 top-20 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/40 to-transparent"></div>

              <div className="relative flex gap-5 bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
                {/* Timeline Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <span
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${badgeStyle[item.status]}`}
                    >
                      <StatusIcon status={item.status} />
                      {item.status}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20"
        >
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-pink-400" size={28} />
              <h3 className="text-2xl font-bold text-white">
                Current Placement Preparation Focus
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Data Structures & Algorithms in Java",
                "Spring Boot + Spring Security + JWT",
                "PostgreSQL & Hibernate/JPA",
                "Docker & Deployment (Render / Railway)",
                "Backend Project Architecture",
                "Aptitude + Interview Preparation",
              ].map((goal) => (
                <div
                  key={goal}
                  className="flex items-center gap-3 bg-white/5 border border-purple-500/10 rounded-xl px-4 py-3 hover:border-pink-500/30 transition"
                >
                  <CheckCircle2 size={18} className="text-pink-400" />
                  <span className="text-gray-300">{goal}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-8 text-sm">
              💡 My goal is to become a Java Full Stack Developer with strong
              backend development and API security expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}