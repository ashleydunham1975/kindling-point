import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import Logo from "@assets/Kindling_Point_Logo_Color_1767222163233.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavItems = () => (
    <>
      <button 
        onClick={() => scrollToSection("about")}
        className="text-foreground/80 hover:text-primary font-medium transition-colors py-2 text-lg md:text-base"
      >
        About
      </button>
      <button 
        onClick={() => scrollToSection("approach")}
        className="text-foreground/80 hover:text-primary font-medium transition-colors py-2 text-lg md:text-base"
      >
        Approach
      </button>
      <button 
        onClick={() => scrollToSection("testimonials")}
        className="text-foreground/80 hover:text-primary font-medium transition-colors py-2 text-lg md:text-base"
      >
        Testimonials
      </button>
      <Button 
        onClick={() => scrollToSection("contact")}
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
      >
        Get Started
      </Button>
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-4 px-6 md:px-12",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-primary/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={Logo} alt="Kindling Point Logo" className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItems />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-8 mt-10">
                <NavItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
