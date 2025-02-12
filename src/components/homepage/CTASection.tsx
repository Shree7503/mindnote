import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CTASection: React.FC = () => {
  return (
    <>
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-3xl text-gray-800">
              Ready to Enhance Your Learning?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed">
              Join thousands of students improving their study efficiency with
              MindNote.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1 px-4 py-3 text-lg rounded-full"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-3 rounded-full"
                >
                  Get Started
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
