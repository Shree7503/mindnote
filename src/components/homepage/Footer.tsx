import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="py-10 border-t border-gray-200">
        <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2023 MindNote. All rights reserved.
          </p>
          <nav className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-sm hover:underline underline-offset-4 text-gray-600"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm hover:underline underline-offset-4 text-gray-600"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
