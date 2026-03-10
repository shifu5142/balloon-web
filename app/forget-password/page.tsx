"use client"

import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { KeyRound, Mail, ArrowRight, Send, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <KeyRound className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">שכחתי סיסמה</CardTitle>
              <CardDescription>
                הכניסו את האימייל שלכם ונשלח לכם קישור לאיפוס
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">אימייל</label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        className="pr-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    שלח קישור לאיפוס
                  </Button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">נשלח בהצלחה!</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    שלחנו קישור לאיפוס סיסמה לכתובת {email}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    לא קיבלתם? בדקו בתיקיית הספאם או נסו שוב
                  </p>
                </div>
              )}

              <div className="mt-6 text-center">
                <Link href="/login" className="text-sm text-primary hover:underline flex items-center justify-center gap-2">
                  <ArrowRight className="h-3 w-3" />
                  חזרה להתחברות
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
export default ForgotPasswordPage;