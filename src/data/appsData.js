


import anisetIcon from '../assets/Aniset_logo.webp';
import anisetImg from '../assets/aniset_bg.webp';
//anify images
import anifyIcon from '../assets/anify/anifyicon_new.webp';
import anifybg from '../assets/anify/anify_new_bg.webp';
import anifys1 from '../assets/anify/anify_screenshot_1.webp';
import anifys2 from '../assets/anify/anify_screenshot_2.webp';
import anifys3 from '../assets/anify/anify_screenshot_3.webp';
import anifys4 from '../assets/anify/anify_screenshot_4.webp';
import anifys5 from '../assets/anify/anify_screenshot_5.webp';
import anifys6 from '../assets/anify/anify_screenshot_6.webp';
import anifys7 from '../assets/anify/anify_screenshot_7.webp';

//gwalls images
// import gwallsIcon from '../assets/gwalls_icon.webp';
import gwallsbg from '../assets/gwalls/gwallsbg.webp';


export const appsData = [
  {
    id: "anify",
    name: "Anify (Free)",
    tagline: "Personalization & Productivity Suite for Android",
    screenshot: anifybg,
    screenshots: [anifys1, anifys2, anifys3, anifys4, anifys5, anifys6, anifys7],
    description: "Give your phone a complete makeover with Anify, the ultimate personalization and productivity app for Android. Get instant access to ready-to-use widgets, premium KWGT widget packs, HD wallpapers, trending ringtones, and a powerful focus blocker—all in one place. Whether you want instant widgets or advanced KWGT customization, Anify has you covered.",
    shortDesc: "Ready-to-use Widgets, KWGT Packs, Wallpapers, Ringtones & Focus Blocker.",
    requiresAndroid: "Android 7.0 to Android 16",
    icon: anifyIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.anify",
    websiteLink: "https://anify.psatyakiran.in/",
    highlights: [
      "Ready-to-use widgets (No KWGT required)",
      "Premium KWGT widget packs",
      "BlockIt – Focus Lock & App Blocker",
      "HD & Aesthetic Wallpapers + Live Calendars",
      "Trending Ringtones & Sound Effects",
      "Android 7.0 to Android 16 Supported",
      "Lightweight, battery-optimized Material UI",
      "Free with Ads"
    ],
    features: [
      {
        icon: "📱",
        title: "Ready-to-Use Widgets (No KWGT Required)",
        subtitle: "Add gorgeous home screen widgets in seconds—no setup hassle or companion apps needed.",
        points: [
          "Aesthetic Clocks & Anisets: Sleek Nothing-style designs, anime-inspired time widgets, and custom clocks.",
          "Real-Time System Monitors: Track CPU usage with dot-graph visualization, battery levels, and live network speed/data usage (Wi-Fi/Mobile).",
          "Smart Utilities: Manage Bluetooth devices, track the sun's path, enable Caffeine mode, create sticky notes, and control music with interactive playback widgets.",
          "Fun Widgets: Spin the Bottle and display animated GIFs right on your launcher."
        ]
      },
      {
        icon: "🎨",
        title: "Premium KWGT Widget Packs",
        subtitle: "Take customization to the next level with beautifully crafted KWGT widget packs (Requires KWGT & KWGT Pro).",
        points: [
          "Modern and aesthetic widget designs with anime-inspired layouts.",
          "Minimal & Nothing-style widgets with regular updates.",
          "One-tap seamless import directly into the KWGT app."
        ]
      },
      {
        icon: "🔒",
        title: "BlockIt – Focus Lock & App Blocker",
        subtitle: "Stay productive and reclaim your time using built-in focus tools powered via Android's AccessibilityService API.",
        points: [
          "Lockdown Mode: Instantly block distracting apps during work or study sessions.",
          "Focus Reports: Track focus duration with an intuitive 7-day activity chart.",
          "Anti-Impulse Protection: 3-second 'Hold to Give Up' confirmation barrier.",
          "Safe Whitelisting: Essential system apps remain accessible for emergencies."
        ]
      },
      {
        icon: "🖼️",
        title: "HD Wallpapers & Trending Ringtones",
        subtitle: "Curated collection of aesthetic visuals and audio personalization.",
        points: [
          "AMOLED, Minimal, Anime, Aesthetic, and Abstract wallpaper styles.",
          "Life Calendar Live Wallpaper & Auto Wallpaper Changer.",
          "Trending ringtones, notification sounds, and alarm tones updated regularly."
        ]
      },
      {
        icon: "⚡",
        title: "Smooth UI & Battery Optimized",
        subtitle: "Built with modern Material Design principles for fluid responsiveness.",
        points: [
          "Fast, clean interface with fluid animations and immersive Dark Mode.",
          "Anify is completely free and supported by ads, helping continuously deliver new widgets, wallpapers, ringtones, and features."
        ]
      }
    ],
    accessibilityInfo: "Anify uses the Android AccessibilityService API strictly to provide Focus Lock and app-blocking functionality. When enabled, it detects when a selected distracting app is opened to restrict access according to your Focus Lock settings.",
    reviews: [
      {
        id: 1,
        user: "Krishna Vishwakarma",
        rating: 5,
        comment: "Absolutely amazing app! The widgets and wallpapers look premium and aesthetic. Very smooth experience and easy to customize. My home screen looks so much better now."
      },
      {
        id: 2,
        user: "RONNIE",
        rating: 5,
        comment: "very nice app increadible wallpapers and widgets"
      },
      {
        id: 3,
        user: "Subhodeep Ghosh",
        rating: 5,
        comment: "Very smooth! transitions and feels premium with High quality widgets ❤️"
      },
      {
        id: 4,
        user: "Helen Jones",
        rating: 4,
        comment: "Not bad. More live wallpapers would be good"
      },
      {
        id: 5,
        user: "Veera Thijil",
        rating: 5,
        comment: "good quality wallpapers👌"
      },
      {
        id: 6,
        user: "Ganesh Alla",
        rating: 5,
        comment: "best app"
      }
    ]
  },
  {
    id: "gwalls",
    name: "Gwalls (Discontinued)",
    screenshot: gwallsbg,
    description: "Gwalls is a free wallpaper app that offers a curated collection of high-quality, ad-free wallpapers. With a focus on privacy and user experience, Gwalls provides a seamless way to discover and set stunning wallpapers without any distractions. Note: This app is discontinued.",
    shortDesc: "Discontinued.",
    icon: "https://play-lh.googleusercontent.com/Fi0yymWa6vKSk_z-cfb9nzAYpPK6zE4dm_0kSKxJzjckJDMPpHRoIK1iMfCk8mpXSaZx=w240-h480-rw",
    playStoreLink: null,
    websiteLink: "coming soon",
    reviews: []
  },
  {
    id: "aniset",
    name: "Aniset (Paid)",
    screenshot: anisetImg,
    // screenshots: [anisetImg, anisetImg, anisetImg],
    description: "An incredibly elegant tool set and routing app. Features privacy-focused tools without compromising design. Everything you need, right at your fingertips.",
    shortDesc: "Elegant utility tools.",
    icon: anisetIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.aniset",
    websiteLink: "https://aniset.psatyakiran.in",
    directPurchase: null,
    reviews: [
      { id: 1, user: "Google Play User", rating: 5, comment: "This widget is best in Play Store and it's a game-changer! It's sleek, customizable, and makes app discovery and management a breeze. The developer support for this widget is top-notch." },
      { id: 2, user: "선배야쿠자", rating: 5, comment: "Recommend to anyone. Great set of widgets with totally original style and design. Just top notch developer. I hope this pack keeps on growing." },
      { id: 3, user: "Ahmed Alkhatib", rating: 5, comment: "Using it since one year and really like it's widgets. And developer thank you for your efforts." },
      { id: 4, user: "Gaurav Kumar", rating: 5, comment: "I'm in Love with this Kwgt & Klwp 🥹🩷 thank you so much" },
      { id: 5, user: "Fatema", rating: 5, comment: "Awesome widgets especially the anya one looks cool" },
      { id: 6, user: "Amartya Anand", rating: 4, comment: "Great widget and wall set. Only found 1 locked widget (I hate those). Gonna keep." },
      { id: 7, user: "Nate Westby", rating: 5, comment: "Thanks You for making anime kwgt ❤️❤️❤️" },
      { id: 8, user: "A Koushik", rating: 5, comment: "Good app. Nice dev." }
    ]
  },

];
