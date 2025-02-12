import React from "react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
      <span className="text-3xl font-bold text-white">{number}</span>
    </div>
    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <>
      <section id="how-it-works" className="w-full py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StepCard
              number={1}
              title="Upload Content"
              description="Easily upload your video or PDF files to our platform."
            />
            <StepCard
              number={2}
              title="AI Processing"
              description="Our smart AI analyzes your content and extracts key information."
            />
            <StepCard
              number={3}
              title="Get Results"
              description="Receive your summary and mind map in minutes."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
