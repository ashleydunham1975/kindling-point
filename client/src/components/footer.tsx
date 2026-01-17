import Logo from "@assets/Kindling_Point_Logo_Color_1767222163233.png";

export function Footer() {
  return (
    <footer className="bg-primary-foreground py-12 border-t border-border mt-auto">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Kindling Point" className="h-14 md:h-16 w-auto" />
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p className="text-primary/70 text-sm">
              &copy; {new Date().getFullYear()} Kindling Point. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center md:justify-end mt-2">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
