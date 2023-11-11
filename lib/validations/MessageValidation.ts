import { z } from "zod";

export const messageValidator = z.object({
  id: z.string(),
  senderId: z.string(),
  text: z.string(),
  createdAt: z.string(),
});

export const messageArrayValidator = z.array(messageValidator);

export type MessageType = z.infer<typeof messageValidator>;
