
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, CheckCircle, Droplets, Shield, Wrench } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";

const Index = () => {
  const services = [
    {
      icon: Droplets,
      title: "Sump Pit Cleaning",
      description: "Complete cleaning and maintenance of sump pits, removing debris and ensuring proper drainage.",
      features: ["Debris removal", "Pump inspection", "Discharge testing"]
    },
    {
      icon: Shield,
      title: "Tank Cleaning",
      description: "Professional cleaning of water tanks, oil tanks, and storage vessels with certified procedures.",
      features: ["Interior cleaning", "Sediment removal", "Safety compliance"]
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description: "Regular maintenance services to prevent costly failures and extend equipment lifespan.",
      features: ["Preventive maintenance", "Emergency repairs", "System upgrades"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Cleaning Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive sump and tank cleaning services with industry-leading expertise and equipment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">About Us</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                25+ Years of Cleaning Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AquaClean Pro has been the trusted name in sump and tank cleaning services since 1998. 
                Our certified technicians use state-of-the-art equipment and environmentally safe procedures 
                to deliver exceptional results.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "EPA certified cleaning procedures",
                  "24/7 emergency response",
                  "Fully insured and bonded",
                  "Satisfaction guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional tank cleaning equipment"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">2,500+</div>
                <div className="text-blue-100">Jobs Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Schedule Your Service?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today for a free estimate and consultation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-gray-900">(555) 123-4567</p>
                  <p className="text-gray-600">24/7 Emergency Service Available</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-900">info@aquacleanpro.com</p>
                  <p className="text-gray-600">We respond within 2 hours</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-900">Greater Metro Area</p>
                  <p className="text-gray-600">Serving residential and commercial clients</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AquaClean Pro</h3>
          <p className="text-gray-400 mb-6">
            Professional sump and tank cleaning services you can trust.
          </p>
          <Separator className="my-8 bg-gray-700" />
          <p className="text-gray-500">
            © 2024 AquaClean Pro. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
