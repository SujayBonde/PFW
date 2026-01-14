import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2023 - 2027",
      icon: GraduationCap,
      achievements: [
        "Pursued my Bachelor's degree at Savitribai Phule Pune University, where I built a strong foundation of technical knowledge, practical skills, and professional growth, with a CGPA of 8.55."
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Murtizapur",
      period: "2020 - 2023",
      icon: BookOpen,
      achievements: [
        "My technical journey at Government Polytechnic, Murtizapur has been a path of transforming curiosity into knowledge, knowledge into skills, and skills into innovation, achieving an aggregate of 82.74%."
      ],
    },
  ];

  const certifications = [
    "Full Stack Web Development - MERN Stack",
    "Advanced JavaScript and React",
    "Node.js Backend Development",
    "WordPress Theme & Plugin Development",
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                        <edu.icon className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-1 text-white">{edu.degree}</h3>
                      <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">{edu.institution}</p>
                      <p className="text-gray-400 mb-4">{edu.period}</p>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                          
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl text-white">Certifications & Courses</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
