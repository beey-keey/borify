#!/usr/bin/env node

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_DIR = path.join(__dirname, "../templates/borify");
const TARGET_DIR = process.argv[2] || "borify-app";

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log(`\n✨ Creating a new Borify app in ./${TARGET_DIR}\n`);
copyRecursive(TEMPLATE_DIR, TARGET_DIR);

console.log("Installing dependencies...");
execSync("npm install", { cwd: TARGET_DIR, stdio: "inherit" });

console.log("\n✅ All done!\n");
console.log(`To get started:\n  cd ${TARGET_DIR}\n  npm run dev\n`);
