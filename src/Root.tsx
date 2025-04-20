import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        defaultProps={{
          topImgPath: "img.png",
          bottomVidPath: "PixelValo_Phoenix_v1.mp4",
        }}
        durationInFrames={60}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
