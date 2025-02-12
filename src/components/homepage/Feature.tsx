import React from "react";
import { Video, FileText, Split, LucideIcon } from "lucide-react";

interface ReactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const FeatureCard: React.FC<ReactCardProps> = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
}) => (
  <div className="flex flex-col items-center text-center">
    <div
      className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center mb-6`}
    >
      <Icon className={`w-10 h-10 ${iconColor}`} />
    </div>
    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Feature: React.FC = () => {
  return (
    <>
      <section id="features" className="w-full py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-12 text-gray-800">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={Video}
              title="Video Summarization"
              description="Extract key points from lectures and tutorials efficiently."
              bgColor="bg-primary-100"
              iconColor="text-primary"
            />
            <FeatureCard
              icon={FileText}
              title="PDF Summarization"
              description="Condense lengthy documents into concise, digestible summaries."
              bgColor="bg-secondary-100"
              iconColor="text-primary"
            />
            <FeatureCard
              icon={Split}
              title="Mind Map Generation"
              description="Visualize complex topics with auto-generated mind maps."
              bgColor="bg-accent-100"
              iconColor="text-primary"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
