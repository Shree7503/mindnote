import { z } from "zod";

const usernameValidation = z
    .string()
    .min(2, "Username must be atleat 3 characters")
    .max(20, "Username is be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email address"}),
    password: z.string().min(6, {message: "Passowrd must be atleat 6 characters"})
});

export {
    usernameValidation,
    signUpSchema
}