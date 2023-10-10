import ytdl from "ytdl-core";

export default async function handler(req, res) {
  // Gelen istekteki url parametresini al
  const { url } = req.query;

  // Eğer url yoksa hata mesajı döndür
  if (!url) {
    res.status(400).json({ message: "No URL provided" });
    return;
  }

  // Eğer url geçerli bir youtube url'i değilse hata mesajı döndür
  if (!ytdl.validateURL(url)) {
    res.status(400).json({ message: "Invalid YouTube URL" });
    return;
  }

  // Youtube video bilgilerini al
  const info = await ytdl.getInfo(url);

  // Video başlığını ve formatını belirle
  const title = info.videoDetails.title;
  const format = "mp4";

  // Yanıt başlıklarını ayarla
  res.setHeader("Content-Type", `video/${format}`);
  res.setHeader("Content-Disposition", `attachment; filename="${title}.${format}"`);

  // Youtube video akışını yanıta yönlendir
  ytdl(url).pipe(res);
}
