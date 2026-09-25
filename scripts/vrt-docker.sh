#!/usr/bin/env sh
# Screenshot baselines are only comparable when the renderer is identical, so
# VRT always runs inside this pinned image — the same one CI uses. Keep the tag
# in step with the playwright devDependency and .github/workflows/test.yml.
set -eu

IMAGE="mcr.microsoft.com/playwright:v1.63.0-noble"

exec docker run --rm \
  --volume "$PWD":/work \
  --volume portfolio-vrt-node-modules:/work/node_modules \
  --workdir /work \
  "$IMAGE" \
  sh -c '[ -x node_modules/.bin/vitest ] || npm ci; exec npx vitest run --project vrt "$@"' -- "$@"
