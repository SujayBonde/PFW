import { useState } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Award,
  BookOpen,
  ChevronDown,
  Pencil,
} from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    period: "2024 – 2027",
    icon: GraduationCap,
    detail:
      "Building a strong foundation of technical knowledge, practical skills, and professional growth. CGPA: 8.9",
    color: "from-purple-500 to-pink-500",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Murtizapur",
    period: "2021 – 2024",
    icon: BookOpen,
    detail:
      "Transforming curiosity into knowledge, knowledge into skills, and skills into innovation. Aggregate: 82.74%",
    color: "from-pink-500 to-purple-500",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "J.E. School, Muktainagar",
    period: "2020 – 2021",
    icon: Pencil,
    detail:
      "Laying the academic foundation with dedication and discipline. Percentage: 82.20%",
    color: "from-pink-500 to-purple-500",
  },
];

const certifications = [
  "Java Full Stack Development",
  "Full Stack Web Development – MERN Stack",
  "Advanced JavaScript and React",
  "Node.js Backend Development",
];

function TimelineNode({ edu, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;
  const Icon = edu.icon;

  return (
    <div
      className={`relative flex items-start gap-4 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.15 }}
        className="md:w-5/12"
      >
        <div
          onClick={() => setExpanded(!expanded)}
          className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center shrink-0`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {edu.degree}
                </h3>

                <p
                  className={`text-sm bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mt-0.5`}
                >
                  {edu.institution}
                </p>

                <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
              </div>
            </div>

            <ChevronDown
              className={`h-4 w-4 text-gray-500 shrink-0 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Expandable Detail */}
          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 pt-2 border-t border-gray-700 text-sm text-gray-400 leading-relaxed">
              {edu.detail}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Center Dot */}
      <div className="hidden md:flex w-2/12 justify-center relative">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
          className={`w-5 h-5 rounded-full bg-gradient-to-br ${edu.color} border-4 border-gray-950 z-10 shadow-lg`}
        />
      </div>

      {/* Empty Side */}
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
}

export function Education() {
  return (
    <section
      id="education"
      className="py-16 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center mb-3 text-white">
            Education
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-10" />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent -translate-x-1/2" />

            <div className="space-y-6">
              {education.map((edu, index) => (
                <TimelineNode key={index} edu={edu} index={index} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                <Award className="h-5 w-5 text-purple-400" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Certifications & Courses
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="flex items-center gap-2.5 bg-gray-900/40 rounded-lg px-3 py-2 border border-gray-700/40"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shrink-0" />

                  <span className="text-gray-300 text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}