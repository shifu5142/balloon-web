"use client"

import Navbar from "../compoments/navbar"
import Footer from "../compoments/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { useState } from "react"

 function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.")
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <MessageSquare className="h-4 w-4 ml-2" />
            צור קשר
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            נשמח לשמוע מכם
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            השאירו פרטים ונחזור אליכם בהקדם האפשרי
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
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
                    <Input
                      type="tel"
                      placeholder="050-000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">אימייל</label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">סוג אירוע</label>
                  <Input
                    type="text"
                    placeholder="לדוגמה: יום הולדת, חתונה..."
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">הודעה</label>
                  <Textarea
                    placeholder="ספרו לנו על האירוע שלכם..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  שלח הודעה
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">פרטי התקשרות</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">טלפון</div>
                      <div className="text-muted-foreground">050-123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">אימייל</div>
                      <div className="text-muted-foreground">info@balloons.co.il</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">כתובת</div>
                      <div className="text-muted-foreground">תל אביב, ישראל</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">שעות פעילות</div>
                      <div className="text-muted-foreground">{"א'-ה' 9:00-18:00"}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">צריכים תשובה מהירה?</h3>
                <p className="text-primary-foreground/80 mb-4">
                  התקשרו אלינו ישירות ונשמח לעזור מיד
                </p>
                <Button variant="secondary" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  050-123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
export default ContactPage;