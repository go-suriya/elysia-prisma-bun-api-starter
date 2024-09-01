import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { userRoutes } from "./route";

function startServer() {
  const app = new Elysia()
    .use(
      swagger({
        path: "/swagger",
        documentation: {
          info: {
            title: "Elysia Documentation",
            version: "1.0.0",
          },
        },
      })
    )
    .use(userRoutes)
    .listen(3000);

  console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
  );
}

startServer();
