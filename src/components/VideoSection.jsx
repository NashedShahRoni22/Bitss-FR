import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionContainer from "./shared/SectionContainer";

export default function VideoSection({ productName, videoUrl }) {
  return (
    <SectionContainer>
      <SectionTitle>Learn How It Works</SectionTitle>
      <SectionSubTitle>
        Watch this short video to see how {productName} can benefit you.
      </SectionSubTitle>
      <div className="flex justify-center">
        <div className="aspect-video w-full max-w-3xl">
          <video
            className="h-full w-full rounded-lg object-cover"
            src={videoUrl}
            title="bitss product intro"
            controls
          ></video>
        </div>
      </div>
    </SectionContainer>
  );
}
