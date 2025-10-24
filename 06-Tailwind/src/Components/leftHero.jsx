import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftHero = () => {
  return (
    <div className="h-full w-full flex-1/3 flex flex-col justify-between pl-32 mt-20 pb-50">
      <div className="">
        <h1 className="text-6xl font-semibold tracking-wide">
          Prospective <br /> customer <br /> segmentation
        </h1>
        <p className="text-2xl pr-30 mt-7 tracking-wide leading-8">
          Depending on customer satisfaction and access to banking products,
          potential target audience can be divided into three groups.
        </p>
      </div>
      <div className="">
        <ArrowUpRight size={100} />
      </div>
    </div>
  );
};

export default LeftHero;
