"use client"

import { useState } from "react"
import { AtSign, Phone } from "lucide-react"

import { Button } from "./app-button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function Contact() {
  const [messageLength, setMessageLength] = useState(0)
  return (
    <section id="contact" className="container h-auto pb-40">
      <div className="mx-auto flex flex-wrap items-start pb-6 pt-4">
        <h2 className="my-8 w-full text-left text-3xl font-bold leading-tight text-slate-700 dark:text-slate-400">
          Let&apos;s build an awesome project together
          <span className="text-emerald-400">!</span>
        </h2>
        <div className="w-full p-0 md:w-1/2">
          <div className="mx-auto">
            <div className="space-y-8">
              <h3 className="mb-4 text-2xl font-semibold">Contact Me</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="size-5" />
                    <span className="font-medium">Call me</span>
                  </div>
                  <div className="space-y-1 pl-7">
                    <p className="text-muted-foreground text-sm">
                      +91 9567909210
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AtSign className="size-5" />
                    <span className="font-medium">Mail me</span>
                  </div>
                  <div className="space-y-1 pl-7">
                    <p className="text-muted-foreground text-sm">
                      jasifkolangath@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-0 md:w-1/2">
          <div className="mx-auto">
            <div className="space-y-8">
              <h2 className="mt-8 text-2xl font-semibold md:mt-0">
                Get in touch.
              </h2>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Your company
                    </label>
                    <Input
                      id="company"
                      placeholder="Company name"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Budget Range
                    </label>
                    <Input
                      id="budget"
                      placeholder="In USD"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      placeholder="Type here..."
                      className="min-h-[120px] resize-none"
                      maxLength={250}
                      onChange={(e) => setMessageLength(e.target.value.length)}
                    />
                    <span className="text-muted-foreground absolute bottom-2 right-2 text-xs">
                      {messageLength}/250
                    </span>
                  </div>
                </div>

                <Button type="submit" className="w-24" variant="outline">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
