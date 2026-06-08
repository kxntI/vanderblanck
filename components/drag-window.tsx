"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

type DragWindowProps = {
  title: string
  children: React.ReactNode
  className?: string
  startX: number
  startY: number
  z?: number
  dead?: boolean
  width?: number
}

export function DragWindow({
  title,
  children,
  className,
  startX,
  startY,
  z = 10,
  dead = false,
  width,
}: DragWindowProps) {
  const [pos, setPos] = useState({ x: startX, y: startY })
  const [zi, setZi] = useState(z)
  const [closed, setClosed] = useState(false)
  const dragging = useRef<{ dx: number; dy: number } | null>(null)

  if (closed) return null

  function onPointerDown(e: React.PointerEvent) {
    // only drag from the title bar
    dragging.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y }
    setZi(999)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return
    setPos({
      x: e.clientX - dragging.current.dx,
      y: e.clientY - dragging.current.dy,
    })
  }
  function onPointerUp() {
    dragging.current = null
  }

  return (
    <div
      className={cn("win absolute select-none", className)}
      style={{ left: pos.x, top: pos.y, zIndex: zi, width }}
    >
      <div
        className={cn(
          "flex cursor-grab items-center justify-between px-1.5 py-0.5 active:cursor-grabbing",
          dead ? "win-bar-dead" : "win-bar",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <span className="truncate font-mono text-[11px] font-bold tracking-tight">{title}</span>
        <div className="flex gap-1">
          <button
            aria-label="minimize"
            className="btn3d h-3.5 w-4 text-[8px] leading-none text-foreground"
            onClick={() => setPos({ x: pos.x, y: pos.y })}
            type="button"
          >
            _
          </button>
          <button
            aria-label="close"
            className="btn3d h-3.5 w-4 text-[8px] leading-none text-foreground"
            onClick={() => setClosed(true)}
            type="button"
          >
            x
          </button>
        </div>
      </div>
      <div className="p-1">{children}</div>
    </div>
  )
}
