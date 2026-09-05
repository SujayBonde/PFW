import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, User, Briefcase, Code, Mail, Download, GraduationCap, Sprout, X } from "lucide-react";

const COMMANDS = [
  { id: "about", label: "About Me", icon: User, section: "about", desc: "Learn about Sujay" },
  { id: "education", label: "Education", icon: GraduationCap, section: "education", desc: "Academic background" },
  { id: "skills", label: "Skills", icon: Code, section: "skills", desc: "Technologies & expertise" },
  { id: "projects", label: "Projects", icon: Briefcase, section: "projects", desc: "View featured work" },
  { id: "learning", label: "Java Focus", icon: Sprout, section: "learning", desc: "Java full-stack roadmap" },
  { id: "contact", label: "Contact Me", icon: Mail, section: "contact", desc: "Get in touch" },
  {
    id: "resume",
    label: "Download Resume",
    icon: Download,
    action: () => window.open("/Sujay_Bonde_Resume.pdf", "_blank"),
    desc: "PDF resume",
  },
];

export function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef(null);

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      setHighlighted(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => setHighlighted(0), [query]);

  const runCommand = useCallback(
    (cmd) => {
      if (cmd.action) {
        cmd.action();
      } else if (cmd.section) {
        document.getElementById(cmd.section)?.scrollIntoView({ behavior: "smooth" });
      }
      onClose();
    },
    [onClose]
  );

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (filtered[highlighted]) runCommand(filtered[highlighted]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg"
          >
            <div className="mx-4 rounded-2xl border border-gray-700 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700/60">
                <Search className="h-4 w-4 text-gray-500 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="What do you want to explore?"
                  className="flex-1 bg-transparent text-white placeholder:text-gray-500 text-sm outline-none"
                />
                <button onClick={onClose} className="text-gray-500 hover:text-gray-300 transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Command list */}
              <div className="p-2 max-h-72 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-center text-gray-500 py-6 text-sm">No results found</p>
                ) : (
                  filtered.map((cmd, i) => {
                    const Icon = cmd.icon;
                    return (
                      <button
                        key={cmd.id}
                        onClick={() => runCommand(cmd)}
                        onMouseEnter={() => setHighlighted(i)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                          highlighted === i
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                            : "hover:bg-gray-800/60"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          highlighted === i
                            ? "bg-gradient-to-br from-purple-500 to-pink-500"
                            : "bg-gray-800"
                        }`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-sm font-medium ${highlighted === i ? "text-white" : "text-gray-300"}`}>
                            {cmd.label}
                          </p>
                          <p className="text-xs text-gray-500 truncate">{cmd.desc}</p>
                        </div>
                        {highlighted === i && (
                          <span className="ml-auto text-xs text-gray-500 shrink-0">↵ Enter</span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer hint */}
              <div className="border-t border-gray-700/60 px-4 py-2 flex gap-4 text-xs text-gray-600">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
