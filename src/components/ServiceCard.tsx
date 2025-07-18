
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
