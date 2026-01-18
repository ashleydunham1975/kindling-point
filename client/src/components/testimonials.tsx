import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "When I started high school, I had no idea what I wanted to pursue or how I could truly make a difference. That changed when Ashley recognized my instinct to stand up for others and encouraged me to volunteer with a juvenile justice program addressing real social issues in our community. As I became more involved, both my dedication and responsibilities grew—but the biggest shift happened when Ashley challenged me to think bigger. She recommended that I apply for a highly selective summer program focused on government and leadership, and then helped me connect what I had learned to my capstone project at school. Together, these experiences more fully shaped my understanding of myself and my role in the world. Of course, this made applying to college easier, but more importantly, it has influenced my choice of major and my potential career path!",
    author: "Student",
    role: "Recent high school graduate"
  },
  {
    quote: "We reached out to Kindling Point for guidance on expanding our daughter’s extracurriculars. She's an exceptional athlete, but that leaves little time for other activities, and we're already feeling the pressure around college admissions three years out. Meeting with Ashley instantly put us at ease. She reassured us that there’s no formula for success and introduced a thoughtful approach that builds on our daughter’s passions for cheerleading and animal science. Ashley has recommended some creative ways for her to test and lead while honoring her team commitments. We’re excited to build on these ideas in the years ahead.",
    author: "Parent",
    role: "High school freshman"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="pt-6 pb-12 md:pt-12 md:pb-16 bg-white">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-12">
          Stories of Success
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto group">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="text-4xl md:text-5xl text-secondary font-serif mb-4 md:mb-6 animate-pulse">"</div>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-primary/90 italic leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-3xl">
                      {testimonial.quote}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-bold text-primary text-xl md:text-2xl">{testimonial.author}</h4>
                      <p className="text-muted-foreground text-base md:text-lg mt-1">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 border-primary/20 text-primary hover:bg-primary hover:text-white h-8 w-8 lg:h-10 lg:w-10" />
          <CarouselNext className="hidden md:flex -right-12 lg:-right-16 border-primary/20 text-primary hover:bg-primary hover:text-white h-8 w-8 lg:h-10 lg:w-10" />
          <div className="flex md:hidden justify-center gap-2 mt-6">
            <span className="text-xs text-muted-foreground">← Swipe to see more →</span>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
