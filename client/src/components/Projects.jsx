import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, Search } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import eCommerceImage from "../assets/e-commerce-image.png";
import travelConnect from "../assets/travel-connect-image.png";
import expenseTracker from "../assets/expense-tracker-image.png";
import weatherApp from "../assets/weather-app-image.png";
import pingupImage from "../assets/pingup-image.png";
import quickChat from "../assets/quick-chat-image.png";

const projects = [
  {
    title: "Full Stack Social Media Platform",
    description:
      "PingUp — a feature-rich social media ecosystem built with the MERN stack. PingUp enables users to discover peers, share media through posts and stories, and stay connected via real-time messaging. It's a complete demonstration of full-stack CRUD operations, complex database relationships, and bi-directional communication.",
    image: pingupImage,
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "RESTful API", "Redux", "Inngest", "Imagekit"],
    github: "https://github.com/SujayBonde/PingUp",
    demo: "https://ping-up-by-sujay.vercel.app",
    tags: ["Full Stack", "Web Apps"],
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication, product catalog, shopping cart. Built with MERN stack. Includes an admin panel to add, view, delete products and to track or update order status.",
    image: eCommerceImage,
    techStack: ["React", "NodeJS", "Express", "MongoDB", "Tailwind CSS", "RESTful API"],
    github: "https://github.com/SujayBonde/e-commerce-mern-frontend",
    demo: "https://e-commerce-mern-ten-virid.vercel.app",
    tags: ["Full Stack", "Web Apps"],
  },
  {
    title: "Travel Blog Website",
    description:
      "TravelConnect is a lightweight travel blog platform where users can share bus journey stories, discover new travel tips, and connect with fellow explorers through forums and storytelling. Built with React and hosted on Netlify.",
    image: travelConnect,
    techStack: ["React", "Express", "MongoDB", "TailwindCSS", "NodeJS", "RESTful API"],
    github: "https://github.com/SujayBonde/Travel-Community",
    demo: "https://travelconnect.netlify.app",
    tags: ["Full Stack", "Web Apps"],
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack web app that helps users manage personal finances by tracking income and expenses. Features secure JWT authentication, CRUD operations for transactions, category-wise analytics with charts, and budget management tools.",
    image: expenseTracker,
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "RESTful API"],
    github: "https://github.com/SujayBonde/Expense-Tracker-MERN/",
    demo: "https://expense-tracker-by-sujay.vercel.app",
    tags: ["Full Stack", "Web Apps"],
  },
  {
    title: "Weather App",
    description:
      "A feature-rich React and Tailwind CSS weather app using the OpenWeatherMap API. Delivers real-time data, 5-day forecasts, and AQI insights within a dynamic glassmorphism UI that shifts colors to match live weather conditions.",
    image: weatherApp,
    techStack: ["React", "Tailwind CSS", "OpenWeatherMap API"],
    github: "https://github.com/SujayBonde/Weather-App",
    demo: "https://weather-app-pi-rosy-46.vercel.app",
    tags: ["Web Apps", "UI/UX"],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Real-time messaging application with private and group chats, file sharing, and notification system. WebSocket implementation for instant messaging.",
    image: quickChat,
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "RESTful API"],
    github: "https://github.com/SujayBonde/chat-app",
    demo: "https://chat-app-silk-two-49.vercel.app",
    tags: ["Full Stack", "Web Apps"],
  },
];

const FILTER_TABS = ["All", "Web Apps", "Full Stack", "UI/UX"];

// ─── Project Modal ────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.25 }}
          className="relative bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-5">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 border border-purple-500/30 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onClick(project)}
      className="group relative bg-gray-800/50 border border-gray-700 hover:border-purple-500/60 rounded-xl overflow-hidden cursor-pointer
                 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10" />
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-900/40">
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
            View Project →
          </span>
        </div>
        {/* Link icons on hover */}
        <div className="absolute top-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 text-white hover:bg-purple-500 transition-colors backdrop-blur-sm"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 text-white hover:bg-gray-700 transition-colors backdrop-blur-sm"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t, i) => (
            <Badge key={i} variant="secondary" className="bg-gray-900/70 text-gray-300 border-gray-700 text-xs">
              {t}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="secondary" className="bg-gray-900/70 text-gray-400 border-gray-700 text-xs">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Projects section ────────────────────────────────────────────────────
export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.tags.includes(activeFilter);
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />

          {/* Filter tabs + search */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap justify-center">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === tab
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                      : "bg-gray-800/60 border border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 rounded-full text-sm bg-gray-800/60 border border-gray-700 text-gray-300 placeholder:text-gray-500
                           focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 w-52 transition-all"
              />
            </div>
          </div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 text-gray-500"
              >
                No projects match your search.
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                    onClick={setSelectedProject}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
