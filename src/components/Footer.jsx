import { useEffect } from "react";

export const Footer = () => {
    return (
      <footer className="bottom-0 w-full z-40 bg-[rgba(19 , 10, 10, 0.8)] backdrop-blur-lg border-t border-white/10 shadow-inner">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            <a className="font-mono text-xl font-bold text-white">
              &copy; {new Date().getFullYear()} Reza<span className="text-blue-500">.tech</span> 152023113 — All rights reserved.
            </a>
          </div>
        </div>
      </footer>
    );
  };