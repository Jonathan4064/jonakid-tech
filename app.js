const BUSINESS_WHATSAPP = "254790652803";
const CCTV_MARKET_PRICE_FEED_URL = "market-prices.json";
const CCTV_MARKET_PRICE_REFRESH_MS = 6 * 60 * 60 * 1000;
const CCTV_MARKET_PRICE_CACHE_KEY = "jonakid-market-prices-v2";
const TESTIMONIALS_CACHE_KEY = "jonakid-project-feedback-v1";

const products = [
  {
    id: "hp-elitebook-840-g3",
    name: "HP EliteBook 840 G3",
    detail: "Core i5 · 8GB RAM · 256GB SSD · 14-inch",
    category: "Laptop",
    group: ["laptop"],
    badge: "Refurbished laptop",
    brand: "HP",
    price: 24999,
    art: "laptop",
    image: "https://nairobicomputershop.co.ke/media/cache/fe/af/feafd3e65fe9c186cd609b08997976f7.jpg",
    gallery: [
      { src: "https://nairobicomputershop.co.ke/media/cache/fe/af/feafd3e65fe9c186cd609b08997976f7.jpg", label: "Open laptop view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/d5/9f/d59fdc04059cedd164cd689650d9c919.jpg", label: "Closed lid view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/01/67/0167dea204d774f6d43c30c330280fe7.jpg", label: "Side and ports view" }
    ],
    specs: ["Intel Core i5-6300U, 2.4 GHz", "8GB DDR4 RAM", "256GB SSD", "14-inch Full HD display", "Intel HD Graphics 520", "Windows 10 Pro", "Refurbished; confirm condition and warranty"],
    offer: "Laptop bag included",
    priceSource: "https://nairobicomputershop.co.ke/catalogue/hp-elitebook-840-g3-laptop-14-hd-display-intel-core-i5-6300u-24ghz-256gb-ssd-8gb-ddr4-ram-webcam-wifi-windows-10-pro_517/",
    description: "Refurbished business laptop listing with a 6th Gen Core i5, Full HD screen, 8GB RAM and 256GB SSD. Laptop bag included with this Jonatech Solutions offer; confirm condition and warranty terms."
  },
  {
    id: "lenovo-thinkpad-t480",
    name: "Lenovo ThinkPad T480 Touch",
    detail: "Core i5 8th Gen · 8GB RAM · 256GB SSD · 14-inch touch",
    category: "Laptop",
    group: ["laptop", "lenovo"],
    badge: "Sale · bag included",
    brand: "Lenovo",
    price: 29999,
    originalPrice: 35999,
    art: "laptop",
    image: "https://cdn.ratake.com/md5_e95c711e108a0e1102309e6fe320361c.jpg",
    gallery: [
      { src: "https://cdn.ratake.com/md5_e95c711e108a0e1102309e6fe320361c.jpg", label: "Open laptop view" },
      { src: "https://laptomart.com/cdn/shop/files/7.jpg?v=1743656596&width=1445", label: "Closed lid view" },
      { src: "https://www.preiswerte-it.de/media/89/da/07/1688489668/lenovo-thinkpad-t480-02_7b014de7ed24bf79.jpg", label: "Side and ports view" }
    ],
    specs: ["Intel Core i5 8th Gen", "8GB DDR4 RAM", "256GB SSD", "14-inch touchscreen", "Intel UHD Graphics 620", "Refurbished listing; confirm actual condition and warranty"],
    offer: "Laptop bag included",
    priceSource: "https://dealfit.co.ke/products/lenovo-thinkpad-t480-14-touchscreen-core-i5-8gb-ram-256gb-ssd-laptop?variant=67630119977202",
    description: "Refurbished ThinkPad T480 touchscreen configuration. Listed at a sale price in Kenya; confirm stock, screen condition and warranty. Laptop bag included with this Jonatech Solutions offer."
  },
  {
    id: "dell-vostro-3520",
    name: "Dell Vostro 3520",
    detail: "Core i3 · 8GB RAM · 512GB SSD · 15.6-inch FHD",
    category: "Laptop",
    group: ["laptop", "dell"],
    badge: "Business · bag included",
    brand: "Dell",
    price: 49999,
    art: "laptop",
    image: "https://nairobicomputershop.co.ke/media/cache/88/52/8852c35ddc8c5a4e13128056f711a2f9.jpg",
    gallery: [
      { src: "https://nairobicomputershop.co.ke/media/cache/88/52/8852c35ddc8c5a4e13128056f711a2f9.jpg", label: "Open laptop view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/66/e8/66e8f6f80cf3fda832545a2e39be59fb.jpg", label: "Closed lid view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/6d/21/6d21b63e3e413be6630f0406775199e9.jpg", label: "Side and ports view" }
    ],
    specs: ["Intel Core i3", "8GB RAM", "512GB SSD", "15.6-inch Full HD 120Hz display", "Windows 11 Pro", "New listing; confirm exact processor variant"],
    offer: "Laptop bag included",
    priceSource: "https://nairobicomputershop.co.ke/catalogue/dell-vostro-3520-business-laptop-156-fhd-120hz-display-intel-core-i3-8gb-ram-512gb-ssd-sd-card-reader-webcam-hdmi-rj-45-wi-fi-windows-11-pro-black_1045/",
    description: "Business-focused 15.6-inch Vostro listing with Full HD 120Hz display, 8GB RAM and 512GB SSD. Confirm the exact processor variant and stock. Laptop bag included with this Jonatech Solutions offer."
  },
  {
    id: "asus-x409fa",
    name: "ASUS VivoBook X409FA",
    detail: "Core i7-8565U · 8GB RAM · 1TB HDD · 14-inch",
    category: "Laptop",
    group: ["laptop", "asus"],
    badge: "VivoBook · bag included",
    brand: "ASUS",
    price: 66000,
    art: "laptop",
    image: "https://nairobicomputershop.co.ke/media/cache/e7/b6/e7b67dd0f9c1c2f7f7b549be06239c19.jpg",
    gallery: [
      { src: "https://songphuong.vn/Content/uploads/2020/04/2_Laptop_Asus_X409FA-EK098T_songphuong.vn_.jpg", label: "Open laptop view" },
      { src: "https://image.citycenter.jo/cache/catalog/112021/X44092-1200x1200.jpg", label: "Closed lid view" },
      { src: "https://cdn.cs.1worldsync.com/a3/7d/a37d194d-520a-4dd9-8ff0-e9c0f3b7c933.jpg", label: "Side and ports view" }
    ],
    specs: ["Intel Core i7-8565U", "8GB DDR4 RAM", "1TB HDD", "14-inch HD display", "Intel UHD Graphics 620", "Windows 10 Home"],
    offer: "Laptop bag included",
    priceSource: "https://nairobicomputershop.co.ke/catalogue/asus-x409fa-bv498t-intel-core-i7-8565u-8gb-ddr4-ram-1tb-hdd-windows-10-home-14-hd_863/",
    description: "14-inch VivoBook listing with an 8th Gen Core i7, 8GB RAM and a 1TB hard drive. Confirm exact configuration and stock. Laptop bag included with this Jonatech Solutions offer."
  },
  {
    id: "acer-aspire-5-a514-54",
    name: "Acer Aspire 5 A514-54",
    detail: "Core i5-1135G7 · 8GB RAM · 256GB SSD · 14-inch FHD IPS",
    category: "Laptop",
    group: ["laptop", "acer"],
    badge: "Save KSh 5,000 · bag included",
    brand: "Acer",
    price: 70000,
    originalPrice: 75000,
    art: "laptop",
    image: "https://laptop.bg/system/images/268723/normal/acer_aspire_5_a51454_NXA27EX005.png",
    gallery: [
      { src: "https://laptop.bg/system/images/268723/normal/acer_aspire_5_a51454_NXA27EX005.png", label: "Open laptop view" },
      { src: "https://www.gigahertz.com.ph/cdn/shop/files/acer-aspire-5-a514-54-50lx-14-fhd-i5-1135g7-iris-xe-graphics-8gb-ram-512gb-ssd-win-11-acer-gigahertz-221153.jpg?v=1726730872&width=1000", label: "Closed lid view" },
      { src: "https://no1computer.vn/images/products/2022/01/24/large/acer-aspire-5-a514-54-back1_1642998710.jpg", label: "Side and ports view" }
    ],
    specs: ["Intel Core i5-1135G7, 11th Gen", "8GB DDR4 RAM", "256GB NVMe SSD", "14-inch Full HD IPS display", "Intel Iris Xe Graphics", "Windows version varies by stock"],
    offer: "Laptop bag included",
    priceSource: "https://bogoria.co.ke/product/acer-aspire-5-a514-54-501z/",
    description: "A compact 14-inch Aspire 5 for office, study and everyday work. The referenced Kenya listing shows KSh 70,000 against KSh 75,000; confirm exact variant, OS and availability. Laptop bag included."
  },
  {
    id: "msi-modern-14-c13m",
    name: "MSI Modern 14 C13M",
    detail: "Core i5-1334U · 8GB RAM · 512GB NVMe SSD · 14-inch FHD",
    category: "Laptop",
    group: ["laptop", "msi"],
    badge: "13th Gen · bag included",
    brand: "MSI",
    price: 68000,
    art: "laptop",
    image: "https://mctrading.co.ke/product_photos/1789988192_3b4b848fe8576ca9.jpg",
    gallery: [
      { src: "https://mctrading.co.ke/product_photos/1789988192_3b4b848fe8576ca9.jpg", label: "Open laptop view" },
      { src: "https://mctrading.co.ke/product_photos/1788952713_2429b683974c85ac.png", label: "Closed lid view" },
      { src: "https://mctrading.co.ke/product_photos/1788952713_cc0718badec9ca30.png", label: "Side and ports view" }
    ],
    specs: ["Intel Core i5-1334U, 13th Gen, 10 cores / 12 threads", "8GB RAM", "512GB NVMe SSD", "14-inch Full HD IPS display", "Backlit keyboard"],
    offer: "Laptop bag included",
    priceSource: "https://mctrading.co.ke/product/msi-modern-14-c13m-laptop-intel-core-i5-1334u-8gb-ram-512gb-ssd-14-fhd-display-backlit-keyboard",
    description: "Lightweight productivity laptop listed in Kenya with a 13th Gen Core i5, 8GB RAM and 512GB SSD. Confirm stock and exact warranty. Laptop bag included with this Jonatech Solutions offer."
  },
  {
    id: "apple-macbook-air-m1-2020",
    name: "Apple MacBook Air M1 (2020)",
    detail: "Apple M1 · 8GB unified memory · 256GB SSD · 13.3-inch Retina",
    category: "Laptop",
    group: ["laptop", "apple"],
    badge: "Save KSh 16,000 · bag included",
    brand: "Apple",
    price: 80000,
    originalPrice: 96000,
    art: "laptop",
    image: "https://http2.mlstatic.com/D_NQ_NP_741691-MLB81894798516_012025-O-apple-macbook-air-m1-256gb-8gb-ram-13-poleg-2020-gray-silver.webp",
    gallery: [
      { src: "https://http2.mlstatic.com/D_NQ_NP_741691-MLB81894798516_012025-O-apple-macbook-air-m1-256gb-8gb-ram-13-poleg-2020-gray-silver.webp", label: "Open laptop view" },
      { src: "https://http2.mlstatic.com/D_NQ_NP_735702-MLB104257110784_012026-O-apple-macbook-air-m1-256gb-8gb-ram-13-poleg-2020-silver-gray.webp", label: "Closed lid view" },
      { src: "https://istore.co.na/cdn/shop/products/airm1sil1_1_f03aa359-9254-4d79-af0a-6a7044a9e403_1200x.png?v=1739348997", label: "Side and ports view" }
    ],
    specs: ["Apple M1 chip, 8-core CPU", "8GB unified memory", "256GB SSD", "13.3-inch Retina display", "7-core GPU", "Used/refurbished condition varies by listing"],
    offer: "Laptop bag included",
    priceSource: "https://laptopsinkenya.com/product/apple-macbook-air-late-2020-space-gray-8gb-ram-256gb-ssd-m1-chip-with-retina-display-13-3-mgn63ll-a/",
    description: "M1 MacBook Air listing with Retina display, 8GB unified memory and 256GB SSD. The referenced Kenya listing shows KSh 80,000 against KSh 96,000; verify condition, battery health and warranty. Laptop bag included."
  },
  {
    id: "hp-pro-tower-290-g9",
    name: "HP Pro Tower 290 G9 Desktop",
    detail: "Core i7-12700 · 8GB RAM · 1TB HDD · keyboard & mouse",
    category: "Desktop computer",
    group: ["computer", "hp"],
    badge: "Office desktop",
    brand: "HP",
    price: 89999,
    art: "copier",
    image: "https://nairobicomputershop.co.ke/media/cache/bd/09/bd092786051cdd1c10b117de9ed835f4.jpg",
    gallery: [
      { src: "https://nairobicomputershop.co.ke/media/cache/bd/09/bd092786051cdd1c10b117de9ed835f4.jpg", label: "Desktop tower view" },
      { src: "https://pe-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/J/6J396LT-1_T1689892472.png", label: "Front and side view" }
    ],
    specs: ["Intel Core i7-12700", "8GB DDR4 RAM", "1TB HDD", "FreeDOS", "USB keyboard and mouse included", "One-year seller warranty stated on listing; monitor not included"],
    priceSource: "https://nairobicomputershop.co.ke/catalogue/hp-pro-tower-290-g9-desktop-pc-intel-core-i7-12700-8gb-ddr4-3200-1tb-hdd-freedos-95-mm-slim-dvd-writer-realtek-rtl8822ce-80211abgnac-2x2-wi-fi-and-bluetooth-5-6b2v9ea_1001/",
    description: "Office tower listing includes an Intel Core i7, 8GB RAM, 1TB HDD and a USB keyboard and mouse. FreeDOS; monitor is not included. Confirm the supplied configuration."
  },
  {
    id: "dell-optiplex-7010-tower",
    name: "Dell OptiPlex 7010 Tower",
    detail: "Core i7-13700 · 8GB RAM · 512GB NVMe SSD · Windows 11 Pro",
    category: "Desktop computer",
    group: ["computer", "dell"],
    badge: "Business tower",
    brand: "Dell",
    price: 114999,
    art: "copier",
    image: "https://nairobicomputershop.co.ke/media/cache/ee/af/eeaf9b306c8b66fb68a6a83dda70ea4d.jpg",
    gallery: [
      { src: "https://nairobicomputershop.co.ke/media/cache/ee/af/eeaf9b306c8b66fb68a6a83dda70ea4d.jpg", label: "Desktop tower view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/51/11/5111c651bae6f8b5c4744a7aeb925966.jpg", label: "Front and side view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/f4/e0/f4e05bbd3b6c11b3166cfb7f477fd00b.jpg", label: "Additional product view" }
    ],
    specs: ["Intel Core i7-13700, 13th Gen", "8GB RAM", "512GB PCIe NVMe SSD", "Windows 11 Pro", "Integrated Intel UHD Graphics", "Monitor not included"],
    priceSource: "https://nairobicomputershop.co.ke/catalogue/dell-optiplex-7010-tower-desktop-pc-13th-generation-intel-core-i7-13700-8gb-ddr4-512gb-ssdhdd-windows-11-pro-64-bits-no-monitor-included_1049/",
    description: "Business desktop tower listing with a 13th Gen Core i7, 8GB RAM and 512GB NVMe SSD. Monitor is not included. Confirm configuration and stock."
  },
  {
    id: "dell-optiplex-3050-tower",
    name: "Dell OptiPlex 3050 Mini Tower Bundle",
    detail: "Core i7-7700 · 4GB RAM · 500GB HDD · 18.5-inch monitor",
    category: "Desktop computer",
    group: ["computer", "dell"],
    badge: "Tower + monitor",
    brand: "Dell",
    price: 72999,
    art: "computer",
    image: "https://nairobicomputershop.co.ke/media/cache/e8/38/e838ed8b9f5756a82b038169d4126d1f.jpg",
    gallery: [
      { src: "https://nairobicomputershop.co.ke/media/cache/e8/38/e838ed8b9f5756a82b038169d4126d1f.jpg", label: "Tower and monitor bundle" },
      { src: "https://nairobicomputershop.co.ke/media/cache/f3/65/f3657231e66acb2e0c0abac668cbbc36.jpg", label: "Tower view" }
    ],
    specs: ["Intel Core i7-7700, 7th Gen", "4GB RAM", "500GB HDD", "18.5-inch TFT monitor", "Keyboard, mouse and power cables included", "FreeDOS; one-year seller warranty shown on listing"],
    priceSource: "https://nairobicomputershop.co.ke/catalogue/dell-optiplex-3050-mini-tower-business-computer-intel-core-i7-4gb-ram-500gb-hdd-7700-34ghz-185-inch-eng-keyboard-dos-black_146/",
    description: "Refurbished business bundle listing with a compact OptiPlex tower, 18.5-inch monitor, keyboard and mouse. Confirm condition, included components and warranty."
  },
  {
    id: "lenovo-thinkcentre-neo-50t",
    name: "Lenovo ThinkCentre Neo 50t Gen 4",
    detail: "Core i5-12400 · 8GB RAM · 512GB SSD · tower",
    category: "Desktop computer",
    group: ["computer", "lenovo"],
    badge: "Business tower",
    brand: "Lenovo",
    price: 59000,
    art: "computer",
    image: "https://radox.co.ke/wp-content/uploads/2024/07/Lenovo-ThinkCentre-neo-50t-2.jpg",
    gallery: [
      { src: "https://radox.co.ke/wp-content/uploads/2024/07/Lenovo-ThinkCentre-neo-50t-2.jpg", label: "Front and rear tower view" },
      { src: "https://p3-ofp.static.pub/fes/cms/2022/06/07/d57rs00qaw7ky1613lh2zit9w4nazz931503.jpg", label: "Front ports view" }
    ],
    specs: ["Intel Core i5-12400", "8GB RAM", "512GB SSD", "Tower desktop; operating system varies by listing", "Confirm exact SKU and included accessories"],
    priceSource: "https://zemarotechstore.co.ke/product-category/computing/desktop-computers/lenovo-desktops/",
    description: "A business tower listing with a 12th Gen Intel Core i5, 8GB RAM and 512GB SSD. The Kenya supplier category lists KSh 59,000; confirm exact SKU and stock."
  },
  {
    id: "hp-proone-240-g9",
    name: "HP ProOne 240 G9 All-in-One",
    detail: "Core i7-1215U · 16GB RAM · 512GB SSD · 23.8-inch FHD",
    category: "All-in-one computer",
    group: ["computer", "hp"],
    badge: "All-in-one desktop",
    brand: "HP",
    price: 134999,
    art: "computer",
    image: "https://nairobicomputershop.co.ke/media/cache/36/15/3615d66823b6e02f33a4193010bc2a31.jpg",
    gallery: [
      { src: "https://nairobicomputershop.co.ke/media/cache/36/15/3615d66823b6e02f33a4193010bc2a31.jpg", label: "Front display view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/cc/bc/ccbc037d0ad82982e0eb450f448558d0.jpg", label: "Side and stand view" },
      { src: "https://nairobicomputershop.co.ke/media/cache/f7/0c/f70cba9d81281da784bb9db0fc9f747a.jpg", label: "Back and ports view" }
    ],
    specs: ["Intel Core i7-1215U, 12th Gen", "16GB DDR4 RAM", "512GB PCIe NVMe SSD", "23.8-inch Full HD IPS display", "Windows 11 Pro", "New listing; confirm included keyboard and mouse"],
    priceSource: "https://nairobicomputershop.co.ke/catalogue/2024-newest-hp-proone-240-g9-238-fhd-1920-x-1080-ips-display-all-in-one-intel-core-i7-1215u-12th-gen-processor-16gb-ddr4-3200-mhz-ram-512-pcie-nvme-ssd-intel-uhd-graphics-windows-11-pro_1057/",
    description: "Space-saving all-in-one desktop listing with an integrated 23.8-inch Full HD screen, 12th Gen Core i7, 16GB RAM and 512GB SSD. Confirm stock and accessories."
  },
  {
    id: "hp-elitedesk-800-g5-sff",
    name: "HP EliteDesk 800 G5 Small Form Factor",
    detail: "Core i5-9500T · 16GB RAM · 256GB SSD · Windows 11 Pro",
    category: "Desktop computer",
    group: ["computer", "hp"],
    badge: "Compact business desktop",
    brand: "HP",
    price: 28999,
    art: "computer",
    image: "https://desktop.bg/system/images/227968/original/EliteDesk_800_G5_SFF.png",
    gallery: [
      { src: "https://desktop.bg/system/images/227968/original/EliteDesk_800_G5_SFF.png", label: "Front and side view" },
      { src: "https://www.bhphotovideo.com/images/fb/hp_7ll87ut_aba_elite_desk_800_g5_1491985.jpg", label: "Front ports view" }
    ],
    specs: ["Intel Core i5 9th Gen listing", "16GB DDR4 RAM", "256GB SSD", "Windows 11 Pro", "Small form factor; keyboard and mouse listed", "Refurbished / EX-UK listing; confirm condition and warranty"],
    priceSource: "https://nairobicomputershop.co.ke/catalogue/hp-elitedesk-800-g5-sff-desktop-computer-pc-intel-core-i5-9500t-16gb-ddr4-ram-256gb-ssd-keyboard-mouse-displayport-windows-11-pro_1222/",
    description: "Compact refurbished small-form-factor business PC listed in Nairobi. Confirm stock, exact processor suffix, condition, operating system and warranty before purchase."
  },
  {
    id: "hp-pro-mini-260-g9-i3",
    name: "HP Pro Mini 260 G9",
    detail: "Core i3-1315U · 8GB RAM · 256GB NVMe SSD · mini PC",
    category: "Desktop computer",
    group: ["computer", "hp"],
    badge: "New compact mini PC",
    brand: "HP",
    price: 52000,
    art: "computer",
    image: "https://co-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/B/9/B9TK1AT-1_T1759858563.png",
    gallery: [
      { src: "https://co-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/B/9/B9TK1AT-1_T1759858563.png", label: "Compact desktop view" },
      { src: "https://www.hp.com/it-it/shop/media/catalog/product/9/9/99b94735-9a8c-4f36-be76-678ef218f672.png?image-type=image&store=it-it", label: "Front and side view" }
    ],
    specs: ["Intel Core i3-1315U, 13th Gen", "8GB DDR4 RAM", "256GB PCIe NVMe SSD", "Integrated Intel UHD Graphics", "FreeDOS", "Mini form factor; wired HP keyboard and mouse listed; 1-year supplier warranty"],
    priceSource: "https://zemarotechstore.co.ke/product/hp-pro-mini-260-g9-desktop-pc-intel-core-i3-1315u-8gb-256gb-ssd-9h6m7et/",
    description: "Space-saving HP mini desktop listed by a Kenya retailer at KSh 52,000. Confirm included accessories, operating system, warranty and stock."
  },
  {
    id: "dell-optiplex-3080mt-bundle",
    name: "Dell OptiPlex 3080 Micro Tower Set",
    detail: "Core i5 10th Gen · 4GB RAM · 1TB HDD · 18.5-inch monitor",
    category: "Desktop computer",
    group: ["computer", "dell"],
    badge: "Complete desktop set",
    brand: "Dell",
    price: 74999,
    art: "computer",
    image: "https://nairobicomputershop.co.ke/media/cache/08/69/086905d270223415e1669a62ec4cbe24.jpg",
    gallery: [
      { src: "https://nairobicomputershop.co.ke/media/cache/08/69/086905d270223415e1669a62ec4cbe24.jpg", label: "Tower and monitor set" },
      { src: "https://image.citycenter.jo/cache/catalog/12021/3080PP-1200x630.jpg", label: "OptiPlex tower view" }
    ],
    specs: ["Intel Core i5 10th Gen", "4GB RAM", "1TB HDD", "18.5-inch TFT monitor", "Ubuntu; keyboard, mouse and power cables listed", "New listing; 1-year seller warranty stated"],
    priceSource: "https://nairobicomputershop.co.ke/catalogue/dell-optiplex-3080mt-system-ci5-10th-gen4gb1tbdvdrwubuntu_183/",
    description: "Dell OptiPlex 3080 micro-tower desktop set with monitor and accessories, listed in Nairobi. Confirm stock, OS, included items and warranty."
  },
  {
    id: "epson-l3250",
    name: "Epson EcoTank L3250",
    detail: "Print · Scan · Copy · Wi-Fi",
    category: "Epson printer",
    group: ["epson"],
    badge: "Wi-Fi all-in-one",
    brand: "Epson",
    price: 30500,
    art: "epson",
    image: "https://cdn.pdx.stibosystems.com/submitted/assets/73fc40d2-58cf-334d-a8ab-be4ebec69b2e/f6076b0a-79fb-594f-9bb5-d57e27c80ee9/f6076b0a-79fb-594f-9bb5-d57e27c80ee9_m_jpg_1.jpg?v=1762979357330",
    description: "A refillable A4 colour printer with print, scan, copy and wireless connectivity for home or a small office."
  },
  {
    id: "epson-l3210",
    name: "Epson EcoTank L3210",
    detail: "Print · Scan · Copy · USB",
    category: "Epson printer",
    group: ["epson"],
    badge: "Everyday favourite",
    brand: "Epson",
    price: 26900,
    art: "epson",
    image: "https://cdn-eu.aglty.io/epson/productimages/20lou2_mcx_blk_02_2.jpg",
    description: "A dependable A4 colour ink tank all-in-one for printing, scanning and copying over USB."
  },
  {
    id: "canon-pixma-g3410",
    name: "Canon PIXMA G3410",
    detail: "Print · Scan · Copy · Wi-Fi",
    category: "Canon printer",
    group: ["canon"],
    badge: "Refillable ink tank",
    brand: "Canon",
    price: 19999,
    art: "canon",
    image: "https://i1.adis.ws/i/canon/pixma_g3410-as-fra_4c70ad9f96f948a8b32187fb69d362d9",
    description: "A compact refillable ink tank printer for colour documents and everyday home or school printing."
  },
  {
    id: "canon-lbp6030b",
    name: "Canon i-SENSYS LBP6030B",
    detail: "A4 · Monochrome · Laser",
    category: "Laser printer",
    group: ["canon", "laser"],
    badge: "Fast mono laser",
    brand: "Canon",
    price: 27299,
    art: "laser",
    image: "https://in.canon/media/migration/shared/live/products/EN/lbp6030b-b1.png",
    description: "A compact monochrome laser printer for clear, quick black-and-white documents."
  },
  {
    id: "canon-mf270",
    name: "Canon i-SENSYS MF270",
    detail: "Print · Scan · Copy · Laser",
    category: "Laser printer",
    group: ["canon", "laser"],
    badge: "Laser all-in-one",
    brand: "Canon",
    price: 47000,
    art: "laser",
    image: "https://cdn.media.amplience.net/i/canon/i-sensys-mf272dw_video_thumbnail_0b72e7c3d9b04a1cbf192ef7b77667c5",
    description: "A monochrome laser multifunction machine for offices that need printing, scanning and copying."
  },
  {
    id: "ricoh-mp2001",
    name: "Ricoh Aficio MP 2001",
    detail: "A3 · Monochrome · Print / Copy / Scan",
    category: "Photocopier",
    group: ["copier"],
    badge: "Office photocopier",
    brand: "Ricoh",
    price: 52000,
    art: "copier",
    image: "https://static-data2.manualslib.com/product-images/2b3/1111552/ricoh-mp-2001-all-in-one-printer.jpg",
    description: "A multifunction A3 monochrome photocopier for copying, printing and scanning. Confirm condition and included accessories."
  },
  {
    id: "ricoh-mp-c2011",
    name: "Ricoh Aficio MP C2011",
    detail: "A3 · Colour · Print / Copy / Scan",
    category: "Photocopier",
    group: ["copier"],
    badge: "Colour photocopier",
    brand: "Ricoh",
    price: 70000,
    art: "copier",
    image: "https://static-data2.manualslib.com/product-images/2e5/941342/ricoh-mp-c2011-all-in-one-printer.jpg",
    description: "A colour multifunction A3 photocopier for busy workgroups. Confirm unit condition and finishing options before ordering."
  },
  {
    id: "epson-003-black",
    name: "Epson 003 Black Ink Bottle",
    detail: "Epson ink code 003 · For L3210 / L3250",
    category: "Printer supply",
    group: ["parts", "epson"],
    badge: "Check your model",
    brand: "Epson",
    price: 1500,
    art: "ink",
    image: "https://www.imageinfo.in/cdn/shop/files/Epson-Ink-003-black_02-1600x1600.jpg?v=1710511695",
    gallery: [
      { src: "https://www.imageinfo.in/cdn/shop/files/Epson-Ink-003-black_02-1600x1600.jpg?v=1710511695", label: "Epson 003 black bottle and box" },
      { src: "https://media.karousell.com/media/photos/products/2024/1/12/brand_new_epson_black_ink_for__1705074399_3f7be069.jpg", label: "Epson 003 BK bottle label" }
    ],
    description: "Epson 003 black refill ink for compatible EcoTank models including the L3210 and L3250. Match the code on your current bottle before ordering."
  },
  {
    id: "epson-waste-ink-pad",
    name: "Epson Waste Ink Pad · L3210 / L3250",
    detail: "Replacement absorber · model matched",
    category: "Printer part",
    group: ["parts", "epson"],
    badge: "Model check advised",
    brand: "Epson",
    price: 2500,
    art: "part",
    image: "https://http2.mlstatic.com/D_Q_NP_2X_704912-MLM79700381102_102024-V.webp",
    gallery: [
      { src: "https://http2.mlstatic.com/D_Q_NP_2X_704912-MLM79700381102_102024-V.webp", label: "L3210 / L3250 waste ink pad" },
      { src: "https://images.meesho.com/images/products/790096141/cyqjn_512.jpg", label: "Replacement ink absorber example" }
    ],
    description: "Replacement waste ink absorber listed for Epson L3210 and L3250. Share your exact model before ordering; pad replacement may need service and a counter reset."
  },
  {
    id: "ricoh-mp2501-toner",
    name: "Ricoh MP2501 Black Toner",
    detail: "Compatible with MP 2001 / MP 2501",
    category: "Copier supply",
    group: ["parts", "copier"],
    badge: "Compatible toner",
    brand: "Ricoh",
    price: 1500,
    art: "toner",
    image: "https://skyrockuae.com/cdn/shop/products/mp2501_4b34a0c5-1325-4ea4-a4f6-414c9157ad03.jpg?v=1589737824",
    gallery: [
      { src: "https://skyrockuae.com/cdn/shop/products/mp2501_4b34a0c5-1325-4ea4-a4f6-414c9157ad03.jpg?v=1589737824", label: "Ricoh MP2501 toner cartridge" },
      { src: "https://skyrockuae.com/cdn/shop/products/MP2501.jpg?v=1589737824&width=1946", label: "Toner label and cartridge view" }
    ],
    description: "Compatible black toner for Ricoh Aficio MP 2001L / MP 2001SP / MP 2501L / MP 2501SP. Ask if you prefer an original cartridge."
  },
  {
    id: "laptop-8gb-ddr4",
    name: "Laptop RAM · 8GB DDR4",
    detail: "SODIMM · compatibility check required",
    category: "Laptop part",
    group: ["parts", "laptop"],
    badge: "Upgrade your laptop",
    brand: "Laptop parts",
    price: 5500,
    art: "memory",
    image: "https://techno-smart.tn/387-large_default/ram-crucial-8gb-ddr4-3200-sodimm.jpg",
    gallery: [
      { src: "https://techno-smart.tn/387-large_default/ram-crucial-8gb-ddr4-3200-sodimm.jpg", label: "8GB DDR4 laptop SODIMM module" },
      { src: "https://www.firstshop.co.za/cdn/shop/products/ct8g4sfra32a-ram-31257185714340.png?v=1632406844", label: "RAM model label and edge pins" }
    ],
    description: "An 8GB DDR4 SODIMM upgrade. Laptop generation, speed and available slot affect compatibility and final price."
  },
  {
    id: "hp-probook-battery",
    name: "HP EliteBook 840 G3 CS03XL Battery",
    detail: "CS03XL · 11.4V · verify part code",
    category: "Laptop part",
    group: ["parts", "laptop"],
    badge: "Check part number",
    brand: "HP",
    price: 3500,
    art: "battery",
    image: "https://nairobicomputershop.co.ke/media/cache/19/8c/198c4abe6925ecad44bc67f2f2db05f2.jpg",
    gallery: [
      { src: "https://img.myipadbox.com/upload/store/detail_l/SYA0031637_B3.jpg", label: "HP CS03XL battery front and back" },
      { src: "https://nairobicomputershop.co.ke/media/cache/19/8c/198c4abe6925ecad44bc67f2f2db05f2.jpg", label: "CS03XL pack view" },
      { src: "https://651c328d1de292af2c4b-28651361a0deac968501cb8b290a73fd.ssl.cf1.rackcdn.com/800513-001.jpg", label: "Battery connector and part label" }
    ],
    description: "Replacement CS03XL battery for the HP EliteBook 840 G3 family. Verify the battery label and connector against your unit before ordering."
  },
  {
    id: "laptop-keyboard",
    name: "HP EliteBook 840 G3 Keyboard",
    detail: "Backlit · US layout · model matched",
    category: "Laptop part",
    group: ["parts", "laptop"],
    badge: "Model-specific part",
    brand: "Laptop parts",
    price: 2699,
    art: "keyboard",
    image: "https://i.ebayimg.com/images/g/Al8AAOSwfbtf2SVn/s-l1200.jpg",
    gallery: [
      { src: "https://i.ebayimg.com/images/g/Al8AAOSwfbtf2SVn/s-l1200.jpg", label: "EliteBook 840 G3 keyboard front" },
      { src: "https://i.ebayimg.com/images/g/ooUAAOSwK-Jk4gQS/s-l1200.jpg", label: "Keyboard underside and ribbon connector" }
    ],
    description: "Backlit US-layout replacement keyboard listed for HP EliteBook 840 G3 / 745 G3. Confirm your layout and part label before ordering."
  },
  {
    id: "printer-feed-roller",
    name: "Canon LBP6030B Pick-Up Roller",
    detail: "Canon part RL1-2593-000 · paper feed",
    category: "Printer part",
    group: ["parts"],
    badge: "Model check advised",
    brand: "Printer parts",
    price: 2500,
    art: "roller",
    image: "https://i.ebayimg.com/images/g/HqUAAOSwtP1lG61e/s-l400.png",
    gallery: [
      { src: "https://i.ebayimg.com/images/g/HqUAAOSwtP1lG61e/s-l400.png", label: "Canon RL1-2593-000 pickup roller" }
    ],
    description: "Canon paper pick-up roller part RL1-2593-000 for the LBP6030 / LBP6030B / LBP6030w family. Ask us to confirm OEM or compatible stock."
  },
  {
    id: "photocopier-drum-unit",
    name: "Ricoh MP 2501 Drum Unit",
    detail: "Drum unit for Ricoh MP 2501",
    category: "Copier part",
    group: ["parts", "copier"],
    badge: "Fit varies by model",
    brand: "Photocopier parts",
    price: 14000,
    art: "drum",
    image: "https://www.precisionroller.com/img/E4027.lg.jpg",
    gallery: [
      { src: "https://www.precisionroller.com/img/E4027.lg.jpg", label: "Ricoh MP 2501 drum unit" },
      { src: "https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lq1c86ige3hx6e", label: "Drum unit and model compatibility label" }
    ],
    description: "Replacement drum unit listed for the Ricoh MP 2501 photocopier. Confirm the exact model suffix and whether you need an original or compatible unit."
  },
  {
    id: "canon-gi490-black",
    name: "Canon GI-490 Black Ink · 0663C001AA",
    detail: "135 ml · PIXMA G3410 / G3400 family",
    category: "Printer supply",
    group: ["parts", "canon"],
    badge: "Canon bottle ink",
    brand: "Canon",
    price: 1900,
    art: "ink",
    image: "https://a.scdn.gr/images/sku_main_images/009003/9003827/20211102143010_canon_gi_490bk_black_0663c001.jpeg",
    gallery: [
      { src: "https://a.scdn.gr/images/sku_main_images/009003/9003827/20211102143010_canon_gi_490bk_black_0663c001.jpeg", label: "Canon GI-490 BK ink bottle" },
      { src: "https://backend.electronyat.qa/media/catalog/product/cache/518e522bac1df92102d4b2a1c65a4531/c/a/canon-_gi_490_black_ink_bottle.png", label: "GI-490 black ink label" }
    ],
    description: "Canon GI-490 black ink bottle, part 0663C001AA, for compatible PIXMA G-series printers including G3410. Match the code on your current bottle."
  },
  {
    id: "canon-725-toner",
    name: "Canon 725 Black Toner · 3484B002",
    detail: "Fits Canon LBP6030B · approx. 1,600 pages",
    category: "Printer supply",
    group: ["parts", "canon", "laser"],
    badge: "Exact toner model",
    brand: "Canon",
    price: 6840,
    art: "toner",
    image: "https://productimages.hepsiburada.net/s/337/424-600/110000343243288.jpg",
    gallery: [
      { src: "https://productimages.hepsiburada.net/s/337/424-600/110000343243288.jpg", label: "Canon Cartridge 725 toner and box" },
      { src: "https://a.scdn.gr/images/sku_main_images/000304/304319/xlarge_20201012131146_canon_725_black_3484b002.jpeg", label: "Cartridge 725 front and product code" }
    ],
    description: "Canon Cartridge 725, part 3484B002, for the LBP6030B series. Canon quotes an approximate 1,600-page yield; check your device model before ordering."
  },
  ...[
    { slug: "c250i", model: "bizhub C250i", type: "A3 colour", speed: "25 ppm", price: 100000, image: "https://abmltd.co.ke/media/uploads/2026/10/c250i.jpg" },
    { slug: "c300i", model: "bizhub C300i", type: "A3 colour", speed: "30 ppm", price: 110000, image: "https://abmltd.co.ke/media/uploads/2026/10/c300i.jpg" },
    { slug: "c360i", model: "bizhub C360i", type: "A3 colour", speed: "36 ppm", price: 115000, image: "https://abmltd.co.ke/media/uploads/2026/10/c360i.jpg" },
    { slug: "287-mono", model: "bizhub 287", type: "A3 monochrome", speed: "28 ppm", price: 70000, image: "https://abmltd.co.ke/media/uploads/2026/10/bh287.jpg" },
    { slug: "367-mono", model: "bizhub 367", type: "A3 monochrome", speed: "36 ppm", price: 75000, image: "https://abmltd.co.ke/media/uploads/2026/10/bh367.jpg" },
    { slug: "c658", model: "bizhub C658", type: "A3 colour", speed: "65 ppm", price: 140000, image: "https://abmltd.co.ke/media/uploads/2026/10/c658.jpg" },
    { slug: "c554", model: "bizhub C554", type: "A3 colour", speed: "55 ppm", price: 120000, image: "https://abmltd.co.ke/media/uploads/2026/10/c554.jpg" },
    { slug: "c458", model: "bizhub C458", type: "A3 colour", speed: "45 ppm", price: 115000, image: "https://abmltd.co.ke/media/uploads/2026/10/c458.jpg" },
    { slug: "c258", model: "bizhub C258", type: "A3 colour", speed: "25 ppm", price: 80000, image: "https://abmltd.co.ke/media/uploads/2026/10/c258.jpg" },
    { slug: "227-mono", model: "bizhub 227", type: "A3 monochrome", speed: "22 ppm", price: 65000, image: "https://abmltd.co.ke/media/uploads/2026/10/bh227.jpg" },
    { slug: "c3320i", model: "bizhub C3320i", type: "A4 colour", speed: "33 ppm", price: 50000, image: "https://abmltd.co.ke/media/uploads/2026/10/c3320i.jpg" },
    { slug: "c3350i", model: "bizhub C3350i", type: "A4 colour", speed: "33 ppm", price: 55000, image: "https://abmltd.co.ke/media/uploads/2026/10/c3350i.jpg" },
    { slug: "c364", model: "bizhub C364", type: "A3 colour", speed: "36 ppm", price: 95000, image: "https://abmltd.co.ke/media/uploads/2026/10/c364.jpg" },
    { slug: "c224", model: "bizhub C224", type: "A3 colour", speed: "22 ppm", price: 80000, image: "https://abmltd.co.ke/media/uploads/2026/10/c224.jpg" },
    { slug: "c368", model: "bizhub C368", type: "A3 colour", speed: "36 ppm", price: 90000, image: "https://abmltd.co.ke/media/uploads/2026/10/c368.jpg" },
    { slug: "c558", model: "bizhub C558", type: "A3 colour", speed: "55 ppm", price: 120000, image: "https://abmltd.co.ke/media/uploads/2026/10/c558.jpg" },
    { slug: "c308", model: "bizhub C308", type: "A3 colour", speed: "30 ppm", price: 85000, image: "https://abmltd.co.ke/media/uploads/2026/10/c308.jpg" },
    { slug: "c284", model: "bizhub C284", type: "A3 colour", speed: "28 ppm", price: 90000, image: "https://abmltd.co.ke/media/uploads/2026/10/c284.jpg" },
    { slug: "c454", model: "bizhub C454", type: "A3 colour", speed: "45 ppm", price: 115000, image: "https://abmltd.co.ke/media/uploads/2026/10/c454.jpg" },
    { slug: "c227", model: "bizhub C227", type: "A3 colour", speed: "22 ppm", price: 75000, image: "https://abmltd.co.ke/media/uploads/2026/10/c227.jpg" },
    { slug: "c287", model: "bizhub C287", type: "A3 colour", speed: "28 ppm", price: 80000, image: "https://abmltd.co.ke/media/uploads/2026/10/c287.jpg" }
  ].map(machine => ({
    id: `bizhub-${machine.slug}`,
    name: `Konica Minolta ${machine.model}`,
    detail: `${machine.type} · multifunction · ${machine.speed}`,
    category: "Photocopier",
    group: ["copier", "bizhub"],
    badge: "Refurbished · Nairobi listing",
    brand: "Konica Minolta",
    price: machine.price,
    art: "copier",
    image: machine.image,
    gallery: [{ src: machine.image, label: `${machine.model} photocopier product photo` }],
    specs: [machine.type, "Multifunction: print / copy / scan", machine.speed, "Refurbished listing; condition and accessories vary by unit", "Confirm meter count, trays, finisher options, warranty and stock"],
    priceSource: "https://abmltd.co.ke/brands/konica-minolta/",
    description: `Refurbished ${machine.model} listed by a Nairobi copier supplier at KSh ${machine.price.toLocaleString("en-KE")}. Verify machine condition, meter count, configuration, warranty and stock before purchase.`
  }))
];

