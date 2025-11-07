# Wealthy at Home - Landing Page

A premium landing page for Wealthy's on-demand wealth advisory service that brings SEBI-registered advisors to your doorstep in 30 minutes.

## Overview

This is a Next.js landing page built with TypeScript and Tailwind CSS, featuring:
- Responsive design optimized for mobile and desktop
- Modern UI with smooth animations
- SEO-optimized metadata
- Fast loading performance
- Clean, maintainable code structure

## Features

- **Hero Section** - Compelling headline with clear CTAs
- **Trust Bar** - Social proof with key metrics
- **How It Works** - 3-step process visualization
- **Services** - Detailed breakdown of consultation coverage
- **Pricing** - 3-tier pricing cards with special offers
- **Advisors** - Showcase of advisor credentials and quality framework
- **Testimonials** - Customer reviews and success stories
- **FAQ** - Interactive accordion with common questions
- **Footer** - Complete navigation and contact information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## Project Structure

```
wealthy-at-home/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Advisors.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:
- `primary`: Main brand color (green)
- `secondary`: Trust/accent color (blue)
- `accent`: Highlight color (gold)

### Content

All content is hardcoded in the component files under `app/components/`. To modify:
1. Edit the text, pricing, or features directly in each component
2. Update advisor profiles in `Advisors.tsx`
3. Modify FAQ questions in `FAQ.tsx`

### Images

To add actual images:
1. Place images in the `public/` folder
2. Reference them in components using `/image-name.jpg`
3. Consider using Next.js Image component for optimization

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/wealthy-at-home)

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## Performance Optimization

- Uses Next.js App Router for optimal performance
- Tailwind CSS for minimal CSS bundle size
- Client components only where interactivity is needed
- Smooth scroll behavior for better UX

## Future Enhancements

- [ ] Add actual booking form with backend integration
- [ ] Integrate payment gateway (Razorpay/Stripe)
- [ ] Add real-time advisor availability checker
- [ ] Implement city selector with geolocation
- [ ] Add analytics tracking (Google Analytics/Mixpanel)
- [ ] A/B testing for CTAs
- [ ] Add blog section for SEO
- [ ] Implement chat widget for support

## License

Proprietary - Wealthy.in

## Contact

For questions or support:
- Email: home@wealthy.in
- Website: https://wealthy.in
