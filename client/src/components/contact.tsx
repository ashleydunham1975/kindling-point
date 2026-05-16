import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const emailAddress = "contact@kindlingpoint.com";
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Kindling Point Inquiry`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+17049417804`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
              Let's Get Started
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Ready to discover your spark?<br />Reach out to start a conversation.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-lg">contact@kindlingpoint.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="text-lg">(704) 941-7804</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-lg">Charlotte, NC or virtually</p>
              </div>
            </div>
          </div>

          <Card className="bg-white text-foreground border-none shadow-2xl">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <div className="space-y-4">
                <Button 
                  onClick={handleEmailClick}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-12 sm:h-14 text-base sm:text-lg rounded-full"
                  data-testid="button-email"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </Button>
                
                <Button 
                  onClick={handlePhoneClick}
                  variant="outline"
                  className="w-full border-primary/20 text-primary hover:bg-primary/5 font-bold h-12 sm:h-14 text-base sm:text-lg rounded-full"
                  data-testid="button-call"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
