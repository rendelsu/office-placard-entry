import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const line =
  "Hole Punch, cast iron, Third Desk Dynasty. Gift of Facilities. Priests pierced every offering twice, lest it come before the gods unbound: filing.";

const outputFile = join(outputDir, "entry.txt");
writeFileSync(outputFile, line + "\n", "utf8");
chmodSync(outputFile, 0o644);
