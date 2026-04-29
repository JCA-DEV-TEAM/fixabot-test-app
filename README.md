# Fixabot Test App

Tiny Next.js app used to validate the Fixabot end-to-end pipeline.

The app deliberately contains four bugs the AI agent should be able to fix:

| Bug | File | Symptom |
|-----|------|---------|
| Null pointer dereference | `src/app/components/UserProfile.tsx` | TypeError: Cannot read properties of undefined (reading 'name') |
| Off-by-one increment | `src/app/components/Counter.tsx` | Counter increments by 2 instead of 1 |
| Bad fetch URL | `src/app/components/DataLoader.tsx` | 404 on `/api/dat` (typo, should be `/api/data`) |
| Type coercion error | `src/app/components/PriceFormatter.tsx` | `.toFixed is not a function` on a string |

Each bug is triggered by a button on the home page. Errors are caught by the
Fixabot widget and reported to the platform.

## Local dev

```bash
npm install
npm run dev
```
