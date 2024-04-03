export const environment = {
  production: false,
  apiUrl: "http://localhost:8000/api/",
  dsn: undefined,
  serverIp: process.env["SERVER_IP"] || "localhost",
  release: undefined,
};
