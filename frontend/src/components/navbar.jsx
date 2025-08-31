import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
    const location = useLocation();

  return (
    <nav className="w-500 p-5 mb-10 fixed top-0 z-10 left-0 right-0">
        <div className="flex justify-end space-x-8">
            <Link to="/" 
                className={`text-lg text-white ${
                  location.pathname === "/"
                    ? "underline decoration underline-offset-4"
                    : "hover:underline underline-offset-4"
                }`}
            >Portfolio</Link>
            <Link to="/aboutme" 
                className={`text-lg text-white ${
                  location.pathname === "/aboutme"
                    ? "underline decoration underline-offset-4"
                    : "hover:underline underline-offset-4"
                }`}
            >About Me</Link>
        </div>
    </nav>
  );
}