"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw, AlertTriangle, Sparkles } from "lucide-react"

 function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-gradient-to-br from-destructive/5 via-background to-muted flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-foreground mb-2">
          משהו השתבש
        </h1>
        <p className="text-muted-foreground mb-8">
          מצטערים, אירעה שגיאה בלתי צפויה. אנחנו עובדים על זה!
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            נסו שוב
          </Button>
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Home className="h-4 w-4" />
              חזרה לדף הבית
            </Button>
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            אם הבעיה נמשכת, אנא צרו איתנו קשר בטלפון 050-123-4567
          </p>
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
export default Error;