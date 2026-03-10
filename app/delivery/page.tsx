import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Clock, MapPin, Phone, Check, ChevronLeft } from "lucide-react"
import Link from "next/link"

const deliveryAreas = [
  { area: "תל אביב והמרכז", price: "חינם", time: "עד 3 שעות" },
  { area: "השרון", price: "₪30", time: "עד 4 שעות" },
  { area: "ירושלים", price: "₪50", time: "עד 5 שעות" },
  { area: "חיפה והצפון", price: "₪70", time: "יום עבודה" },
  { area: "באר שבע והדרום", price: "₪70", time: "יום עבודה" },
]

const deliverySteps = [
  { step: 1, title: "הזמנה", description: "בחרו את העיצוב והשלימו את ההזמנה" },
  { step: 2, title: "הכנה", description: "אנחנו מכינים את הבלונים בקפידה" },
  { step: 3, title: "משלוח", description: "השליח יוצא עם ההזמנה שלכם" },
  { step: 4, title: "התקנה", description: "נתקין את העיצוב במקום האירוע" },
]
 function DeliveryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Truck className="h-4 w-4 ml-2" />
            משלוחים
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            משלוח בלונים לכל הארץ
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            אנחנו מגיעים אליכם! משלוחים מהירים והתקנה מקצועית בכל מקום בארץ
          </p>
        </div>

        {/* Delivery Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">איך זה עובד?</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {deliverySteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < deliverySteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -left-2 -translate-y-1/2 z-10">
                    <ChevronLeft className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">אזורי משלוח ומחירים</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {deliveryAreas.map((area) => (
                    <div key={area.area} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="font-medium">{area.area}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {area.time}
                        </div>
                        <Badge variant={area.price === "חינם" ? "default" : "secondary"}>
                          {area.price}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">משלוח מהיר</h3>
              <p className="text-sm text-muted-foreground">משלוחים מהירים באותו היום באזור המרכז</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">התקנה מקצועית</h3>
              <p className="text-sm text-muted-foreground">צוות מקצועי שיתקין את העיצוב במקום</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">דיוק בזמנים</h3>
              <p className="text-sm text-muted-foreground">מגיעים בזמן שקבענו, תמיד</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">מוכנים להזמין?</h3>
          <p className="text-muted-foreground mb-6">
            צרו איתנו קשר ונסגור את כל הפרטים
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              <Phone className="h-4 w-4" />
              צרו קשר
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
export default DeliveryPage;