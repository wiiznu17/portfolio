import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields (Name, Email, Message)." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    // 2. Developer friendly fallback check
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn(
        "\x1b[33m%s\x1b[0m",
        "⚠️ [Resend Alert]: RESEND_API_KEY is not configured in .env.local! Falling back to simulated successful submission for local testing."
      )
      // Simulate success in local dev so form modal still displays
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Simulated submission successful.",
      })
    }

    // 3. Initialize Resend & Send email
    const resend = new Resend(apiKey)
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "wissanu.rayayoi@gmail.com",
      replyTo: email,
      subject: `📬 Message from Portfolio Form: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Contact Submission</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;" />
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Message Details:</strong></p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #334155; margin-top: 5px;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-top: 30px; margin-bottom: 20px;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center;">This message was dispatched securely from your Next.js Portfolio app.</p>
        </div>
      `,
    })

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to dispatch email."
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
