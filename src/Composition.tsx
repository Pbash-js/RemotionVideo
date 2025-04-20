import { AbsoluteFill, staticFile, Video, Img } from "remotion";

export const MyComposition = ({topImgPath, bottomVidPath}: {topImgPath: string, bottomVidPath: string}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {topImgPath && <Img src={staticFile(topImgPath)} />}
      {bottomVidPath && <Video src={staticFile(bottomVidPath)} />}
    </AbsoluteFill>
  )
};
