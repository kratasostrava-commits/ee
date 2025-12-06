export default function handler(req, res) {
if (req.method !== 'POST') {
return res.status(405).json({ error: 'Použij POST.' });
}

const { lat, lon, accuracy, time } = req.body;

console.log("Přijatá poloha:", {
lat,
lon,
accuracy,
time,
receivedAt: new Date().toISOString()
});

return res.status(200).json({ ok: true });
}
