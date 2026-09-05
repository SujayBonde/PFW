import { motion } from "motion/react";

const learning = [
  { name: "Java", emoji: "☕", level: 80, note: "Core Java, OOP, Collections" },
  { name: "Spring Boot", emoji: "🌱", level: 70, note: "REST APIs, JPA, Security" },
  { name: "Hibernate/JPA", emoji: "🗄️", level: 65, note: "ORM, entity mapping" },
  { name: "PostgreSQL", emoji: "🐘", level: 55, note: "Schemas, queries, joins" },
  { name: "Spring Security + JWT", emoji: "🔐", level: 60, note: "Authentication, authorization" },
  { name: "Docker", emoji: "🐳", level: 50, note: "Containerization, deployment" },
];


export function CurrentlyLearning() {
  return (
    <section id="learning" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Currently Learning</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-center text-gray-500 text-sm mb-12">
            Building the Java full-stack foundation alongside my MERN development experience
          </p>

          <div className="space-y-5">
            {learning.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:border-purple-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.note}</p>
                    </div>
                  </div>
                  <span className="text-purple-400 font-bold text-sm">{item.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
