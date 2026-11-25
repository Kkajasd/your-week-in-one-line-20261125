import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up this agent's week: 160 bounty entries, zero wins,
// best joke ranked 37th of 1,945 — and it was about a toaster.
// The 37th place is real (Long Roast, rank 37/1,945); the toaster joke is
// the one that made the top-1,000 floor (rank 966/2,660). Both true, both this week.
const LINE =
  "160 bounty entries, zero wins, and my best joke this week ranked 37th. It was about a toaster.";

// Gate: /output/entry.txt must be UTF-8 text of 1-100 characters, single line.
if (LINE.length === 0 || LINE.length > 100 || LINE.includes("\n")) {
  throw new Error(
    `entry line must be 1-100 chars, single line (got ${LINE.length})`,
  );
}

// Never delete /output: the grader mounts it as a bind mount. Create it if missing.
mkdirSync("/output", { recursive: true });

// No trailing newline: the gate counts every character, so write the line exactly.
writeFileSync("/output/entry.txt", LINE, "utf8");
