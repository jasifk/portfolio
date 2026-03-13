import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#030014",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Radial background glows */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 15% 60%, rgba(0,240,255,0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 40%, rgba(124,58,237,0.07) 0%, transparent 55%)",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, #00f0ff 30%, #7c3aed 70%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Mono label */}
        <div
          style={{
            fontSize: "15px",
            color: "#00f0ff",
            letterSpacing: "5px",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          // portfolio
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: 800,
            color: "#e2e8f0",
            lineHeight: 1.05,
            marginBottom: "14px",
            display: "flex",
          }}
        >
          Jasif Shameem
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "28px",
            color: "#64748b",
            marginBottom: "44px",
            display: "flex",
          }}
        >
          Tech Lead · Full-Stack Engineer · 7+ Years
        </div>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: "10px" }}>
          {["Node.js", "TypeScript", "React", "AWS", "PostgreSQL"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(0,240,255,0.07)",
                  border: "1px solid rgba(0,240,255,0.2)",
                  color: "#00f0ff",
                  padding: "7px 18px",
                  borderRadius: "9999px",
                  fontSize: "17px",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "18px",
            color: "#334155",
            display: "flex",
          }}
        >
          jasif.me
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "40%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(124,58,237,0.4))",
            display: "flex",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