const videoGuides = [
  {
    id: "jonakid-printer-repair",
    src: "video%20main.mp4",
    title: "Printer repair walkthrough",
    maker: "Jonatech Solutions",
    model: "Printer repairs",
    summary: "Watch a printer repair demonstration from the Jonatech Solutions team."
  },
  {
    id: "m_S88wTaBLw",
    title: "Clean an Epson print head",
    maker: "Epson America",
    model: "Epson inkjet printers",
    summary: "A manufacturer walkthrough for restoring print quality when lines or gaps appear."
  },
  {
    id: "H5Fvt0UAjL8",
    title: "Run EcoTank head cleaning from Windows",
    maker: "Epson America",
    model: "EcoTank ET-8700 · steps vary by model",
    summary: "Use the printer utility to start a print-head cleaning cycle from a Windows computer."
  },
  {
    id: "Z5EXPtdYDI8",
    title: "Remove jammed paper inside a Canon PIXMA",
    maker: "CanonUSA",
    model: "PIXMA MG3520 · model-specific guide",
    summary: "A CanonUSA video showing how to remove a jammed sheet without tearing it."
  }
];

// Indicative Nairobi market ranges (KSh), compiled from local CCTV supplier listings.
// Specialist thermal and ANPR/LPR equipment is quoted after confirming requirements.
const cctvCameraTypes = {
  dome: { label: "Dome", range: [3500, 6500], description: "Discreet fixed camera, commonly used indoors; analog and IP models are available.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: null },
  bullet: { label: "Bullet", range: [4000, 7500], description: "Visible, weather-resistant style for entrances and outdoor perimeters.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: null },
  turret: { label: "Turret", range: [2400, 6500], description: "Adjustable eyeball housing for indoor or outdoor use with reduced IR glare.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: null },
  ptz: { label: "PTZ (pan-tilt-zoom)", range: [36500, 90000], description: "Remote pan, tilt and optical zoom. Estimate assumes a wired network PTZ camera.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: "NVR" },
  ip: { label: "IP / PoE network", range: [6000, 14000], description: "Network camera; PoE wiring and an NVR are recommended.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: "NVR" },
  wifi: { label: "Wireless / Wi-Fi", range: [3500, 15000], description: "Wi-Fi camera; needs a reliable network and compatible recording or cloud plan.", brands: ["EZVIZ", "Imou", "TP-Link Tapo"], recorder: "NVR" },
  fisheye: { label: "Fisheye / 360°", range: [12000, 45000], description: "Wide panoramic network view for open rooms; coverage varies by ceiling height.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: "NVR" },
  infrared: { label: "IR / night vision", range: [3000, 7500], description: "Low-light or night-vision fixed camera; confirm range and illumination needs.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: null },
  thermal: { label: "Thermal imaging", range: null, description: "Specialist heat-detection camera; lens, range and analytics determine price.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: "NVR" },
  anpr: { label: "ANPR / LPR plate recognition", range: null, description: "Specialist vehicle plate camera; pricing depends on lane, distance and analytics.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: "NVR" },
  varifocal: { label: "Varifocal lens", range: [8000, 28000], description: "Adjustable lens for setting the field of view; estimate assumes an IP camera.", brands: ["Hikvision", "Dahua", "Uniview"], recorder: "NVR" }
};

const cctvRecorderPrices = {
  DVR: { 4: [4900, 9500], 8: [7400, 13500], 16: [15500, 26700], 32: [37900, 59000] },
  XVR: { 4: [4800, 9500], 8: [7400, 13500], 16: [15500, 26700], 32: [37900, 59000] },
  NVR: { 4: [8500, 14500], 8: [13500, 20000], 16: [16000, 40000], 32: [21000, 45000], 64: [78000, 85000] }
};

const cctvStoragePrices = { 0: [0, 0], 1: [6500, 9500], 2: [9500, 14000], 4: [16000, 24000] };
let cctvInstallRanges = [
  { max: 4, range: [8000, 18000] },
  { max: 8, range: [15000, 35000] },
  { max: 16, range: [35000, 80000] }
];
let cctvMaterialRates = {
  analog: [1000, 1800],
  network: [1500, 3500],
  wifi: [500, 1500]
};

let laptopChargerPrices = { hpBluePin: [1500, 4500], lenovoUsbC: [2500, 4999] };
let laptopBatteryPrices = { hpCs03xl: [4499, 4499], lenovoT480Internal: [6500, 7500] };
let printerPartPrices = {
  inkBottle: [900, 2200], inkCartridge: [1000, 3000], toner: [4000, 15000], powder: [500, 3000], paper: [500, 1200],
  pickup: [1500, 4000], drum: [4000, 10000], fuser: [5000, 15000], transfer: [4000, 15000], chargeRoller: [1000, 4500],
  waste: [1500, 6000], printhead: [3000, 8000], gears: [1000, 6000], motor: [2000, 8000], scanner: [3000, 6000],
  mainboard: [5000, 12000], power: [3000, 5500], sensor: [1000, 4000], other: [0, 0]
};

const laptopPowerProfiles = [
  {
    match: ["elitebook 840 g3", "hp 840 g3"], brand: "HP", model: "HP EliteBook 840 G3",
    charger: { voltage: "19.5", amps: "3.33", watts: "65", connector: "HP blue pin · 4.5 × 3.0 mm", priceKey: "hpBluePin" },
    battery: { part: "CS03XL / 800513-001", rating: "11.4 V · 46 Wh · 3-cell Li-ion polymer", priceKey: "hpCs03xl" }
  },
  {
    match: ["thinkpad t480", "lenovo t480"], brand: "Lenovo", model: "Lenovo ThinkPad T480",
    charger: { voltage: "20", amps: "3.25", watts: "65", connector: "USB-C Power Delivery", priceKey: "lenovoUsbC" },
    battery: { part: "Internal battery · FRU depends on exact build", rating: "24 Wh · 11.46 V · T480 also has removable external-battery versions", priceKey: "lenovoT480Internal" }
  }
];

const partPhotoExamples = {
  chargerHp: [
    { src: "https://www.itpalacehub.pk/wp-content/uploads/2022/11/65w-blue-04.jpg", label: "HP adapter and blue tip" },
    { src: "https://i.ebayimg.com/images/g/09cAAOSw4PBj4V8W/s-l1200.jpg", label: "Adapter rating label" },
    { src: "https://media.karousell.com/media/photos/products/2022/12/2/well_used_hp_laptop_charger_fo_1669942826_37d7262d_progressive.jpg", label: "Cable and connector pin" }
  ],
  chargerLenovo: [
    { src: "https://assets.kogan.com/images/itreallysucks/IRS-7441829331025/3-5324ead818-type-c-standard-charger-for-lenovo-65w.webp?auto=webp&bg-color=fff&canvas=1200%2C800&dpr=1&enable=upscale&fit=bounds&height=800&quality=90&width=1200", label: "Lenovo 65W USB-C adapter" },
    { src: "https://images.lasoo.com.au/assets/product-additional/1832574/lenovo-thinkpad-E480-c-charger.webp.1986be7370e08026ac41f9010b53096e.webp?quality=75&width=3840", label: "Adapter cable and USB-C tip" },
    { src: "https://m.media-amazon.com/images/I/61YvoIigflL._AC_SL1500_.jpg", label: "USB-C plug close-up" }
  ],
  batteryHp: [
    { src: "https://img.myipadbox.com/upload/store/detail_l/SYA0031637_B3.jpg", label: "HP CS03XL front and back" },
    { src: "https://nairobicomputershop.co.ke/media/cache/19/8c/198c4abe6925ecad44bc67f2f2db05f2.jpg", label: "HP CS03XL battery view" },
    { src: "https://651c328d1de292af2c4b-28651361a0deac968501cb8b290a73fd.ssl.cf1.rackcdn.com/800513-001.jpg", label: "HP battery connector side" }
  ],
  batteryLenovo: [
    { src: "https://www.usadaptersdepot.com/images/Lenovo-01AV421-24Wh.jpg", label: "ThinkPad T480 internal battery" },
    { src: "https://supremenetworks.co.ke/wp-content/uploads/2023/06/Lenovo-ThinkPad-T480-20L5-Series-Internal-Original-Battery-510x242.jpg", label: "T480 battery label / connector view" },
    { src: "https://down-th.img.susercontent.com/file/f4fa4b4093952bcb7666ac2072f82bf3", label: "Lenovo 01AV489 battery pack" }
  ],
  inkBottle: [
    { src: "https://www.imageinfo.in/cdn/shop/files/Epson-Ink-003-black_02-1600x1600.jpg?v=1710511695", label: "Epson 003 genuine black bottle" },
    { src: "https://down-id.img.susercontent.com/file/id-11134208-822wh-mn5lsy9p67er94", label: "Epson 003 CMYK ink bottles" }
  ],
  canonInk: [
    { src: "https://a.scdn.gr/images/sku_main_images/009003/9003827/20211102143010_canon_gi_490bk_black_0663c001.jpeg", label: "Canon GI-490 black bottle · 0663C001AA" },
    { src: "https://backend.electronyat.qa/media/catalog/product/cache/518e522bac1df92102d4b2a1c65a4531/c/a/canon-_gi_490_black_ink_bottle.png", label: "Canon GI-490 bottle label" }
  ],
  canonToner: [
    { src: "https://productimages.hepsiburada.net/s/337/424-600/110000343243288.jpg", label: "Canon Cartridge 725 toner and box · 3484B002AA" },
    { src: "https://a.scdn.gr/images/sku_main_images/000304/304319/xlarge_20201012131146_canon_725_black_3484b002.jpeg", label: "Cartridge 725 front view" }
  ],
  ricohToner: [
    { src: "https://skyrockuae.com/cdn/shop/products/mp2501_4b34a0c5-1325-4ea4-a4f6-414c9157ad03.jpg?v=1589737824", label: "Ricoh MP2501 black toner · 841768" },
    { src: "https://skyrockuae.com/cdn/shop/products/MP2501.jpg?v=1589737824&width=1946", label: "MP2501 toner cartridge label view" }
  ],
  pickup: [
    { src: "https://down-ph.img.susercontent.com/file/f968e0ffab97a9853ba761a61997c878", label: "Epson paper pickup roller assembly" },
    { src: "https://partsbaba.com/cdn/shop/files/Paper_Pickup_Roller_Separation_Pad_For_Epson_L1300_L1800_T1100_B1100_L1390_Printer_1529149-00KD_1Paper_Pickup_Roller_Separation_Pad_For_Epson_L1300_L1800_T1100_B1100_L1390_Printer_1529149-00KD.webp?v=1756296923&width=1946", label: "Roller and separation pad kit" }
  ],
  canonPickup: [
    { src: "https://i.ebayimg.com/images/g/HqUAAOSwtP1lG61e/s-l400.png", label: "Canon RL1-2593-000 pickup roller for LBP6030B" }
  ],
  waste: [
    { src: "https://http2.mlstatic.com/D_Q_NP_2X_704912-MLM79700381102_102024-V.webp", label: "Epson L3210 / L3250 waste ink pad" },
    { src: "https://images.meesho.com/images/products/790096141/cyqjn_512.jpg", label: "Replacement waste ink absorber example" }
  ],
  drum: [
    { src: "https://cpimg.tistatic.com/07845791/b/4/Printer-OPC-Drum-88A.jpg", label: "Example OPC drum unit" },
    { src: "https://www.printerdash.com/cdn/shop/files/CNM0488C003AA_46bc6383-f2f5-4be0-a9d8-04e90d886ef4.jpg?v=1776897383", label: "Canon drum assembly example" }
  ],
  ricohDrum: [
    { src: "https://www.precisionroller.com/img/E4027.lg.jpg", label: "Ricoh MP 2501 drum / PCU unit" },
    { src: "https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lq1c86ige3hx6e", label: "MP2501-compatible drum unit" }
  ],
  fuser: [
    { src: "https://www.slonparts.com/media/catalog/product/cache/1/image/17f82f742ffe127f42dca9de82fb58b1/s/-/s-l1600_10__6.jpg", label: "HP LaserJet fuser assembly example" },
    { src: "https://partsmartcorp.s3.amazonaws.com/2023/product_images/D005WR001_main.JPG", label: "Brother fuser assembly example" }
  ],
  printhead: [
    { src: "https://cpimg.tistatic.com/11230564/b/4/PRINT-HEAD-For-EPSON-LSERIES-L210-L220-L360-L380-L365-L385-L405-L450-L455-L550-L555-L565.jpeg", label: "Epson L-series printhead example" },
    { src: "https://down-ph.img.susercontent.com/file/sg-11134201-824he-mdzrx57i9beve7", label: "Replacement inkjet printhead example" }
  ]
};

const cctvCameraCount = document.getElementById("cctvCount");
const cctvCameraType = document.getElementById("cctvCameraType");
const cctvBrand = document.getElementById("cctvBrand");
const cctvRecorder = document.getElementById("cctvRecorder");
const cctvChannels = document.getElementById("cctvChannels");
const cctvStorage = document.getElementById("cctvStorage");
const cctvIncludeInstall = document.getElementById("cctvIncludeInstall");
const cctvPriceStatus = document.getElementById("cctvPriceStatus");
const productPriceStatus = document.getElementById("productPriceStatus");
let cctvMarketUpdatedAt = "2026-11-02T00:00:00+03:00";
let cctvMarketSource = "built-in Kenya market reference snapshot";
let cctvMarketMode = "snapshot";
let lastCctvPriceCheckAt = 0;

function formatRange(range) {
  return `${formatPrice(range[0])} – ${formatPrice(range[1])}`;
}

function validPriceRange(value) {
  return Array.isArray(value) && value.length === 2 && value.every(amount => Number.isFinite(Number(amount)) && Number(amount) >= 0) && Number(value[0]) <= Number(value[1]);
}

function formatMarketTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "unknown time";
  return new Intl.DateTimeFormat("en-KE", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Nairobi" }).format(date);
}

function setCctvPriceStatus(message) {
  if (cctvPriceStatus) cctvPriceStatus.textContent = message;
}

function applyCctvPriceFeed(feed, fromCache = false) {
  if (!feed || feed.schemaVersion !== 1 || feed.currency !== "KSh" || !feed.prices || !feed.updatedAt || !feed.source) return false;
  const feedDate = new Date(feed.updatedAt);
  if (Number.isNaN(feedDate.getTime())) return false;
  const currentFeedDate = new Date(cctvMarketUpdatedAt);
  if (!fromCache && Number.isFinite(currentFeedDate.getTime()) && feedDate < currentFeedDate) return false;
  let appliedPrices = 0;
  let productPricesApplied = 0;
  const prices = feed.prices;

  Object.entries(prices.cameraTypes || {}).forEach(([key, range]) => {
    if (cctvCameraTypes[key] && validPriceRange(range)) {
      cctvCameraTypes[key].range = range.map(Number);
      appliedPrices += 1;
    }
  });
  Object.entries(prices.recorders || {}).forEach(([recorder, channels]) => {
    if (!cctvRecorderPrices[recorder]) return;
    Object.entries(channels || {}).forEach(([channelCount, range]) => {
      if (cctvRecorderPrices[recorder][channelCount] && validPriceRange(range)) {
        cctvRecorderPrices[recorder][channelCount] = range.map(Number);
        appliedPrices += 1;
      }
    });
  });
  Object.entries(prices.storage || {}).forEach(([size, range]) => {
    if (Object.prototype.hasOwnProperty.call(cctvStoragePrices, size) && validPriceRange(range)) {
      cctvStoragePrices[size] = range.map(Number);
      appliedPrices += 1;
    }
  });
  Object.entries(prices.products || {}).forEach(([id, listing]) => {
    const product = getProduct(id);
    const currentPrice = Number(typeof listing === "object" ? listing.price : listing);
    if (!product || !Number.isFinite(currentPrice) || currentPrice <= 0) return;
    product.price = currentPrice;
    if (typeof listing === "object" && Number.isFinite(Number(listing.originalPrice)) && Number(listing.originalPrice) > currentPrice) {
      product.originalPrice = Number(listing.originalPrice);
    } else {
      delete product.originalPrice;
    }
    appliedPrices += 1;
    productPricesApplied += 1;
  });
  const componentFeeds = [
    [prices.components?.laptopChargers, laptopChargerPrices],
    [prices.components?.laptopBatteries, laptopBatteryPrices],
    [prices.components?.printerParts, printerPartPrices]
  ];
  componentFeeds.forEach(([source, target]) => Object.entries(source || {}).forEach(([key, range]) => {
    if (Object.prototype.hasOwnProperty.call(target, key) && validPriceRange(range)) {
      target[key] = range.map(Number);
      appliedPrices += 1;
    }
  }));
  Object.entries(prices.materialsPerCamera || {}).forEach(([type, range]) => {
    if (Object.prototype.hasOwnProperty.call(cctvMaterialRates, type) && validPriceRange(range)) {
      cctvMaterialRates[type] = range.map(Number);
      appliedPrices += 1;
    }
  });
  if (Array.isArray(prices.installation) && prices.installation.length) {
    const validInstallation = prices.installation.every(item => Number.isFinite(Number(item.max)) && Number(item.max) > 0 && validPriceRange(item.range));
    if (validInstallation) {
      cctvInstallRanges = prices.installation.map(item => ({ max: Number(item.max), range: item.range.map(Number) }));
      appliedPrices += 1;
    }
  }
  if (!appliedPrices) return false;

  cctvMarketUpdatedAt = feed.updatedAt;
  cctvMarketSource = String(feed.source).slice(0, 120);
  cctvMarketMode = feed.mode === "live" ? "live" : "snapshot";
  if (productPriceStatus) productPriceStatus.textContent = `${cctvMarketMode === "live" ? "Supplier price feed" : "Kenya market guide"} · ${formatMarketTime(cctvMarketUpdatedAt)}`;
  setCctvPriceStatus(fromCache
    ? `Saved ${cctvMarketMode === "live" ? "supplier feed" : "reference snapshot"} from ${cctvMarketSource}, dated ${formatMarketTime(cctvMarketUpdatedAt)}. Checking online for newer prices…`
    : cctvMarketMode === "live"
      ? `Live supplier prices received from ${cctvMarketSource}, updated ${formatMarketTime(cctvMarketUpdatedAt)}. Products, parts and CCTV estimates will check again in 6 hours.`
      : `Reference snapshot from ${cctvMarketSource}, dated ${formatMarketTime(cctvMarketUpdatedAt)}. Product, part and CCTV prices refresh when a supplier-backed feed publishes new prices.`);
  if (productPriceStatus && productPricesApplied === 0 && cctvMarketMode !== "live") productPriceStatus.textContent = `Kenya market reference · ${formatMarketTime(cctvMarketUpdatedAt)}`;
  window.setTimeout(() => { renderProducts(); renderCart(); updateLaptopPartQuote(); updatePrinterPartQuote(); }, 0);
  if (cctvCameraCount) refreshCctvQuote();
  return true;
}

function restoreCachedCctvPriceFeed() {
  try {
    const cachedFeed = JSON.parse(localStorage.getItem(CCTV_MARKET_PRICE_CACHE_KEY) || "null");
    if (cachedFeed) applyCctvPriceFeed(cachedFeed, true);
  } catch { /* Keep the built-in reference prices if browser storage is unavailable. */ }
}

async function refreshCctvMarketPrices() {
  lastCctvPriceCheckAt = Date.now();
  try {
    const feedUrl = new URL(CCTV_MARKET_PRICE_FEED_URL, document.baseURI);
    feedUrl.searchParams.set("_", String(lastCctvPriceCheckAt));
    const response = await fetch(feedUrl, { cache: "no-store", headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`Price feed returned ${response.status}`);
    const feed = await response.json();
    if (!applyCctvPriceFeed(feed)) throw new Error("Price feed format was not recognized");
    try { localStorage.setItem(CCTV_MARKET_PRICE_CACHE_KEY, JSON.stringify(feed)); } catch { /* Fresh online prices still work without local storage. */ }
  } catch {
    setCctvPriceStatus(cctvMarketMode === "live"
      ? `Live price feed unavailable. Using saved prices from ${cctvMarketSource} (${formatMarketTime(cctvMarketUpdatedAt)}); product prices and the CCTV quote will refresh when the feed is online.`
      : `Supplier price feed unavailable. Using the Kenya market reference snapshot from ${formatMarketTime(cctvMarketUpdatedAt)}. Connect a supplier feed for automatic market price changes.`);
  }
}

function chosenCameraType() {
  return cctvCameraTypes[cctvCameraType.value] || cctvCameraTypes.bullet;
}

function populateCameraBrands() {
  const type = chosenCameraType();
  const previousBrand = cctvBrand.value;
  cctvBrand.innerHTML = type.brands.map(brand => `<option value="${escapeHtml(brand)}">${escapeHtml(brand)}</option>`).join("");
  if (type.brands.includes(previousBrand)) cctvBrand.value = previousBrand;
}

function updateRecorderOptions() {
  const requiredType = chosenCameraType().recorder;
  const previousType = cctvRecorder.value;
  cctvRecorder.innerHTML = ["DVR", "XVR", "NVR"].map(type => {
    const names = { DVR: "DVR · analog", XVR: "XVR · hybrid", NVR: "NVR · IP network" };
    return `<option value="${type}" ${requiredType && requiredType !== type ? "disabled" : ""}>${names[type]}</option>`;
  }).join("");
  const allowedPrevious = cctvRecorderPrices[previousType] && (!requiredType || previousType === requiredType);
  cctvRecorder.value = allowedPrevious ? previousType : (requiredType || "XVR");
  cctvRecorder.disabled = false;
}

function chooseRecorderCapacity(cameraCount) {
  if (cameraCount > 32 || Number(cctvChannels.value) === 64) cctvRecorder.value = "NVR";
  const choices = Object.keys(cctvRecorderPrices[cctvRecorder.value]).map(Number).filter(value => value >= cameraCount);
  const previousCapacity = Number(cctvChannels.value);
  const selectedCapacity = choices.includes(previousCapacity) ? previousCapacity : choices[0];
  cctvChannels.innerHTML = choices.map(value => {
    const channelLabel = `${value} channels${value === 64 ? " · NVR" : ""}`;
    return `<option value="${value}">${channelLabel} · ${formatRange(cctvRecorderPrices[cctvRecorder.value][value])}</option>`;
  }).join("");
  cctvChannels.value = String(selectedCapacity);
}

function refreshCctvQuote() {
  if (!cctvCameraCount) return;
  const count = Math.min(64, Math.max(1, Math.floor(Number(cctvCameraCount.value) || 1)));
  cctvCameraCount.value = String(count);
  populateCameraBrands();
  updateRecorderOptions();
  chooseRecorderCapacity(count);

  const type = chosenCameraType();
  const recorderType = cctvRecorder.value;
  const channels = Number(cctvChannels.value);
  const storageSize = Number(cctvStorage.value);
  const cameraRange = type.range ? [type.range[0] * count, type.range[1] * count] : null;
  const recorderRange = cctvRecorderPrices[recorderType]?.[channels] || cctvRecorderPrices.NVR[channels];
  const storageRange = cctvStoragePrices[storageSize] || [0, 0];
  const materialRate = cctvCameraType.value === "wifi" ? cctvMaterialRates.wifi : recorderType === "NVR" ? cctvMaterialRates.network : cctvMaterialRates.analog;
  const materialRange = [materialRate[0] * count, materialRate[1] * count];
  const installEntry = cctvInstallRanges.find(entry => count <= entry.max);
  const installRange = cctvIncludeInstall.checked ? (installEntry?.range || null) : [0, 0];
  const fixedLow = recorderRange[0] + storageRange[0] + materialRange[0] + (installRange?.[0] || 0);
  const fixedHigh = recorderRange[1] + storageRange[1] + materialRange[1] + (installRange?.[1] || 0);

  document.getElementById("cctvCameraDescription").textContent = type.description;
  document.getElementById("cctvRecorderDescription").textContent = recorderType === "DVR" ? "Analog camera recorder; selected styles may require an XVR or IP NVR instead." : recorderType === "XVR" ? "Hybrid recorder for compatible analog HD cameras; final camera signal must match." : "Network recorder for IP cameras; 64-channel price is based on local Uniview NVR listings.";
  document.getElementById("cctvCompatibilityNote").textContent = `${type.label} · ${cctvBrand.value} · ${recorderType} ${channels}-channel system. ${count > channels ? "Select a larger recorder." : "Camera signal and recorder must be compatible; final model confirmed before supply."}`;
  document.getElementById("cctvCameraLineLabel").textContent = `${count} × ${type.label} cameras`;
  document.getElementById("cctvCameraSubtotal").textContent = cameraRange ? formatRange(cameraRange) : "Custom quote";
  document.getElementById("cctvRecorderLineLabel").textContent = `${channels}-channel ${recorderType}`;
  document.getElementById("cctvRecorderSubtotal").textContent = formatRange(recorderRange);
  document.getElementById("cctvStorageLineLabel").textContent = storageSize ? `${storageSize} TB surveillance drive` : "Surveillance drive not included";
  document.getElementById("cctvStorageSubtotal").textContent = storageSize ? formatRange(storageRange) : "—";
  document.getElementById("cctvMaterialLineLabel").textContent = cctvCameraType.value === "wifi" ? "Power & mounting accessories" : recorderType === "NVR" ? "Network cable & connectors" : "CCTV cable, power & connectors";
  document.getElementById("cctvMaterialSubtotal").textContent = formatRange(materialRange);
  document.getElementById("cctvInstallLineLabel").textContent = cctvIncludeInstall.checked ? (count > 16 ? "Installation · site survey required" : "Nairobi installation estimate") : "Installation not included";
  document.getElementById("cctvInstallSubtotal").textContent = !cctvIncludeInstall.checked ? "—" : installRange ? formatRange(installRange) : "Site survey";
  document.getElementById("cctvTotal").textContent = cameraRange ? formatRange([cameraRange[0] + fixedLow, cameraRange[1] + fixedHigh]) : `Camera price on request + ${formatRange([fixedLow, fixedHigh])}`;
  document.getElementById("cctvEstimateNote").textContent = `${cameraRange ? "Indicative only;" : "Camera price is custom quoted;"} material allowance covers basic cable/power/connectors only. Long cable runs, trunking, monitor, poles, VAT and special site work are confirmed in the final quote. ${count > 16 && cctvIncludeInstall.checked ? "Installation for more than 16 cameras requires a site survey." : ""}`;
}

function requestCctvQuote() {
  const count = Number(cctvCameraCount.value);
  const type = chosenCameraType();
  const channels = Number(cctvChannels.value);
  const recorderType = cctvRecorder.value;
  const cameraRange = type.range ? formatRange([type.range[0] * count, type.range[1] * count]) : "custom quote required";
  const recorderRange = cctvRecorderPrices[recorderType]?.[channels] || cctvRecorderPrices.NVR[channels];
  const storageSize = Number(cctvStorage.value);
  const materialRate = cctvCameraType.value === "wifi" ? cctvMaterialRates.wifi : recorderType === "NVR" ? cctvMaterialRates.network : cctvMaterialRates.analog;
  const materialRange = [materialRate[0] * count, materialRate[1] * count];
  const installEntry = cctvInstallRanges.find(entry => count <= entry.max);
  const installRange = !cctvIncludeInstall.checked ? "not included" : installEntry ? formatRange(installEntry.range) : "site survey required";
  const message = [
    "Hi Jonatech Solutions, please prepare a CCTV installation quote:",
    `Cameras: ${count} × ${type.label} (${type.description})`,
    `Preferred camera brand: ${cctvBrand.value}`,
    `Recorder: ${channels}-channel ${recorderType} (${formatRange(recorderRange)})`,
    `Camera estimate: ${cameraRange}`,
    `Storage: ${storageSize ? `${storageSize} TB (${formatRange(cctvStoragePrices[storageSize])})` : "not included"}`,
    `Basic cable/power/connectors allowance: ${formatRange(materialRange)}`,
    `Nairobi installation: ${installRange}`,
    `On-page indicative total: ${document.getElementById("cctvTotal").textContent}`,
    "Please confirm exact models, availability, compatibility, cabling, VAT and final installation price. My site/area is:"
  ].join("\n");
  openWhatsApp(message);
}

if (cctvCameraCount) {
  cctvCameraType.innerHTML = Object.entries(cctvCameraTypes).map(([key, type]) => `<option value="${key}">${escapeHtml(type.label)}${type.range ? ` · ${formatRange(type.range)} each` : " · custom quote"}</option>`).join("");
  cctvCameraType.value = "bullet";
  restoreCachedCctvPriceFeed();
  document.querySelectorAll("[data-camera-step]").forEach(button => button.addEventListener("click", () => {
    cctvCameraCount.value = String(Math.min(64, Math.max(1, Number(cctvCameraCount.value) + Number(button.dataset.cameraStep))));
    refreshCctvQuote();
  }));
  [cctvCameraCount, cctvCameraType, cctvBrand, cctvRecorder, cctvChannels, cctvStorage, cctvIncludeInstall].forEach(control => control.addEventListener("input", refreshCctvQuote));
  document.getElementById("cctvWhatsApp").addEventListener("click", requestCctvQuote);
  refreshCctvQuote();
  refreshCctvMarketPrices();
  window.setInterval(() => {
    if (document.visibilityState === "visible") refreshCctvMarketPrices();
  }, CCTV_MARKET_PRICE_REFRESH_MS);
  window.addEventListener("online", refreshCctvMarketPrices);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && Date.now() - lastCctvPriceCheckAt > CCTV_MARKET_PRICE_REFRESH_MS) refreshCctvMarketPrices();
  });
}

function findLaptopPowerProfile(modelValue) {
  const model = String(modelValue || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  return laptopPowerProfiles.find(profile => profile.match.some(match => model.includes(match)));
}

function renderPartsGallery(containerId, views, emptyMessage) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = views?.length ? views.map(view => `<button type="button" class="parts-photo-button" data-part-image="${escapeHtml(view.src)}" data-part-caption="${escapeHtml(view.label)}"><img src="${escapeHtml(view.src)}" alt="${escapeHtml(view.label)}" loading="lazy"><span>${escapeHtml(view.label)} · tap to enlarge</span></button>`).join("") : `<div class="parts-photo-empty">${escapeHtml(emptyMessage)}</div>`;
}

function openPartPhoto(src, caption) {
  zoomContent.innerHTML = `<div class="part-photo-zoom"><h2 id="zoomTitle">${escapeHtml(caption)}</h2><img id="partZoomImage" src="${escapeHtml(src)}" alt="${escapeHtml(caption)}"></div>`;
  zoomDialog.showModal();
  document.getElementById("partZoomImage").addEventListener("click", event => event.currentTarget.classList.toggle("is-magnified"));
}

function updateLaptopPartQuote() {
  const model = document.getElementById("laptopPartModel");
  if (!model) return;
  const modelText = model.value.trim();
  const partType = document.getElementById("laptopPartType").value;
  const foundProfile = findLaptopPowerProfile(modelText);
  const profile = foundProfile && foundProfile.brand === document.getElementById("laptopPartBrand").value ? foundProfile : null;
  const style = document.getElementById("laptopPartStyle");
  const voltage = document.getElementById("adapterVoltage");
  const current = document.getElementById("adapterCurrent");
  const note = document.getElementById("laptopPartMatch");
  const estimate = document.getElementById("laptopPartEstimate");
  let gallery = [];
  if (!profile) {
    if (partType === "charger") { voltage.value = ""; current.value = ""; }
    note.textContent = modelText ? "No verified voltage, amperage, pin or part-code match for this exact model yet. Read the adapter output label or battery code; send a photo in WhatsApp for confirmation." : "Enter the full laptop model. We only fill exact ratings when the model match is verified.";
    estimate.textContent = "Exact model quote required";
    renderPartsGallery("laptopPartGallery", [], "Add a recognized laptop model to see matching reference photos. For other models, send us the label or connector photo on WhatsApp.");
    return;
  }
  if (partType === "battery" && style.value === "External / removable battery") {
    note.textContent = `${profile.model}: this choice does not match the verified battery profile shown here. Send the exact battery FRU / part number and a photo so we can quote the correct pack.`;
    estimate.textContent = "Exact battery part number required";
    renderPartsGallery("laptopPartGallery", [], "We need the battery label / connector photo before showing a matching battery example.");
    return;
  }
  if (partType === "charger") {
    const item = profile.charger;
    const normalizedSelection = style.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const normalizedConnector = item.connector.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (style.value !== "auto" && normalizedSelection !== normalizedConnector && style.value !== "Not sure - please identify it") {
      voltage.value = item.voltage;
      current.value = item.amps;
      note.textContent = `${profile.model} is verified for ${item.connector}, but the connector selected here is different. Ask us to check the exact sub-model and plug before ordering.`;
      estimate.textContent = "Connector compatibility check required";
      gallery = profile.brand === "HP" ? partPhotoExamples.chargerHp : partPhotoExamples.chargerLenovo;
      renderPartsGallery("laptopPartGallery", gallery, "Send a photo of the adapter tip if the connector does not match.");
      return;
    }
    voltage.value = item.voltage;
    current.value = item.amps;
    note.textContent = `${profile.model}: ${item.voltage} V × ${item.amps} A = ${item.watts} W. Connector: ${item.connector}. Match the connector and laptop sub-model before purchase.`;
    const range = laptopChargerPrices[item.priceKey];
    estimate.textContent = range ? formatRange(range) : "Supplier quote required";
    gallery = profile.brand === "HP" ? partPhotoExamples.chargerHp : partPhotoExamples.chargerLenovo;
  } else {
    const item = profile.battery;
    voltage.value = "";
    current.value = "";
    note.textContent = `${profile.model}: reference battery ${item.part}; ${item.rating}. Check the battery FRU / part number on the original pack because multiple versions exist.`;
    const range = laptopBatteryPrices[item.priceKey];
    estimate.textContent = range ? `${formatRange(range)}${item.priceKey === "lenovoT480Internal" ? " + supplier VAT may apply" : ""}` : "Supplier quote required";
    gallery = profile.brand === "HP" ? partPhotoExamples.batteryHp : partPhotoExamples.batteryLenovo;
  }
  renderPartsGallery("laptopPartGallery", gallery, "No verified photo for this exact part yet; send the part label and connector photo in WhatsApp.");
}

function updatePrinterPartQuote() {
  const model = document.getElementById("printerModel");
  if (!model) return;
  const brand = document.getElementById("printerBrand").value;
  const printerModel = model.value.trim();
  const part = document.getElementById("printerPartType").value;
  const quantity = Math.min(99, Math.max(1, Math.floor(Number(document.getElementById("printerPartQuantity").value) || 1)));
  document.getElementById("printerPartQuantity").value = String(quantity);
  const range = printerPartPrices[part];
  const descriptionByPart = {
    inkBottle: "Confirm the ink code and colour against the printer or current bottle.",
    inkCartridge: "Cartridges are model and colour specific; provide the cartridge code if available.",
    toner: "Confirm the cartridge number; drum and toner designs differ by laser model.",
    powder: "Confirm whether you need toner refill powder or developer powder and the machine type.",
    pickup: "Paper-feed roller and separation-pad shapes are model specific.",
    drum: "Confirm drum part code and whether the model uses an all-in-one toner/drum cartridge.",
    fuser: "Fusers and sleeves are matched to engine and voltage; send the machine model / part number.",
    transfer: "Confirm printer or copier model and transfer-unit code.",
    waste: "Share maintenance-box or waste-toner-box code before ordering.",
    printhead: "Printheads depend on printer family and colour layout; we verify by model.",
    scanner: "Scanner and ADF parts are model specific; send an error or part photo.",
    mainboard: "Board versions and firmware vary; ask us to inspect the exact model and board label."
  };
  document.getElementById("printerPartMatch").textContent = printerModel ? `${brand} ${printerModel}: ${descriptionByPart[part] || "Confirm the exact service part number and compatibility before ordering."}` : `Enter the exact ${brand} printer model to check compatibility and the right ink, toner or spare-part code.`;
  document.getElementById("printerPartEstimate").textContent = range && (range[0] || range[1]) ? `${formatRange([range[0] * quantity, range[1] * quantity])} · ${formatRange(range)} each` : "Quote after identifying the part";
  const modelKey = printerModel.toLowerCase().replace(/\s+/g, "");
  let photoKey = ["fuser", "printhead", "drum"].includes(part) ? part : null;
  if (part === "toner" && brand === "Ricoh" && /mp.?2501/.test(modelKey)) photoKey = "ricohToner";
  if (part === "toner" && brand === "Canon" && /lbp6030/.test(modelKey)) photoKey = "canonToner";
  if (part === "inkBottle" && brand === "Epson" && /l3210|l3250/.test(modelKey)) photoKey = "inkBottle";
  if (part === "inkBottle" && brand === "Canon" && /g3410|g3400|g2411/.test(modelKey)) photoKey = "canonInk";
  if (part === "pickup" && brand === "Canon" && /lbp6030/.test(modelKey)) photoKey = "canonPickup";
  if (part === "pickup" && brand === "Epson" && /l1300|l1800|t1100|b1100|l1390/.test(modelKey)) photoKey = "pickup";
  if (part === "drum" && brand === "Ricoh" && /mp.?2501/.test(modelKey)) photoKey = "ricohDrum";
  if (part === "waste" && brand === "Epson" && /l3210|l3250/.test(modelKey)) photoKey = "waste";
  renderPartsGallery("printerPartGallery", photoKey ? partPhotoExamples[photoKey] : [], photoKey ? "No image for this selected part." : "Example images are available for common inks, toner, feed rollers, drums, fusers and printheads. Other parts are quoted against the printer model and part code.");
}

function requestLaptopPartQuote() {
  const brand = document.getElementById("laptopPartBrand").value;
  const model = document.getElementById("laptopPartModel").value.trim();
  if (!model) { document.getElementById("laptopPartModel").focus(); return; }
  const kind = document.getElementById("laptopPartType").value;
  const foundProfile = findLaptopPowerProfile(model);
  const profile = foundProfile && foundProfile.brand === brand ? foundProfile : null;
  const isCharger = kind === "charger";
  const selectedStyle = document.getElementById("laptopPartStyle").value;
  const connector = selectedStyle === "auto" && profile && isCharger ? profile.charger.connector : selectedStyle;
  const specification = isCharger
    ? `Adapter output: ${document.getElementById("adapterVoltage").value || "please verify from label"} V · ${document.getElementById("adapterCurrent").value || "please verify from label"} A. Connector: ${connector}.`
    : `Battery/part reference: ${profile?.battery.part || "please identify from the battery label"}.`;
  const price = document.getElementById("laptopPartEstimate").textContent;
  openWhatsApp(["Hi Jonatech Solutions, please identify and quote a laptop part:", `Brand: ${brand}`, `Laptop model: ${model}`, `Part: ${isCharger ? "Charger / AC adapter" : "Battery"}`, specification, `Preference: ${document.getElementById("laptopPartQuality").value}`, `On-page Kenya market estimate: ${price}`, "Please confirm exact part number, connector / battery fit, stock, warranty and final price. I can send a photo of the laptop label or old part here."].join("\n"));
}

function requestPrinterPartQuote() {
  const brand = document.getElementById("printerBrand").value;
  const model = document.getElementById("printerModel").value.trim();
  if (!model) { document.getElementById("printerModel").focus(); return; }
  const partSelect = document.getElementById("printerPartType");
  const quantity = Number(document.getElementById("printerPartQuantity").value);
  const price = document.getElementById("printerPartEstimate").textContent;
  openWhatsApp(["Hi Jonatech Solutions, please quote a printer spare / supply:", `Printer type: ${document.getElementById("printerType").value}`, `Make and exact model: ${brand} ${model}`, `Part needed: ${partSelect.selectedOptions[0].text}`, `Quantity: ${quantity}`, `Preference: ${document.getElementById("printerPartQuality").value}`, `On-page Kenya market estimate: ${price}`, "Please confirm the exact OEM / compatible part code, model fit, stock, VAT and final price. I can attach a photo of the printer rating plate or the old part here."].join("\n"));
}

document.getElementById("laptopPartBrand").addEventListener("change", updateLaptopPartQuote);
document.getElementById("laptopPartModel").addEventListener("input", updateLaptopPartQuote);
document.getElementById("laptopPartType").addEventListener("change", updateLaptopPartQuote);
document.getElementById("laptopPartStyle").addEventListener("change", updateLaptopPartQuote);
document.getElementById("laptopPartWhatsApp").addEventListener("click", requestLaptopPartQuote);
document.getElementById("printerModel").addEventListener("input", updatePrinterPartQuote);
["printerType", "printerBrand", "printerPartType", "printerPartQuality", "printerPartQuantity"].forEach(id => document.getElementById(id).addEventListener("input", updatePrinterPartQuote));
document.getElementById("printerPartWhatsApp").addEventListener("click", requestPrinterPartQuote);
document.addEventListener("click", event => {
  const photoButton = event.target.closest("[data-part-image]");
  if (photoButton) openPartPhoto(photoButton.dataset.partImage, photoButton.dataset.partCaption);
});

const productGrid = document.getElementById("productGrid");
const filterList = document.getElementById("filterList");
const searchInput = document.getElementById("productSearch");
const resultsLabel = document.getElementById("resultsLabel");
const emptyState = document.getElementById("emptyState");
const cartDialog = document.getElementById("cartDialog");
const cartBody = document.getElementById("cartBody");
const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");
const zoomDialog = document.getElementById("zoomDialog");
const zoomContent = document.getElementById("zoomContent");
const videoGrid = document.getElementById("videoGrid");
const videoDialog = document.getElementById("videoDialog");
const videoContent = document.getElementById("videoContent");
const toast = document.getElementById("toast");
const testimonialForm = document.getElementById("testimonialForm");
const testimonialList = document.getElementById("testimonialList");
const testimonialEmpty = document.getElementById("testimonialEmpty");
const testimonialStatus = document.getElementById("testimonialStatus");
let activeFilter = "all";
let cardQuantities = {};
let toastTimeout;
let cart = readCart();

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("jonakid-cart") || "[]");
    return Array.isArray(saved) ? saved.filter(item => products.some(product => product.id === item.id) && Number(item.qty) > 0).map(item => ({ id: item.id, qty: Math.min(99, Math.floor(Number(item.qty))) })) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try { localStorage.setItem("jonakid-cart", JSON.stringify(cart)); } catch { /* Keep the cart usable if storage is disabled. */ }
}

function formatPrice(value) {
  return `KSh ${Number(value).toLocaleString("en-KE")}`;
}

function getProduct(id) {
  return products.find(product => product.id === id);
}

function productSvg(product) {
  const id = `art-${product.id}`;
  const common = `<svg class="product-art" viewBox="0 0 500 300" role="img" aria-label="Illustration of ${escapeHtml(product.name)}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${id}-device" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f8faf5"/><stop offset="1" stop-color="#98aaa0"/></linearGradient><linearGradient id="${id}-screen" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#385b50"/><stop offset="1" stop-color="#142b26"/></linearGradient></defs><circle cx="390" cy="63" r="80" fill="#fff" fill-opacity=".28"/><circle cx="92" cy="258" r="105" fill="#d9f36a" fill-opacity=".14"/><path d="M0 239c90-30 166-28 250 5s167 38 250 2v54H0z" fill="#fff" fill-opacity=".17"/>${artwork(product, id)}</svg>`;
  return common;
}

function productVisual(product) {
  const image = product.gallery?.[0]?.src || product.image;
  if (!image) return productSvg(product);
  return `<img class="real-product-image" src="${escapeHtml(image)}" alt="${escapeHtml(product.name)} product photo" loading="lazy"><div class="product-art-fallback" hidden>${productSvg(product)}</div>`;
}

function artwork(product, id) {
  switch (product.art) {
    case "epson":
    case "canon":
    case "laser":
      return `<ellipse cx="246" cy="251" rx="138" ry="18" fill="#122320" fill-opacity=".12"/><path d="M172 82h144v85H172z" fill="#e9eee7" stroke="#8b9c90" stroke-width="3"/><path d="M195 96h98v58h-98z" fill="#fffefa"/><path d="M214 109h57m-57 12h73m-73 12h50" stroke="#bdc7be" stroke-width="4" stroke-linecap="round"/><path d="M117 161c0-13 11-24 24-24h213c14 0 26 12 26 26v57H117z" fill="url(#${id}-device)" stroke="#83968a" stroke-width="3"/><path d="M143 172h212c14 0 25 11 25 25v40H117v-40c0-14 11-25 26-25Z" fill="#bcc9bf"/><path d="M154 191h203v15H154z" fill="#293f37"/><path d="M182 221h146v24H182z" fill="#edf1eb" stroke="#a8b6aa" stroke-width="2"/><rect x="317" y="153" width="34" height="22" rx="5" fill="#2b4037"/><circle cx="328" cy="164" r="4" fill="#d9f36a"/><circle cx="341" cy="164" r="3" fill="#e49772"/><path d="M151 227v17m208-17v17" stroke="#617469" stroke-width="5" stroke-linecap="round"/><path d="M129 228h25v17h-25zm202 0h25v17h-25z" fill="#5c6e64"/>${product.art === "canon" ? `<path d="M159 238h24v5h-24zm28 0h24v5h-24z" fill="#e58265"/>` : product.art === "laser" ? `<path d="M189 221h136v6H189z" fill="#303c37"/>` : `<path d="M196 228h47v7h-47zm54 0h47v7h-47z" fill="#527c63"/>`}`;
    case "copier":
      return `<ellipse cx="256" cy="257" rx="140" ry="17" fill="#122320" fill-opacity=".13"/><path d="M176 64h132v42H176z" fill="#f6f7f2" stroke="#91a096" stroke-width="3"/><path d="M196 76h91v18h-91z" fill="#dbe2d9"/><path d="m186 56 32-22h109l-32 30z" fill="#f9faf6" stroke="#91a096" stroke-width="3"/><path d="m327 64 28 13v136l-28-13z" fill="#8c9c92"/><path d="M139 105h188v143H139z" fill="url(#${id}-device)" stroke="#829489" stroke-width="3"/><path d="M162 124h91v47h-91z" fill="#cbd4cb"/><path d="M162 134h72m-72 10h61m-61 10h50" stroke="#eff2ec" stroke-width="4" stroke-linecap="round"/><path d="M267 118h39v18h-39z" rx="3" fill="#2f453c"/><circle cx="278" cy="127" r="3" fill="#d9f36a"/><circle cx="289" cy="127" r="3" fill="#9fc5de"/><path d="M165 185h141v26H165z" fill="#2b3e36"/><path d="M181 212h112v25H181z" fill="#f3f5ef" stroke="#a7b3a9" stroke-width="2"/><path d="M169 249v12m125-12v12" stroke="#5a6d62" stroke-width="7" stroke-linecap="round"/><path d="M160 238h147" stroke="#6d8075" stroke-width="3"/>`;
    case "computer":
      return `<ellipse cx="251" cy="251" rx="146" ry="17" fill="#122320" fill-opacity=".12"/><path d="M86 57q0-10 10-10h225q10 0 10 10v143H86z" fill="#354940" stroke="#6d8175" stroke-width="4"/><path d="M102 68h213v116H102z" fill="url(#${id}-screen)"/><path d="M184 201h50l9 29h-69z" fill="#8b9c91"/><path d="M150 230h117l18 13H132z" fill="#ccd5cc" stroke="#75877c" stroke-width="3"/><path d="M355 103h71q8 0 8 8v134h-87V111q0-8 8-8Z" fill="url(#${id}-device)" stroke="#788b7f" stroke-width="3"/><path d="M360 126h50m-50 8h50m-50 8h50" stroke="#61776b" stroke-width="4"/><circle cx="400" cy="218" r="4" fill="#d9f36a"/>`;
    case "laptop":
      return `<ellipse cx="250" cy="248" rx="142" ry="16" fill="#122320" fill-opacity=".14"/><path d="M143 69c0-8 7-15 15-15h183c8 0 15 7 15 15v132H143z" fill="#aebdb3" stroke="#6f8277" stroke-width="4"/><path d="M157 71h185v113H157z" fill="url(#${id}-screen)"/><circle cx="249" cy="65" r="2" fill="#687c70"/><circle cx="248" cy="127" r="47" fill="none" stroke="#b3d483" stroke-opacity=".34"/><circle cx="248" cy="127" r="31" fill="none" stroke="#d9f36a" stroke-opacity=".7"/><path d="M248 103v48m-24-24h48" stroke="#d9f36a" stroke-opacity=".52" stroke-width="2"/><text x="248" y="136" fill="#d9f36a" font-family="Arial,sans-serif" font-size="29" font-weight="700" text-anchor="middle">J</text><path d="m117 200 265 0 31 25c4 4 2 9-6 9H111c-9 0-11-5-6-10z" fill="#dce3dc" stroke="#788b7f" stroke-width="3"/><path d="M196 205h104l7 6h-118z" fill="#8b9d91"/><path d="m143 199 200 0" stroke="#83958a" stroke-width="2"/>`;
    case "ink":
      return `<ellipse cx="251" cy="244" rx="125" ry="16" fill="#122320" fill-opacity=".12"/><g transform="translate(120 66)"><path d="M23 48V19l15-12h47l15 12v29l9 12v113H14V60z" fill="#273b34"/><path d="M38 9v41h47V9" fill="#d9f36a"/><path d="M43 69h38v81H43z" fill="#f7f8f3"/><path d="M51 84h21m-21 10h21" stroke="#9eaaa0" stroke-width="4" stroke-linecap="round"/><path d="M53 169h26" stroke="#f7f8f3" stroke-width="3"/><circle cx="61" cy="41" r="4" fill="#fbfcf8"/></g><g transform="translate(227 73)"><path d="M23 48V19l15-12h47l15 12v29l9 12v113H14V60z" fill="#f1f3ee" stroke="#a3afa5" stroke-width="2"/><path d="M38 9v41h47V9" fill="#416b5e"/><path d="M43 69h38v81H43z" fill="#dbe3dc"/><path d="M51 84h21m-21 10h21" stroke="#96a49a" stroke-width="4" stroke-linecap="round"/><path d="M53 169h26" stroke="#f7f8f3" stroke-width="3"/></g><g transform="translate(327 86)"><path d="M23 48V19l15-12h47l15 12v29l9 12v100H14V60z" fill="#e6a280"/><path d="M38 9v41h47V9" fill="#e9ad90"/><path d="M43 69h38v68H43z" fill="#fff4eb"/><path d="M52 85h21m-21 10h21" stroke="#bc8b72" stroke-width="4" stroke-linecap="round"/></g>`;
    case "toner":
      return `<ellipse cx="252" cy="245" rx="136" ry="17" fill="#122320" fill-opacity=".12"/><g transform="translate(103 82)"><path d="M45 23h198l22 23v104l-25 19H42l-21-19V52z" fill="#2d4037" stroke="#172a24" stroke-width="4"/><path d="M44 35h193v37H44z" fill="#506259"/><path d="M44 72h193v72H44z" fill="#354a40"/><path d="M65 45h116" stroke="#a9b8ad" stroke-width="4" stroke-linecap="round"/><path d="M63 92h62v35H63z" fill="#d9f36a"/><path d="M135 92h20v35h-20z" fill="#a9c6b3"/><circle cx="226" cy="96" r="9" fill="#0f211c"/><path d="M242 160v15m-185-15v15" stroke="#6b7c71" stroke-width="7" stroke-linecap="round"/><path d="M82 85h18" stroke="#fff" stroke-opacity=".58" stroke-width="3"/></g>`;
    case "memory":
      return `<ellipse cx="252" cy="244" rx="124" ry="15" fill="#122320" fill-opacity=".12"/><g transform="rotate(-11 250 150)"><rect x="121" y="111" width="258" height="83" rx="8" fill="#283c34"/><rect x="139" y="128" width="216" height="49" rx="4" fill="#416355"/><g fill="#172b24"><rect x="151" y="135" width="27" height="34" rx="3"/><rect x="185" y="135" width="27" height="34" rx="3"/><rect x="219" y="135" width="27" height="34" rx="3"/><rect x="253" y="135" width="27" height="34" rx="3"/><rect x="287" y="135" width="27" height="34" rx="3"/></g><path d="M133 195h234v18h-234z" fill="#d9bf6b"/><path d="M151 196v17m17-17v17m17-17v17m17-17v17m17-17v17m17-17v17m17-17v17m17-17v17m17-17v17m17-17v17" stroke="#856d32" stroke-width="2"/></g><text x="246" y="158" fill="#eff5ec" font-family="Arial,sans-serif" font-size="13" font-weight="700" text-anchor="middle">8GB DDR4</text>`;
    case "battery":
      return `<ellipse cx="250" cy="244" rx="123" ry="16" fill="#122320" fill-opacity=".12"/><g transform="rotate(-7 250 150)"><rect x="111" y="97" width="279" height="106" rx="12" fill="#1f312a"/><rect x="127" y="112" width="246" height="76" rx="6" fill="#293d35" stroke="#66796d" stroke-width="2"/><path d="M390 128h13v45h-13" fill="#73867b"/><rect x="155" y="132" width="136" height="33" rx="5" fill="#d9f36a"/><text x="223" y="153" fill="#263b31" font-family="Arial,sans-serif" font-size="14" font-weight="700" text-anchor="middle">REPLACEMENT</text><path d="M311 132h42v8h-42zm0 15h42v8h-42z" fill="#82938a"/><path d="M146 180h13" stroke="#91a198" stroke-width="3"/></g>`;
    case "keyboard":
      return `<ellipse cx="250" cy="245" rx="137" ry="15" fill="#122320" fill-opacity=".12"/><g transform="rotate(-7 250 150)"><path d="M113 105q0-11 11-11h256q11 0 11 11v108H113z" fill="#35493f" stroke="#73867a" stroke-width="3"/><rect x="127" y="108" width="251" height="86" rx="5" fill="#d7dfd7"/><g fill="#53685b"><rect x="139" y="119" width="27" height="13" rx="2"/><rect x="171" y="119" width="27" height="13" rx="2"/><rect x="203" y="119" width="27" height="13" rx="2"/><rect x="235" y="119" width="27" height="13" rx="2"/><rect x="267" y="119" width="27" height="13" rx="2"/><rect x="299" y="119" width="27" height="13" rx="2"/><rect x="331" y="119" width="34" height="13" rx="2"/><rect x="139" y="139" width="35" height="13" rx="2"/><rect x="179" y="139" width="27" height="13" rx="2"/><rect x="211" y="139" width="27" height="13" rx="2"/><rect x="243" y="139" width="27" height="13" rx="2"/><rect x="275" y="139" width="27" height="13" rx="2"/><rect x="307" y="139" width="58" height="13" rx="2"/><rect x="139" y="159" width="43" height="13" rx="2"/><rect x="187" y="159" width="27" height="13" rx="2"/><rect x="219" y="159" width="27" height="13" rx="2"/><rect x="251" y="159" width="27" height="13" rx="2"/><rect x="283" y="159" width="82" height="13" rx="2"/></g><path d="M195 183h130" stroke="#82968b" stroke-width="5" stroke-linecap="round"/></g>`;
    case "roller":
      return `<ellipse cx="250" cy="242" rx="128" ry="16" fill="#122320" fill-opacity=".12"/><g transform="rotate(-25 250 150)"><rect x="135" y="118" width="224" height="70" rx="35" fill="#42574d"/><rect x="156" y="127" width="179" height="52" rx="26" fill="#243a31"/><path d="M164 135h162m-171 13h180m-169 13h159" stroke="#647a6c" stroke-width="3" stroke-linecap="round"/><rect x="125" y="139" width="28" height="29" rx="5" fill="#d1d9d0"/><rect x="340" y="139" width="28" height="29" rx="5" fill="#d1d9d0"/><path d="M125 153h-17m260 0h16" stroke="#7a8d82" stroke-width="7" stroke-linecap="round"/></g>`;
    case "drum":
      return `<ellipse cx="250" cy="243" rx="129" ry="15" fill="#122320" fill-opacity=".12"/><g transform="rotate(-8 250 150)"><rect x="128" y="111" width="245" height="97" rx="12" fill="#36493e" stroke="#718379" stroke-width="3"/><rect x="145" y="124" width="211" height="68" rx="8" fill="#243a31"/><circle cx="198" cy="158" r="29" fill="#83968a"/><circle cx="198" cy="158" r="19" fill="#c9d3ca"/><circle cx="198" cy="158" r="8" fill="#51665a"/><circle cx="301" cy="158" r="20" fill="#84968a"/><circle cx="301" cy="158" r="8" fill="#4a5f53"/><path d="M224 136h50v44h-50z" fill="#d9f36a"/><path d="M156 200v13m189-13v13" stroke="#64776b" stroke-width="7" stroke-linecap="round"/></g>`;
    case "part":
    default:
      return `<ellipse cx="251" cy="244" rx="124" ry="15" fill="#122320" fill-opacity=".12"/><g transform="rotate(-8 250 150)"><path d="M166 94h143l27 27v96H151V111z" fill="#f5f7f2" stroke="#8c9c91" stroke-width="3"/><path d="M183 111h109v82H183z" fill="#e1e8df"/><path d="M203 126h69m-69 12h48m-48 12h58" stroke="#a7b4a9" stroke-width="4" stroke-linecap="round"/><path d="m300 95 36 26h-29l-27-27z" fill="#c3cec3" stroke="#8c9c91" stroke-width="2"/><path d="M170 200h152" stroke="#75877b" stroke-width="4"/></g><path d="m373 81 5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" fill="#8fae51"/>`;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function visibleProducts() {
  const query = searchInput.value.trim().toLowerCase();
  return products.filter(product => {
    const matchesFilter = activeFilter === "all" || product.group.includes(activeFilter);
    const haystack = `${product.name} ${product.detail} ${product.category} ${product.brand} ${product.description}`.toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderProducts() {
  const list = visibleProducts();
  const allCount = document.getElementById("productCount");
  if (allCount) allCount.textContent = String(products.length);
  productGrid.innerHTML = list.map(product => `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-visual" data-art="${product.art}">
        ${productVisual(product)}
        <span class="product-badge">${escapeHtml(product.badge)}</span>
        <button class="zoom-button" type="button" data-action="zoom" data-id="${product.id}" aria-label="View ${escapeHtml(product.name)} details and magnify image"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M10.5 7.5v6m-3-3h6"/></svg></button>
      </div>
      <div class="product-info">
        <div class="product-meta"><span class="brand-tag">${escapeHtml(product.brand)}</span><span>${escapeHtml(product.category)}</span></div>
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
        <p class="product-desc">${escapeHtml(product.detail)}</p>
        <div class="product-bottom"><div class="product-price"><small>Indicative price</small><div class="product-price-row">${product.originalPrice > product.price ? `<del>${formatPrice(product.originalPrice)}</del>` : ""}<strong>${formatPrice(product.price)}</strong>${product.originalPrice > product.price ? `<span class="sale-pill">${Math.round((1 - product.price / product.originalPrice) * 100)}% off</span>` : ""}</div></div>
          <div class="quantity-control" aria-label="Quantity for ${escapeHtml(product.name)}"><button type="button" class="card-qty-minus" data-id="${product.id}" aria-label="Decrease quantity">−</button><output class="card-quantity" data-id="${product.id}">${cardQuantities[product.id] || 1}</output><button type="button" class="card-qty-plus" data-id="${product.id}" aria-label="Increase quantity">+</button></div>
        </div>
        ${product.offer ? `<p class="product-offer">${escapeHtml(product.offer)}</p>` : ""}
        <div class="product-ctas"><button type="button" class="add-button" data-action="add" data-id="${product.id}">Add to cart</button><button type="button" class="order-button" data-action="order" data-id="${product.id}">Order now <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L4 20.3l1.1-4a8.4 8.4 0 1 1 15.4-4.5Z"/><path d="M8.5 8.2c.3-.5.6-.5.9-.5h.4c.2 0 .4.2.5.5l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.1.4 0 .6.5.7 1.1 1.2 1.8 1.6.2.1.3.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .3-.2 1-.6 1.3-.4.4-1 .7-1.6.7-.4 0-1-.1-1.7-.4-1-.4-2.2-1.2-3.2-2.3-.8-.9-1.4-1.9-1.7-2.8-.2-.8-.1-1.5.3-1.9.3-.3.7-.4 1-.4Z"/></svg></button></div>
      </div>
    </article>`).join("");
  const activeChip = filterList.querySelector(`[data-filter="${activeFilter}"]`);
  const filterLabel = activeChip ? activeChip.textContent.trim().replace(/\s+\d+$/, "") : "products";
  resultsLabel.textContent = searchInput.value.trim() ? `${list.length} result${list.length === 1 ? "" : "s"} for “${searchInput.value.trim()}”` : activeFilter === "all" ? "Showing all products" : `Showing ${list.length} ${filterLabel.toLowerCase()}`;
  emptyState.hidden = list.length > 0;
  productGrid.hidden = list.length === 0;
}

function renderVideos() {
  videoGrid.innerHTML = videoGuides.map(guide => `
    <button class="video-card" type="button" data-video-id="${guide.id}" aria-label="Play ${escapeHtml(guide.title)}">
      <span class="video-thumb">${guide.src ? `<video src="${escapeHtml(guide.src)}#t=0.2" muted playsinline preload="metadata" aria-hidden="true"></video>` : `<img src="https://i.ytimg.com/vi/${guide.id}/hqdefault.jpg" alt="" loading="lazy">`}<span class="play-button" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 6 10 6-10 6z"/></svg></span><span class="video-label">WATCH VIDEO</span></span>
      <span class="video-card-copy"><span class="video-maker">${escapeHtml(guide.maker)} <i></i> ${escapeHtml(guide.model)}</span><strong>${escapeHtml(guide.title)}</strong><span class="video-summary">${escapeHtml(guide.summary)}</span></span>
    </button>`).join("");
}

function openVideo(guide) {
  document.getElementById("videoDialogTitle").textContent = guide.title;
  const player = guide.src
    ? `<video controls autoplay playsinline preload="metadata"><source src="${escapeHtml(guide.src)}" type="video/mp4">Your browser does not support MP4 video.</video>`
    : `<iframe src="https://www.youtube-nocookie.com/embed/${guide.id}?rel=0&modestbranding=1" title="${escapeHtml(guide.title)} — ${escapeHtml(guide.maker)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  videoContent.innerHTML = `<div class="video-frame-wrap">${player}</div>`;
  videoDialog.showModal();
}

function currentCardQuantity(id) {
  return Math.min(99, Math.max(1, Number(cardQuantities[id]) || 1));
}

function setCardQuantity(id, value) {
  cardQuantities[id] = Math.min(99, Math.max(1, Number(value) || 1));
  const output = productGrid.querySelector(`.card-quantity[data-id="${id}"]`);
  if (output) output.value = cardQuantities[id];
}

function addToCart(id, quantity = 1) {
  const product = getProduct(id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty = Math.min(99, existing.qty + quantity);
  else cart.push({ id, qty: Math.min(99, quantity) });
  saveCart();
  renderCart();
  showToast(`Added ${quantity} × ${product.name} to your cart`);
}

function changeCartQuantity(id, adjustment) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.qty = Math.min(99, Math.max(1, item.qty + adjustment));
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (getProduct(item.id)?.price || 0) * item.qty, 0);
  document.getElementById("cartCount").textContent = itemCount;
  document.getElementById("drawerCount").textContent = `(${itemCount})`;
  document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);
  const hasItems = cart.length > 0;
  cartBody.hidden = !hasItems;
  cartEmpty.hidden = hasItems;
  cartFooter.hidden = !hasItems;
  cartBody.innerHTML = hasItems ? cart.map(item => {
    const product = getProduct(item.id);
    return `<div class="cart-line" data-cart-id="${product.id}"><div class="cart-thumb" data-art="${product.art}">${productVisual(product)}</div><div><p class="cart-line-title">${escapeHtml(product.name)}</p><span class="cart-line-brand">${escapeHtml(product.brand)} · ${escapeHtml(product.category)}</span><div class="cart-line-price">${formatPrice(product.price * item.qty)}</div></div><div class="cart-line-side"><div class="quantity-control" aria-label="Cart quantity for ${escapeHtml(product.name)}"><button type="button" data-cart-action="decrease" data-id="${product.id}" aria-label="Decrease quantity">−</button><output>${item.qty}</output><button type="button" data-cart-action="increase" data-id="${product.id}" aria-label="Increase quantity">+</button></div><button type="button" class="remove-line" data-cart-action="remove" data-id="${product.id}">Remove</button></div></div>`;
  }).join("") : "";
}

function whatsappUrl(message) {
  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(message) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

function orderOne(product, quantity) {
  const message = [
    "Hi Jonatech Solutions, I’d like to order:",
    `• ${product.name} — quantity ${quantity}`,
    `Indicative price: ${formatPrice(product.price)} each · estimated line total: ${formatPrice(product.price * quantity)}`,
    "Please confirm availability, final price and delivery options."
  ].join("\n");
  openWhatsApp(message);
}

function checkoutCart() {
  if (!cart.length) return;
  const lines = cart.map(item => {
    const product = getProduct(item.id);
    return `• ${product.name} — qty ${item.qty} × ${formatPrice(product.price)} = ${formatPrice(product.price * item.qty)}`;
  });
  const total = cart.reduce((sum, item) => sum + getProduct(item.id).price * item.qty, 0);
  const message = ["Hi Jonatech Solutions, I’d like to order the following items:", ...lines, `Estimated subtotal: ${formatPrice(total)}`, "Please confirm availability, final prices and delivery options."].join("\n");
  openWhatsApp(message);
}

function showZoom(product) {
  const gallery = product.gallery?.length ? product.gallery : (product.image ? [{ src: product.image, label: "Product view" }] : []);
  const galleryMarkup = gallery.length ? `<div class="zoom-gallery"><div class="zoom-image-stage" data-art="${product.art}"><img class="real-product-image" id="zoomImage" src="${escapeHtml(gallery[0].src)}" alt="${escapeHtml(product.name)} - ${escapeHtml(gallery[0].label)}" loading="eager"><div class="product-art-fallback" hidden>${productSvg(product)}</div><span class="gallery-view-label" id="galleryViewLabel">${escapeHtml(gallery[0].label)}</span><button type="button" class="magnify-toggle" id="magnifyToggle" aria-label="Magnify product photo" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5M10.5 7.5v6m-3-3h6"/></svg></button></div>${gallery.length > 1 ? `<div class="gallery-thumbnails" aria-label="More product views">${gallery.map((view, index) => `<button type="button" class="gallery-thumb${index === 0 ? " active" : ""}" data-gallery-index="${index}" aria-label="Show ${escapeHtml(view.label)}"><img src="${escapeHtml(view.src)}" alt="" loading="lazy"><span>${escapeHtml(view.label)}</span></button>`).join("")}</div>` : ""}</div>` : `<div class="zoom-art" data-art="${product.art}">${productVisual(product)}</div>`;
  const specsMarkup = product.specs?.length ? `<ul class="zoom-specs">${product.specs.map(spec => `<li>${escapeHtml(spec)}</li>`).join("")}</ul>` : "";
  const offerMarkup = product.offer ? `<p class="zoom-offer">${escapeHtml(product.offer)}</p>` : "";
  const sourceMarkup = product.priceSource ? `<a class="price-source-link" href="${escapeHtml(product.priceSource)}" target="_blank" rel="noopener">See Kenya price reference ↗</a>` : "";
  zoomContent.innerHTML = `<div class="zoom-layout">${galleryMarkup}<div class="zoom-details"><div class="product-meta"><span class="brand-tag">${escapeHtml(product.brand)}</span><span>${escapeHtml(product.category)}</span></div><h2 id="zoomTitle">${escapeHtml(product.name)}</h2><p>${escapeHtml(product.description)}</p><p class="zoom-price">${product.originalPrice > product.price ? `<del style="font:500 13px var(--font-body);color:#9aa39c;margin-right:6px">${formatPrice(product.originalPrice)}</del>` : ""}${formatPrice(product.price)} <span style="font:500 9px var(--font-body);color:#839087;letter-spacing:0">indicative price</span></p>${offerMarkup}${specsMarkup}${sourceMarkup}<div class="quantity-control" aria-label="Quantity for ${escapeHtml(product.name)}"><button type="button" data-zoom-qty="minus" aria-label="Decrease quantity">−</button><output id="zoomQty">${currentCardQuantity(product.id)}</output><button type="button" data-zoom-qty="plus" aria-label="Increase quantity">+</button></div><div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="button button-dark" id="zoomAdd">Add to cart</button><button type="button" class="button" style="border:1px solid #dce3d8;background:white" id="zoomOrder">Order now ↗</button></div></div></div>`;
  zoomDialog.showModal();
  document.getElementById("zoomAdd").addEventListener("click", () => {
    addToCart(product.id, currentCardQuantity(product.id));
    zoomDialog.close();
  });
  document.getElementById("zoomOrder").addEventListener("click", () => orderOne(product, currentCardQuantity(product.id)));
  zoomContent.querySelectorAll("[data-zoom-qty]").forEach(button => button.addEventListener("click", () => {
    const adjustment = button.dataset.zoomQty === "plus" ? 1 : -1;
    setCardQuantity(product.id, currentCardQuantity(product.id) + adjustment);
    document.getElementById("zoomQty").value = currentCardQuantity(product.id);
  }));
  const zoomImage = document.getElementById("zoomImage");
  const magnifyToggle = document.getElementById("magnifyToggle");
  magnifyToggle?.addEventListener("click", () => {
    const magnified = zoomImage.classList.toggle("is-magnified");
    magnifyToggle.setAttribute("aria-pressed", String(magnified));
    magnifyToggle.setAttribute("aria-label", magnified ? "Return to full product photo" : "Magnify product photo");
  });
  zoomImage?.addEventListener("click", () => magnifyToggle?.click());
  zoomContent.querySelectorAll("[data-gallery-index]").forEach(button => button.addEventListener("click", () => {
    const view = gallery[Number(button.dataset.galleryIndex)];
    if (!view || !zoomImage) return;
    zoomImage.src = view.src;
    zoomImage.alt = `${product.name} - ${view.label}`;
    zoomImage.classList.remove("is-magnified");
    magnifyToggle?.setAttribute("aria-pressed", "false");
    document.getElementById("galleryViewLabel").textContent = view.label;
    zoomContent.querySelectorAll("[data-gallery-index]").forEach(thumb => thumb.classList.toggle("active", thumb === button));
  }));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function readTestimonials() {
  try {
    const saved = JSON.parse(localStorage.getItem(TESTIMONIALS_CACHE_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter(item => item && typeof item.name === "string" && typeof item.comment === "string").slice(0, 12) : [];
  } catch { return []; }
}

function renderTestimonials() {
  const reviews = readTestimonials();
  testimonialEmpty.hidden = reviews.length > 0;
  testimonialList.innerHTML = reviews.map(review => `<article class="testimonial-card"><div class="testimonial-card-head"><span>${escapeHtml(review.name)} · ${escapeHtml(review.project)}</span><span class="testimonial-stars" aria-label="${Number(review.rating) || 5} out of 5 stars">${"★".repeat(Math.min(5, Math.max(1, Number(review.rating) || 5)))}</span></div><p>${escapeHtml(review.comment)}</p><small>Saved on this device · submitted for Jonatech Solutions review</small></article>`).join("");
}

testimonialForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(testimonialForm);
  const review = {
    name: String(formData.get("name") || "").trim().slice(0, 60),
    project: String(formData.get("project") || "").trim().slice(0, 80),
    rating: Math.min(5, Math.max(1, Number(formData.get("rating")) || 5)),
    comment: String(formData.get("comment") || "").trim().slice(0, 600)
  };
  if (!review.name || !review.project || !review.comment) return;
  const reviews = readTestimonials();
  reviews.unshift(review);
  try { localStorage.setItem(TESTIMONIALS_CACHE_KEY, JSON.stringify(reviews.slice(0, 12))); } catch { /* The WhatsApp submission still works if local storage is unavailable. */ }
  renderTestimonials();
  const message = ["Hi Jonatech Solutions, please review this customer project feedback before publishing:", `Name: ${review.name}`, `Project: ${review.project}`, `Rating: ${review.rating}/5`, `Comment: ${review.comment}`, "The customer submitted this through the website."].join("\n");
  openWhatsApp(message);
  testimonialStatus.textContent = "WhatsApp opened with your comment. This browser shows a local copy while Jonatech Solutions reviews it for publication.";
  testimonialForm.reset();
  showToast("Your feedback is ready to send to Jonatech Solutions.");
});

filterList.addEventListener("click", event => {
  const chip = event.target.closest("[data-filter]");
  if (!chip) return;
  activeFilter = chip.dataset.filter;
  filterList.querySelectorAll(".filter-chip").forEach(button => button.classList.toggle("active", button === chip));
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

productGrid.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  const id = button.dataset.id;
  if (button.classList.contains("card-qty-minus")) setCardQuantity(id, currentCardQuantity(id) - 1);
  else if (button.classList.contains("card-qty-plus")) setCardQuantity(id, currentCardQuantity(id) + 1);
  else if (button.dataset.action === "add") addToCart(id, currentCardQuantity(id));
  else if (button.dataset.action === "order") orderOne(getProduct(id), currentCardQuantity(id));
  else if (button.dataset.action === "zoom") showZoom(getProduct(id));
});

cartBody.addEventListener("click", event => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  if (button.dataset.cartAction === "decrease") changeCartQuantity(button.dataset.id, -1);
  else if (button.dataset.cartAction === "increase") changeCartQuantity(button.dataset.id, 1);
  else if (button.dataset.cartAction === "remove") removeFromCart(button.dataset.id);
});

document.getElementById("openCart").addEventListener("click", () => cartDialog.showModal());
document.getElementById("closeCart").addEventListener("click", () => cartDialog.close());
document.getElementById("continueShopping").addEventListener("click", () => cartDialog.close());
document.getElementById("checkoutButton").addEventListener("click", checkoutCart);
document.getElementById("closeZoom").addEventListener("click", () => zoomDialog.close());
document.getElementById("closeVideo").addEventListener("click", () => videoDialog.close());
cartDialog.addEventListener("click", event => { if (event.target === cartDialog) cartDialog.close(); });
zoomDialog.addEventListener("click", event => { if (event.target === zoomDialog) zoomDialog.close(); });
videoDialog.addEventListener("click", event => { if (event.target === videoDialog) videoDialog.close(); });
videoDialog.addEventListener("close", () => { videoContent.innerHTML = ""; });
videoGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-video-id]");
  if (card) openVideo(videoGuides.find(guide => guide.id === card.dataset.videoId));
});
document.addEventListener("error", event => {
  const image = event.target;
  if (!image.matches?.(".real-product-image")) return;
  image.hidden = true;
  const fallback = image.nextElementSibling;
  if (fallback?.classList.contains("product-art-fallback")) fallback.hidden = false;
}, true);

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mainNav.classList.toggle("open", open);
});
mainNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("open");
  }
});

document.querySelectorAll("[data-footer-filter]").forEach(link => link.addEventListener("click", () => {
  activeFilter = link.dataset.footerFilter;
  filterList.querySelectorAll(".filter-chip").forEach(button => button.classList.toggle("active", button.dataset.filter === activeFilter));
  renderProducts();
}));

document.getElementById("currentYear").textContent = new Date().getFullYear();
renderProducts();
renderVideos();
renderCart();
renderTestimonials();
updateLaptopPartQuote();
updatePrinterPartQuote();

