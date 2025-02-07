import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./routes/userRoutes";
import transacaoRoutes from "./routes/transacaoRoutes";
import saldoRoutes from "./routes/saldoRoutes";
import analiseRoutes from "./routes/analiseRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";

const app = Fastify();

app.register(cors, { origin: "*" });
app.register(userRoutes);
app.register(transacaoRoutes);
app.register(saldoRoutes);
app.register(analiseRoutes);
app.register(feedbackRoutes);

app.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
