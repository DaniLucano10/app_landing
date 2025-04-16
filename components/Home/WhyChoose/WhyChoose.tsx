import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this aplication
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div>
          <WhyChooseCard
            image="/images/i1.png"
            title="Create Free Account"
            linkText="Start Earning"
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i2.png"
            title="Monitor user Analytics"
            linkText="Sign up your store"
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i3.png"
            title="Safe & Trusted"
            linkText="Get The App"
          />
        </div>
        <div>
          <WhyChooseCard
            image="/images/i4.png"
            title="Fast Customer Support"
            linkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
