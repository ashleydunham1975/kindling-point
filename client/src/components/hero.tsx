import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroImage from "@assets/generated_images/macro_of_fire_spark_on_wood.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-28 lg:pt-44 pb-20 overflow-hidden bg-background">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/10 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full z-0 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 z-10 flex flex-col items-center gap-8 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-primary max-w-4xl mx-auto tracking-tight">
            Discover Your <span className="text-secondary">Spark</span><br />
            Fuel Your <span className="text-secondary">Future</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_400px] gap-6 md:gap-8 lg:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left pt-2 w-full"
          >
            <div className="text-base md:text-xl text-muted-foreground leading-relaxed w-full space-y-4">
              <div className="space-y-3">
                <p>
                  <span className="italic block mb-1 text-xs uppercase tracking-widest text-primary font-bold font-sans">Kindling Point (n.)</span>
                  The temperature at which a substance ignites and continues to burn spontaneously, without an external flame.
                </p>
                <p className="text-primary font-medium text-lg md:text-2xl">
                  We kindle each student’s one-of-a-kind <span className="text-secondary">passions</span>, helping them <span className="text-secondary">grow</span> and <span className="text-secondary">shine</span>.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-base px-8 h-12 rounded-full shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 z-10 w-full sm:w-auto"
                onClick={scrollToContact}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 text-primary hover:bg-primary/5 text-base px-8 h-12 rounded-full transition-all hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full"
          >
            <div className="relative z-10 rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_rgba(245,166,35,0.25)] border-2 border-primary aspect-[4/5]">
              <img 
                src={HeroImage} 
                alt="Kindling Point Flame" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-secondary/10 rounded-[1.5rem] rotate-3 transform translate-x-4 translate-y-4 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
