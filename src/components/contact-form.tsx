
"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/poppystick123@gmail.com"
      method="POST"
      className="space-y-6"
    >
      {/* Honeypot */}
      <input type="text" name="_honey" style={{ display: 'none' }} />
      
      {/* Disable Captcha */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Success URL */}
      <input type="hidden" name="_next" value="https://varun-rao-portfolio-36d6a.web.app/" />


      <div className="space-y-2">
        <Label htmlFor="name" className="font-headline text-lg">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required className="py-6"/>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="font-headline text-lg">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="py-6" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-headline text-lg">Message</Label>
        <Textarea id="message" name="message" placeholder="Let's create something amazing together..." required className="min-h-[150px]" />
      </div>
      <Button type="submit" size="lg" className="w-full md:w-auto font-headline text-lg tracking-wider">
        Send Message
        <Send className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
