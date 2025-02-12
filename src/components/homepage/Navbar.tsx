import React from "react";
import { BookOpen } from "lucide-react"
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
       <header className="px-6 lg:px-8 h-16 flex items-center fixed w-full bg-white bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-200">
        <a href="#" className="flex items-center text-2xl font-semibold text-primary">
          <BookOpen className="w-8 h-8 mr-2 text-primary" />
          MindNote
        </a>
        <nav className="ml-auto flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </a>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
            <Link to="/auth">Sign In</Link>
          </Button>
          <Button className="bg-primary text-white hover:bg-primary-dark">
          <Link to="/auth">Sign Up</Link>
          </Button>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
