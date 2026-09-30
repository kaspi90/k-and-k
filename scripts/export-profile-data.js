#!/usr/bin/env node

/**
 * Loads the TypeScript profile source without maintaining a second CV data file.
 * The PDF generator consumes this JSON output.
 */
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = path.resolve(__dirname, "..");
const filename = path.join(root, "src/content/profiles.ts");
const source = fs.readFileSync(filename, "utf8");
const javascript = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2019,
    esModuleInterop: true,
  },
  fileName: filename,
}).outputText;

const moduleRecord = { exports: {} };
const evaluate = new Function("exports", "require", "module", "__filename", "__dirname", javascript);
evaluate(moduleRecord.exports, require, moduleRecord, filename, path.dirname(filename));

process.stdout.write(JSON.stringify(moduleRecord.exports.profiles));
