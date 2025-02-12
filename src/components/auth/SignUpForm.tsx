import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDebounce } from "@uidotdev/usehooks";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/signUpSchema";
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
import { User, Mail, Lock, Loader2, X, Check } from "lucide-react";
import supabase from "@/db/connect";
import { toast } from "sonner";
import axios from "axios";

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [usernameExists, setusernameExists] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [emailExists, setemailExists] = useState<boolean | null>(null);
  const debounceEmail = useDebounce(email, 800);
  const debounceUsername = useDebounce(username, 500);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    (async () => {
      if (!debounceUsername) {
        setusernameExists(null);
        return;
      }
      setLoading(true);
      const { data, error } = await supabase
        .from("User")
        .select("username")
        .eq("username", debounceUsername);
      if (error) {
        toast.error("Error fetching username");
        setusernameExists(false);
        setLoading(false);
        return;
      }
      setusernameExists(data?.length > 0);
      setLoading(false);
    })();
  }, [debounceUsername]);

  useEffect(() => {
    (async () => {
      if (!debounceEmail) {
        setemailExists(null);
        return;
      }
      setLoading(true);
      const { data, error } = await supabase
        .from("User")
        .select("email")
        .eq("email", debounceEmail);
      if (error) {
        toast.error("Error fetching Email");
        setusernameExists(false);
        setLoading(false);
        return;
      }
      setemailExists(data?.length > 0);
      setLoading(false);
    })();
  }, [debounceEmail]);

  const onSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = async (
    formData
  ) => {
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:8000/auth/signup",
        data: formData,
        headers: { "Content-Type": "application/json" },
      });
      console.log(res);
      toast.success("Signup successful! 🎉");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(`Error: ${error}`);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                    <Input
                      placeholder="johndoe65"
                      {...field}
                      className="pl-10"
                      onChange={(e) => {
                        field.onChange(e);
                        setUsername(e.target.value);
                      }}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
                      ) : usernameExists === null ? null : usernameExists ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </div>
                </FormControl>
                {!loading && usernameExists !== null && (
                  <p
                    className={`text-sm mt-1 ${
                      usernameExists ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {usernameExists
                      ? "Username is already taken"
                      : "Username is available"}
                  </p>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="example@email.com"
                      {...field}
                      className="pl-10"
                      onChange={(e) => {
                        field.onChange(e);
                        setEmail(e.target.value);
                      }}
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
                      ) : emailExists === null ? null : emailExists ? (
                        <X className="h-5 w-5 text-red-500" />
                      ) : (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </div>
                </FormControl>
                {!loading && emailExists !== null && (
                  <p
                    className={`text-sm mt-1 ${
                      emailExists ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {emailExists
                      ? "Email is already registered"
                      : "Email is available"}
                  </p>
                )}
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
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignUpForm;
