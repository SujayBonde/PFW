import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Mail, MapPin, Phone, Github, Linkedin, Twitter,
  Send, Instagram, Facebook, Copy, Check, Loader2,
} from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast } from "sonner";

const EMAIL = "sujaybonde2005@gmail.com";

const contactInfo = [
  { icon: Mail, label: "Email", value: EMAIL, link: `mailto:${EMAIL}`, copyable: true },
  { icon: Phone, label: "Phone", value: "+91 7387385410 | 7499505410", link: "tel:+917387385410" },
  { icon: MapPin, label: "Location", value: "Chakan, Pune, Maharashtra, India", link: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/SujayBonde" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/sujay-bonde" },
  { icon: Twitter, label: "Twitter", url: "https://x.com/Sujay_Bonde" },
  { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/sujay.bonde.3" },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/itz_sujay_bonde" },
];

const openFor = ["Freelance projects", "Internships", "Collaboration", "Full-time roles"];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState("idle"); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormState("success");
        toast.success(data.success || "Message sent! I'll get back to you soon.", { duration: 4000 });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
        toast.error(data.error || "Failed to send. Please try again.", { duration: 4000 });
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch {
      setFormState("error");
      toast.error("Something went wrong. Please try again later.", { duration: 4000 });
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  const btnContent = {
    idle: <><Send className="mr-2 h-4 w-4" />Send Message</>,
    loading: <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>,
    success: <><Check className="mr-2 h-4 w-4" />Message Sent!</>,
    error: <>⚠ Try Again</>,
  };

  const btnClass = {
    idle: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    loading: "bg-gradient-to-r from-purple-500/70 to-pink-500/70 cursor-not-allowed",
    success: "bg-gradient-to-r from-emerald-500 to-teal-500",
    error: "bg-gradient-to-r from-red-500 to-orange-500",
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-center text-gray-400 mb-12">Let's build something together.</p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — info */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-semibold mb-3 text-white">Let's Connect</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Availability */}
              <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <p className="text-emerald-400 text-sm font-medium">Usually replies within 24 hours</p>
                </div>
                <p className="text-gray-400 text-sm mb-2">Currently open to:</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {openFor.map((item) => (
                    <div key={item} className="flex items-center gap-1.5 text-gray-300 text-xs">
                      <Check className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact cards */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, i) => (
                  <Card key={i} className="p-4 bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center shrink-0 border border-purple-500/30">
                        <info.icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-white text-sm hover:text-purple-300 transition-colors truncate block">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm truncate">{info.value}</p>
                        )}
                      </div>
                      {/* Copy email button */}
                      {info.copyable && (
                        <button
                          onClick={copyEmail}
                          title="Copy email"
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-700/60 hover:bg-purple-500/20 border border-gray-600 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-all shrink-0"
                        >
                          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 bg-gray-800/60 border border-gray-700 rounded-lg flex items-center justify-center
                                 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50
                                 text-gray-400 hover:text-white transition-all"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 text-sm">Name</Label>
                    <Input
                      id="name" name="name" type="text" placeholder="Your Name"
                      value={formData.name} onChange={handleChange} required
                      className="mt-1.5 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300 text-sm">Email</Label>
                    <Input
                      id="email" name="email" type="email" placeholder="your@email.com"
                      value={formData.email} onChange={handleChange} required
                      className="mt-1.5 bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300 text-sm">Message</Label>
                    <Textarea
                      id="message" name="message" placeholder="Your message here..."
                      value={formData.message} onChange={handleChange} required
                      className="mt-1.5 min-h-[140px] bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={formState === "loading"}
                    className={`w-full text-white border-0 transition-all duration-300 ${btnClass[formState]}`}
                  >
                    {btnContent[formState]}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
