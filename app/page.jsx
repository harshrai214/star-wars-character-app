"use client"

import { useState } from "react"
import LoginForm from "@/components/login-form"
import CharacterApp from "@/components/character-app"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  const handleLogin = (email) => {
    setIsLoggedIn(true)
    setUserName(email.split("@")[0])
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserName("")
  }

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />
  }

  return <CharacterApp userName={userName} onLogout={handleLogout} />
}
