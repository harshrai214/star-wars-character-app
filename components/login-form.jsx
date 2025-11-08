// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// export default function LoginForm({ onLogin }) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setError("")

//     if (!email || !password) {
//       setError("Please fill in all fields")
//       return
//     }

//     if (!email.includes("@")) {
//       setError("Please enter a valid email")
//       return
//     }

//     onLogin(email)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-card flex items-center justify-center p-4">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
//       </div>

//       <Card className="w-full max-w-md border-border/50 relative z-10">
//         <CardHeader className="space-y-1">
//           <div className="text-center mb-6">
//             <div className="inline-block w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
//               <span className="text-primary-foreground font-bold text-lg">⭐</span>
//             </div>
//           </div>
//           <CardTitle className="text-2xl text-center">Star Wars</CardTitle>
//           <CardDescription className="text-center">Character Database Access</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="user@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-input border-border/50"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="bg-input border-border/50"
//               />
//             </div>
//             {error && <p className="text-destructive text-sm">{error}</p>}
//             <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
//               Sign In
//             </Button>
//           </form>
//           <p className="text-xs text-muted-foreground text-center mt-4">Demo: Use any email and password to continue</p>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import icon from "../public/apple-icon.png"
export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const FIXED_EMAIL = "starwars@gmail.com"
  const FIXED_PASSWORD = "12345"

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    // Check against fixed fake credentials
    if (email !== FIXED_EMAIL || password !== FIXED_PASSWORD) {
      setError("Invalid credentials")
      return
    }

    onLogin(email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md border-border/50 relative z-10">
        <CardHeader className="space-y-1">
          <div className="text-center mb-6">
            <div className="inline-block w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-2">
              <span className="text-primary-foreground font-bold text-lg">⭐</span>
              


            </div>
          </div>
          <CardTitle className="text-2xl text-center">Star Wars</CardTitle>
          <CardDescription className="text-center">Character Database Access</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border/50"
              />
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
            </Button>
          </form>

          {/* Visible demo credentials — not hidden */}
          <div className="mt-4 text-sm text-center">
            <p className="text-muted-foreground mb-2">Demo credentials (use to sign in):</p>
            <p className="font-medium">Email: <span className="text-sm text-foreground">{FIXED_EMAIL}</span></p>
            <p className="font-medium">Password: <span className="text-sm text-foreground">{FIXED_PASSWORD}</span></p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
