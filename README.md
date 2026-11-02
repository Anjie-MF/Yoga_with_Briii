# Yoga with Briii
A marketing website for Briii, a mobile yoga instructor — a real client project. Her photos were the main selling point, but also the slowest part of the page.

## Demo
Live:Live: https://www.yogawithbriii.com/

<!-- ## Screenshot
![Yoga With Briii Screenshot](./src/assets/ADD SCREENSHOT TO FILES) -->

## View
Static site, no build step. Open `index.html` directly, or serve the folder with any static server.

## The hard decision
A photo-heavy site that had to stay beautiful and load fast on a phone. I converted the photography to AVIF and tuned the page around Largest Contentful Paint, so the selling point stopped being the bottleneck.

## Features
- Four wellness packages with pricing: Mommy & Me, Athlete Reset, Group Yoga, Kids Yoga
- Online booking through a Calendly embed
- Contact form using Formspree with honeypot spam protection
- "Catch me teaching" section featuring studio locations
- Social links, semantic landmarks, skip link, full SEO/social meta with LocalBusiness schema
- Performance-tuned imagery AVIF with JPG fallbacks, lazy loading, explicit dimensions, priority on the hero
- Custom production domain with HTTPS through Netlify and Let's Encrypt
  
## What I Learned
- Connecting a custome domain, configuring DNS< and verifying HTTPS turned the project from a Netlify deployment into a live client website.
- Build for the business, not the portfolio. Every section serves bookings: CTA placement, priced package cards, the booking embed all support the client's goal.
- Performance is a business requirement. The photos were the product and the bottleneck, so AVIF, lazy loading, and LCP tuning weren't polish but mandatory
- Write in the client's voice. The "Meet Briii" copy is first-person as Briii.
  
## What's next
- Testimonials — a personal wellness brand runs on trust, and "yoga for every body" needs other people's voices behind it.
- A class schedule — one "where to find me this week" view across Southern Star, Six62, and her own packages would save visitors from assembling the information themselves.
- An FAQ — answering "I've never done yoga" and "I'm not flexible" before they become reasons not to book.
