import { motion } from "framer-motion";
import { Flame, Sprout, BookOpen, Star } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Flame,
    title: "Discover Your Spark",
    description: "We partner with you to uncover who you are and what truly inspires you. Together, we explore how your passions connect with the world around you and identify the skills and exposures you seek.",
  },
  {
    icon: Sprout,
    title: "Focus Your Experiences",
    description: "We recognize the demands on your time and budget. That’s why we thoughtfully recommend experiences to maximize your growth and deliver meaningful impact—not just fill your calendar or resume.",
  },
  {
    icon: BookOpen,
    title: "Evolve Your Story",
    description: "Every purposeful experience shapes your unique story. Through regular reflection, we work with you to capture essential insights, make intentional choices about your future, and build a personal narrative that truly reflects who you are.",
  },
  {
    icon: (props: any) => (
      <div className="relative flex items-center justify-center">
        <Star 
          {...props} 
          strokeWidth={2}
          className={cn(
            props.className, 
            "text-secondary transition-all duration-300",
            "fill-transparent group-hover:fill-secondary group-hover:stroke-white",
            "drop-shadow-[0_0_15px_rgba(245,166,35,0.4)] group-hover:scale-110"
          )} 
        />
      </div>
    ),
    title: "Illuminate YOU",
    description: "We provide structured guidance and thoughtful feedback, empowering you to confidently share your insights, contributions, and future goals with universities, scholarship committees, campus organizations, and potential employers. As you craft your essays, resumes, social media profiles, and interview responses, we’re here to help you shine.",
  },
];

export function Services() {
  return (
    <section id="approach" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">Our Approach</h2>
          <p className="text-lg text-muted-foreground">
            Our program is a multi-year journey that typically begins at the start of high school and grows as your interests, priorities, and aspirations take shape. With Kindling Point, you’re supported from your earliest explorations all the way through senior year.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto relative">
          {/* Meandering Dashed Arrow Background - Now visible on mobile too */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="0"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#f5a623" />
                </marker>
              </defs>
              <circle cx="400" cy="10" r="4" fill="#f5a623" />
              <path
                d="M400,10 
                   C600,100 700,200 650,350 
                   C600,500 200,450 150,600 
                   C100,750 300,850 400,980"
                stroke="#f5a623"
                strokeWidth="3"
                strokeDasharray="12 12"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
                className="opacity-30"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="240"
                  to="0"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
          
          <div className="relative z-10 space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/95 backdrop-blur-sm group overflow-hidden">
                  <CardContent className="p-5 sm:p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                      <service.icon className="h-7 w-7 md:h-8 md:h-8" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <CardTitle className={cn(
                        "text-2xl md:text-3xl font-serif font-bold transition-colors",
                        service.title === "Illuminate YOU" 
                          ? "text-primary group-hover:text-secondary [&>span]:text-secondary group-hover:[&>span]:text-secondary" 
                          : "text-primary group-hover:text-secondary"
                      )}>
                        {service.title === "Illuminate YOU" ? (
                          <>
                            Illuminate <span className="text-secondary">YOU</span>
                          </>
                        ) : (
                          service.title
                        )}
                      </CardTitle>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto px-6"
      >
        <div className="bg-primary rounded-2xl p-8 md:p-14 text-center shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none" />
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-white relative z-10 flex flex-col gap-2">
            <span>We help students</span>
            <div>
              <span className="text-secondary uppercase">Know it.</span>{" "}
              <span className="text-secondary uppercase">Grow it.</span>{" "}
              <span className="text-secondary uppercase">Show it.</span>
            </div>
          </h3>
        </div>
      </motion.div>
    </section>
  );
}
