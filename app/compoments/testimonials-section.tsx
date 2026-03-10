"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "רונית כהן",
    event: "יום הולדת 30",
    rating: 5,
    text: "ההזמנה הייתה פשוטה ומהירה. הבלונים היו יפהפיים והצוות היה מקצועי ואדיב. ממליצה בחום!",
    avatar: "ר",
  },
  {
    name: "דוד לוי",
    event: "חתונה",
    rating: 5,
    text: "עיצוב הבלונים לחתונה שלנו היה מדהים! כולם התלהבו. השירות היה מעל ומעבר למצופה.",
    avatar: "ד",
  },
  {
    name: "מיכל אברהם",
    event: "ברית",
    rating: 5,
    text: "תודה רבה על העבודה המקצועית! הבלונים הוסיפו את הקסם המושלם לברית של הבן שלנו.",
    avatar: "מ",
  },
  {
    name: "יוסי גולדשטיין",
    event: "אירוע עסקי",
    rating: 5,
    text: "הזמנתי עיצוב בלונים לאירוע השקה של החברה. התוצאה הייתה מרשימה ומקצועית. בהחלט אזמין שוב!",
    avatar: "י",
  },
  {
    name: "שרה ביטון",
    event: "יום הולדת ילדים",
    rating: 5,
    text: "הילדים היו בענניים! הבלונים היו צבעוניים ושמחים בדיוק כמו שביקשנו. שירות מעולה!",
    avatar: "ש",
  },
  {
    name: "אבי רוזנברג",
    event: "טקס סיום",
    rating: 5,
    text: "הזמנתי קשת בלונים לסיום התואר של הבת. יצא מושלם! הצוות הגיע בזמן והתקין הכל במקצועיות.",
    avatar: "א",
  },
]

 function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            מה אומרים עלינו
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            לקוחות מרוצים
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            קראו מה הלקוחות שלנו אומרים על החוויה שלהם איתנו
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-foreground mb-6 relative z-10">
                  &quot;{testimonial.text}&quot;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default TestimonialsSection;