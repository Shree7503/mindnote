import React, { useState } from "react";
import { BookOpen, ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SignUpForm from "@/components/auth/SignUpForm";
import SignInForm from "@/components/auth/SignInForm";
import { Link } from "react-router-dom";

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <Button
        variant="ghost"
        className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        <Link to="/">Back</Link>
      </Button>
      <div className="flex min-h-screen bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">
                {isSignUp ? "Create an account" : "Sign in to your account"}
              </CardTitle>
              <CardDescription className="text-center">
                {isSignUp
                  ? "Start your learning journey today"
                  : "Welcome back to MindNote"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSignUp ? <SignUpForm /> : <SignInForm />}
            </CardContent>
            <CardFooter>
              <div className="text-center w-full">
                <p className="text-sm text-gray-600">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}
                  <Button
                    variant="link"
                    onClick={toggleForm}
                    className="font-medium text-primary hover:text-primary-dark"
                  >
                    {isSignUp ? "Sign in" : "Sign up"}
                  </Button>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
