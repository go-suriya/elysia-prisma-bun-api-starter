import { Elysia, t } from "elysia";
import { UserController } from "./modules/user/controller/user-controller";

const userController = new UserController();

export const userRoutes = new Elysia({ prefix: "/user" }).post(
  "/register",
  async ({ body }) => await userController.createUser(body),
  {
    error({ code }) {
      console.log("error", code);
      switch (code) {
        case "P2002":
          return {
            error: "Username must be unique",
          };
      }
    },
    body: t.Object({
      username: t.String(),
      password: t.String({
        minLength: 8,
      }),
    }),
    response: t.Object({
      id: t.Number(),
      username: t.String(),
    }),
  }
);
