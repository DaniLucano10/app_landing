import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
  role: string;
  testimonial: string;
};

const ReviewCard = ({ image, name, role, testimonial }: Props) => {
  return (
    <div className="w-full md:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        <div className="col-span-3 order-2 lg:order-1">
          <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]">
            {testimonial}
          </p>

          <div className="flex items-center mt-6">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-600 h-6 w-6" />
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8">{name}</h2>
          <p className="mt-2 text-lg text-gray-600 font-medium mb-6">{role}</p>
        </div>

        <div className="col-span-2 mx-auto order-1 lg:order-2">
          <Image
            src={image}
            alt={`Foto de ${name}`}
            width={250}
            height={120}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
