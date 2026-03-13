"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactPayload = {
  name: string
  email: string
  company?: string
  budget?: string
  message: string
}

export type ContactResult =
  | { success: true }
  | { success: false; error: string }

export async function sendContactEmail(
  data: ContactPayload
): Promise<ContactResult> {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: "Email service is not configured." }
  }

  try {
    const rows = [
      `<tr><td style="padding:8px 0;color:#94a3b8;width:120px">From</td><td style="padding:8px 0;color:#e2e8f0">${data.name} &lt;${data.email}&gt;</td></tr>`,
      data.company
        ? `<tr><td style="padding:8px 0;color:#94a3b8">Company</td><td style="padding:8px 0;color:#e2e8f0">${data.company}</td></tr>`
        : "",
      data.budget
        ? `<tr><td style="padding:8px 0;color:#94a3b8">Budget</td><td style="padding:8px 0;color:#e2e8f0">${data.budget}</td></tr>`
        : "",
    ]
      .filter(Boolean)
      .join("")

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jasifkolangath@gmail.com",
      replyTo: data.email,
      subject: `New message from ${data.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a1a;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
          <h2 style="margin:0 0 24px;color:#00f0ff;font-size:20px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            ${rows}
          </table>
          <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:16px;border:1px solid rgba(255,255,255,0.08)">
            <p style="margin:0 0 8px;color:#94a3b8;font-size:13px">Message</p>
            <p style="margin:0;color:#e2e8f0;white-space:pre-wrap">${data.message}</p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (err) {
    console.error("[contact action]", err)
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    }
  }
}
