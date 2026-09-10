import React from "react";
import {
  GraduationCap,
  MapPin,
  FolderGit2,
  Brain,
  Download,
} from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-16 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-pink-400 uppercase tracking-widest text-sm mb-2">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-pink-500">Me</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 leading-tight">
              Final Year Computer Engineering Student &
              <span className="text-pink-500"> Java Full Stack Developer</span>
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              I'm <span className="text-pink-400 font-medium">Sujay Bonde</span>,
              a final-year Computer Engineering student from Pune, Maharashtra.
              I enjoy building secure and scalable web applications using modern
              backend technologies.
            </p>

            <p className="text-gray-400 leading-8 mb-5">
              My primary stack includes{" "}
              <span className="text-white font-medium">Java, Spring Boot, React, PostgreSQL, JWT Authentication, Docker,</span>{" "}
              and REST APIs. I'm passionate about backend development, API
              security, and solving real-world problems through full-stack
              projects.
            </p>

            <p className="text-gray-400 leading-8 mb-8">
              Currently preparing for software engineering placements while
              strengthening my Data Structures & Algorithms, Spring Security, and
              deployment skills.
            </p>

            {/* Resume Button */}
            <a
              href="/public/Sujay_Bonde_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/20"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
              <GraduationCap className="text-pink-400 mb-4" size={34} />

              <h4 className="font-semibold text-lg mb-2">Education</h4>

              <p className="text-gray-400 text-sm leading-6">
                BE Computer Engineering
                <br />
                SPPU • Final Year
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
              <MapPin className="text-pink-400 mb-4" size={34} />

              <h4 className="font-semibold text-lg mb-2">Location</h4>

              <p className="text-gray-400 text-sm leading-6">
                Pune,
                <br />
                Maharashtra, India
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
              <FolderGit2 className="text-pink-400 mb-4" size={34} />

              <h4 className="font-semibold text-lg mb-2">Projects</h4>

              <p className="text-gray-400 text-sm leading-6">
                5+ Full Stack
                <br />
                Java & React Projects
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-pink-500 hover:-translate-y-2 transition duration-300">
              <Brain className="text-pink-400 mb-4" size={34} />

              <h4 className="font-semibold text-lg mb-2">Focus</h4>

              <p className="text-gray-400 text-sm leading-6">
                Backend Development
                <br />
                Spring Security • JWT • APIs
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};