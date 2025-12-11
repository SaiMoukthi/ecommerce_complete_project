
# Full E-Commerce Project (Ready-to-upload)

This is a complete starter e-commerce project (frontend + backend) with an admin dashboard,
authentication, product CRUD, order creation, and helper scripts. It's intended to be ready to
upload to GitHub and run locally or with Docker for quick demos.

See below for quick steps to run locally and to push to GitHub automatically (if you have the GitHub CLI installed).

## Quick local run (recommended)
1. Make sure you have Node.js (18+), npm, and MongoDB installed OR Docker & docker-compose.
2. Copy env files: `cp server/.env.example server/.env` and `cp client/.env.example client/.env`.
3. In one terminal, start backend:
   ```bash
   cd server
   npm install
   npm run dev
   ```
4. In another terminal, start frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```
5. Visit frontend (usually http://localhost:5173).

## Quick Docker run
If you have Docker and docker-compose:
```bash
docker-compose up --build
```
This will bring up the backend, frontend, and a MongoDB service.

## Push to GitHub helper
If you want to create a GitHub repo and push automatically, use the `scripts/push_to_github.sh` script (requires `gh` CLI).

## Notes
- Admin user creation: register a user, then manually change role to 'admin' in MongoDB for quick testing, or use the seed script which creates an admin user with credentials printed in logs.
- This starter is for demo/development. Harden for production before deployment (secrets, validation, HTTPS, CSP, rate limiting, etc.).
