"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function LoadingSkeletons({ count = 12 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="border-border/50">
          <div className="h-48 bg-muted animate-pulse rounded-t-lg" />
          <CardContent className="p-4 space-y-3">
            <div className="h-5 bg-muted animate-pulse rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-3 bg-muted animate-pulse rounded w-full" />
              <div className="h-3 bg-muted animate-pulse rounded w-5/6" />
              <div className="h-3 bg-muted animate-pulse rounded w-4/5" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
