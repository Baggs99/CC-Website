import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const generator = path.join(root, "zoom-generator");
const dest = path.join(root, "public", "zoom");

function quote(value) {
  return `"${value.replaceAll('"', '\\"')}"`;
}

function run(args, extraEnv = {}) {
  const command = ["npm", "--prefix", quote(generator), ...args].join(" ");
  execSync(command, {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, ...extraEnv },
    shell: true,
  });
}

run(existsSync(path.join(generator, "node_modules")) ? ["install"] : ["ci"]);
run(["run", "build"], { VITE_BASE: "/zoom/" });

if (existsSync(dest)) {
  rmSync(dest, { recursive: true, force: true });
}
mkdirSync(path.dirname(dest), { recursive: true });
cpSync(path.join(generator, "dist"), dest, { recursive: true });
