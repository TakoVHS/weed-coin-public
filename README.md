# Weed Coin Public

Standalone public-site contour for `weed-coin.cash`.

This app intentionally excludes:

- `/office`
- `/fabric`
- `/dashboard`
- `/employees`
- `/tasks`
- `/requests`
- `/departments`
- `/api/control/*`
- Prisma, NATS, and internal runtime modules

Included public routes:

- `/`
- `/access`
- `/launch-notes`
- `/risk`
- `/terms`
- `/privacy`
- `/api/health`

This package is meant to be extracted into a separate public repository for deployment on Render, Vercel, or Cloudflare without exposing the private office/runtime contour.
