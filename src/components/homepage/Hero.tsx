import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-48 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl text-gray-800">
              <Typewriter
                options={{
                  strings: ["Summarize.", "MindMap.", "Learn.", "MindNote."],
                  autoStart: true,
                  delay: 60,
                  loop: true,
                }}
              />
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed">
              Summarize videos and PDFs, create mind maps, and boost your study
              efficiency with MindNote.
            </p>
            <Button className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-3 rounded-full">
            <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
