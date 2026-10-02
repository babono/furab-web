import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The share card shown by iMessage, WhatsApp, Slack, X and friends. Rendered
// once at build time. X falls back to og:image, so there is no twitter-image.

export const alt =
  "FURAB — Track, Highlight, Remind. A calm newborn tracker for iPhone, on the App Store.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dataUri = (buf: Buffer) => `data:image/png;base64,${buf.toString("base64")}`;

const [bold, medium, icon, boyHome, girlHome] = await Promise.all([
  readFile(join(process.cwd(), "src/app/_og/Geist-700.ttf")),
  readFile(join(process.cwd(), "src/app/_og/Geist-500.ttf")),
  readFile(join(process.cwd(), "public/brand/appicon.png")),
  readFile(join(process.cwd(), "public/screenshots/boy/01-home.png")),
  readFile(join(process.cwd(), "public/screenshots/girl/01-home.png")),
]);

const INK = "#111116";
const BRAND = "#0abba5";

/** Same proportions as components/Phone.tsx: radius ~12.5% of the width. */
function Phone({ src, width, style }: { src: string; width: number; style?: React.CSSProperties }) {
  const bezel = Math.round(width * 0.026);
  const screen = width - bezel * 2;
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        padding: bezel,
        borderRadius: width * 0.125 + bezel,
        background: "#1c1c22",
        boxShadow: "0 30px 60px rgba(17,17,22,0.28)",
        ...style,
      }}
    >
      <img
        src={src}
        width={screen}
        height={Math.round((screen * 1200) / 552)}
        style={{ borderRadius: width * 0.125 }}
        alt=""
      />
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          fontFamily: "Geist",
          color: INK,
          // The hero mesh from globals.css, frozen mid-drift.
          background: "linear-gradient(160deg, #bcd8ef 0%, #e9e6ec 48%, #f7ccda 100%)",
        }}
      >
        <div
          style={{
            position: "absolute", left: -160, top: -260, width: 760, height: 760,
            background: "radial-gradient(circle closest-side, rgba(112,176,228,0.85) 0%, rgba(112,176,228,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute", right: -220, bottom: -320, width: 860, height: 860,
            background: "radial-gradient(circle closest-side, rgba(244,158,178,0.9) 0%, rgba(244,158,178,0) 68%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", padding: "64px 0 0 76px", width: 690 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={dataUri(icon)} width={72} height={72} style={{ borderRadius: 17 }} alt="" />
            <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: 1 }}>FURAB</div>
          </div>

          <div
            style={{
              display: "flex", flexDirection: "column", marginTop: 54,
              fontSize: 76, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5,
            }}
          >
            <span>Track, Highlight,</span>
            <span>Remind.</span>
          </div>

          <div style={{ marginTop: 26, fontSize: 30, fontWeight: 500, lineHeight: 1.35, color: "rgba(17,17,22,0.68)" }}>
            The calm way to keep up with a newborn.
          </div>

          <div
            style={{
              display: "flex", alignItems: "center", gap: 12, marginTop: 44, alignSelf: "flex-start",
              padding: "16px 30px", borderRadius: 999, background: BRAND, color: "white",
              fontSize: 26, fontWeight: 700, boxShadow: "0 12px 28px rgba(10,187,165,0.35)",
            }}
          >
            <svg width="22" height="27" viewBox="0 0 384 512" fill="white">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download on the App Store
          </div>
        </div>

        {/* Two phones bleeding off the bottom edge, the back one tilted away. */}
        <Phone src={dataUri(girlHome)} width={262} style={{ left: 930, top: 120, transform: "rotate(8deg)" }} />
        <Phone src={dataUri(boyHome)} width={290} style={{ left: 740, top: 64, transform: "rotate(-4deg)" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: bold, weight: 700, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
