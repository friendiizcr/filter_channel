export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = req.body;
  const channelId = payload?.body?.message?.channelId;

  if (channelId === 432695) {
    await fetch("https://a3s6.app.n8n.cloud/webhook/b46e8307-a980-4361-93a3-d68d11844302", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  }

  res.status(200).json({ status: "received" });
}
