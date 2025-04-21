import { AbsoluteFill, staticFile, Video, Img } from "remotion";


export const MyComposition = ({ topImgPath, centerText, size, color, bottomVidPath }: { topImgPath: string, centerText: string, size: number, color: string, bottomVidPath: string }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {topImgPath && <Img src={staticFile(topImgPath)} style={{ width: 1080, height: 1920 / 2, objectFit: "cover" }} />}
      {centerText && <p style={{ width: 1080, height: 1920 / 2, fontSize: `${size * 10}vh`, color: color, objectFit: "contain", position: "absolute", top: 1920 / 2 - size * 20, left: 0, textAlign: "center", overflow: "wrap", zIndex: 1, wordBreak: "break-word", textShadow: "2px 2px 3px rgba(0, 0, 0, 1)", fontFamily: "Atma" }}>{centerText}</p>}
      {bottomVidPath && <Video src={staticFile(bottomVidPath)} style={{ width: 1080, height: 1920 / 2, objectFit: "cover" }} />}
    </AbsoluteFill>
  )
};
