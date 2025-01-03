import { z } from "zod";

const SearchSchema = z.object({
  search: z.string().min(3),
});

type SearchType = z.infer<typeof SearchSchema>;

export { SearchSchema, type SearchType };
