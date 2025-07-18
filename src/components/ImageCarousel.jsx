
import { useState, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import cleaningImg from "../images/cleaning.jpg";
import insideWell from "../images/inside-well.jpg";
import equip from "../images/equip.jpg";
import tank from "../images/tank.png";
import imgOne from "../images/img-1.jpg";
import imgTwo from "../images/img-2.jpg";
import imgThree from "../images/img-4.jpg";
import well from "../images/setio.jpg";

const ImageCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const images = [
    {
      id: 1,
      src: insideWell,
      alt: "Professional sump pump cleaning",
      title: "Sump Pump Cleaning"
    },
    {
      id: 2,
      src: tank,
      alt: "Tank cleaning service",
      title: "Tank Cleaning Service"
    },
    {
      id: 3,
      src: well,
      alt: "Industrial cleaning equipment",
      title: "Professional Equipment"
    },
    {
      id: 4,
      src: imgThree,
      alt: "Emergency cleaning service",
      title: "Emergency Service"
    },
    // {
    //   id: 5,
    //   src: imgTwo,
    //   alt: "Residential cleaning",
    //   title: "Residential Service"
    // }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollToSlide = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our professional cleaning services and state-of-the-art equipment in action.
          </p>
        </div>

        <Carousel setApi={setApi} className="w-full max-w-3xl mx-auto" plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}>
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-68 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="text-sm text-gray-500 mr-4">
            Slide {current} of {count}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${index + 1 === current
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
