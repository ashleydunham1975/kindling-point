import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AshleyImage from "@assets/Headshot_on_White_Background_3_1767287219280.jpg";
import BonfireImage from "@assets/StockCake-Beach_Campfire_Sunset-1354783-standard_1767642397059.jpg";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-primary/5 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full order-2 lg:order-1"
          >
            <div className="relative max-w-xl mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-secondary/10 rounded-2xl rotate-3 transform translate-x-3 translate-y-3 z-0" />
              <img 
                src={BonfireImage} 
                alt="Person sitting by a peaceful bonfire at sunset" 
                className="relative z-10 rounded-2xl shadow-[0_20px_40px_rgba(245,166,35,0.25)] border-2 border-primary w-full aspect-video lg:h-[450px] lg:aspect-auto object-cover object-[center_70%]"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary">
              Where Passions<br />
              <span className="text-secondary">Catch Fire</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Kindling Point, we don’t see high school as just a stepping stone to college, but as a transformative time for self-discovery and personal growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the belief that every student possesses a unique “spark” ready to be ignited, we reject the conventional checklist approach to success. Instead, we champion a highly personalized journey fueled by meaningful experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with students to uncover what truly excites and motivates them, then connect them with activities that nurture those interests and help shape their emerging identities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As students engage in these purposeful experiences, they naturally begin to craft a personal narrative that reflects their authentic selves. We guide them in developing and articulating this narrative, empowering them to confidently showcase their stories to universities, scholarship committees, employers, and more.
            </p>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-primary/5 relative z-10 w-full"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary/20 flex-shrink-0 bg-[#eef6fb]">
              <img src={AshleyImage} alt="Ashley Dunham" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <h3 className="text-3xl font-serif font-bold text-primary">Ashley Dunham</h3>
                <p className="text-secondary font-medium uppercase tracking-wider text-sm">Founder & Lead Coach</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                Ashley brings to Kindling Point decades of experience in mentoring and marketing. As a career marketing executive, she has spent more than 25 years building major brands and empowering young professionals to realize their career and personal potential. Guided by her belief that experience creates opportunity, Ashley is deeply committed to the programs that fueled her own growth—serving as an executive for the NC Governor’s School Foundation, an elected board member for Carolina Alumni, a selection committee member for Morehead-Cain, and a mentor at Duke’s Fuqua School of Business. She thrives on empowering the next generation of purpose-driven leaders.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
