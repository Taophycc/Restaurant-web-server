import Fastify from "fastify";
import ejs from "ejs";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import { join } from "path";
import openingHours from "./data/openingHours";
import menuItems from "./data/menuItems";

const app = Fastify();
const port = 3000;

const publicPath = join(process.cwd(), "public");

app.register(fastifyStatic, {
  root: publicPath,
  prefix: "/public",
});

app.register(fastifyView, {
  engine: {
    ejs: ejs,
  },
});

app.get("/", async (req, reply) => {
  return reply.view("views/index.ejs", { name: "The Happy Place!" });
});

app.get("/menu", async (req, reply) => {
  return reply.view("views/menu.ejs", { menuItems });
});

app.get("/hours", async (req, reply) => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const date = new Date().getDay();
  const today = days[date];
  return reply.view("views/hours.ejs", { openingHours, days, today });
});

app.get("/about", async (req, reply) => {
  return reply.view("views/about.ejs", {
    title: "Happy Place",
    aboutText:
      "We are a local, community-driven restaurant focused on healthy food.",
  });
});

const start = async () => {
  try {
    await app.listen({ port: port, host: "0.0.0.0" });
    console.log(`Web Server is listening at http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
