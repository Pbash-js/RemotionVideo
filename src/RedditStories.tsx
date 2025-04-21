import { AbsoluteFill, Video, staticFile, useCurrentFrame, interpolate } from "remotion";
import { RedditCard } from "./RedditCard";



export const RedditStories = ({ backgroundVidPath, centerText, size, color }: { backgroundVidPath: string, centerText: string, size: number, color: string }) => {
  return (
    <>
      <AbsoluteFill style={{ backgroundColor: "black" }}>
        {backgroundVidPath && (
          <Video
            src={staticFile(backgroundVidPath)}
            style={{ width: 1080, height: 1920, objectFit: "cover" }}
          />
        )}
        <RedditCard text={centerText} textSize={size} durationInFrames={120} />
      </AbsoluteFill>
    </>
  );
};