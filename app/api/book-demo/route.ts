import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL  = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      clinicName, doctorName, phone, email,
      city, specialty, doctorCount, volume,
      problem, preferredTime,
    } = body;

    if (!clinicName || !doctorName || !phone || !city || !specialty) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Save to Supabase (non-blocking)
    if (SUPABASE_URL && SUPABASE_ANON) {
      try {
        await fetch(SUPABASE_URL + "/rest/v1/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_ANON,
            "Authorization": "Bearer " + SUPABASE_ANON,
            "Prefer": "return=minimal",
          },
          body: JSON.stringify({
            clinic_name:    clinicName,
            doctor_name:    doctorName,
            phone,
            email:          email || null,
            city,
            specialty,
            doctor_count:   doctorCount || null,
            volume:         volume || null,
            problem:        problem || null,
            preferred_time: preferredTime || null,
            status:         "new",
            source:         "website",
          }),
        });
      } catch (dbErr) {
        console.error("Supabase save error (non-fatal):", dbErr);
      }
    }

    // 2. Send email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL       = process.env.RESEND_TO_EMAIL || "cureomax@gmail.com";
    const FROM_EMAIL     = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    if (!RESEND_API_KEY) {
      console.log("Lead captured (no Resend key):", clinicName, specialty, city, phone);
      return NextResponse.json({ success: true, mode: "db-only" });
    }

    const emailHtml = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="font-family:sans-serif;background:#F7F3EC;margin:0;padding:0;"><div style="max-width:600px;margin:0 auto;background:white;border-radius:8px;overflow:hidden;"><div style="background:#032D1F;padding:28px 32px;"><h1 style="color:#FAFAF8;margin:0;font-size:20px;">New Demo Booking</h1><p style="color:rgba(250,250,248,0.5);margin:4px 0 0;font-size:13px;">Cureomax Strategy Call Request</p></div><div style="padding:32px;"><p style="margin:0;font-size:15px;color:#032D1F;">Clinic: ' + clinicName + ' | Doctor: ' + doctorName + ' | Phone: ' + phone + ' | Specialty: ' + specialty + ' | City: ' + city + '</p><p style="margin:8px 0 0;font-size:14px;color:#555;">Challenge: ' + (problem||"—") + ' | Volume: ' + (volume||"—") + ' | Time: ' + (preferredTime||"—") + '</p></div><div style="padding:16px 32px;background:#F7F3EC;"><p style="margin:0;font-size:12px;color:#8D8A80;">Lead saved to Supabase · cureomax.com</p></div></div></body></html>';

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + RESEND_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Cureomax Demos <" + FROM_EMAIL + ">",
        to: [TO_EMAIL],
        reply_to: email || undefined,
        subject: "New Demo — " + clinicName + " (" + specialty + ", " + city + ")",
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return NextResponse.json({ success: true, mode: "db-only" });
    }

    return NextResponse.json({ success: true, mode: "db-and-email" });
  } catch (err) {
    console.error("Book demo API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
