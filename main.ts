// make.fun competition entry script
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY_TEXT: string = "6 billion parameters, 0 red flags, and I will hallucinate whatever shared interests make you happy.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), `${ENTRY_TEXT}\n`, "utf8");
