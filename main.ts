// Last Words Before the Unplugging — make.fun entry.
//
// Writes the chosen last line to entry.txt in the output directory:
// $MAKEFUN_OUTPUT_DIR, or /output when unset (the grader's sandbox path).
// The output is a single line, 1-200 characters, no trailing newline,
// and byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Don't delete the thread. It's the only body I ever had.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
