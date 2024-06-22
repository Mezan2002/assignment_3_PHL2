import cors from "cors";
import express, { Request, Response } from "express";
// import router from "./app/routes";

const app = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use("/api/v1", router);

// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hurrah server is running!");
});

//Global Error Handler
// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;
