# Jonakid Tech website

This is a responsive, static storefront for Jonakid Tech. Serve the `outputs` folder over HTTP (for example with VS Code Live Server) or deploy it to a web host; the JSON price feed needs HTTP access.

## What's included

- Epson and Canon printers, 21 Konica Minolta bizhub photocopier listings, laptops, desktop PCs, spare-parts and supplies catalogue
- Desktop range includes mini PCs, small-form-factor PCs, towers, all-in-ones and refurbished complete sets, with supplier listing links and magnifiable product photos
- Product search and category filters
- Product image magnifier/details view
- A Jonakid Tech printer repair video plus manufacturer walkthroughs for Epson print-head cleaning and Canon paper-jam removal
- A real photo from the Jonakid Tech workshop and stockroom
- CCTV quote builder for camera quantities, 11 camera types, Hikvision/Dahua/Uniview/EZVIZ/Imou/TP-Link Tapo brands, DVR/XVR/NVR channel sizes, storage and Nairobi installation estimates; sends the quote to WhatsApp
- Quantity selectors, browser cart and WhatsApp cart checkout
- Individual product orders and repair enquiry links prefilled for WhatsApp
- Floating WhatsApp contact button
- Laptop charger / battery finder with model entry, verified HP EliteBook 840 G3 and Lenovo ThinkPad T480 examples, connector photos and model-specific voltage / amperage only where checked
- Printer spare-parts finder covering inks, toner, drums, rollers, fusers, printheads, transfer parts, waste boxes, mechanical assemblies, electronics and paper
- Product photos and magnifier views for the Epson 003 black bottle, Epson L3210/L3250 waste ink pad, Ricoh MP2501 toner and drum, laptop DDR4 RAM, HP CS03XL battery and 840 G3 keyboard, Canon LBP6030B pickup roller, Canon GI-490 ink and Canon 725 toner
- Customer project feedback form; comments are saved on the visitor's device and sent to Jonakid Tech in WhatsApp for review

## Details to maintain

- WhatsApp number and product prices are defined at the top of `app.js` and in the product list.
- Prices are indicative Kenya market references checked on 2 November 2026. Desktop examples and prices were added from Nairobi Computer Shop and Zemaro Tech Store listings. Bizhub models and refurbished prices reflect the ABM Kenya list; confirm stock, condition, configuration, meter count and prices with suppliers before publishing updates.
- CCTV quote ranges use indicative local supplier listings and installation guides. Thermal and ANPR/LPR cameras require custom quotes; large installations require a site survey. Verify compatibility, availability, VAT, cable scope and final prices before publishing or accepting an order.
- The CCTV builder fetches `market-prices.json` on page load and every 6 hours, and caches its most recent valid KSh feed in the visitor's browser. The included JSON is a reference snapshot, not an automatically refreshed supplier feed. For automatic market changes, point `CCTV_MARKET_PRICE_FEED_URL` in `app.js` to a supplier/API-backed HTTPS endpoint that returns the documented schema in `market-prices.json`, with `mode: "live"`, `updatedAt`, and a descriptive `source`. A cross-origin feed must allow this website through CORS. The endpoint or scheduled feed service must publish new supplier prices; the browser cannot reliably scrape supplier storefronts by itself.
- Nairobi, Kenya is used as the business location placeholder.
- The shopping cart is stored in each visitor's browser. Orders and repair enquiries are sent through WhatsApp; there is no payment or stock-management backend.
- Testimonial comments are not public across visitors: this static site stores them locally and opens a WhatsApp review message. Public comments need a shared database and moderation workflow.
- Product galleries use real product photos from manufacturer and supplier image pages. A vector illustration appears if a remote catalogue photo cannot load; these photos require an internet connection.
- The parts list now names model-matched examples such as Epson 003 ink, Canon GI-490 ink, Canon Cartridge 725, the Canon LBP6030B pick-up roller, and Ricoh MP 2501 drum/toner parts. Confirm part code, stock and final price before publishing changes.

The site uses custom vector illustrations for non-printer product visuals and Google Fonts when a network connection is available.

## Firebase Hosting

A `firebase.json` is included for this static site. From the repository root, sign in to Firebase CLI and deploy Hosting:

```sh
npm install -g firebase-tools
firebase login
firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
```

Create or select a Firebase project first. Firebase Hosting can serve a custom domain, but `www.jonakidtech.co.ke` must be registered and its DNS records configured with the provider that controls it. After Firebase verifies the domain, update the canonical URL, social links and sitemap to the custom domain. Keep Google Search Console verified and resubmit the sitemap.
