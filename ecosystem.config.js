// ecosystem.config.js
module.exports = {
    apps: [
      { name: "remotion", script: "npm", args: "run start" },
      { name: "api", script: "render-api.js" }
    ]
  }