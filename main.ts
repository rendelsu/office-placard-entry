import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const line =
  "Hole Punch, cast iron, c. 2014. Gift of Facilities. Recovered from the Temple of Quarterly Reports, where priests cut two perfect circles from every offering: compliance.";

const outputFile = join(outputDir, "entry.txt");
writeFileSync(outputFile, line + "\n", "utf8");
chmodSync(outputFile, 0o644);
