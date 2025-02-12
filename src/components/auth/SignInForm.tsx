import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Lock, Loader2 } from "lucide-react";
import signInSchema from "@/schemas/signInSchema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const SignInForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (
    formData
  ) => {
    const params = new URLSearchParams(formData);
    const username = formData.username;
    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/auth/token",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: params,
      });
      setLoading(false);
      navigate(`/summarize/${username}`);
      if (response.status >= 200 && response.status < 300) {
        const data = await response.data.json();
        localStorage.setItem("token", data.access_token);
      } else {
        const err = await response.data.json();
        toast.error(err || "Authentication Failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occured. Please try again later");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input placeholder="johndoe65" {...field} className="pl-10" />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    className="pl-10"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
