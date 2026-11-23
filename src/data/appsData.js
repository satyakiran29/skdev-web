


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
import anifyBanner from '../assets/app_bannners/anify.webp';

//gwalls images
// import gwallsIcon from '../assets/gwalls_icon.webp';
import gwallsbg from '../assets/gwalls/gwallsbg.webp';

// Milky Launcher images
import milkyIcon from '../assets/milky/milky-icon.webp';
import milkyScreenshot from '../assets/milky/home_screen.png';
import milkyLogo from '../assets/milky/logo.svg';
import milkyBanner from '../assets/app_bannners/milky.webp';


export const appsData = [
  {
    id: "anify",
    name: "Anify (Free)",
    tagline: "Personalization & Productivity Suite for Android",
    banner: anifyBanner,
    previewBanner: anifyBanner,
    screenshot: anifybg,
    screenshots: [anifys1, anifys2, anifys3, anifys4, anifys5, anifys6, anifys7],
    description: "Give your phone a complete makeover with Anify, the ultimate personalization and productivity app for Android. Get instant access to ready-to-use widgets, premium KWGT widget packs, HD wallpapers, trending ringtones, and a powerful focus blocker—all in one place. Whether you want instant widgets or advanced KWGT customization, Anify has you covered.",
    shortDesc: "Ready-to-use Widgets, KWGT Packs, Wallpapers, Ringtones & Focus Blocker.",
    requiresAndroid: "Android 7.0 to Android 16",
    icon: anifyIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.anify",
    websiteLink: "https://anify.psatyakiran.in/",
    highlights: [
      "Sticker Studio: Telegram to WhatsApp conversion and 1-tap export",
      "Ready-to-use widgets (no companion app required)",
      "KWGT widget packs and removal requests",
      "BlockIt: Focus Lock controls and app restrictor",
      "Automatic diagnostics and crash reports",
      "Targeting Android 16 (API 36) • Android 7.0+ supported",
      "Curated wallpapers and live calendars",
      "Ringtones and sound effects",
      "Free, ad-supported"
    ],
    features: [
      {
        icon: "palette",
        title: "Sticker Studio (Telegram → WhatsApp)",
        subtitle: "Convert and export Telegram sticker packs directly into WhatsApp in 1-tap.",
        points: [
          "Instant Conversion: Convert Telegram sticker packs to WhatsApp-ready formats.",
          "One-Tap Export: Send created packs straight to WhatsApp without third-party converters.",
          "High-fidelity rendering with transparent PNG/WebP background preservation."
        ]
      },
      {
        icon: "smartphone",
        title: "Ready-to-Use Widgets (No KWGT Required)",
        subtitle: "Add home screen widgets in seconds—no companion apps needed.",
        points: [
          "Aesthetic Clocks & Anisets: Minimal clock designs, anime-inspired time widgets, and custom dials.",
          "Real-Time System Monitors: Track CPU usage with dot-graph visualization, battery levels, and live network speed/data usage.",
          "Smart Utilities: Manage Bluetooth devices, track the sun's path, enable Caffeine mode, create sticky notes, and control music.",
          "Interactive Widgets: Wheel spinner and animated GIFs on your launcher."
        ]
      },
      {
        icon: "palette",
        title: "Premium KWGT Widget Packs",
        subtitle: "Advanced customization with beautifully crafted KWGT widget packs (Requires KWGT & KWGT Pro).",
        points: [
          "Curated widget designs with anime-inspired layouts.",
          "Minimal and Nothing-style widgets with regular updates.",
          "One-tap import directly into the KWGT app."
        ]
      },
      {
        icon: "lock",
        title: "BlockIt – Focus Lock & App Blocker",
        subtitle: "Built-in focus tools powered via Android's AccessibilityService API.",
        points: [
          "Lockdown Mode: Temporarily restrict distracting apps during work or study sessions.",
          "Focus Reports: Track focus duration with a 7-day activity chart.",
          "Anti-Impulse Protection: 3-second 'Hold to Give Up' confirmation barrier.",
          "Safe Whitelisting: Essential system apps remain accessible for emergencies."
        ]
      },
      {
        icon: "image",
        title: "Curated Wallpapers & Audio",
        subtitle: "Curated collection of aesthetic visuals and audio personalization.",
        points: [
          "AMOLED, Minimal, Anime, and Abstract wallpaper collections.",
          "Life Calendar Live Wallpaper & Auto Wallpaper Changer.",
          "Ringtones, notification sounds, and alarm tones."
        ]
      },
      {
        icon: "zap",
        title: "Battery Optimized Architecture",
        subtitle: "Built with modern Android guidelines for fluid responsiveness.",
        points: [
          "Lightweight interface with fluid transitions and native dark theme.",
          "Anify is completely free and supported by non-intrusive ads."
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
          comment: "Thank you for the review. I am glad you are enjoying the widgets and wallpapers. Your feedback is appreciated."
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
          comment: "Thanks for your valuable feedback."
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
          comment: "Thank you for the review and support. I am actively maintaining the app. If you have any feature ideas or notice any issues, feel free to join the Telegram community."
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
          comment: "Thank you for the support, glad you are enjoying the app."
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
          comment: "Thank you for your kind words and for coming from our Telegram community to support Anify. I hope you will continue to enjoy future updates."
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
          comment: "Thanks for your feedback. We are actively adding improvements and more live wallpapers will be included in upcoming releases."
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
          comment: "Please update to the latest version. The app also includes a Report Logs feature under diagnostics—please tap it and send the details to satyakiran296@gmail.com so we can investigate and fix this quickly."
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
          comment: "Thanks for your valuable feedback."
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
          comment: "Thanks for your valuable feedback."
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
          comment: "Thanks for your valuable feedback."
        }
      }
    ]
  },
  {
    id: "milky-launcher",
    name: "Milky Launcher (Upcoming)",
    status: "upcoming",
    releaseDate: "25 December 2026",
    tagline: "Dark, quiet, and out of the way",
    banner: milkyBanner,
    previewBanner: milkyBanner,
    screenshot: milkyBanner,
    screenshots: [milkyScreenshot],
    description: "Dark, quiet, and out of the way. Milky Launcher is an Android home screen launcher built natively with Jetpack Compose by Krishna Vishwakarma (@Spyou) & Satyakiran. Releasing on Google Play on 25 December 2026.",
    shortDesc: "Native Jetpack Compose Android launcher releasing on Google Play on 25 December 2026.",
    requiresAndroid: "Android 8.0+",
    icon: milkyIcon,
    logo: milkyLogo,
    playStoreLink: "Coming Soon",
    targetLaunchDate: "2026-12-25T00:00:00",
    telegramLink: "https://t.me/milkylc",
    websiteLink: "https://mlweb-skdev29.vercel.app/",
    coDevelopers: [
      {
        name: "Krishna Vishwakarma",
        handle: "@Spyou",
        role: "Lead Android & Compose Architect",
        bio: "Crafting native Jetpack Compose architectures, multi-tiered search algorithms, and spring-based spatial motion tokens.",
        avatar: "https://github.com/Spyou.png",
        github: "https://github.com/Spyou"
      },
      {
        name: "Satyakiran",
        handle: "skdevs",
        role: "Design System & Core Contributor",
        bio: "Building cosmic design tokens, Apple Glass acrylics, desktop widgets suite, and privacy-first systems at skdevs.",
        avatar: "https://github.com/satyakiran29.png",
        github: "https://github.com/satyakiran29",
        website: "https://skdev.psatyakiran.in/"
      }
    ],
    highlights: [
      "Target Google Play Release: 25 December 2026",
      "100% Native Jetpack Compose Architecture",
      "Zero internet & tracking permissions (100% private)",
      "Spring-based spatial motion physics tokens",
      "Adaptive circle icon masking with specular rims",
      "Multi-tiered smart search (prefix, word boundary, initials & substring)",
      "Modular native widgets: Sun Tracker, Battery Bottle, Life Calendar & Music",
      "AMOLED and acrylic glass theme presets",
      "On-device biometric fingerprint & pattern app lock"
    ],
    features: [
      {
        icon: "zap",
        title: "Spring-Based Motion Tokens",
        subtitle: "Spatial physics with natural tactile transitions.",
        points: [
          "Spatial springs tuned with calibrated physical bounce (damping 0.82, stiffness 420).",
          "Opacity and color transitions tuned to never overshoot.",
          "Fluid gestures designed for responsive tactile interaction."
        ]
      },
      {
        icon: "search",
        title: "Multi-Tiered Smart Search",
        subtitle: "Instant ranking across 4 tiers with zero lag.",
        points: [
          "Exact Prefix → Word Boundary → Initials Matching ('gps' finds Google Play Store) → Substring.",
          "Fuzzy matching with query fallback.",
          "Instant keyboard response without dropped frames."
        ]
      },
      {
        icon: "palette",
        title: "Adaptive Circle Masking",
        subtitle: "A uniform, calm visual system across all app icons.",
        points: [
          "Every app icon is dynamically masked into a clean, uniform circle.",
          "Subtle rim lighting for optical clarity.",
          "Supports standard appfilter.xml icon packs alongside native adaptive masking."
        ]
      },
      {
        icon: "clock",
        title: "Modular Native Widget Engine",
        subtitle: "Built-in desktop widgets without third-party battery overhead.",
        points: [
          "Astronomical Sun Tracker with real-time day/night curve.",
          "Battery level gauge with tactile readout.",
          "Life and year progress calendars with digital/analog clocks.",
          "Music controller with live playback controls."
        ]
      },
      {
        icon: "lock",
        title: "Zero Package Query Permissions & 100% Privacy",
        subtitle: "Strictly offline with no internet permission required.",
        points: [
          "Zero telemetry, zero network tracking, and zero advertising SDKs.",
          "Uses modern system LauncherApps framework instead of QUERY_ALL_PACKAGES.",
          "Work profiles display cleanly with native badges and zero battery drain."
        ]
      },
      {
        icon: "palette",
        title: "Deep Space & Acrylic Themes",
        subtitle: "Tailor the atmosphere from pure black to frosted acrylics.",
        points: [
          "Pure Black AMOLED for OLED battery conservation.",
          "Translucent acrylic surface aesthetics with blur.",
          "Dynamic Material You wallpaper color integration."
        ]
      },
      {
        icon: "grid",
        title: "Expressive Grid & Layout Control",
        subtitle: "Configure your canvas layout to your exact preference.",
        points: [
          "Columns configurable from 3 to 6; rows from 4 to 8.",
          "Toggle text labels, dock shelf, and folder groupings.",
          "Fluid drag-and-drop reordering with tactile haptic feedback."
        ]
      },
      {
        icon: "shield",
        title: "Biometric & Pattern App Lock",
        subtitle: "Protect sensitive apps with Android KeyStore security.",
        points: [
          "Secure banking, gallery, and messaging apps behind fingerprint or PIN.",
          "Discreet pattern lock with anti-peek shielding.",
          "100% on-device cryptographic verification using Android BiometricPrompt."
        ]
      }
    ],
    reviews: []
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
        icon: "palette",
        title: "Anime-Inspired Designs",
        subtitle: "Themed widgets with aesthetic character art.",
        points: [
          "Crafted widgets featuring iconic anime motifs and timepieces.",
          "Distinctive layouts that personalize your home screen."
        ]
      },
      {
        icon: "image",
        title: "Curated Wallpaper Section",
        subtitle: "High-resolution backgrounds matching widget palettes.",
        points: [
          "Curated selection of high-quality wallpapers designed to complement the widgets.",
          "Balanced tone and palettes matched for launcher readability."
        ]
      },
      {
        icon: "sliders",
        title: "Deep Customization",
        subtitle: "Tailor every widget to match your setup.",
        points: [
          "Extensive options to adjust colors, fonts, and layout elements.",
          "Personalized home screen configuration."
        ]
      },
      {
        icon: "settings",
        title: "KWGT & KLWP Integration",
        subtitle: "Full power of KWGT widgets & KLWP dynamic wallpapers.",
        points: [
          "Seamlessly import and customize within KWGT and KLWP apps.",
          "Requires the KWGT app and KWGT Pro key (or KLWP Pro) to apply."
        ]
      },
      {
        icon: "refresh-cw",
        title: "Reliable Maintenance & Updates",
        subtitle: "Simple setup with continuous design additions.",
        points: [
          "Browse and apply widgets with straightforward configuration.",
          "Periodic updates bringing new widgets and typography tweaks."
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
          comment: "Thanks for the review."
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
          comment: "Thanks for your review."
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
          comment: "Thanks for the positive feedback."
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
          comment: "Thank you for using the app."
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
          comment: "Thanks for the review."
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
