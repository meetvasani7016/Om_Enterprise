const os = require("os");
const { spawn } = require("child_process");

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost";
};

const localIP = getLocalIP();
console.log(`\n======================================================`);
console.log(`OM ENTERPRISE DEV WRAPPER`);
console.log(`Dynamically resolved local network IP: ${localIP}`);
console.log(`Starting Next.js dev server on host: ${localIP}`);
console.log(`======================================================\n`);

// Spawn next dev command with the resolved IP hostname
const devProcess = spawn("npx", ["next", "dev", "--hostname", localIP], {
  stdio: "inherit",
  shell: true,
});

devProcess.on("exit", (code) => {
  process.exit(code || 0);
});
