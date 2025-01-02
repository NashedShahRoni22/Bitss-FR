import SectionContainer from "../../../components/shared/SectionContainer";
import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import missionIcon from "../../../assets/icons/mission.png";
import visionIcon from "../../../assets/icons/vision.png";

export default function Vision() {
  return (
    <SectionContainer>
      <SectionTitle>Our Mission & Vision</SectionTitle>
      <SectionSubTitle>
        Learn more about how we protect businesses and individuals with our
        cutting-edge cybersecurity solutions.
      </SectionSubTitle>
      <div className="flex justify-center">
        <div className="aspect-video w-full max-w-3xl">
          <video
            className="h-full w-full rounded-lg object-cover"
            src="https://bitss.fr/wp-content/uploads/2023/12/bitss_video.mp4"
            title="Our Mission and Vision"
            controls
          ></video>
        </div>
      </div>

      {/* Mission & Vision Container */}
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        {/* Mission */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src={missionIcon} alt="bitss mission" className="size-8" />
            <h3 className="text-2xl font-bold md:text-3xl">Our Mission</h3>
          </div>
          <p className="text-muted-text mb-4">
            With a team of highly skilled research engineers, we deploy
            cutting-edge technology to combat online hacking, piracy, and
            cybercrime.
          </p>
          <p className="text-muted-text">
            Our mission is to stay ahead of evolving cyber threats and provide
            businesses with the best security solutions.
          </p>
        </div>

        {/* Vision */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src={visionIcon} alt="bitss vision" className="size-8" />
            <h3 className="text-2xl font-bold md:text-3xl">Our Vision</h3>
          </div>
          <p className="text-muted-text mb-4">
            Our vision is to deliver the absolute best security solutions for
            our customers, ensuring their safety and peace of mind at every
            step.
          </p>
          <p className="text-muted-text">
            We are committed to excellence, innovation, and personalized
            service, empowering businesses to thrive securely in a digital
            landscape.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
