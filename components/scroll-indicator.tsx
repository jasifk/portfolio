"use client"

export default function ScrollIndicator() {
  return (
    <div
      className="absolute inset-x-0 bottom-6 flex cursor-pointer flex-col items-center gap-2"
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span className="text-xs tracking-widest text-cyber-dim">SCROLL</span>
      <div className="animate-scroll-hint">
        <svg
          className="size-5 text-cyber-cyan opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
}