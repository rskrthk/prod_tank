
import { CheckCircle, Droplets, Shield, Wrench, Clock, Users, Award, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "@/components/ContactForm";

const ServicePage = () => {
  const { title } = useLocation().state
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const bulletPoints = {
    "Sump Cleaning": [
      "Prevent flooding and water damage",
      "Avoid pump failures and system blockages",
      "Remove harmful bacteria and foul odors",
      "Extend the lifespan of your drainage and pump system"
    ],
    "Tank Cleaning": [
      "Safe and hygienic water for drinking, cooking, and cleaning",
      " Removal of algae, dirt, sludge, and disease-causing bacteria",
      " Prevention of foul odors and discoloration",
      " Longer lifespan for your tank and plumbing system"
    ],
    "Septic Tank Cleaning": [
      "Prevent system failure and costly repairs",
      "Eliminate foul odors and potential backups",
      "Improve the efficiency of your wastewater system",
      "Protect groundwater and local ecosystems",
      "Comply with local health regulations"
    ],
    "Well & Pond Cleaning": [
      "Ensure water quality",
      "Prevents waterborne diseases",
      "Improves water storage capacity",
      "Restores natural recharge"
    ],
  };

  const cleaningProcess = {
    "Sump Cleaning": [
      {
        title: "Complete debris removal",
        description: "Removal of water, sludge, sediment, and debris."
      },
      {
        title: "Anti-Bacterial Spray",
        description: "Eco friendly chemical used to ensure the sump is free of bacteria and algae"
      },
      {
        title: "High Pressure Water Wash",
        description: "Clean and rinse the sump walls and base to ensure maximum efficiency."
      },
      {
        title: "Vacuum Cleaning",
        description: "Finally drying the sump once the cleaning work is completed"
      },
      {
        title: "Ultra Violet Light Treatment",
        description: "To inactivate or kill harmful microorganisms like bacteria, viruses, and pathogens"
      }
    ],
    "Tank Cleaning": [
      {
        title: "Tank Inspection",
        description: "Assessing the condition of your overhead tank"
      },
      {
        title: "Draining",
        description: "Complete removal of stored water"
      },
      {
        title: "Sludge Removal",
        description: "Eliminating settled dirt and algae from the bottom and walls"
      },
      {
        title: "Disinfection",
        description: "Using non-toxic, safe disinfectants to kill germs and bacteria"
      },
      {
        title: "Scrubbing",
        description: "Scrubbing all internal surfaces"
      },
      {
        title: "Final Rinse & Drying",
        description: "Ensuring your tank is clean, residue-free, and ready to refill"
      }
    ],
    "Septic Tank Cleaning": [
      {
        title: "Check Sludge and Scum Levels",
        description: "Measure the buildup using a stick or sludge judge to assess the need for cleaning."
      },
      {
        title: "Pump Out the Waste",
        description: "Use a vacuum truck to remove all sludge, scum, and wastewater from the tank"
      },
      {
        title: "Break Up Solid Waste",
        description: "Use rods or water jets to dislodge any hardened waste stuck to the tank walls or floor"
      },
      {
        title: "Clean the Tank Interior",
        description: "Spray clean water to rinse out any remaining residue and ensure complete cleanliness"
      },
      {
        title: "Inspect Tank Components",
        description: "Check the condition of inlet and outlet pipes, baffles, and filters for damage or blockages"
      }
    ],
    "Well & Pond Cleaning": [
      {
        title: "Assess the Water Body",
        description: "Inspect the well or pond to check water quality, silt levels, and visible pollution"
      },
      {
        title: "Drain or Lower Water Level",
        description: "Partially or fully remove water using pumps or manual methods for easier cleaning"
      },
      {
        title: "Remove Debris and Waste",
        description: "Clear out plastic, leaves, dead animals, and other floating or sunken solid waste"
      },
      {
        title: "Desilt the Bottom",
        description: "Excavate mud, sludge, and accumulated silt from the base to increase water capacity"
      },
      {
        title: "Scrub Walls and Base (For Wells)",
        description: "Brush and clean the interior surfaces of wells to remove algae, moss, and mineral build-up"
      }
    ]
  };

  const serviceTypes = [
    { icon: Users, text: "Basement sump pits" },
    { icon: Wrench, text: "Commercial stormwater sumps" },
    { icon: Droplets, text: "Industrial water sumps" },
    { icon: Shield, text: "Grease trap and oil interceptor sumps" }
  ];

  const whyChooseUs = [
    { icon: Award, text: "Experienced labour" },
    { icon: Wrench, text: "Modern equipment and technology" },
    { icon: Clock, text: "Fast response and flexible scheduling" },
    { icon: Leaf, text: "Eco-friendly waste handling" },
    { icon: Users, text: "Clear communication & understanding" }
  ];

  const cleaningNeeded = {
    "Sump Cleaning": "A sump (underground water storage tank) is a vital component of any building's water system. However, it's often out of sight, out of mind—which makes it easy to ignore until problems arise. Over time, debris, oil, sludge, and sediments can accumulate within the tank, causing blockages and affecting the efficiency of the pumping mechanism.",
    "Tank Cleaning": "Overhead water tanks are a common source of household and commercial water. But without regular cleaning, they can become breeding grounds for bacteria, algae, sediment, and even insects—contaminating your water supply and putting your health at risk. At Nikith Enterprises we provide safe, thorough, and affordable overhead tank cleaning services for homes, businesses, and apartment complexes",
    "Septic Tank Cleaning": "A well-maintained septic system is essential for the health of your home or business. Over time, waste and sludge accumulate in your tank, leading to blockages, unpleasant odours, and even costly backups. At Nikith Enterprises, we provide reliable, affordable, and efficient septic tank cleaning services to keep your system running at its best",
    "Well & Pond Cleaning": "Wells and ponds are essential sources of water for drinking, irrigation, livestock, and other uses. However, over time, they accumulate mud, silt, algae, debris, and even harmful microorganisms—reducing water quality and causing blockages or contamination. we specialize in well and pond cleaning services that restore water quality and ensure a safe, efficient, and sustainable water supply",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-slate-800">Nikith Enterprises</h1>
        </div>
      </header> */}

      {/* Hero Section with Background Image */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/60"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Industrial equipment background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Professional {title} Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Keep your drainage systems running efficiently with our expert {title} and maintenance services
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-16">

        {/* Why Your Sump Needs Regular Cleaning */}
        <section>
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Why Regular Cleaning is needed
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {cleaningNeeded[title]}
              </p>
              {/* <p className="text-lg text-slate-600 leading-relaxed">
                We provide fast, reliable, and thorough <span className="font-semibold text-blue-600">{title} services</span> to ensure your drainage
                systems stay in peak condition.
              </p> */}
            </CardContent>
          </Card>
        </section>

        {/* Why Is Sump Cleaning Important */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Why Is {title} Important?
          </h2>
          <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
            Regular {title} is
            crucial to:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {bulletPoints[title].map((point, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Our Sump Cleaning Process */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Our {title} Process
          </h2>
          <p className="text-lg text-slate-600 text-center mb-8">
            At Nikith Enterprises, we use the latest tools and equipment to get the job done right the
            first time.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleaningProcess[title].map((step, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-slate-800">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Residential & Commercial Sump Cleaning */}
        {title == "Sump Cleaning" && <section>
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Residential & Commercial {title}
              </h2>
              <p className="text-lg mb-8 text-center opacity-90 max-w-3xl mx-auto">
                Whether you're a homeowner, facility manager, or property developer, we tailor our services
                to fit your needs. We clean all types of systems, including:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceTypes.map((service, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                    <service.icon className="h-12 w-12 mx-auto mb-3 opacity-90" />
                    <p className="font-medium">{service.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>}

        {/* Why Choose Nikith Enterprises */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Why Choose Nikith Enterprises?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-blue-100 rounded-full">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-slate-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Schedule Your {title}?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Don't wait for problems to arise. Contact Nikith Enterprises today for professional,
                reliable {title} services.
              </p>
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get Your Free Quote
              </button> */}
              <ContactForm title="Get Your Free Quote"/>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
