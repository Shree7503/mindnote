import { z } from "zod";

const signInSchema = z.object({
    username: z.string(),
    password: z.string().min(6)
})

export default signInSchema;