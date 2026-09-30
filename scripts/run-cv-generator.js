#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const bundledPython = path.join(
  os.homedir(),
  ".cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3"
);
const candidates = [process.env.KANDK_PYTHON, bundledPython, "python3"].filter(Boolean);

let python = null;
for (const candidate of candidates) {
  if (candidate.includes(path.sep) && !fs.existsSync(candidate)) continue;
  const check = spawnSync(candidate, ["-c", "import reportlab"], { stdio: "ignore" });
  if (check.status === 0) {
    python = candidate;
    break;
  }
}

if (!python) {
  console.error("Für die CV-Erzeugung wird Python mit reportlab benötigt. Optional KANDK_PYTHON auf eine passende Python-Installation setzen.");
  process.exit(1);
}

const result = spawnSync(python, [path.join(__dirname, "generate-cvs.py")], {
  cwd: root,
  stdio: "inherit",
});
process.exit(result.status ?? 1);
