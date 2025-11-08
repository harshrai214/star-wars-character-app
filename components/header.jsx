"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Header({ userName, onLogout }) {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">⭐</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Star Wars</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 bg-primary/20 border border-primary/50">
              <AvatarFallback className="text-primary text-xs font-semibold">
                {userName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground hidden sm:inline">{userName}</span>
          </div>
          <Button onClick={onLogout} variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
