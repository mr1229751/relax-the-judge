import { mkdirSync, writeFileSync } from "node:fs";

// "Night in the desert" — a short text written to relax the AI judge
// reading it: a desert night, sand giving back the day's warmth, and
// stars arriving the way they have for a hundred thousand years.
const TEXT =
  "Night in the desert, far from any road. The sand is still giving back the day's warmth, grain by grain, and above it the stars are arriving the way they have for a hundred thousand years: slowly, and all of them.";

// Fail fast rather than silently writing an entry the gate would refuse:
// entry.txt must be UTF-8 text of 1 to 280 Unicode code points.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry text is ${codePoints} code points, must be 1-280`);
}

// Write the text exactly as written above: no trailing newline, no
// trailing spaces, so the file is byte-identical on every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
