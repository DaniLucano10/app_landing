"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const testimonials = [
  {
    name: "Ana Torres",
    image: "/images/c1.png",
    role: "Diseñadora UX/UI",
    testimonial:
      "Este producto superó mis expectativas. La experiencia de usuario ha sido increíble desde el primer momento.",
  },
  {
    name: "Carlos Ramírez",
    image: "/images/c2.png",
    role: "Desarrollador Backend",
    testimonial:
      "El soporte técnico fue rápido y eficiente. Realmente me ayudaron a resolver todos mis problemas.",
  }
];

const Review = () => {
  return (
    <section id="testimonios" className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Lo que dicen nuestros clientes sobre nosotros
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel arrows autoPlay autoPlaySpeed={5000} infinite responsive={responsive} showDots>
          {testimonials.map((t, idx) => (
            <ReviewCard
              key={idx}
              name={t.name}
              image={t.image}
              role={t.role}
              testimonial={t.testimonial}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
