"use client";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "O nome de usuário deve ter pelo menos 2 caracters",
  }),
});

export { formSchema };
