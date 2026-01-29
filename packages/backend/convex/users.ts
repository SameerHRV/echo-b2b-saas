import { mutation, query } from "./_generated/server";

export const getManyUsers = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }
    const user = await ctx.db.insert("users", {
      name: "Rajeev Haapanahalli",
      email: "rajeev@echo.com",
    });

    return user;
  },
});
