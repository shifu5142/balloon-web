"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Cake, Heart, Baby, GraduationCap, Building, Sparkles } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: "birthday",
    title: "ימי הולדת",
    description: "בלונים צבעוניים ומעוצבים להפוך כל יום הולדת לחגיגה בלתי נשכחת",
    icon: Cake,
    color: "bg-primary/10 text-primary",
    image: "from-primary/20 to-accent/20",
  },
  {
    id: "wedding",
    title: "חתונות ואירוסין",
    description: "עיצוב בלונים רומנטי ואלגנטי ליום המיוחד שלכם",
    icon: Heart,
    color: "bg-destructive/10 text-destructive",
    image: "from-destructive/20 to-primary/20",
  },
  {
    id: "baby",
    title: "בריתות ובייבי שאוור",
    description: "בלונים מתוקים לקבלת פנים לתינוק החדש במשפחה",
    icon: Baby,
    color: "bg-secondary/50 text-secondary-foreground",
    image: "from-secondary/30 to-accent/20",
  },
  {
    id: "graduation",
    title: "טקסי סיום",
    description: "חגיגת הישגים עם בלונים מרשימים לטקסי סיום",
    icon: GraduationCap,
    color: "bg-accent/20 text-accent-foreground",
    image: "from-accent/20 to-secondary/20",
  },
  {
    id: "corporate",
    title: "אירועים עסקיים",
    description: "עיצוב מקצועי לאירועי חברה, השקות וכנסים",
    icon: Building,
    color: "bg-muted text-muted-foreground",
    image: "from-muted to-secondary/20",
  },
  {
    id: "special",
    title: "אירועים מיוחדים",
    description: "עיצובים ייחודיים לכל אירוע מיוחד שתבחרו",
    icon: Sparkles,
    color: "bg-primary/10 text-primary",
    image: "from-primary/10 to-accent/10",
  },
]

 function EventsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            סוגי אירועים
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            בלונים לכל סוג אירוע
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            בחרו את סוג האירוע שלכם וצפו בעיצובים המתאימים במיוחד עבורכם
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                {/* Image/Icon Header */}
                <div className={`h-40 bg-gradient-to-br ${event.image} flex items-center justify-center relative overflow-hidden`}>
                  <event.icon className="h-16 w-16 text-foreground/20 group-hover:scale-110 transition-transform duration-300" />
                  <div className={`absolute top-4 right-4 ${event.color} p-2 rounded-full`}>
                    <event.icon className="h-5 w-5" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    לצפייה בעיצובים
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
export default EventsSection;