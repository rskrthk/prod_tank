
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const initialState = { name: "", locality: "", email: "", phone: "", message: "" }

const ContactForm = ({title}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [serviceType, setServiceType] = useState("");
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("f", inputs);

    if (serviceType) {
      setIsSubmitting(true);

      emailjs
        .send('service_fu61j4m', 'template_zv0nvzb', { ...inputs, serviceType }, {
          publicKey: 'oMYQeSQDGMTf1-YgF',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setTimeout(() => {
              setIsSubmitting(false);
      setOpen(false);
              setInputs(initialState)
              setServiceType("")
              toast({
                title: "Form submitted successfully!",
                description: "We'll contact you within 2 hours to schedule your service.",
              });
            }, 1000);
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );

      // Simulate form submission

    } else {
      toast({
        title: "Error",
        description: "Please select a service",
      });
    }
  };

  // return (
  //   <Card>
  //     <CardHeader>
  //       <CardTitle className="text-2xl">Request a Free Estimate</CardTitle>
  //       <CardDescription>
  //         Fill out this form and we'll contact you within 2 hours to discuss your needs.
  //       </CardDescription>
  //     </CardHeader>

  //     <CardContent>
  //       <form onSubmit={handleSubmit} className="space-y-4">
  //         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
  //           <div>
  //             <Label htmlFor="name">Name</Label>
  //             <Input id="name" name="name" value={inputs.name} onChange={handleChange} required className="mt-1" />
  //           </div>
  //           <div>
  //             <Label htmlFor="locality">Locality</Label>
  //             <Input id="locality" name="locality" value={inputs.locality} onChange={handleChange} required className="mt-1" />
  //           </div>
  //         {/* </div> */}

  //         <div>
  //           <Label htmlFor="email">Email</Label>
  //           <Input id="email" name="email" type="email" value={inputs.email} onChange={handleChange} className="mt-1" />
  //         </div>

  //         <div>
  //           <Label htmlFor="phone">Contact Number</Label>
  //           <Input id="phone" name="phone" type="tel" value={inputs.phone} onChange={handleChange} required className="mt-1" />
  //         </div>

  //         <div>
  //           <Label htmlFor="service">Service Needed</Label>
  //           <Select value={serviceType} onValueChange={setServiceType}>
  //             <SelectTrigger className="mt-1">
  //               <SelectValue placeholder="Select a service" />
  //             </SelectTrigger>
  //             <SelectContent>
  //               <SelectItem value="sump-cleaning">Sump Pit Cleaning</SelectItem>
  //               <SelectItem value="tank-cleaning">Tank Cleaning</SelectItem>
  //               <SelectItem value="septic-cleaning">Septic Tank Cleaning</SelectItem>
  //               <SelectItem value="pond-cleaning">Well & Pond Cleaning</SelectItem>
  //               <SelectItem value="other">Other</SelectItem>
  //             </SelectContent>
  //           </Select>
  //         </div>

  //         <div>
  //           <Label htmlFor="message">Additional Details</Label>
  //           <Textarea
  //             id="message"
  //             name="message"
  //             rows={4}
  //             value={inputs.message}
  //             placeholder="Please describe your cleaning needs, location details, or any specific concerns..."
  //             className="mt-1"
  //             onChange={handleChange}
  //           />
  //         </div>

  //         <Button
  //           type="submit"
  //           className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
  //           disabled={isSubmitting}
  //         >
  //           {isSubmitting ? "Submitting..." : "Submit Request"}
  //         </Button>
  //       </form>
  //     </CardContent>
  //   </Card>
  // );


return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Free Estimate</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={inputs.name} onChange={handleChange} required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="locality">Locality</Label>
              <Input id="locality" name="locality" value={inputs.locality} onChange={handleChange} required className="mt-1" />
            </div>
          {/* </div> */}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={inputs.email} onChange={handleChange} className="mt-1" />
          </div>

          <div>
            <Label htmlFor="phone">Contact Number</Label>
            <Input id="phone" name="phone" type="tel" value={inputs.phone} onChange={handleChange} required className="mt-1" />
          </div>

          <div>
            <Label htmlFor="service">Service Needed</Label>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sump-cleaning">Sump Pit Cleaning</SelectItem>
                <SelectItem value="tank-cleaning">Tank Cleaning</SelectItem>
                <SelectItem value="septic-cleaning">Septic Tank Cleaning</SelectItem>
                <SelectItem value="pond-cleaning">Well & Pond Cleaning</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={inputs.message}
              placeholder="Please describe your cleaning needs, location details, or any specific concerns..."
              className="mt-1"
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
