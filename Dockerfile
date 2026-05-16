# syntax=docker/dockerfile:1

# ---- Build stage: bun installs deps and builds the static Astro site ----
FROM oven/bun:1.2-alpine AS build
WORKDIR /app

# Install dependencies against the committed lockfile (reproducible build).
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build the static output to /app/dist
COPY . .
RUN bun run build

# ---- Runtime stage: nginx serves the static /dist ----
FROM nginx:1.27-alpine AS runtime

# Site config (redirects, caching, custom 404)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Coolify health check hits "/" — nginx must answer 200.
# Use 127.0.0.1 (not localhost) so it does not resolve to IPv6 ::1, which
# nginx does not listen on; -O /dev/null is busybox-wget safe.
HEALTHCHECK --interval=15s --timeout=4s --start-period=8s --retries=4 \
  CMD wget -q -O /dev/null http://127.0.0.1:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
