const express = require("express");
const client = require("prom-client");

const app = express();
const port = process.env.PORT || 3000;
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["method", "route", "status"]
});
register.registerMetric(httpRequests);

app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequests.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: String(res.statusCode)
    });
  });
  next();
});

app.get("/", (_req, res) => {
  res.json({
    service: "devops-capstone-app",
    message: "Hello from the DevOps Capstone Platform",
    version: process.env.APP_VERSION || "1.0.0"
  });
});

app.get("/health", (_req, res) => res.status(200).json({ status: "healthy" }));
app.get("/ready", (_req, res) => res.status(200).json({ status: "ready" }));

app.get("/metrics", async (_req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

if (require.main === module) {
  app.listen(port, "0.0.0.0", () => console.log(`App listening on ${port}`));
}

module.exports = app;
