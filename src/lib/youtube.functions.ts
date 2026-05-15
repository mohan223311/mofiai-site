import { createServerFn } from "@tanstack/react-start";

const CHANNEL_HANDLE = "mofiai123-f";

interface YTVideo {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
}

export const getLatestUploads = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ videos: YTVideo[]; subscribers: string }> => {
    try {
      // 1. Resolve channel id from the handle page
      const handlePage = await fetch(`https://www.youtube.com/@${CHANNEL_HANDLE}`, {
        headers: { "User-Agent": "Mozilla/5.0", "Accept-Language": "en" },
      }).then((r) => r.text());

      const idMatch =
        handlePage.match(/"channelId":"(UC[\w-]{20,})"/) ||
        handlePage.match(/"externalId":"(UC[\w-]{20,})"/);
      if (!idMatch) return { videos: [], subscribers: "4K+" };
      const channelId = idMatch[1];

      // 2. Fetch RSS feed
      const rss = await fetch(
        `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      ).then((r) => r.text());

      const entries = rss.split("<entry>").slice(1, 13);
      const videos: YTVideo[] = entries.map((e) => {
        const id = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? "";
        const title = e.match(/<title>([^<]+)<\/title>/)?.[1] ?? "";
        const published = e.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
        return {
          id,
          title,
          published,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        };
      });

      return { videos, subscribers: "4K+" };
    } catch (e) {
      console.error("youtube fetch failed", e);
      return { videos: [], subscribers: "4K+" };
    }
  },
);
