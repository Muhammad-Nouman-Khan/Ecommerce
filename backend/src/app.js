import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

import categoryRouter from "./routes/category.routes.js";
import productRouter from "./routes/product.routes.js";
import adminRouter from "./routes/admin.routes.js";

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/admin", adminRouter);

export { app };
