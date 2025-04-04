const categories = [
  {
    id: "c1",
    name: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "c2",
    name: "Laptops",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "c3",
    name: "Audio",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "c4",
    name: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "c5",
    name: "Gaming",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "c6",
    name: "Wearables",
    image:
      "https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const products = [
  // --- Smartphones ---
  {
    name: "iPhone 15 Pro",
    description:
      "Apple's flagship smartphone with A17 chip and 5x telephoto camera.",
    price: 1199,
    category: "Smartphones",
    stock: 25,
    images: [
      "https://g-mart.pk/wp-content/uploads/iPhone-15-Pro-Max-438x593.jpg",
    ],
    ratings: 4.7,
    reviews: [],
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Top-tier Android phone with 200MP camera and Snapdragon 8 Gen 2.",
    price: 1099,
    category: "Smartphones",
    stock: 20,
    images: [
      "https://images.samsung.com/is/image/samsung/p6pim/sa_en/2302/gallery/sa-en-galaxy-s23-s918-446919-sm-s918bzaqmea-534879232?$684_547_PNG$",
    ],
    ratings: 4.6,
    reviews: [],
  },
  {
    name: "Google Pixel 8",
    description: "Clean Android experience with Google's latest AI features.",
    price: 799,
    category: "Smartphones",
    stock: 30,
    images: [
      "https://qmart.pk/wp-content/uploads/2024/12/Google-Pixel-8-Pro-Qmart-1.jpg",
    ],
    ratings: 4.5,
    reviews: [],
  },
  {
    name: "OnePlus 11",
    description:
      "Fast and smooth flagship with 100W charging and AMOLED display.",
    price: 649,
    category: "Smartphones",
    stock: 15,
    images: [
      "https://d2ubszo7zh7huy.cloudfront.net/catalog/product/cache/07f793a3c43d8271c92989bfed3cf06f/v/u/vusoifs98gioshgfunisegf9iso_2_1.jpg",
    ],
    ratings: 4.3,
    reviews: [],
  },
  {
    name: "Xiaomi 13 Pro",
    description:
      "Affordable flagship with Leica camera and Snapdragon 8 Gen 2.",
    price: 599,
    category: "Smartphones",
    stock: 18,
    images: ["https://gsmfloor.pk/wp-content/uploads/Xiaomi-13-Pro.png"],
    ratings: 4.4,
    reviews: [],
  },
  {
    name: "Motorola Edge 40",
    description: "Slim design, 144Hz display, and clean Android UI.",
    price: 499,
    category: "Smartphones",
    stock: 22,
    images: [
      "https://g-mart.pk/wp-content/uploads/Motorola-Edge-40-1-438x593.jpg",
    ],
    ratings: 4.2,
    reviews: [],
  },

  // --- Laptops ---
  {
    name: 'MacBook Pro 16" M2',
    description: "Powerful Apple Silicon chip with 16-core GPU and 32GB RAM.",
    price: 2499,
    category: "Laptops",
    stock: 10,
    images: [
      "https://www.cnet.com/a/img/resize/9624241ec6785ab68e2092e9656bc16c73d75cb1/hub/2023/01/21/ec79d7fc-9235-4830-8fc1-77db12800b97/apple-macbook-pro-16-2023-3214.jpg?auto=webp&fit=crop&height=1200&width=1200",
    ],
    ratings: 4.8,
    reviews: [],
  },
  {
    name: "Dell XPS 15",
    description: "Sleek aluminum design with 4K display and i9 processor.",
    price: 1999,
    category: "Laptops",
    stock: 8,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4SOY5W6ASt4Qz7VRA7uMQp2j1d4VdeEyJQ&s",
    ],
    ratings: 4.7,
    reviews: [],
  },
  {
    name: "HP Spectre x360",
    description: "2-in-1 laptop with touchscreen and long battery life.",
    price: 1499,
    category: "Laptops",
    stock: 12,
    images: [
      "https://static3.webx.pk/files/35368/Images/hp-spectre-x360-35368-2176212-220824061317576.jpg",
    ],
    ratings: 4.5,
    reviews: [],
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    description: "Business-class ultrabook with robust build and security.",
    price: 1799,
    category: "Laptops",
    stock: 9,
    images: [
      "https://computerchoice.pk/wp-content/uploads/2023/11/X1-Carbon-Gen-10-1.jpg",
    ],
    ratings: 4.6,
    reviews: [],
  },
  {
    name: "Asus ROG Zephyrus G14",
    description: "Compact gaming laptop with RTX graphics and 165Hz screen.",
    price: 1599,
    category: "Laptops",
    stock: 6,
    images: [
      "https://technify.pk/wp-content/uploads/2024/10/laptop_163_1_2-1.jpg",
    ],
    ratings: 4.7,
    reviews: [],
  },
  {
    name: "Acer Swift 3",
    description: "Budget laptop with Ryzen processor and great portability.",
    price: 699,
    category: "Laptops",
    stock: 20,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFITBlZIOQGCoappQJh1lckpqwodDEUzcGA&s",
    ],
    ratings: 4.2,
    reviews: [],
  },

  // --- Audio ---
  {
    name: "Sony WH-1000XM5",
    description: "Premium wireless noise-cancelling headphones.",
    price: 349,
    category: "Audio",
    stock: 25,
    images: [
      "https://xcessorieshub.com/wp-content/uploads/2022/06/103364_original_local_1200x1050_v3_converted-1-1-1.jpg",
    ],
    ratings: 4.8,
    reviews: [],
  },
  {
    name: "AirPods Pro 2",
    description: "Apple's in-ear noise-cancelling earbuds with spatial audio.",
    price: 249,
    category: "Audio",
    stock: 30,
    images: ["https://games4u.pk/cdn/shop/files/F213.jpg?v=1705318877"],
    ratings: 4.7,
    reviews: [],
  },
  {
    name: "Bose QuietComfort 45",
    description: "Legendary comfort with class-leading ANC.",
    price: 329,
    category: "Audio",
    stock: 15,
    images: [
      "https://xcessorieshub.com/wp-content/uploads/2022/03/Bose-QuietComfort-45.webp",
    ],
    ratings: 4.6,
    reviews: [],
  },
  {
    name: "JBL Flip 6",
    description: "Portable waterproof Bluetooth speaker with punchy bass.",
    price: 129,
    category: "Audio",
    stock: 40,
    images: [
      "https://xcessorieshub.com/wp-content/uploads/2022/02/JBL-Flip-6.webp",
    ],
    ratings: 4.4,
    reviews: [],
  },
  {
    name: "Beats Studio Buds",
    description: "Compact earbuds with ANC and rich sound.",
    price: 149,
    category: "Audio",
    stock: 18,
    images: ["https://m.media-amazon.com/images/I/51bRSWrEc7S._AC_SL1500_.jpg"],
    ratings: 4.3,
    reviews: [],
  },
  {
    name: "Logitech G Pro X Headset",
    description: "Wired gaming headset with Blue Voice mic tech.",
    price: 99,
    category: "Audio",
    stock: 12,
    images: [
      "https://logitech.onlinesalestore.pk/cdn/shop/products/logitech-g-pro-x-gaming-headset-with-blue-voice-logitech-pakistan.jpg?v=1639384069",
    ],
    ratings: 4.5,
    reviews: [],
  },

  // --- Smart Home ---
  {
    name: "Google Nest Hub",
    description: "Smart display for your home, powered by Google Assistant.",
    price: 99,
    category: "Smart Home",
    stock: 20,
    images: [
      "https://static3.webx.pk/files/4012/Images/6450818-sd-4012-1890611-181023073025611.jpg",
    ],
    ratings: 4.4,
    reviews: [],
  },
  {
    name: "Amazon Echo Dot (5th Gen)",
    description: "Compact smart speaker with Alexa voice assistant.",
    price: 49,
    category: "Smart Home",
    stock: 50,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9NgjObf74gugSE__vS8V8awOEf5xM-zaOw&s",
    ],
    ratings: 4.6,
    reviews: [],
  },
  {
    name: "TP-Link Kasa Smart Plug",
    description: "Wi-Fi smart plug that works with Alexa and Google.",
    price: 25,
    category: "Smart Home",
    stock: 60,
    images: ["https://m.media-amazon.com/images/I/31D4Oiq8UYL.jpg"],
    ratings: 4.5,
    reviews: [],
  },
  {
    name: "Ring Video Doorbell",
    description: "Monitor your doorstep from anywhere with HD video.",
    price: 129,
    category: "Smart Home",
    stock: 18,
    images: [
      "https://powerhouseexpress.com.pk/cdn/shop/files/ring-video-doorbell.jpg?v=1717569668",
    ],
    ratings: 4.6,
    reviews: [],
  },
  {
    name: "Philips Hue Starter Kit",
    description: "Smart LED lighting with color control via app or voice.",
    price: 199,
    category: "Smart Home",
    stock: 25,
    images: [
      "https://static.wixstatic.com/media/84aee5_b27cf1e5709340f689cddc8cc6f00009~mv2.jpg/v1/fill/w_480,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/84aee5_b27cf1e5709340f689cddc8cc6f00009~mv2.jpg",
    ],
    ratings: 4.7,
    reviews: [],
  },
  {
    name: "Arlo Pro 4 Security Cam",
    description: "Wireless outdoor security camera with night vision.",
    price: 199,
    category: "Smart Home",
    stock: 14,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQku-a2waY16rmP_40g_P-ZcSbDfBv7bQ5WAQ&s",
    ],
    ratings: 4.5,
    reviews: [],
  },

  // --- Gaming ---
  {
    name: "PlayStation 5",
    description: "Sony’s powerful next-gen gaming console.",
    price: 499,
    category: "Gaming",
    stock: 10,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzIqqGWbXNOyBQm2MP9MYX7XCf2rM5kK4NeA&s",
    ],
    ratings: 4.9,
    reviews: [],
  },
  {
    name: "Xbox Series X",
    description: "Microsoft’s flagship 4K gaming console.",
    price: 499,
    category: "Gaming",
    stock: 9,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1GPhx_oVUm0_u5kq8d9Ii5dHGtGnGC__yg&s",
    ],
    ratings: 4.8,
    reviews: [],
  },
  {
    name: "Nintendo Switch OLED",
    description: "Hybrid console with vibrant OLED screen.",
    price: 349,
    category: "Gaming",
    stock: 14,
    images: [
      "https://www.skygames.com.pk/wp-content/uploads/2022/09/nintendo-switch-oled-white.png",
    ],
    ratings: 4.7,
    reviews: [],
  },
  {
    name: "Razer Blade 16",
    description: "Gaming laptop with RTX 4080 and QHD+ display.",
    price: 2699,
    category: "Gaming",
    stock: 5,
    images: [
      "https://press.razer.com/wp-content/uploads/2025/01/Blade16_KV.jpg",
    ],
    ratings: 4.6,
    reviews: [],
  },
  {
    name: "ASUS ROG Ally",
    description: "Handheld gaming PC with Windows OS.",
    price: 699,
    category: "Gaming",
    stock: 6,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPeLzJy9bU5jWd7BPARSD_mMWGJl2hz49nA&s",
    ],
    ratings: 4.4,
    reviews: [],
  },
  {
    name: "Logitech G Pro Controller",
    description: "Pro-level wireless controller for console and PC.",
    price: 149,
    category: "Gaming",
    stock: 20,
    images: [
      "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png?v=1",
    ],
    ratings: 4.5,
    reviews: [],
  },

  // --- Wearables ---
  {
    name: "Apple Watch Series 9",
    description: "Smartwatch with health tracking and crash detection.",
    price: 399,
    category: "Wearables",
    stock: 20,
    images: ["https://games4u.pk/cdn/shop/files/F70_grande.jpg?v=1697116437"],
    ratings: 4.6,
    reviews: [],
  },
  {
    name: "Samsung Galaxy Watch 6",
    description: "Wear OS watch with sleek design and fitness tracking.",
    price: 299,
    category: "Wearables",
    stock: 18,
    images: [
      "https://xcessorieshub.com/wp-content/uploads/2023/07/Samsung-Galaxy-Watch-6-40mm-1.webp",
    ],
    ratings: 4.5,
    reviews: [],
  },
  {
    name: "Fitbit Versa 4",
    description: "Lightweight smartwatch with heart rate and sleep tracking.",
    price: 199,
    category: "Wearables",
    stock: 25,
    images: [
      "https://xcessorieshub.com/wp-content/uploads/2022/12/versa-4-1.webp",
    ],
    ratings: 4.3,
    reviews: [],
  },
  {
    name: "Garmin Venu 2",
    description: "Premium GPS smartwatch with AMOLED screen.",
    price: 399,
    category: "Wearables",
    stock: 10,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3ajIHQr7OAdaPcn9JmZ5Ky4f6IShwMrCGw&s",
    ],
    ratings: 4.4,
    reviews: [],
  },
  {
    name: "Noise ColorFit Ultra 3",
    description: "Affordable smartwatch with big display and metal build.",
    price: 89,
    category: "Wearables",
    stock: 40,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgITM_19bL4qS46y5RBWLoEprnkFwE-Cc2A&s",
    ],
    ratings: 4.1,
    reviews: [],
  },
  {
    name: "boAt Xtend Smartwatch",
    description: "Budget smartwatch with Alexa and fitness tracking.",
    price: 69,
    category: "Wearables",
    stock: 50,
    images: [
      "https://www.boat-lifestyle.com/cdn/shop/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_288x.png?v=1650387008",
    ],
    ratings: 4.2,
    reviews: [],
  },
];

export { categories, products };
