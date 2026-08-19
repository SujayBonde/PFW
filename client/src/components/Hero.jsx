import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter, Sparkles, ChevronDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pf_image from "../assets/PF_image.png";
import { useState, useEffect, useRef, useCallback } from "react";

// ─── Typing hook ────────────────────────────────────────────────────────────
function useTypingEffect(phrases, typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

// ─── Floating Particle ───────────────────────────────────────────────────────
function Particle({ x, y, size, duration, delay, opacity }) {
  return (
    <motion.div
      className="absolute rounded-full bg-purple-400/40"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [0, -30, 0], opacity: [opacity, opacity * 0.3, opacity] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
  opacity: Math.random() * 0.5 + 0.15,
}));



export function Hero() {
  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "MERN Stack Engineer", "Java Full Stack Developer"];
  const typedRole = useTypingEffect(roles);

  // Cursor-following glow
  const heroRef = useRef(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const handleMouseMove = useCallback((e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  // 3D tilt on profile image
  const imageContainerRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleImageMouseMove = useCallback((e) => {
    const rect = imageContainerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateX.set(-dy * 12);
    rotateY.set(dx * 12);
  }, [rotateX, rotateY]);

  const handleImageMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center pt-[25%] md:pt-16 relative overflow-hidden bg-gray-950"
    >
      {/* Cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(139,92,246,0.12) 0%, transparent 70%)`,
        }}
      />

      {/* Static background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p) => <Particle key={p.id} {...p} />)}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ── Left column ─────────────────────────────────────────── */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Welcome tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6 lg:ml-3"
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Welcome to My Portfolio</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                Sujay
              </span>{" "}
              <span className="wave-emoji inline-block">👋</span>
            </motion.h1>

            {/* Typed subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-10 mb-4 flex items-center justify-center lg:justify-start w-full"
            >
              <p className="text-xl md:text-2xl text-purple-300 font-mono text-center lg:text-left">
                {typedRole}
                <span className="inline-block w-0.5 h-6 bg-purple-400 ml-1 animate-blink align-middle" />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Crafting scalable backend systems and beautiful user experiences with the MERN stack and Spring-Boot.
              Passionate about turning ideas into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 justify-center lg:justify-start w-full sm:w-auto"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
              >
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="/Sujay_Bonde_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto block">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-gray-600 text-gray-300 bg-gray-800/60 hover:bg-gray-700 hover:text-white hover:border-purple-500/60 transition-all"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { href: "https://github.com/SujayBonde", Icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/sujay-bonde", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://x.com/Sujay_Bonde", Icon: Twitter, label: "Twitter" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/60 border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column — 3D tilt image ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto"
          >
            <div className="relative w-full">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl sm:blur-3xl opacity-25" />

              {/* 3D tilt wrapper */}
              <motion.div
                ref={imageContainerRef}
                onMouseMove={handleImageMouseMove}
                onMouseLeave={handleImageMouseLeave}
                style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d", perspective: 1000 }}
                className="relative rounded-2xl p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 cursor-pointer shadow-2xl"
              >
                <ImageWithFallback
                  src={pf_image}
                  alt="Sujay — Full Stack Developer"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-1 rounded-2xl bg-gradient-to-t from-purple-900/30 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Original floating emojis */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-2 sm:p-3 shadow-lg"
              >
                <span className="text-xl sm:text-2xl">💻</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg p-2 sm:p-3 shadow-lg"
              >
                <span className="text-xl sm:text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-xs uppercase tracking-widest hidden sm:block">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
