"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Palette, 
  Package, 
  Truck, 
  ChevronLeft,
  Users,
  Clock,
  Shield,
  Award
} from "lucide-react"

const processSteps = [
  {
    step: 1,
    title: "יצירת קשר",
    description: "פנו אלינו בטלפון, וואטסאפ או באתר ונציג יחזור אליכם בהקדם",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "תכנון העיצוב",
    description: "נבין יחד את החזון שלכם ונתאים את העיצוב המושלם לאירוע",
    icon: Palette,
  },
  {
    step: 3,
    title: "הכנת ההזמנה",
    description: "צוות המומחים שלנו יכין את הבלונים בקפידה ודיוק",
    icon: Package,
  },
  {
    step: 4,
    title: "משלוח והתקנה",
    description: "נגיע למקום האירוע, נתקין את העיצוב ונוודא שהכל מושלם",
    icon: Truck,
  },
]

const services = [
  {
    title: "שירות מהיר",
    description: "זמני תגובה מהירים והזמנות דחופות",
    icon: Clock,
  },
  {
    title: "צוות מקצועי",
    description: "מעצבים מנוסים עם שנות ניסיון",
    icon: Users,
  },
  {
    title: "אחריות מלאה",
    description: "אנחנו עומדים מאחורי כל עבודה",
    icon: Shield,
  },
  {
    title: "איכות מובטחת",
    description: "חומרים איכותיים ועמידים",
    icon: Award,
  },
]

 function ProcessSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Process Steps */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            תהליך העבודה
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            איך זה עובד?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            תהליך פשוט ונוח מההזמנה ועד להתקנה במקום האירוע
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="h-full bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -left-2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <ChevronLeft className="h-5 w-5 text-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            השירותים שלנו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            למה לבחור בנו?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-secondary/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Us */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                קצת עלינו
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                מי אנחנו?
              </h2>
              <p className="text-muted-foreground mb-4">
                אנחנו צוות של מעצבי בלונים מקצועיים עם למעלה מ-10 שנות ניסיון בתחום. 
                התחלנו כעסק קטן מתוך אהבה לעיצוב ושמחה באירועים, והיום אנחנו גאים לשרת 
                מאות לקוחות מרוצים בשנה.
              </p>
              <p className="text-muted-foreground">
                המטרה שלנו היא להפוך כל אירוע לחוויה בלתי נשכחת. אנחנו מאמינים שהפרטים 
                הקטנים עושים את ההבדל, ולכן אנחנו משקיעים בכל עיצוב כאילו היה לאירוע שלנו.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">שנות ניסיון</div>
              </div>
              <div className="bg-secondary/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">אירועים</div>
              </div>
              <div className="bg-accent/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">שביעות רצון</div>
              </div>
              <div className="bg-muted rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">תמיכה</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProcessSection;