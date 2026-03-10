import QRCode from "qrcode";
import path from "path";
import fs from "fs";

const url = "https://apps.apple.com/app/id6744961871";
const outPath = path.resolve("public/qr.png");

fs.mkdirSync(path.dirname(outPath), { recursive: true });

await QRCode.toFile(outPath, url, {
    width: 800,
    margin: 2,
    errorCorrectionLevel: "M",
});

console.log("✅ QR generated:", outPath, "->", url);