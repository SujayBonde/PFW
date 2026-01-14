import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Design",
      ],
    },
    {
      category: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Express Routing",
        "RESTful APIs",
        "MongoDB",
        "MySQL",
        "Authentication & Authorization",
        "Backend Troubleshooting",
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "WordPress",
        "VS Code",
        "Postman",
        "npm",
        "Debugging Tools",
        "Chrome DevTools",
        "Figma",
      ],
    },
    {
      category: "Core Competencies",
      skills: [
        "Full Stack Development",
        "Scalable System Design",
        "Database Design",
        "API Development",
        "Problem Solving",
        "Code Optimization",
        "Agile Methodology",
        "Technical Documentation",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-4 text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all group"
              >
                <h3 className="text-xl mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gray-900/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
