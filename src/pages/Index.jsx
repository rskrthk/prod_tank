
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import ImageCarousel from "../components/ImageCarousel";
import { Wrench, Droplets, Shield, Clock } from "lucide-react";
import WhatsAppFloat from "./WhatsAppFloat";
import { useRef } from "react";

const Index = () => {
  const sectionRef = useRef(null)
  const currentYear = new Date().getFullYear();
  const services = [
    {
      icon: Wrench,
      title: "Sump Cleaning",
      description: "Complete sump cleaning and maintenance services to prevent flooding and ensure proper drainage.",
      features: [
        "Complete debris removal",
        "Anti Bacterial Spray",
        "High Pressure Water Wash",
        "Vaccum Cleaning",
        "Ultra Violet Light Treatment"
      ]
    },
    {
      icon: Droplets,
      title: "Tank Cleaning",
      description: "Professional cleaning services for water tanks, septic tanks, and industrial storage containers.",
      features: [
        "Sediment Removal",
        "Interior Tank Sanitization",
        "Tank Wall Scrubbing",
        "Rinsing with clean Water",
        "Drying Tank"
      ]
    },
    {
      icon: Shield,
      title: "Septic Tank Cleaning",
      description: "Regular maintenance programs to keep your systems running efficiently year-round.",
      features: [
        "Sludge removal using Vacuum Vehicle",
        "Dewatering of Tank",
        "Anti Bacterial Spray",
        "High Pressure Water Wash"
      ]
    },
    {
      icon: Clock,
      title: "Well & Pond Cleaning",
      description: "24/7 emergency response for urgent cleaning and repair needs.",
      features: [
        "Mechanized Dewatering",
        "Sludge Removal",
        "Anti Bacterial Spray",
        "High Pressure Water Wash"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero onJump={()=>sectionRef.current?.scrollIntoView({behavior:"smooth"})}/>
      {/* <ImageGallery /> */}
      <ImageCarousel />
      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive cleaning and maintenance solutions for residential and commercial properties.
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                // description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 10 years of experience in the industry, we've built a reputation for reliability, 
                efficiency, and exceptional customer service. Our team of certified professionals uses 
                state-of-the-art equipment and environmentally safe procedures.
              </p>
              
              <div className="space-y-4">
                {[
                  "Licensed & Insured Professionals",
                  "Eco-Friendly Cleaning Solutions",
                  "Advanced Equipment & Technology",
                  "100% Satisfaction Guarantee",
                  "Competitive Pricing"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-8 flex justify-center" ref={sectionRef}>
              <ContactForm title="Request Free Estimate"/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nikith Enterprises</h3>
              <p className="text-gray-300">
                Professional sump and tank cleaning services you can trust.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 (91) 9620986744</p>
                <p>📧 nikithenterprises17@gmail.com</p>
                {/* <p>📍 123 Service St, Your City, State 12345</p> */}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <div className="space-y-2 text-gray-300">
                <p>Residential Properties</p>
                <p>Commercial Buildings</p>
                <p>Industrial Facilities</p>
                <p>Emergency Services</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} Nikith Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <WhatsAppFloat/>
    </div>
  );
};

export default Index;
