import { useCurrentFrame, interpolate } from "remotion";

export const RedditCard = ({ text, textSize = 26, durationInFrames = 30 }: { text: string; textSize: number; durationInFrames?: number }) => {
    const frame = useCurrentFrame();
    // Animation: stays for durationInFrames, then slides up over 20 frames
    const slideUp = interpolate(
      frame,
      [durationInFrames, durationInFrames + 20],
      [0, -150],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const opacity = interpolate(
      frame,
      [durationInFrames + 10, durationInFrames + 20],
      [1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    return (
      <div
        style={{
          position: "absolute",
          left: 120,
          width: 840,
          background: "white",
          borderRadius: 32,
          boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
          padding: 32,
          zIndex: 10,
          opacity,
          fontFamily: 'Segoe UI, Arial, sans-serif',
          transform: `translateY(${1920/2 - 150 + slideUp}px)`
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
          {/* Reddit avatar */}
          <div style={{ width: textSize*2, height: textSize*2, borderRadius: 24, background: "#ff4500", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16 }}>
            <span style={{ fontSize: textSize*1.5 }}>👽</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, fontSize: textSize*1.4 }}>RedditWTF</span>
            <span style={{ color: "#0079d3", marginLeft: 8, fontSize: textSize*1.4 }}>✔️</span>
            <div style={{ fontSize: textSize*1.1, marginTop: 2 }}>
              {/* Badges as emojis for demo */}
              🏆 🥇 🥈 🥉 💎 🪙 🏅 🥂
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ flex: 1 }} />
          <div style={{ width: textSize*8, height: textSize*1, background: "#f3f3f3", borderRadius: 5, marginLeft: 16, position: "relative" }}>
            <div style={{ width: "80%", height: "100%", background: "#ff6383", borderRadius: 5 }} />
          </div>
        </div>
        {/* Post text */}
        <div style={{ fontWeight: 700, fontSize: textSize*1.4, margin: "16px 0 8px 0", lineHeight: 1.2 }}>{text}</div>
        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", color: "#888", fontSize: textSize, marginTop: 12 }}>
          <span style={{ display: "flex", alignItems: "center", marginRight: 32 }}>
            <span style={{ fontSize: textSize*1.4, marginRight: 4 }}>♡</span>99+
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: textSize, marginRight: 4 }}>🔗</span>99+
          </span>
        </div>
      </div>
    );
  };