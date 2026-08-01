import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { CurrentlyLearning } from "./components/CurrentlyLearning";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
      <BackToTop />
    </div>
  );
}
