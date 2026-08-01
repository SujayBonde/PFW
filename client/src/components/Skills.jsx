import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const skillsData = {
  Frontend: [
    { name: "React.js", level: 88, note: "Built 6+ production apps" },
    { name: "React Router", level: 82, note: "SPA routing, nested routes" },
    { name: "Tailwind CSS", level: 90, note: "Primary styling tool" },
    { name: "HTML5", level: 95, note: "Semantic markup, accessibility" },
    { name: "CSS3", level: 87, note: "Animations, Flexbox, Grid" },
    { name: "JavaScript (ES6+)", level: 85, note: "Modern JS, async/await" },
    { name: "Bootstrap", level: 75, note: "Rapid prototyping" },
    { name: "Responsive Design", level: 88, note: "Mobile-first approach" },
    { name: "UI/UX Design", level: 78, note: "Figma, user flows" },
  ],
  Backend: [
    { name: "Node.js", level: 83, note: "REST APIs, middleware" },
    { name: "Express.js", level: 85, note: "Routing, auth, error handling" },
    { name: "RESTful APIs", level: 87, note: "Design & implementation" },
    { name: "MongoDB", level: 82, note: "Mongoose, aggregation" },
    { name: "MySQL", level: 70, note: "Relational queries, joins" },
    { name: "Authentication", level: 80, note: "JWT, bcrypt, sessions" },
    { name: "Backend Troubleshooting", level: 78, note: "Debugging, profiling" },
  ],
  Tools: [
    { name: "Git & GitHub", level: 88, note: "Version control, PRs" },
    { name: "WordPress", level: 80, note: "Custom themes & plugins" },
    { name: "VS Code", level: 95, note: "Primary IDE" },
    { name: "Postman", level: 85, note: "API testing & docs" },
    { name: "npm", level: 85, note: "Package management" },
    { name: "Chrome DevTools", level: 82, note: "Performance, network" },
    { name: "Figma", level: 72, note: "Wireframes, prototypes" },
  ],
  Competencies: [
    { name: "Full Stack Development", level: 85, note: "End-to-end feature ownership" },
    { name: "Scalable System Design", level: 72, note: "Architecture planning" },
    { name: "Database Design", level: 78, note: "Schema, indexing" },
    { name: "API Development", level: 86, note: "Clean contract design" },
    { name: "Problem Solving", level: 88, note: "Algorithmic thinking" },
    { name: "Code Optimization", level: 78, note: "Profiling & refactoring" },
    { name: "Agile Methodology", level: 75, note: "Sprints, Kanban" },
    { name: "Technical Documentation", level: 76, note: "READMEs, API docs" },
  ],
};

const TABS = ["All", "Frontend", "Backend", "Tools", "Competencies"];

function SkillBadge({ skill, delay }) {
  const [showTip, setShowTip] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay }}
        className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium cursor-default
                   bg-gray-900/70 border border-gray-700 text-gray-300
                   hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20
                   hover:border-purple-500/50 hover:text-white transition-all duration-200 select-none"
      >
        {skill.name}
      </motion.span>
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-44 pointer-events-none"
          >
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-3 shadow-xl shadow-black/40">
              <p className="text-xs font-semibold text-white mb-1.5">{skill.name}</p>
              <div className="h-1.5 rounded-full bg-gray-700 mb-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-gray-500">Proficiency</span>
                <span className="text-[10px] text-purple-400 font-semibold">{skill.level}%</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-tight">{skill.note}</p>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-700" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const visibleCategories =
    activeTab === "All"
      ? Object.entries(skillsData)
      : [[activeTab, skillsData[activeTab]]].filter(([, v]) => v);

  return (
    <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-gray-800/60 border border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {visibleCategories.map(([category, skills], catIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/40 transition-all group"
                >
                  <h3 className="text-lg font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <SkillBadge key={skill.name} skill={skill} delay={i * 0.04} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <p className="text-center text-xs text-gray-600 mt-6">Hover over a skill to see proficiency details</p>
        </motion.div>
      </div>
    </section>
  );
}
