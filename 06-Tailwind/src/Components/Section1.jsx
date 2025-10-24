import Hero from "./hero";
import Navbar from "./navbar";

const Section1 = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Section1;
