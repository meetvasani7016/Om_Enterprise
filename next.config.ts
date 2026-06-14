import type { NextConfig } from "next";
import os from "os";

// Dynamically collect all local network IPs to whitelist them for cross-origin HMR connections in dev mode
const getLocalIPs = (): string[] => {
  const interfaces = os.networkInterfaces();
  const ips: string[] = ["localhost", "127.0.0.1", "0.0.0.0"];
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
      if (net.family === "IPv4" && !net.internal) {
        ips.push(net.address);
        ips.push(`${net.address}:3000`);
        ips.push(`${net.address}:3001`);
        ips.push(`${net.address}:3002`);
      }
    }
  }
  return ips;
};

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - allowedDevOrigins is used by Next.js for dev HMR routing
  allowedDevOrigins: getLocalIPs(),
};

export default nextConfig;
