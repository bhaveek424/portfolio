import { z } from "zod";
import { t, authedProcedure } from "../../../server/trpc/trpc";

export const guestbookRouter = t.router({
  getAllMessages: t.procedure.query(async () => {
    // TODO: Replace with actual data storage solution if needed
    return [];
  }),
  addMessage: authedProcedure
    .input(
      z.object({
        text: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // TODO: Replace with actual data storage solution if needed
      console.log("Message not saved (no database configured):", {
        authorName: ctx?.session?.user?.name,
        text: input.text,
        authorId: ctx?.session?.user?.id,
      });
    }),
});
