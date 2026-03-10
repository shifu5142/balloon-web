"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, Star, Crown } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "חבילה בסיסית",
    price: "199",
    originalPrice: "249",
    discount: "20%",
    description: "מושלם לאירועים קטנים ואינטימיים",
    icon: Sparkles,
    features: [
      "10 בלונים מעוצבים",
      "2 בלוני הליום גדולים",
      "סידור בלונים בסיסי",
      "התקנה במקום",
    ],
    popular: false,
  },
  {
    name: "חבילה מורחבת",
    price: "399",
    originalPrice: "549",
    discount: "30%",
    description: "האפשרות הפופולרית ביותר לאירועים",
    icon: Star,
    features: [
      "25 בלונים מעוצבים",
      "5 בלוני הליום גדולים",
      "קשת בלונים קטנה",
      "עיצוב אישי",
      "משלוח חינם",
      "התקנה מקצועית",
    ],
    popular: true,
  },
  {
    name: "חבילת פרימיום",
    price: "699",
    originalPrice: "899",
    discount: "25%",
    description: "עיצוב מושלם ליום המיוחד שלכם",
    icon: Crown,
    features: [
      "50+ בלונים מעוצבים",
      "10 בלוני הליום ענקיים",
      "קשת בלונים גדולה",
      "עמוד בלונים",
      "עיצוב מותאם אישית",
      "משלוח והתקנה VIP",
      "תמונות מקצועיות",
      "פירוק והסרה",
    ],
    popular: false,
  },
]

 function PackagesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            מבצעים מיוחדים
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            חבילות הנחה לאירוע שלכם
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            בחרו את החבילה המתאימה לכם ותיהנו מהנחות בלעדיות
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                pkg.popular ? "border-primary shadow-lg scale-105 lg:scale-110" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  הכי פופולרי
                </div>
              )}
              
              <CardHeader className={pkg.popular ? "pt-10" : ""}>
                <div className="flex items-center justify-between mb-2">
                  <pkg.icon className={`h-8 w-8 ${pkg.popular ? "text-primary" : "text-muted-foreground"}`} />
                  <Badge variant="destructive" className="text-xs">
                    הנחה {pkg.discount}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">₪{pkg.price}</span>
                    <span className="text-muted-foreground line-through">₪{pkg.originalPrice}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button 
                    className="w-full" 
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    להזמנה עכשיו
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PackagesSection;