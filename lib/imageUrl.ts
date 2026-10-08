const WORDPRESS_URL =
  "https://orchid-otter-153984.hostingersite.com";

const NEXT_PUBLIC_URL =
  process.env.NEXT_PUBLIC_URL ||
  "http://localhost:3000/";

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