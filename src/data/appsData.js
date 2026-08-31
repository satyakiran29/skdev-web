


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
      "🎨 Sticker Studio: Telegram → WhatsApp conversion & 1-tap export",
      "Ready-to-use widgets (No KWGT required)",
      "Premium KWGT widget packs & copyright/removal requests",
      "BlockIt – Enhanced Focus Lock UI & controls",
      "Automatic crash reports & device diagnostics",
      "Targeting Android 16 (API 36) • Android 7.0+ Supported",
      "HD & Aesthetic Wallpapers + Live Calendars",
      "Trending Ringtones & Sound Effects",
      "Free with Ads"
    ],
    features: [
      {
        icon: "🎨",
        title: "Sticker Studio (Telegram → WhatsApp)",
        subtitle: "Convert and export Telegram sticker packs directly into WhatsApp in 1-tap.",
        points: [
          "Instant Conversion: Seamlessly convert any Telegram sticker packs to WhatsApp-ready formats.",
          "One-Tap Export: Send created packs straight to WhatsApp without third-party converters.",
          "High-fidelity rendering with transparent PNG/WebP background preservation."
        ]
      },
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
        user: "Bhupender",
        date: "11 August 2026",
        rating: 5,
        comment: "Really impressive app! Unlike KWGT, the widgets don't require any base app to apply presets. The wallpapers are top-tier high quality, making this a complete all-in-one package for customisation.",
        developerResponse: {
          author: "Satya Kiran",
          date: "11 August 2026",
          comment: "Thank you so much for the amazing 5-star review! ❤️ I’m really glad you’re enjoying the widgets and wallpapers. Your feedback means a lot and motivates me to keep improving the app! 🚀✨"
        }
      },
      {
        id: 2,
        user: "Krishna Vishwakarma",
        date: "17 May 2026",
        rating: 5,
        comment: "Absolutely amazing app! The widgets and wallpapers look premium and aesthetic. Very smooth experience and easy to customize. My home screen looks so much better now.",
        developerResponse: {
          author: "Satya Kiran",
          date: "17 May 2026",
          comment: "Thanks for your valuable feedback 🙂"
        }
      },
      {
        id: 3,
        user: "Subhodeep Ghosh",
        date: "1 May 2026",
        rating: 5,
        comment: "Very smooth! transitions and feels premium with High quality widgets ❤️",
        developerResponse: {
          author: "Satya Kiran",
          date: "3 May 2026",
          comment: "Thanks for your valuable feedback"
        }
      },
      {
        id: 4,
        user: "RONNIE",
        date: "3 May 2026",
        rating: 5,
        comment: "very nice app increadible wallpapers and widgets",
        developerResponse: {
          author: "Satya Kiran",
          date: "3 May 2026",
          comment: "Thanks for your valuable feedback"
        }
      },
      {
        id: 5,
        user: "Priyanshu",
        date: "9 August 2026",
        rating: 5,
        comment: "this is so good app.. pls bro don't discontinued this app",
        developerResponse: {
          author: "Satya Kiran",
          date: "10 August 2026",
          comment: "Thank you so much for the 5★ review! ❤️ I really appreciate the support. I’m not planning to discontinue the app anytime soon! 😄 If you have any ideas, feature requests, or find any bugs, feel free to join my Telegram community and tell me directly. Your feedback really helps me improve the app! 🚀❤️"
        }
      },
      {
        id: 6,
        user: "Priyanka 3800",
        date: "8 August 2026",
        rating: 5,
        comment: "Absolutely amazing app",
        developerResponse: {
          author: "Satya Kiran",
          date: "10 August 2026",
          comment: "Thank you so much, sis! ❤️ Really glad you’re enjoying the app! Your support means a lot to me. 🥹✨"
        }
      },
      {
        id: 7,
        user: "shemual 629",
        date: "18 July 2026",
        rating: 5,
        comment: "nice keep it up I saw your MSG on tele so I came here to support you hope you will do well ♥️🙏",
        developerResponse: {
          author: "Satya Kiran",
          date: "20 July 2026",
          comment: "Thank you so much for your kind words and for coming from our Telegram community to support Anify! ❤️ Your encouragement means a lot and motivates me to keep improving the app. I hope you'll continue to enjoy future updates. Thanks again for being part of the journey! ✨"
        }
      },
      {
        id: 8,
        user: "Helen Jones",
        date: "9 May 2026",
        rating: 4,
        comment: "Not bad. More live wallpapers would be good",
        developerResponse: {
          author: "Satya Kiran",
          date: "9 May 2026",
          comment: "Thanks for your valuable feedback Anify v1.0.8 is still in early access, and I’m actively adding new features and improvements. Version 1.1.0 will be the first stable major release. After that, new live wallpapers will be added regularly. For suggestions or support: satyakiran296@gmail.com"
        }
      },
      {
        id: 9,
        user: "Android ProATM",
        date: "15 June 2026",
        rating: 1,
        comment: "crashes once i try to open the app fix this",
        developerResponse: {
          author: "Satya Kiran",
          date: "16 June 2026",
          comment: "Hi, please update to the latest version of the app and let us know which version you're using. The app also has a Report Logs option—please tap it and send the logs to satyakiran296@gmail.com so we can investigate the crash and help resolve the issue as quickly as possible."
        }
      },
      {
        id: 10,
        user: "Veera Thijil",
        date: "28 April 2026",
        rating: 5,
        comment: "good quality wallpapers👌",
        developerResponse: {
          author: "Satya Kiran",
          date: "28 April 2026",
          comment: "Thanks for your valuable feedback ☺️"
        }
      },
      {
        id: 11,
        user: "M.Narasimha",
        date: "23 July 2026",
        rating: 5,
        comment: "good app",
        developerResponse: {
          author: "Satya Kiran",
          date: "23 July 2026",
          comment: "Thanks for your valuable feedback 😃"
        }
      },
      {
        id: 12,
        user: "Ganesh Alla",
        date: "5 May 2026",
        rating: 5,
        comment: "best app",
        developerResponse: {
          author: "Satya Kiran",
          date: "9 May 2026",
          comment: "Thanks for your valuable feedback 😃"
        }
      }
    ]
  },
  {
    id: "aniset",
    name: "Aniset (Paid)",
    tagline: "Anime KWGT & KLWP Widgets",
    screenshot: anisetImg,
    description: "Elevate your device customization to a whole new level with Aniset - Anime KWGT & KLWP Widgets! This collection of stunning KWGT and KLWP widgets brings the vibrant and dynamic world of anime to your Android home screen. Immerse yourself in the captivating aesthetics of your favorite anime characters and themes, making your device a true anime wonderland.",
    shortDesc: "Anime KWGT Widgets, KLWP Live Wallpapers & Curated Backgrounds.",
    requiresAndroid: "Android 5.0 to Android 16 (Requires KWGT/KLWP Pro)",
    icon: anisetIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.aniset",
    websiteLink: "https://aniset.psatyakiran.in",
    directPurchase: {
      inPrice: "₹160",
      globalPrice: "$1.68",
      telegramUser: "skdev1",
      telegramLink: "https://t.me/skdev1",
      upiMessage: "Hi Satya, I'd like to purchase Aniset via UPI for ₹160. Please share the payment details and redeem code instructions.",
      paypalMessage: "Hi Satya, I'd like to purchase Aniset via PayPal for $1.68. Please share the payment link and redeem code instructions."
    },
    highlights: [
      "Anime-inspired KWGT & KLWP widget designs",
      "Curated high-quality anime wallpaper section",
      "Deep customization: Colors, fonts & layouts",
      "Seamless integration with KWGT & KLWP Pro",
      "Android 5.0 to Android 16 Supported",
      "Compatible with smartphones & tablets",
      "100% Ad-Free premium experience"
    ],
    features: [
      {
        icon: "✨",
        title: "Anime-Inspired Designs",
        subtitle: "Iconic characters, scenes, and aesthetic themes.",
        points: [
          "Beautifully crafted widgets featuring iconic characters and anime series elements.",
          "Captivating aesthetics that transform your home screen into a true anime wonderland."
        ]
      },
      {
        icon: "🖼️",
        title: "Curated Wallpaper Section",
        subtitle: "High-resolution backgrounds matching widget palettes.",
        points: [
          "Curated selection of high-quality anime wallpapers designed to complement the widgets.",
          "Set the perfect aesthetic mood for your launcher with breathtaking anime art."
        ]
      },
      {
        icon: "🎨",
        title: "Customization Galore",
        subtitle: "Tailor every widget to match your unique style.",
        points: [
          "Extensive options to adjust colors, fonts, and layout elements.",
          "Create a truly personalized and unique home screen experience."
        ]
      },
      {
        icon: "⚙️",
        title: "KWGT & KLWP Integration",
        subtitle: "Full power of KWGT widgets & KLWP dynamic wallpapers.",
        points: [
          "Seamlessly import and customize within KWGT and KLWP apps.",
          "Requires the KWGT app and KWGT Pro key (or KLWP Pro) to apply."
        ]
      },
      {
        icon: "🔄",
        title: "User-Friendly & Regular Updates",
        subtitle: "Simple setup with continuous aesthetic additions.",
        points: [
          "Effortlessly browse and apply widgets with just a few taps.",
          "Dedicated updates bringing fresh anime aesthetics and designs."
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        user: "선배야쿠자",
        date: "8 February 2024",
        rating: 5,
        comment: "This widget is best in Play Store and it's a game-changer! It's sleek, customizable, and makes app discovery and management a breeze. The developer support for this widget is top-notch. Any questions or issues I had were quickly resolved, and he is very responsive and helpful. It's clear that he is dedicated to providing a great user experience. Great job!",
        developerResponse: {
          author: "Satya Kiran",
          date: "8 February 2024",
          comment: "Thanks for your valuable review"
        }
      },
      {
        id: 2,
        user: "Gaurav Kumar",
        date: "13 July 2024",
        rating: 5,
        comment: "Using it since one year and really like it's widgets. And developer thank you for your efforts.",
        developerResponse: {
          author: "Satya Kiran",
          date: "13 July 2024",
          comment: "Thanks for using our app. Thanks for postive review"
        }
      },
      {
        id: 3,
        user: "Nate Westby",
        date: "27 December 2023",
        rating: 4,
        comment: "Great widget and wall set. Only found 1 locked widget (I hate those). Gonna keep.",
        developerResponse: {
          author: "Satya Kiran",
          date: "27 December 2023",
          comment: "Thanks for your feedback. We try to fix in next update. Tell us more details about that locked widget in our mail - satyakiran296@gmail.com"
        }
      },
      {
        id: 4,
        user: "Amartya Anand",
        date: "13 September 2024",
        rating: 5,
        comment: "Awesome widgets especially the anya one looks cool",
        developerResponse: {
          author: "Satya Kiran",
          date: "13 September 2024",
          comment: "Thanks for review 😃"
        }
      },
      {
        id: 5,
        user: "Fatema !",
        date: "16 October 2024",
        rating: 5,
        comment: "I'm in Love with this Kwgt & Klwp 🥹🩷 thank you so much",
        developerResponse: {
          author: "Satya Kiran",
          date: "7 November 2024",
          comment: "Thanks for your review"
        }
      },
      {
        id: 6,
        user: "A Koushik",
        date: "26 December 2023",
        rating: 5,
        comment: "Thanks You for making anime kwgt ❤️❤️❤️",
        developerResponse: {
          author: "Satya Kiran",
          date: "26 December 2023",
          comment: "Thanks for postive feedback"
        }
      },
      {
        id: 7,
        user: "Satyakiran Pampana",
        date: "3 April 2024",
        rating: 5,
        comment: "Good app 😁",
        developerResponse: {
          author: "Satya Kiran",
          date: "15 August 2026",
          comment: "Thank you for downloading our app! We will keep working on it!"
        }
      },
      {
        id: 8,
        user: "Ma Saren",
        date: "19 February 2026",
        rating: 5,
        comment: "Aesthetic Enthusiast",
        developerResponse: {
          author: "Satya Kiran",
          date: "20 February 2026",
          comment: "Thanks for review 😃"
        }
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
];
