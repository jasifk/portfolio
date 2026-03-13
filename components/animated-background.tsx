"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary gradient orb - top right — large slow drift */}
      <div
        className="absolute size-[600px] rounded-full"
        style={{
          top: "-10%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(124, 58, 237, 0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orb-drift-1 12s ease-in-out infinite",
        }}
      />

      {/* Secondary gradient orb - bottom left — medium drift */}
      <div
        className="absolute size-[700px] rounded-full"
        style={{
          bottom: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(236, 72, 153, 0.06) 40%, transparent 70%)",
          filter: "blur(50px)",
          animation: "orb-drift-2 15s ease-in-out infinite",
        }}
      />

      {/* Accent orb - center — slow pulse + drift */}
      <div
        className="absolute size-[400px] rounded-full"
        style={{
          top: "30%",
          left: "40%",
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)",
          filter: "blur(30px)",
          animation: "orb-drift-3 18s ease-in-out infinite",
        }}
      />

      {/* Extra small orb for depth — fast movement */}
      <div
        className="absolute size-[250px] rounded-full"
        style={{
          top: "60%",
          right: "20%",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 60%)",
          filter: "blur(25px)",
          animation: "orb-drift-4 10s ease-in-out infinite",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Inline keyframes for orb animations */}
      <style jsx>{`
        @keyframes orb-drift-1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translate(-80px, 60px) scale(1.1);
            opacity: 0.8;
          }
          66% {
            transform: translate(40px, -30px) scale(0.95);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
        }

        @keyframes orb-drift-2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          25% {
            transform: translate(100px, -50px) scale(1.15);
            opacity: 0.7;
          }
          50% {
            transform: translate(60px, -100px) scale(1.05);
            opacity: 0.6;
          }
          75% {
            transform: translate(-40px, -30px) scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
        }

        @keyframes orb-drift-3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-60px, 80px) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
        }

        @keyframes orb-drift-4 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          30% {
            transform: translate(-50px, -60px) scale(1.1);
            opacity: 0.8;
          }
          60% {
            transform: translate(30px, 40px) scale(0.9);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
