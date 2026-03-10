"use client"

import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon, Phone, Cake, Heart, Baby, Building, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = [
  { id: "all", label: "הכל", icon: Sparkles },
  { id: "birthday", label: "ימי הולדת", icon: Cake },
  { id: "wedding", label: "חתונות", icon: Heart },
  { id: "baby", label: "בריתות", icon: Baby },
  { id: "corporate", label: "עסקי", icon: Building },
]

const galleryItems = [
  { id: 1, category: "birthday", color: "from-primary/30 to-accent/20" },
  { id: 2, category: "wedding", color: "from-destructive/20 to-primary/20" },
  { id: 3, category: "baby", color: "from-secondary/40 to-accent/20" },
  { id: 4, category: "birthday", color: "from-accent/30 to-primary/20" },
  { id: 5, category: "corporate", color: "from-muted to-secondary/30" },
  { id: 6, category: "wedding", color: "from-primary/20 to-destructive/20" },
  { id: 7, category: "baby", color: "from-secondary/30 to-primary/20" },
  { id: 8, category: "birthday", color: "from-primary/40 to-secondary/20" },
  { id: 9, category: "corporate", color: "from-accent/20 to-muted" },
  { id: 10, category: "wedding", color: "from-destructive/30 to-accent/20" },
  { id: 11, category: "baby", color: "from-secondary/50 to-primary/20" },
  { id: 12, category: "birthday", color: "from-accent/40 to-secondary/30" },
]

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <ImageIcon className="h-4 w-4 ml-2" />
            גלריה
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            גלריית תמונות
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            צפו בעבודות שלנו וקבלו השראה לאירוע הבא שלכם
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="gap-2"
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`aspect-square bg-gradient-to-br ${item.color} rounded-xl overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="h-12 w-12 text-foreground/20 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground/40">עיצוב #{item.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">אהבתם את מה שראיתם?</h3>
          <p className="text-muted-foreground mb-6">
            צרו איתנו קשר ונעצב עבורכם משהו מיוחד
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
export default GalleryPage;