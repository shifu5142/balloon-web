"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"

 function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10" />
      
      {/* Decorative Balloons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Balloon 1 */}
        <div className="absolute top-20 right-10 animate-bounce" style={{ animationDuration: "3s" }}>
          <div className="w-16 h-20 bg-primary rounded-full relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-foreground/30" />
            <div className="absolute top-2 right-3 w-3 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
        
        {/* Balloon 2 */}
        <div className="absolute top-32 right-1/4 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
          <div className="w-14 h-18 bg-secondary rounded-full relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-foreground/30" />
            <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
        
        {/* Balloon 3 */}
        <div className="absolute top-16 left-20 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
          <div className="w-12 h-16 bg-accent rounded-full relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-foreground/30" />
            <div className="absolute top-1.5 right-2 w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* Balloon 4 */}
        <div className="absolute bottom-32 right-16 animate-bounce hidden md:block" style={{ animationDuration: "4.5s", animationDelay: "0.3s" }}>
          <div className="w-20 h-24 bg-primary/80 rounded-full relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-14 bg-foreground/30" />
            <div className="absolute top-3 right-4 w-4 h-4 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* Balloon 5 */}
        <div className="absolute bottom-48 left-1/3 animate-bounce hidden lg:block" style={{ animationDuration: "3.8s", animationDelay: "1.5s" }}>
          <div className="w-10 h-14 bg-secondary/90 rounded-full relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-foreground/30" />
            <div className="absolute top-1 right-2 w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* Sparkle decorations */}
        <Sparkles className="absolute top-40 left-1/4 h-8 w-8 text-accent/50 animate-pulse" />
        <Sparkles className="absolute bottom-40 right-1/3 h-6 w-6 text-primary/50 animate-pulse" style={{ animationDelay: "1s" }} />
        <Heart className="absolute top-1/3 right-1/3 h-5 w-5 text-primary/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            עיצוב בלונים מקצועי
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            עיצוב בלונים
            <span className="text-primary block mt-2">לכל אירוע מושלם</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            בשלב הבא של העיצוב שלכם - בלונים מעוצבים בהתאמה אישית לכל אירוע. 
            ימי הולדת, חתונות, בריתות ועוד. משלוחים לכל הארץ!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                לצפייה בעיצובים
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                צור קשר
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">אירועים מרוצים</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">עיצובים ייחודיים</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">שירות לקוחות</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection;