import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionContainer from "./shared/SectionContainer";
import ReactPlayer from "react-player/youtube";

export default function VideoSection({ productName, videoUrl }) {
  return (
    <SectionContainer>
      <SectionTitle>Learn How It Works</SectionTitle>
      <SectionSubTitle>
        Watch this short video to see how {productName} can benefit you.
      </SectionSubTitle>
      <div className="flex justify-center">
        <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-lg">
          <ReactPlayer
            url={videoUrl}
            loop
            controls
            width={"100%"}
            height={"100%"}
            className="rounded-lg"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
