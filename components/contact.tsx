"use client"

import { useState } from "react"
import { AtSign, Check, Copy, Loader2, Phone, Send } from "lucide-react"

import { sendContactEmail } from "@/app/actions/contact"
import { toast } from "@/hooks/use-toast"

const EMPTY_FORM = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [copied, setCopied] = useState<"phone" | "email" | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCopy = (type: "phone" | "email", value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const result = await sendContactEmail({
      name: form.name,
      email: form.email,
      company: form.company || undefined,
      budget: form.budget || undefined,
      message: form.message,
    })

    setIsSubmitting(false)

    if (result.success) {
      setForm(EMPTY_FORM)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: result.error,
      })
    }
  }

  return (
    <section id="contact" className="px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-cyber-cyan">
            {"// get in touch"}
          </p>
          <h2 className="section-heading text-cyber-text">
            Let&apos;s <span className="gradient-text">Connect</span>
            <span className="gradient-text">.</span>
          </h2>
          <p className="section-subheading mt-3">
            Have a project in mind? Let&apos;s build something awesome together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <button
                onClick={() => handleCopy("phone", "+919567909210")}
                className="glass-card group flex w-full cursor-pointer items-center gap-4 p-5 text-left transition-all duration-300 hover:border-cyber-cyan/30"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyber-cyan/10">
                  <Phone className="size-5 text-cyber-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-cyber-text">Call Me</h3>
                  <p className="mt-1 text-sm text-cyber-muted">
                    +91 9567909210
                  </p>
                </div>
                <div className="flex size-8 items-center justify-center rounded-md text-cyber-dim transition-all duration-200 group-hover:text-cyber-cyan">
                  {copied === "phone" ? (
                    <Check className="size-4 text-cyber-cyan" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </div>
              </button>

              <button
                onClick={() => handleCopy("email", "jasifkolangath@gmail.com")}
                className="glass-card group flex w-full cursor-pointer items-center gap-4 p-5 text-left transition-all duration-300 hover:border-cyber-violet/30"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyber-violet/10">
                  <AtSign className="size-5 text-cyber-violet" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-cyber-text">Mail Me</h3>
                  <p className="mt-1 text-sm text-cyber-muted">
                    jasifkolangath@gmail.com
                  </p>
                </div>
                <div className="flex size-8 items-center justify-center rounded-md text-cyber-dim transition-all duration-200 group-hover:text-cyber-violet">
                  {copied === "email" ? (
                    <Check className="size-4 text-cyber-cyan" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </div>
              </button>
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block">
              <div className="glass-card p-6">
                <p className="font-mono text-sm leading-relaxed text-cyber-dim">
                  <span className="text-cyber-cyan">const</span>{" "}
                  <span className="text-cyber-violet">developer</span>{" "}
                  <span className="text-cyber-text">=</span> {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-cyber-cyan">name</span>:{" "}
                  <span className="text-green-400">&quot;Jasif Shameem&quot;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-cyber-cyan">role</span>:{" "}
                  <span className="text-green-400">&quot;Tech Lead&quot;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-cyber-cyan">available</span>:{" "}
                  <span className="text-cyber-cyan">true</span>,
                  <br />
                  {"}"};
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold text-cyber-text">
              Send a Message
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-cyber-muted"
                  >
                    Your name <span className="text-cyber-pink">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="glass-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-cyber-muted"
                  >
                    Your email <span className="text-cyber-pink">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="glass-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium text-cyber-muted"
                  >
                    Your company
                  </label>
                  <input
                    id="company"
                    name="company"
                    placeholder="Company name"
                    value={form.company}
                    onChange={handleChange}
                    className="glass-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="text-sm font-medium text-cyber-muted"
                  >
                    Budget Range
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    placeholder="In USD"
                    value={form.budget}
                    onChange={handleChange}
                    className="glass-input w-full rounded-lg px-4 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-cyber-muted"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="glass-input min-h-[120px] w-full resize-none rounded-lg px-4 py-2.5 text-sm"
                    maxLength={250}
                    value={form.message}
                    onChange={handleChange}
                  />
                  <span className="absolute bottom-2 right-3 text-xs text-cyber-dim">
                    {form.message.length}/250
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cyber-button inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
