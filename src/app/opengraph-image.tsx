import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ボロ物件投資ラボ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function HouseBefore() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 220 }}>
      <div
        style={{
          display: "flex",
          width: 0,
          height: 0,
          borderLeft: "110px solid transparent",
          borderRight: "110px solid transparent",
          borderBottom: "70px solid #8a7259",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "relative",
          width: 200,
          height: 140,
          background: "#a99075",
          border: "6px solid #6b5842",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 90,
            width: 6,
            height: 140,
            background: "#4a3a28",
            transform: "rotate(6deg)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 20,
            width: 44,
            height: 60,
            background: "#5d4b37",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            right: 20,
            width: 44,
            height: 44,
            background: "#5d4b37",
          }}
        />
      </div>
    </div>
  );
}

function HouseAfter() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 220 }}>
      <div
        style={{
          display: "flex",
          width: 0,
          height: 0,
          borderLeft: "110px solid transparent",
          borderRight: "110px solid transparent",
          borderBottom: "70px solid #c1694f",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "relative",
          width: 200,
          height: 140,
          background: "#fffaf2",
          border: "6px solid #c1694f",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 78,
            width: 44,
            height: 70,
            background: "#c1694f",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 24,
            left: 22,
            width: 40,
            height: 40,
            background: "#e8d5bf",
            border: "4px solid #c1694f",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 24,
            right: 22,
            width: 40,
            height: 40,
            background: "#e8d5bf",
            border: "4px solid #c1694f",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -34,
            right: 8,
            fontSize: 34,
          }}
        >
          ✅
        </div>
      </div>
    </div>
  );
}

export default async function Image() {
  const fontData = await readFile(join(process.cwd(), "src/assets/NotoSansJP-Bold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf3e7",
          padding: "56px 64px",
          fontFamily: "Noto Sans JP",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: "#c1694f" }}>
          宮城県 空き家・ボロ物件ラボ
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
          <HouseBefore />
          <div style={{ display: "flex", fontSize: 90, color: "#c1694f" }}>→</div>
          <HouseAfter />
        </div>

        <div style={{ display: "flex", fontSize: 48, fontWeight: 700, color: "#4a3728" }}>
          ボロ物件投資ラボ
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Sans JP", data: fontData, style: "normal", weight: 700 }],
    }
  );
}
