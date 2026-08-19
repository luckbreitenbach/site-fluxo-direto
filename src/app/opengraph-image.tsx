import { ImageResponse } from "next/og";

export const alt = "Fluxo Direto — Marketing, Tecnologia e Automação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          padding: 80,
          background:
            "radial-gradient(700px 400px at 20% 0%, #16305e 0%, #0a0c12 60%), #0a0c12",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#60a5fa" }}>
          FLUXO DIRETO
        </div>
        <div style={{ display: "flex", fontSize: 66, lineHeight: 1.1, fontWeight: 700 }}>
          Seu negócio no digital. Seu crescimento em movimento.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#b6bdcc" }}>
          Sites • Landing pages • Sistemas • Automação • Chatbots • Google
        </div>
      </div>
    ),
    size,
  );
}
