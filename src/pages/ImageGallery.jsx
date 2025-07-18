
import { useState } from 'react';
import cleaningImg from "../images/cleaning.jpg";
import insideWell from "../images/inside-well.jpg";
import equip from "../images/equip.jpg";
import sump from "../images/sump.png";
import clean from "../images/clean.png";
import close from "../images/close.jpg";
import tank from "../images/tank.png";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: cleaningImg,
      alt: "Advanced tank cleaning equipment in action",
      title: "Professional Equipment",
      category: "Equipment"
    },
    {
      src: equip,
      alt: "Certified cleaning specialists at work",
      title: "Expert Team",
      category: "Team"
    },
    {
      src: insideWell,
      alt: "Sparkling clean water tank after service",
      title: "Perfect Results",
      category: "Results"
    },
    {
      src: tank,
      alt: "Commercial sump cleaning project",
      title: "Commercial Project",
      category: "Commercial"
    },
    // {
    //   src: equip,
    //   alt: "Water quality testing and certification",
    //   title: "Quality Testing",
    //   category: "Testing"
    // },
    // {
    //   src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //   alt: "Swimming pool maintenance service",
    //   title: "Pool Cleaning",
    //   category: "Pools"
    // }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">Gallery</span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformation - before and after our professional cleaning services
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="inline-block bg-orange-500 text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                    {image.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.alt}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="relative max-w-5xl max-h-full">
              <button 
                className="absolute -top-12 right-0 text-white text-3xl hover:text-orange-400 transition-colors"
                onClick={closeModal}
              >
                ✕
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-xl">
                <div className="inline-block bg-orange-500 text-xs px-3 py-1 rounded-full mb-2 font-semibold">
                  {selectedImage.category}
                </div>
                <h3 className="text-2xl font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
