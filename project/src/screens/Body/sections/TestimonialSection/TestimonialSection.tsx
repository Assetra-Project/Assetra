import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Separator } from "../../../../components/ui/separator";

const testimonial = {
  quote:
    "I can see it in the numbers, that people are finding Bolt way easier. There isn't as much friction going through checkout, and I think that ease of use is reflected in our better results.",
  author: "Ursula Casserly",
  position: "UK eCommerce Manager, Benefit Cosmetics",
  logoSrc: "/benefit-cosmetics-logo-2024-white-84dc46e6a4-webp.png",
  bgSrc: "/benefit-quote-bg-f03a00217e-webp.png",
};

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gradient-to-b from-[rgba(206,200,186,0)] via-[rgba(206,200,186,0.3)_27%,rgba(245,245,245,1)_66%] to-[rgba(245,245,245,1)] pt-24">
      <div className="max-w-[1240px] mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="flex">
              <div className="w-[400px] h-[520px] rounded-xl bg-[url(/benefit-quote-bg-f03a00217e-webp.png)] bg-cover bg-center relative">
                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 w-full h-[174px] bg-[url(/benefit-cosmetics-logo-2024-white-84dc46e6a4-webp.png)] bg-cover bg-center"></div>
              </div>

              <div className="ml-20 max-w-[457px] relative">
                <div className="w-[102px] h-[60px] bg-[url(/quote-marks-svg.svg)] bg-[100%_100%] mb-16"></div>

                <blockquote className="font-['Agrandir-Regular',Helvetica] font-normal text-[#1f2418] text-[30.4px] tracking-[-0.64px] leading-[35.2px]">
                  {testimonial.quote}
                </blockquote>

                <div className="mt-8 font-['Inter',Helvetica] font-medium text-[#444638] text-base tracking-[-0.32px] leading-[20.8px]">
                  {testimonial.author}
                  <br />
                  {testimonial.position}
                </div>

                <div className="mt-4 flex">
                  <Separator className="w-[21px] bg-[#11190c]" />
                  <Separator className="w-[21px] bg-[#a39f90]" />
                  <Separator className="w-[21px] bg-[#a39f90]" />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="absolute bottom-0 right-[269px] flex space-x-2">
            <CarouselPrevious className="static w-[50px] h-[50px] opacity-20 bg-[url(/slider-prev-svg.svg)] bg-[100%_100%] border-none shadow-none" />
            <CarouselNext className="static w-[50px] h-[50px] bg-[url(/slider-next-svg.svg)] bg-[100%_100%] border-none shadow-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};