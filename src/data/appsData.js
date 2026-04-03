// import mernshopImg from '../assets/mernshop_preview.png';
// import anifyImg from '../assets/anify_preview.png';
// import anisetImg from '../assets/aniset_preview.png';

// import mernshopIcon from '../assets/mernshop_icon.png';
// import anifyIcon from '../assets/anify_icon.png';
// import anisetIcon from '../assets/aniset_icon.png';

export const appsData = [
  {
    id: "mernshop",
    name: "MernShop",
    // screenshot: mernshopImg,
    // screenshots: [mernshopImg, mernshopImg, mernshopImg],
    description: "A comprehensive minimalist e-commerce platform built on the MERN stack with modern features. Experience a seamless and elegant shopping journey with lightning fast load times.",
    shortDesc: "Minimalist MERN Stack E-commerce.",
    icon: mernshopIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.mernshop",
    reviews: [
      { id: 1, user: "Alice M.", rating: 5, comment: "Incredible UX, very smooth!" },
      { id: 2, user: "David K.", rating: 4, comment: "Love the minimalist design. Great app." }
    ]
  },
  {
    id: "anify",
    name: "Anify Widget",
    // screenshot: anifyImg,
    // screenshots: [anifyImg, anifyImg, anifyImg],
    description: "Your ultimate anime widget companion. Discover widgets, track your favorite shows, and customize your home screen to match your aesthetic.",
    shortDesc: "Anime tracking widget companion.",
    icon: anifyIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.anify",
    reviews: [
      { id: 1, user: "OtakuFan99", rating: 5, comment: "Best widget for anime lovers!" },
      { id: 2, user: "Sarah L.", rating: 5, comment: "The new 006 widget is amazing." }
    ]
  },
  {
    id: "aniset",
    name: "Aniset",
    // screenshot: anisetImg,
    // screenshots: [anisetImg, anisetImg, anisetImg],
    description: "An incredibly elegant tool set and routing app. Features privacy-focused tools without compromising design. Everything you need, right at your fingertips.",
    shortDesc: "Elegant utility tools.",
    icon: anisetIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.aniset",
    reviews: [
      { id: 1, user: "John Doe", rating: 4, comment: "Very useful for my daily tasks." },
      { id: 2, user: "Elena", rating: 5, comment: "Beautiful design." }
    ]
  }
];
