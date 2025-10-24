import Card from "./Card";
import LeftHero from "./leftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div className="flex h-full w-full">
      <LeftHero />
      <RightHero />
    </div>
  );
};

export default Hero;
