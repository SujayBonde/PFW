import { motion } from "motion/react";
import { Code, Server, Palette, Wrench } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "MERN Stack Development",
      description: "Building full-stack applications with MongoDB, Express, React, and Node.js",
    },
    {
      icon: Server,
      title: "Backend Expertise",
      description: "Passionate about creating scalable backend systems and troubleshooting complex issues",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive and beautiful user interfaces that delight users",
    },
    {
      icon: Wrench,
      title: "WordPress Development",
      description: "Experienced in custom WordPress development and freelancing projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with a degree in Computer Engineering from{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Savitribai Phule Pune University
              </span>. My journey
              into technology began with a polytechnic foundation from{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Government Polytechnic, Murtizapur
              </span>, where I
              developed a strong technical foundation.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I've gained valuable industry experience working with{" "}
              <span className="text-white">Mountreach Solutions</span>, where I honed my skills
              in building robust Android applications. Additionally, I've worked on various WordPress projects, helping me to get more knowlwdge about the tools that used in web development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in creating{" "}
              <span className="text-white">scalable backend systems</span> and solving complex
              technical challenges. I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies to deliver exceptional solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all border border-purple-500/20 group-hover:border-purple-500/40">
                  <item.icon className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <h3 className="mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
