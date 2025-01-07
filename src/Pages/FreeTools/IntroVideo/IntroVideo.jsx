import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function IntroVideo() {
  return (
    <SectionContainer>
      <SectionTitle>Learn How It Works</SectionTitle>
      <SectionSubTitle>
        Watch this short video to see how Bitss C Secure Contact Form can
        benefit you.
      </SectionSubTitle>
      <div className="flex justify-center">
        <div className="aspect-video w-full max-w-3xl">
          <video
            className="h-full w-full rounded-lg object-cover"
            src="https://bitss.fr/wp-content/uploads/2024/07/preselect-2.mp4"
            title="Our Mission and Vision"
            controls
          ></video>
        </div>
      </div>
    </SectionContainer>
  );
}
