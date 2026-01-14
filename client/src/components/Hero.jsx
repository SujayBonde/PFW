import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pf_image from "../assets/PF_image.png";

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gray-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Welcome to My Portfolio</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-white">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">Sujay</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Crafting scalable backend systems and beautiful user experiences with the MERN stack. 
              Passionate about turning ideas into elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection("projects")} 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                variant="outline" 
                size="lg"
                className="border-gray-700 text-gray-300 bg-gray-500 hover:bg-gray-800 hover:text-white"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/SujayBonde"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-gray-800 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sujay-bonde-7a3b95314"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-gray-800 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Sujay_Bonde"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-gray-800 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-3xl opacity-30"></div>
              
              {/* Image container with border gradient */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500">
                <ImageWithFallback
                  src={pf_image}
                  alt="Sujay - Full Stack Developer"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-3 shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg p-3 shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
