import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        const r = isHovering ? 28 : 20;
        ringRef.current.style.transform = `translate(${ringPos.current.x - r}px, ${ringPos.current.y - r}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      const el = e.target;
      if (
        el.matches("a, button, [role='button'], input, textarea, select, label, [data-interactive]")
      ) {
        setIsHovering(true);
      }
    };
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [isHovering]);

  // Don't show on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-purple-400 mix-blend-difference transition-transform duration-75"
        style={{ willChange: "transform" }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-purple-400/60 mix-blend-difference transition-[width,height] duration-200 ${
          isHovering ? "w-14 h-14 border-purple-400" : "w-10 h-10"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
