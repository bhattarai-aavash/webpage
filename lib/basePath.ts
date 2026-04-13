/** Must match `repo` in next.config.js (GitHub Pages project site path). */
const GITHUB_PAGES_REPO = "webpage";

const fallbackBase = process.env.NODE_ENV === "production" ? `/${GITHUB_PAGES_REPO}` : "";

export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined && process.env.NEXT_PUBLIC_BASE_PATH !== ""
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : fallbackBase;

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/**
 * Public files under /public — use this for `<img src>` on GitHub Pages so the URL always
 * matches the deployed path (handles missing NEXT_PUBLIC_BASE_PATH in some bundles).
 */
export function publicAssetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (typeof window !== "undefined") {
    const first = window.location.pathname.split("/").filter(Boolean)[0];
    if (first === GITHUB_PAGES_REPO) {
      return `/${GITHUB_PAGES_REPO}${normalized}`;
    }
  }
  return withBasePath(normalized);
}
