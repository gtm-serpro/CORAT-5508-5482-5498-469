import { cn } from "@/lib/utils"

export function H1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn("text-4xl font-bold leading-tight text-gray-900", className)}>
      {children}
    </h1>
  )
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-3xl font-semibold leading-snug text-gray-900", className)}>
      {children}
    </h2>
  )
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("text-2xl font-medium leading-snug text-gray-900", className)}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-base leading-relaxed text-gray-700", className)}>
      {children}
    </p>
  )
}
