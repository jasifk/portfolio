"use client"

import { useState } from "react"
import { AtSign, Phone, Send } from "lucide-react"

export default function Contact() {
  const [messageLength, setMessageLength] = useState(0)
  return (
    <section id="contact" className="px-6 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-cyber-cyan">
            // get in touch
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
              <div className="glass-card flex items-start gap-4 p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyber-cyan/10">
                  <Phone className="size-5 text-cyber-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-text">Call Me</h3>
                  <p className="mt-1 text-sm text-cyber-muted">
                    +91 9567909210
                  </p>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4 p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyber-violet/10">
                  <AtSign className="size-5 text-cyber-violet" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyber-text">Mail Me</h3>
                  <p className="mt-1 text-sm text-cyber-muted">
                    jasifkolangath@gmail.com
                  </p>
                </div>
              </div>
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
            <form className="space-y-5">
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
                    placeholder="Enter name"
                    required
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
                    type="email"
                    placeholder="Enter email"
                    required
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
                    placeholder="Company name"
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
                    placeholder="In USD"
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
                    placeholder="Type your message here..."
                    className="glass-input min-h-[120px] w-full resize-none rounded-lg px-4 py-2.5 text-sm"
                    maxLength={250}
                    onChange={(e) => setMessageLength(e.target.value.length)}
                  />
                  <span className="absolute bottom-2 right-3 text-xs text-cyber-dim">
                    {messageLength}/250
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="cyber-button inline-flex items-center gap-2"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
