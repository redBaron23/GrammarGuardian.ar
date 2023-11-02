import { z } from "zod";

export const messageValidator = z.object({
  id: z.string().uuid(),
  senderId: z.string().uuid(),
  text: z.string(),
  createdAt: z.number(),
});

export const messageArrayValidator = z.array(messageValidator);

export type MessageType = z.infer<typeof messageValidator>;
