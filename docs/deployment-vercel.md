# Deploying Cureomax on Vercel

## Step 1: Push to GitHub

```bash
cd cureomax
git init
git add .
git commit -m "feat: initial Cureomax marketing website"
git remote add origin https://github.com/YOUR_USERNAME/cureomax-website.git
git push -u origin main
```

## Step 2: Connect to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "New Project"
4. Select your cureomax-website repository
5. Vercel auto-detects Next.js — no configuration needed
6. Click "Deploy"

## Step 3: Add Environment Variables

In Vercel dashboard → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_WHATSAPP_NUMBER = 91XXXXXXXXXX
RESEND_API_KEY = re_xxxxxxxxxxxx        (when you add the email API)
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXX  (when you add analytics)
```

## Step 4: Connect cureomax.com domain

1. In Vercel → Project → Settings → Domains
2. Add: cureomax.com
3. Add: www.cureomax.com
4. Vercel gives you DNS records (A record and CNAME)
5. Go to your domain registrar (GoDaddy/Namecheap/etc.)
6. Add the DNS records provided by Vercel
7. DNS propagation takes 15 minutes to 48 hours

## Vercel DNS Settings (Example)

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## Future: app.cureomax.com

For the actual clinic app dashboard (future):
- Deploy a separate Next.js/React project
- Add subdomain app.cureomax.com in Vercel
- The marketing site (cureomax.com) remains this repository

## Automatic Deployments

Every `git push` to `main` automatically deploys to production.

Create a `staging` branch for previews:
```bash
git checkout -b staging
git push origin staging
```
Vercel creates a preview URL: https://cureomax-staging.vercel.app

## Build Command (auto-detected)
```bash
npm run build
```

## Output Directory (auto-detected)
`.next`

## Node.js Version
18.x (recommended for Next.js 14+)

## Post-Deploy Checklist

- [ ] Homepage loads at cureomax.com
- [ ] All nav links work
- [ ] /book-demo form submits (or shows console.log)
- [ ] WhatsApp button opens correct pre-filled chat
- [ ] Mobile responsive check on real device
- [ ] Meta titles show correctly (inspect tab)
- [ ] /robots.txt accessible
- [ ] /sitemap.xml accessible
- [ ] 404 page shows on bad routes
