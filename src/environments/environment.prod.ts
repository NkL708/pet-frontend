export const environment = {
  production: true,
  apiUrl: "/api/",
  dsn: process.env["SENTRY_DSN"],
  release: process.env["COMMIT_SHA"],
};
