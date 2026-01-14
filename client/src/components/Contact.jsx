import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.success || "Message sent successfully! I'll get back to you soon.", {
            duration: 4000,
        });
        setFormData({
            name: "",
            email: "",
            message: "",
        });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.", {
            duration: 4000,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please try again later.", {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sujaybonde2005@gmail.com",
      link: "mailto:sujaybonde2005@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7387385410 | 7499505410",
      link: "tel:+917387385410",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chakan, Pune, Maharashtra, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/SujayBonde",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sujay-bonde-7a3b95314",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://x.com/Sujay_Bonde",
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://www.facebook.com/sujay.bonde.3"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/itz_sujay_bonde"
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl mb-4 text-white">Let's Connect</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                        <info.icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="mb-4 text-white">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 text-gray-400 hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 animate-pulse" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter YourName"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-300 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-300 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter Your Message Here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px] bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-300 focus:border-purple-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
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
