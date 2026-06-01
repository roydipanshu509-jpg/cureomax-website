import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      clinicName, doctorName, phone, email,
      city, specialty, doctorCount, volume,
      problem, preferredTime,
    } = body;

    // Validate required fields
    if (!clinicName || !doctorName || !phone || !city || !specialty) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.RESEND_TO_EMAIL || "cureomax@gmail.com";
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    if (!RESEND_API_KEY) {
      // Fallback: log and succeed without email (dev mode)
      console.log("📋 New demo booking:", JSON.stringify(body, null, 2));
      return NextResponse.json({ success: true, mode: "logged" });
    }

    const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: 'Segoe UI', sans-serif; background: #F7F3EC; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
    <div style="background: #0D1B2A; padding: 28px 32px; display: flex; align-items: center; gap: 12px;">
      <div style="width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #C8A45D; display: flex; align-items: center; justify-content: center;">
        <span style="color: #C8A45D; font-size: 16px;">✚</span>
      </div>
      <div>
        <h1 style="color: #FAFAF8; margin: 0; font-size: 20px; font-weight: 600;">New Demo Booking</h1>
        <p style="color: rgba(250,250,248,0.5); margin: 0; font-size: 13px;">Cureomax — Strategy Call Request</p>
      </div>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80; width: 40%;">Clinic Name</td>
          <td style="padding: 12px 0; font-size: 15px; font-weight: 600; color: #0D1B2A;">${clinicName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Doctor / Owner</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;">${doctorName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Phone</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;"><a href="tel:${phone}" style="color: #0A7075;">${phone}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Email</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;">${email || "—"}</td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">City</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;">${city}</td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Specialty</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;">${specialty}</td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Doctors</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;">${doctorCount || "—"}</td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Patient Volume</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;">${volume || "—"}</td>
        </tr>
        <tr style="border-bottom: 1px solid #EDE8DC;">
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Biggest Challenge</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A; font-weight: 600;">${problem || "—"}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #8D8A80;">Preferred Time</td>
          <td style="padding: 12px 0; font-size: 15px; color: #0D1B2A;">${preferredTime || "—"}</td>
        </tr>
      </table>
      <div style="margin-top: 28px; padding: 16px 20px; background: #0D1B2A; border-radius: 6px;">
        <p style="margin: 0; color: rgba(250,250,248,0.7); font-size: 13px;">Reply to this email or call the doctor directly to schedule the demo. Respond within 24 hours.</p>
      </div>
    </div>
    <div style="padding: 20px 32px; background: #F7F3EC; border-top: 1px solid #EDE8DC;">
      <p style="margin: 0; font-size: 12px; color: #8D8A80;">Cureomax · Noida, Delhi NCR · hello@cureomax.com</p>
    </div>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Cureomax Demos <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: email || undefined,
        subject: `🏥 New Demo — ${clinicName} (${specialty}, ${city})`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Book demo API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
