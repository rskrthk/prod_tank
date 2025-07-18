
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone } from "lucide-react";
import tankBg from '../images/tank-bg.jpg'

const Hero = ({onJump}) => {
  const [isMobile, setIsMobile] = useState(true);
   const typeMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
 
  const handleCall = () => {
    if (typeMobile) {
      window.location.href = 'tel:+919620986744';
    } else {
      alert('Phone call is not supported on this device.');
    }
  };
  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width >= 840) {
        setIsMobile(false)
      } else {
        setIsMobile(true)
      }
    };

    updateBackground(); // Set initially
    window.addEventListener('resize', updateBackground);

    return () => window.removeEventListener('resize', updateBackground);
  }, []);
  return (
    <section className="relative pt-20 pb-32 px-4 overflow-hidden">
      {/* <div className="absolute inset-0 w-full" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: isMobile ? 'contain' : 'cover', backgroundRepeat: 'no-repeat', backgroundColor: 'blue'}}></div> */}
      <div className="absolute inset-0 w-full" style={{ backgroundImage: `url(${tankBg})`, backgroundSize:isMobile?'contain':'cover', backgroundRepeat: 'no-repeat', backgroundColor: 'blue'}}></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            ⭐ Trusted by 2,500+ Customers
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="block text-cyan-300">Sump & Tank</span>
            Cleaning Services
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert cleaning solutions for residential and commercial properties.
            Fast, reliable, and environmentally safe procedures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg" onClick={onJump}>
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button size="lg" variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg" onClick={handleCall}>
              <Phone className="mr-2 h-5 w-5" />
              Call (91) 9620986744
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "24/7", label: "Emergency Service" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Guaranteed" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-300 mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
