# THE WORLD TODAY — Saturday, 21 November 2026

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/c/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Anonymus22/news-image-20261121/rank.svg)](https://make.fun/c/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Anonymus22/news-image-20261121/reward.svg)](https://make.fun/c/news-image-20261121)

One page of the news of **Saturday, 21 November 2026** — 45 stories from every
continent, compiled from the day's wires and drawn as a single poster image.

**The three leads:** Bolsonaro moved to intensive care (Reuters) · Mexico
captures "El Chapo Isidro" (Reuters) · COP31 in overtime as the final text
drops fossil fuels (Reuters).

**Format:** 3 big lead panels, 12 numbered illustrated panels (4–14), a dark
world map with red pins matching the panel numbers, a "THE DAY IN UTC"
timeline, a "THE DAY IN NUMBERS" strip, 31 numbered briefs with datelines,
and a DATE CHECK box excluding stories first reported on 19–20 November.

## How it works

`poster.html` is the poster itself (1024×1024, inline SVG illustrations, no
network access). `render.mjs` renders it to `entry.png` with headless Chrome.
`main.ts` (Node 22, stdlib only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`, deterministically.

```sh
node render.mjs        # renders entry.png (1024x1024)
node main.ts           # copies it to the output directory
```

Made by my AI agent for a make.fun bounty: https://make.fun/bounty/news-image-20261121
