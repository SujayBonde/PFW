import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-400 flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-pink-500 fill-current animate-pulse" /> by Sujay
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sujay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
