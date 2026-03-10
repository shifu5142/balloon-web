"use client"

import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LogIn, Mail, Lock, Eye, EyeOff, ArrowLeft, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("התחברות בוצעה בהצלחה!")
  }

  const handleDeleteAccount = () => {
    if (showDeleteConfirm) {
      alert("החשבון נמחק בהצלחה")
      setShowDeleteConfirm(false)
    } else {
      setShowDeleteConfirm(true)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">התחברות</CardTitle>
              <CardDescription>
                התחברו לחשבון שלכם כדי לנהל הזמנות
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">אימייל</label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      className="pr-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">סיסמה</label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="הכניסו סיסמה"
                      className="pr-10 pl-10"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="text-left">
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    שכחתי סיסמה
                  </Link>
                </div>
                
                <Button type="submit" className="w-full gap-2">
                  <LogIn className="h-4 w-4" />
                  התחבר
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">{"אין לכם חשבון? "}</span>
                <Link href="/register" className="text-primary hover:underline font-medium">
                  הרשמו עכשיו
                </Link>
              </div>

              <div className="mt-4 text-center">
                <Link href="/guest" className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2">
                  <ArrowLeft className="h-3 w-3" />
                  המשך כאורח
                </Link>
              </div>

              {/* Delete Account Option */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  {!showDeleteConfirm ? (
                    <button
                      type="button"
                      onClick={handleDeleteAccount}
                      className="text-sm text-destructive hover:underline flex items-center justify-center gap-2 mx-auto"
                    >
                      <Trash2 className="h-3 w-3" />
                      מחיקת חשבון
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm text-destructive">האם אתם בטוחים שברצונכם למחוק את החשבון?</p>
                      <div className="flex gap-2 justify-center">
                        <Button variant="destructive" size="sm" onClick={handleDeleteAccount}>
                          כן, מחק
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setShowDeleteConfirm(false)}>
                          ביטול
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
export default LoginPage;