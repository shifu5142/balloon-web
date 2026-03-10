"use client"

import Link from "next/link"
import { useState } from "react"
import { 
  PartyPopper, 
  Truck, 
  Gift, 
  Image as ImageIcon, 
  Phone,
  User,
  LogIn,
  UserPlus,
  UserCircle,
  Menu,
  X,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"

 function Navbar() {
  const [showAuthMenu, setShowAuthMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/events", label: "בלונים לאירועים", icon: PartyPopper },
    { href: "/delivery", label: "משלוח בלונים", icon: Truck },
    { href: "/gifts", label: "בלונים מעוצבים כמתנות", icon: Gift },
    { href: "/gallery", label: "גלריית תמונות", icon: ImageIcon },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Sparkles className="h-6 w-6" />
            <span>בלונים מעוצבים</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Contact Button */}
            <Link href="/contact">
              <Button variant="default" size="sm" className="hidden sm:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                צור קשר
              </Button>
            </Link>

            {/* Auth Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowAuthMenu(true)}
              onMouseLeave={() => setShowAuthMenu(false)}
            >
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">חשבון</span>
              </Button>
              
              {showAuthMenu && (
                <div className="absolute left-0 top-full bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/login"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-muted transition-colors text-sm"
                  >
                    <LogIn className="h-4 w-4" />
                    התחברות
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-muted transition-colors text-sm"
                  >
                    <UserPlus className="h-4 w-4" />
                    הרשמה
                  </Link>
                  <Link
                    href="/guest"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-muted transition-colors text-sm"
                  >
                    <UserCircle className="h-4 w-4" />
                    כניסה כאורח
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                צור קשר
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar;