
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from 'date-fns';
import { cn } from "@/lib/utils";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Appointment Requested",
        description: "We will contact you shortly to confirm your appointment.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setDate(undefined);
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="appointment" className="section-padding bg-clinic-green-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Book an Appointment</h2>
          <p className="section-subtitle">
            Fill out the form below and our team will get back to you promptly to confirm your appointment
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium text-clinic-grey">
                  Full Name *
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full border-clinic-grey/30 focus:border-clinic-teal focus:ring-clinic-teal"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium text-clinic-grey">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full border-clinic-grey/30 focus:border-clinic-teal focus:ring-clinic-teal"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block font-medium text-clinic-grey">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full border-clinic-grey/30 focus:border-clinic-teal focus:ring-clinic-teal"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block font-medium text-clinic-grey">
                  Service Required *
                </label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger className="w-full border-clinic-grey/30 focus:border-clinic-teal focus:ring-clinic-teal">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hearing_test">Hearing Test</SelectItem>
                    <SelectItem value="hearing_aid">Hearing Aid Consultation</SelectItem>
                    <SelectItem value="speech_therapy">Speech Therapy</SelectItem>
                    <SelectItem value="vestibular_assessment">Vestibular Assessment</SelectItem>
                    <SelectItem value="other">Other Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="date" className="block font-medium text-clinic-grey">
                Preferred Date *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-clinic-grey/30 focus:border-clinic-teal focus:ring-clinic-teal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0; // Disable past dates and Sundays
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block font-medium text-clinic-grey">
                Additional Information
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please share any specific concerns or requirements"
                className="w-full min-h-[120px] border-clinic-grey/30 focus:border-clinic-teal focus:ring-clinic-teal"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-clinic-teal hover:bg-clinic-teal-dark text-white py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Request Appointment'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
