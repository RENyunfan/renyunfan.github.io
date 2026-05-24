// Publisher / venue names to highlight inside news titles.
// Longer / more specific terms first so they win over their substrings
// (e.g. "ICRA 2026" before "ICRA", "IEEE RA-L" before "RA-L").
const VENUE_TERMS = [
  "Nature Communications",
  "Science Robotics",
  "IEEE/ASME T-Mech",
  "IEEE RA-L",
  "ICRA 2026",
  "T-Mech",
  "RA-L",
  "ICRA",
  "IJRR",
  "T-RO",
  "TRO",
  "RSS",
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Match a venue term only when it is not glued to surrounding word characters
// or hyphens, so we never colour a substring inside another word.
const VENUE_REGEX = new RegExp(
  `(?<![\\w-])(${VENUE_TERMS.map(escapeRegExp).join("|")})(?![\\w-])`,
  "g",
);

export type TitlePart = { text: string; venue: boolean };

export function splitByVenues(title: string): TitlePart[] {
  const parts: TitlePart[] = [];
  let lastIndex = 0;

  for (const match of title.matchAll(VENUE_REGEX)) {
    const index = match.index ?? 0;
    if (index > lastIndex) parts.push({ text: title.slice(lastIndex, index), venue: false });
    parts.push({ text: match[0], venue: true });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < title.length) parts.push({ text: title.slice(lastIndex), venue: false });
  return parts;
}
