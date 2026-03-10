import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gift, Heart, Sparkles, Star, Phone, Check } from "lucide-react"
import Link from "next/link"

const giftOptions = [
  {
    name: "בוקה בלונים קלאסית",
    price: "89",
    description: "5 בלוני הליום צבעוניים עם משקולת מעוצבת",
    features: ["5 בלוני הליום", "משקולת מעוצבת", "כרטיס ברכה", "משלוח"],
    icon: Sparkles,
  },
  {
    name: "בוקה בלונים דלוקס",
    price: "149",
    description: "10 בלוני הליום עם בלון ענק ומשקולת פרימיום",
    features: ["10 בלוני הליום", "בלון ענק", "משקולת פרימיום", "כרטיס ברכה", "משלוח חינם"],
    icon: Star,
    popular: true,
  },
  {
    name: "בוקה בלונים VIP",
    price: "249",
    description: "15+ בלונים עם בלון מותאם אישית ואביזרים",
    features: ["15+ בלונים", "בלון מותאם אישית", "אביזרים מיוחדים", "משקולת יוקרתית", "כרטיס ברכה מעוצב", "משלוח חינם"],
    icon: Gift,
  },
]

const occasions = [
  "יום הולדת",
  "יום נישואין",
  "מזל טוב",
  "החלמה מהירה",
  "תודה",
  "אהבה",
  "הולדת תינוק",
  "סיום לימודים",
]

function GiftsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Gift className="h-4 w-4 ml-2" />
            מתנות מיוחדות
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            בלונים מעוצבים כמתנות
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            הפתיעו את האהובים עליכם עם בוקה בלונים מעוצבת שתגיע ישירות אליהם
          </p>
        </div>

        {/* Gift Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {giftOptions.map((gift) => (
            <Card key={gift.name} className={`relative overflow-hidden transition-all hover:shadow-lg ${gift.popular ? "border-primary shadow-md" : ""}`}>
              {gift.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  הכי פופולרי
                </div>
              )}
              <CardContent className={`p-6 ${gift.popular ? "pt-10" : ""}`}>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <gift.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{gift.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{gift.description}</p>
                <div className="text-3xl font-bold text-primary mb-4">₪{gift.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {gift.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact">
                  <Button className="w-full" variant={gift.popular ? "default" : "outline"}>
                    להזמנה
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Occasions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">לכל אירוע ומאורע</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {occasions.map((occasion) => (
              <Badge key={occasion} variant="secondary" className="px-4 py-2 text-sm">
                <Heart className="h-3 w-3 ml-1" />
                {occasion}
              </Badge>
            ))}
          </div>
        </div>

        {/* Personalization */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Sparkles className="h-4 w-4 ml-2" />
                  התאמה אישית
                </Badge>
                <h2 className="text-2xl font-bold mb-4">מתנה עם מסר אישי</h2>
                <p className="text-muted-foreground mb-4">
                  הוסיפו כיתוב אישי על הבלון, בחרו צבעים מועדפים ואנחנו ניצור עבורכם מתנה ייחודית שתרגש את המקבל.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    כיתוב אישי על הבלון
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    בחירת צבעים
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    כרטיס ברכה מעוצב
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    אריזת מתנה מיוחדת
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-64 flex items-center justify-center">
                <Gift className="h-24 w-24 text-primary/30" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">רוצים להפתיע מישהו?</h3>
          <p className="text-muted-foreground mb-6">
            צרו קשר ונעזור לכם לבחור את המתנה המושלמת
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
export default GiftsPage;