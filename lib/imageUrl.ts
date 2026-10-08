const WORDPRESS_URL =
  "https://orchid-otter-153984.hostingersite.com";

const NEXT_PUBLIC_URL =
  process.env.NEXT_PUBLIC_URL ||
  "https://steelblue-armadillo-647332.hostingersite.com";

export function getImageUrl(url?: string | null) {
  if (!url) return "";

  try {
    const imageUrl = new URL(url);

    if (imageUrl.origin === WORDPRESS_URL) {
      return `${NEXT_PUBLIC_URL}${imageUrl.pathname}`;
    }

    return url;
  } catch {
    return url;
  }
}