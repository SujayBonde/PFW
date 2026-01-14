import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import eCommerceImage from '../assets/e-commerce-image.png';
import travelConnect from '../assets/travel-connect-image.png';
import expenseTracker from '../assets/expense-tracker-image.png';
import weatherApp from '../assets/weather-app-image.png';
import pingupImage from '../assets/pingup-image.png'
import quickChat from '../assets/quick-chat-image.png'

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with user authentication, product catalog, shopping cart. Built with MERN stack. And I have also created a admin panel to add, view, delete products and to track or update order status.",
      image: eCommerceImage,
      techStack: ["React", "NodeJS", "Express", "MongoDB", "Tailwind CSS","RESTful API"],
      github: "https://github.com/SujayBonde/e-commerce-mern-frontend",
      demo: "https://e-commerce-mern-ten-virid.vercel.app",
    },
    {
      title: "Travel Blog Website",
      description:
        "TravelConnect is a lightweight travel blog platform where users can share bus journey stories, discover new travel tips, and connect with fellow explorers through forums and storytelling. Built with React and hosted on Netlify, it reflects my passion for combining technology with authentic travel experiences.",
      image: travelConnect,
      techStack: ["React", "Express", "MongoDB", "TailwinCSS", "NodeJS","RESTful API"],
      github: "https://github.com/SujayBonde/Travel-Community",
      demo: "https://travelconnect.netlify.app",
    },
    {
      title: "Expense Tracker",
      description:
        "A full‑stack web app that helps users manage personal finances by tracking income and expenses. Built with MongoDB, Express.js, React, and Node.js, it features secure JWT authentication, CRUD operations for transactions, category‑wise analytics with charts, and budget management tools.",
      image:expenseTracker,
      techStack: ["React", "Node.js", "Express", "MongoDB","TailwindCSS", "RESTful API"],
      github: "https://github.com/SujayBonde/Expense-Tracker-MERN/",
      demo: "https://expense-tracker-by-sujay.vercel.app",
    },
    {
      title: "Full Stack Social Media Platform",
      description:
        "PingUp A feature-rich social media ecosystem built with the MERN stack. PingUp enables users to discover peers, share media through posts and stories, and stay connected via real-time messaging. It’s a complete demonstration of full-stack CRUD operations, complex database relationships, and bi-directional communication.",
      image: pingupImage,
      techStack: ["React", "Node.js", "Express", "MongoDB","TailwindCSS", "RESTful API", "Redux", "Inngest", "Imagekit"],
      github: "https://github.com/SujayBonde/PingUp",
      demo: "https://ping-up-by-sujay.vercel.app",
    },
    {
      title: "Weather App",
      description:
        "A feature-rich React and Tailwind CSS weather app using the OpenWeatherMap API. It delivers real-time data, 5-day forecasts, and AQI insights within a dynamic glassmorphism UI that shifts colors to match live weather conditions.",
      image: weatherApp,
      techStack: ["React", "Tailwind CSS","OpenWeatherMap API"],
      github: "https://github.com/SujayBonde/Weather-App",
      demo: "https://weather-app-pi-rosy-46.vercel.app",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Real-time messaging application with private and group chats, file sharing, and notification system. WebSocket implementation for instant messaging.",
      image: quickChat,
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "RESTful API"],
      github: "https://github.com/SujayBonde/chat-app",
      demo: "https://chat-app-silk-two-49.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all backdrop-blur-sm group hover:shadow-xl hover:shadow-purple-500/10">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60"></div>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-gray-900/50 text-gray-300 border-gray-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="border-gray-700 text-gray-300 bg-gray-500 hover:bg-gray-700 hover:text-white"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        asChild
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
