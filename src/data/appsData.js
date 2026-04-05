


import anisetIcon from '../assets/Aniset_logo.webp';
import anisetImg from '../assets/aniset_bg.webp';
//anify images
import anifyIcon from '../assets/anify/anifyicon.png';
import anifybg from '../assets/anify/anify_bg.png';
import anifyapp from '../assets/anify/anify1.jpeg';
import anifys1 from '../assets/anify/anify_screenshot (1).png';
import anifys2 from '../assets/anify/anify_screenshot (2).png';
import anifys3 from '../assets/anify/anify_screenshot (3).png';
import anifys4 from '../assets/anify/anify_screenshot (4).png';
import anifys5 from '../assets/anify/anify_screenshot (5).png';
import anifys6 from '../assets/anify/anify_screenshot (6).png';

//gwalls images
// import gwallsIcon from '../assets/gwalls_icon.png';
import gwallsbg from '../assets/gwalls/gwallsbg.png';


export const appsData = [
  {
    id:"gwalls",
    name: "Gwalls (Free)",
    screenshot: gwallsbg,
    description: "Gwalls is a free wallpaper app that offers a curated collection of high-quality, ad-free wallpapers. With a focus on privacy and user experience, Gwalls provides a seamless way to discover and set stunning wallpapers without any distractions.",
    shortDesc: "Ad-free wallpapers.",
    icon: "https://play-lh.googleusercontent.com/Fi0yymWa6vKSk_z-cfb9nzAYpPK6zE4dm_0kSKxJzjckJDMPpHRoIK1iMfCk8mpXSaZx=w240-h480-rw",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skdev.gwalls",
    websiteLink: "coming soon",
    reviews: [   ]
  },
  {
    id: "aniset",
    name: "Aniset (Paid)",
    screenshot: anisetImg,
    // screenshots: [anisetImg, anisetImg, anisetImg],
    description: "An incredibly elegant tool set and routing app. Features privacy-focused tools without compromising design. Everything you need, right at your fingertips.",
    shortDesc: "Elegant utility tools.",
    icon: anisetIcon,
    playStoreLink: "Coming Soon",
    websiteLink: "https://aniset.psatyakiran.in",
    directPurchase: {
      inPrice: '₹200',
      globalPrice: '$2.5',
      telegramLink: 'https://t.me/skdev1'
    },
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
   {
    id: "anify",
    name: "Anify (Free)",
    screenshot: anifybg,
    screenshots: [anifyapp, anifys1, anifys2, anifys3, anifys4, anifys5, anifys6],
    description: "Anify is an upcoming app that will feature a collection of beautifully designed, privacy-focused widgets, wallpapers, and ringtones. It aims to provide users with a seamless and ad-free experience while enhancing the aesthetics of their devices. without depending on any third-party services, ensuring your data remains private and secure.",
    shortDesc: "Widget,wallpaper,ringtone.",
    icon: anifyIcon,
    playStoreLink: "coming soon",
    websiteLink: "coming soon",
    reviews: [
      
    ]
  },
];
