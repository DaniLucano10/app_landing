import React from 'react';
import { FaCheck } from 'react-icons/fa';

type Props = {
  price: number;
  plan: string;
  description: string;
  features: string[];
};

const PriceCard = ({ plan, price, description, features }: Props) => {
  return (
    <article className="bg-white p-12 rounded-lg shadow-lg" aria-label={`Plan ${plan}`}>
      <h3 className="mt-8 text-xl font-semibold text-blue-600 text-center">
        {plan} Plan
      </h3>
      <div className="font-medium text-3xl mt-4 text-center">
        $<span className="text-5xl font-bold">{price}</span>/mo
      </div>
      <p className="mt-2 text-gray-600 text-center">Per user</p>
      <p className="mt-4 text-gray-600 text-center text-sm">{description}</p>

      <ul className="mt-10 space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 text-gray-700 text-sm font-semibold"
          >
            <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
              <FaCheck className="text-green-500" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button className="block w-full p-4 text-base md:text-lg text-white font-bold hover:bg-blue-950 transition-all duration-300 bg-blue-900">
          Comience una prueba gratuita de 14 días
        </button>
      </div>
    </article>
  );
};

export default PriceCard;
