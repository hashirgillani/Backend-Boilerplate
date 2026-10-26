import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const port = Number(process.env.PORT ?? 3000);

const server = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

server.on("error", (error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

const shutdown = (signal: NodeJS.Signals) => {
  console.log(`${signal} received, shutting down`);
  server.close(() => process.exit(0));
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
