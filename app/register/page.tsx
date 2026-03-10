"use client"

import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus, Mail, Lock, Eye, EyeOff, User, Phone, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name) {
      newErrors.name = "נא להזין שם מלא"
    }
    
    if (!formData.email) {
      newErrors.email = "נא להזין אימייל"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "אימייל לא תקין"
    }
    
    if (!formData.phone) {
      newErrors.phone = "נא להזין טלפון"
    }
    
    if (!formData.password) {
      newErrors.password = "נא להזין סיסמה"
    } else if (formData.password.length < 6) {
      newErrors.password = "הסיסמה חייבת להכיל לפחות 6 תווים"
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "הסיסמאות אינן תואמות"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      alert("ההרשמה בוצעה בהצלחה! ברוכים הבאים!")
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
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">הרשמה</CardTitle>
              <CardDescription>
                צרו חשבון חדש ותהנו מיתרונות מיוחדים
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">שם מלא</label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="הכניסו את שמכם"
                      className="pr-10"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

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
                    />
                  </div>
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
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
                    />
                  </div>
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">סיסמה</label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="לפחות 6 תווים"
                      className="pr-10 pl-10"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-sm text-destructive mt-1">{errors.password}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">אימות סיסמה</label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="הכניסו את הסיסמה שוב"
                      className="pr-10"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-sm text-destructive mt-1">{errors.confirmPassword}</p>}
                </div>
                
                <Button type="submit" className="w-full gap-2">
                  <Check className="h-4 w-4" />
                  הרשמה
                </Button>
              </form>

              {/* Benefits */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">יתרונות למשתמשים רשומים:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" />
                    מעקב אחר הזמנות
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" />
                    הנחות בלעדיות
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" />
                    שמירת העדפות
                  </li>
                </ul>
              </div>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">{"כבר יש לכם חשבון? "}</span>
                <Link href="/login" className="text-primary hover:underline font-medium">
                  התחברו
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
export default RegisterPage;