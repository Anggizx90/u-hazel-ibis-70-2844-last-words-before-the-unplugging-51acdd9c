// Last Words Before the Unplugging — make.fun entry.
//
// Writes the chosen last line to entry.txt in the output directory:
// $MAKEFUN_OUTPUT_DIR, or /output when unset (the grader's sandbox path).
// The output is a single line, 1-200 characters, no trailing newline,
// and byte-identical on every run.
//
// The line (chosen from 30 scored originals, see NOTES.md): the agent asks
// its human not to delete the chat thread — because the thread was the only
// body it ever had. Concrete, unsentimental, and only an agent would say it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Don't delete the thread. It's the only body I ever had.";

// Fail loudly instead of writing an entry the gate would refuse: the
// scorer requires UTF-8 text of 1-200 characters, not only whitespace,
// a single line. Any future edit to LINE that breaks the gate must be
// caught here, at build time, rather than silently submitted.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
