export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = req.body;

  // ✅ กรองเฉพาะ channel ที่ต้องการ
  if (payload.channelId === "432695") {
    // ✅ ส่งต่อให้ n8n webhook
    await fetch("https://a3s6.app.n8n.cloud/webhook/b46e8307-a980-4361-93a3-d68d11844302", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  }

  // ✅ ตอบกลับให้ respond.io รู้ว่า webhook สำเร็จ
  res.status(200).json({ status: "received" });
}
