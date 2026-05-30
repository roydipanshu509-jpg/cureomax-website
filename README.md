# Cureomax — Marketing Website

**AI Clinic Assistant for Modern Indian Clinics**  
Built with Next.js 14 App Router · TypeScript · Tailwind CSS

---

## Quick Start

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server locally
npm start
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, problem, solution, modules, pricing preview, pilot CTA |
| `/product` | All 6 product modules with workflows |
| `/demo` | Interactive product demo story (Rohan Sharma case) |
| `/pricing` | Plans (Starter ₹4,999 / Pro ₹14,999 / Growth ₹29,999) |
| `/book-demo` | High-converting demo booking form |
| `/physio-ortho-clinics` | Specialty page for physio & ortho |
| `/women-health-clinics` | Specialty page for women's health |
| `/app-preview` | Visual dashboard preview (not live app) |
| `/contact` | Contact page |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms of service |
| `/disclaimer` | Medical & AI disclaimer |
| `/data-security` | Data security page |

---

## Brand Colors

Edit in `app/globals.css`:

```css
--bottle-green: #0F2A1D;    /* Dark sections, navbar */
--rich-ivory: #F7F1E5;      /* Primary background */
--champagne-gold: #C8A96A;  /* Accents, CTAs, borders */
--walnut-brown: #4A3326;    /* Muted text */
--charcoal: #171717;        /* Body text */
--soft-parchment: #EFE3D0;  /* Alternate sections */
--muted-sage: #9AAB89;      /* Success states, check icons */
--oxblood: #5A1F24;         /* Warning/safety elements */
```

---

## Typography

- **Headings**: Playfair Display (via @fontsource/playfair-display)
- **Body**: Manrope (via @fontsource/manrope)
- Both are self-hosted — no Google Fonts runtime dependency

---

## Connecting the Demo Form

The book-demo form at `/book-demo` currently logs to console and shows a success message.

To connect a real email backend:

**Option A — Resend:**
```bash
npm install resend
```
Create `app/api/book-demo/route.ts`:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  const body = await req.json();
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_EMAIL!,
    subject: `New Demo Request — ${body.clinicName}`,
    text: JSON.stringify(body, null, 2),
  });
  return Response.json({ success: true });
}
```

**Option B — EmailJS (no backend needed):**
```bash
npm install @emailjs/browser
```
Add to the form component's handleSubmit.

---

## WhatsApp CTA

Edit the phone number in:
- `components/FloatingWhatsApp.tsx` → `whatsappUrl`
- `app/contact/page.tsx` → WhatsApp link
- `.env.example` → `NEXT_PUBLIC_WHATSAPP_NUMBER`

---

## Vercel Deployment

See `docs/deployment-vercel.md` for the full step-by-step guide.

**Quick deploy:**
1. Push to GitHub
2. Connect repo on vercel.com
3. Add environment variables
4. Add domain: cureomax.com

---

## Documentation

| File | Contents |
|------|----------|
| `docs/founder-sales-script.md` | Full sales scripts, pitches, objection handling |
| `docs/product-strategy.md` | Product positioning, market, roadmap |
| `docs/deployment-vercel.md` | Step-by-step Vercel deployment guide |
| `.env.example` | All environment variable slots |

---

## Future: app.cureomax.com

The actual clinic dashboard app (CureoMax Phase 1+) will live at `app.cureomax.com` as a separate deployment. This repository is the marketing website only.

---

## Safety Notice

This website contains AI-related healthcare product marketing. All copy and product descriptions maintain the principle:

> **AI assists. Doctors decide.**

No page on this website claims AI diagnosis, AI prescription, or AI replacing doctors. The medical disclaimer is included in the footer on all pages.
