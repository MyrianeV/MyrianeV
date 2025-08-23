import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="w-500 p-4 mb-10 fixed top-0 z-10 left-0 right-0">
        <div className="flex justify-end space-x-8">
            <Link to="/" 
                className="text-white hover:text-green font-bold transition-colors"
            >Portfolio</Link>
            <Link to="/aboutme" 
                className="text-white hover:text-green font-bold transition-colors pr-8"
            >About Me</Link>
        </div>
    </nav>
  );
}