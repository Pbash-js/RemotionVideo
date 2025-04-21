import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { z } from "zod";
import { RedditStories } from "./RedditStories";
export const myCompSchema = z.object({
  topImgPath: z.string(),
  centerText: z.string(),
  size: z.number(),
  color: z.string(),
  bottomVidPath: z.string(),
});
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        schema={myCompSchema}
        defaultProps={{
          topImgPath: "img.png",
          centerText: "Hello World",
          size: 2,
          color: "white", 
          bottomVidPath: "Homelander - Perfect.mp4",
        }}
        durationInFrames={60}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="RedditStories"
        component={RedditStories}
        defaultProps={{
          backgroundVidPath: "Homelander - Perfect.mp4",
          centerText: "Reddit Story #319",
          size: 30,
          color: "white"
        }}
        durationInFrames={120}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
