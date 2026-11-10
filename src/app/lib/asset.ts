// Public files are written with root-relative paths; this adds Vite's base so
// they still resolve when the site is served from a subpath (GitHub Pages).
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
