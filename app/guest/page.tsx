"use client"

import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserCircle, Mail, Phone, ArrowLeft, Check, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function GuestPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("ברוכים הבאים! תוכלו להמשיך להזמנה.")
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircle className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl">כניסה כאורח</CardTitle>
              <CardDescription>
                המשיכו להזמנה בלי ליצור חשבון
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">שם מלא</label>
                  <Input
                    type="text"
                    placeholder="הכניסו את שמכם"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">טלפון</label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="050-000-0000"
                      className="pr-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{"אימייל (לא חובה)"}</label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      className="pr-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  המשך להזמנה
                </Button>
              </form>

              {/* Guest vs Registered */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2 text-sm text-center">כאורח</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      הזמנה מהירה
                    </li>
                    <li className="flex items-center gap-1">
                      <X className="h-3 w-3 text-destructive" />
                      ללא מעקב
                    </li>
                    <li className="flex items-center gap-1">
                      <X className="h-3 w-3 text-destructive" />
                      ללא הנחות
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-medium mb-2 text-sm text-center">רשום</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      מעקב הזמנות
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      הנחות בלעדיות
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-primary" />
                      היסטוריה שמורה
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">מעוניינים ביתרונות נוספים?</p>
                <Link href="/register">
                  <Button variant="outline" size="sm">
                    צרו חשבון
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
export default GuestPage;