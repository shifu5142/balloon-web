"use client"

import Link from "next/link"
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Clock
} from "lucide-react"

 function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-background font-bold text-xl mb-4">
              <Sparkles className="h-6 w-6" />
              <span>בלונים מעוצבים</span>
            </Link>
            <p className="text-background/70 text-sm mb-4">
              עיצוב בלונים מקצועי לכל סוג אירוע. משלוחים לכל הארץ והתקנה במקום.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">קישורים מהירים</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-background/70 hover:text-background transition-colors">
                  בלונים לאירועים
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-background/70 hover:text-background transition-colors">
                  משלוח בלונים
                </Link>
              </li>
              <li>
                <Link href="/gifts" className="text-background/70 hover:text-background transition-colors">
                  בלונים כמתנות
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background/70 hover:text-background transition-colors">
                  גלריית תמונות
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h3 className="font-bold text-lg mb-4">סוגי אירועים</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events/birthday" className="text-background/70 hover:text-background transition-colors">
                  ימי הולדת
                </Link>
              </li>
              <li>
                <Link href="/events/wedding" className="text-background/70 hover:text-background transition-colors">
                  חתונות
                </Link>
              </li>
              <li>
                <Link href="/events/baby" className="text-background/70 hover:text-background transition-colors">
                  בריתות
                </Link>
              </li>
              <li>
                <Link href="/events/corporate" className="text-background/70 hover:text-background transition-colors">
                  אירועים עסקיים
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">יצירת קשר</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>050-123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@balloons.co.il</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>תל אביב, ישראל</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>א&apos;-ה&apos; 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} בלונים מעוצבים. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;