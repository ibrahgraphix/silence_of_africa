# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# silenceofafricasafari

## Deployment (Vercel)

1. Connect this repository to Vercel (https://vercel.com) and select the project.
2. In the Vercel project settings set the build command to `npm run vercel-build` and the output directory to `dist` (the included `vercel.json` already configures this for you).
3. Add the following environment variables in Vercel (Dashboard → Project → Settings → Environment Variables):
	- `VITE_SERVICE_ID`
	- `VITE_TEMPLATE_ID`
	- `VITE_PUBLIC_KEY`

4. Deploy. Vercel will run `npm run vercel-build` and publish the `dist` folder. Client-side routing is handled by the rewrite rule in `vercel.json`.

Notes:
- The project uses Vite; the build outputs to `dist` which Vercel will serve as static files.
- Keep your `VITE_` env vars secret; configure them in Vercel and do not check `.env` into source control.
