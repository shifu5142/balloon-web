import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight, Search, Sparkles } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Balloon decoration */}
        <div className="relative mb-8">
          <div className="mx-auto w-24 h-28 bg-primary rounded-full relative animate-bounce" style={{ animationDuration: "3s" }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-foreground/30" />
            <div className="absolute top-4 right-6 w-6 h-6 bg-white/30 rounded-full" />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-14 bg-secondary rounded-full animate-bounce opacity-60" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-foreground/20" />
            <div className="absolute top-2 right-2 w-3 h-3 bg-white/30 rounded-full" />
          </div>
          <div className="absolute -top-2 -left-8 w-10 h-12 bg-accent rounded-full animate-bounce opacity-60" style={{ animationDuration: "4s", animationDelay: "1s" }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-foreground/20" />
            <div className="absolute top-1.5 right-2 w-2 h-2 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-2xl font-bold text-foreground mb-2">
          אופס! הדף לא נמצא
        </h2>
        <p className="text-muted-foreground mb-8">
          נראה שהבלון הזה עף לנו... הדף שחיפשתם לא קיים או הועבר למקום אחר.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto gap-2">
              <Home className="h-4 w-4" />
              חזרה לדף הבית
            </Button>
          </Link>
          <Link href="/events">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Search className="h-4 w-4" />
              לצפייה בעיצובים
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">אולי התכוונתם ל:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/events" className="text-sm text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="h-3 w-3" />
              בלונים לאירועים
            </Link>
            <Link href="/gallery" className="text-sm text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="h-3 w-3" />
              גלריית תמונות
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="h-3 w-3" />
              צור קשר
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm">בלונים מעוצבים</span>
        </div>
      </div>
    </main>
  )
}
