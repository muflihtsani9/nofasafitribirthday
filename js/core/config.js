/**
 * BUCIN — Cinematic Love Experience
 * Core Configuration System
 */

const CONFIG = {
  version: '2.0.0',
  debug: false,

  // ─── TIMING ───────────────────────────────────────────────────────
  timing: {
    preloaderMin: 2800,
    fadeIn: 1200,
    sectionTransition: 800,
    hoverDelay: 60,
    scrollThrottle: 16,
  },

  // ─── EASING ───────────────────────────────────────────────────────
  easing: {
    cinematic:   'power4.inOut',
    soft:        'power2.out',
    elastic:     'elastic.out(1, 0.4)',
    bounce:      'back.out(1.7)',
    silk:        'expo.out',
    brutal:      'power4.out',
    romantic:    'sine.inOut',
  },

  // ─── PARTICLES ────────────────────────────────────────────────────
  particles: {
    desktop: { count: 180, speed: 0.28, size: [0.8, 2.4] },
    tablet:  { count: 90,  speed: 0.22, size: [0.6, 1.8] },
    mobile:  { count: 45,  speed: 0.16, size: [0.5, 1.4] },
  },

  // ─── THREE.JS ─────────────────────────────────────────────────────
  three: {
    fov: 75,
    near: 0.1,
    far: 1000,
    cameraZ: 5,
    orbs: {
      desktop: 12,
      mobile: 6,
    },
    mouseInfluence: 0.035,
    scrollInfluence: 0.001,
  },

  // ─── BREAKPOINTS ──────────────────────────────────────────────────
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1440,
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────
  performance: {
    fpsTarget: 60,
    fpsLow: 30,
    adaptiveQuality: true,
    maxDegradationLevel: 3,
  },

  // ─── QUOTES ───────────────────────────────────────────────────────
  loadingQuotes: [
    "Every universe has a center of gravity...",
    "Some people are written in the stars.",
    "Love is the only geometry that curves time.",
    "You are the frequency I was always searching for.",
    "Before you, I was just noise. After you, I became music.",
    "There are infinite parallel universes. In all of them — you.",
  ],

  // ─── LOVE STORY DATA ──────────────────────────────────────────────
  timeline: [
    {
      date: "the Beginning",
      title: "Tau kamu lewat poster",
      quote: "kamu kaya 1 orang yang lucu banget di mata ku,saat poster rusher GL di kirim ke aku, n hal yang pertama aku tanyakan siapa aceu GL? n bg qi said itu kamu pikay",
      icon: "✦",
    },
    {
      date: "first word",
      title: "Game Bareng",
      quote: "aku senang main sama kamu seru bnget sampai ak g sadar kenapa cepet banget buat kita deket, but ak percaya kamu g akan main main",
      icon: "◈",
    },
    {
      date: "our first fight",
      title: "Crazyy",
      quote: "maaf aku belum cukup mengerti diri aku sendiri sampai kamu kebingungan sama sikap aku, ak harap setiap pertengakaran kita bisa selesaikan sama sama",
      icon: "◉",
    },
    {
      date: "the first time you complain about something",
      title: "the first time you complain about something",
      quote: "aku senang saat kamu mengeluh sama aku tentang hari hari berat kamu, karna aku merasa di hargai sama kamu",
      icon: "✧",
    },
    {
      date: "right now",
      title: "MEnU",
      quote: "aku senang banget bisa sama kamu, maaf jika ak bukan support yang baik tapi aku berusaha buat jadi apa yang hubungan ini butuhin",
      icon: "♡",
    },
  ],

  // ─── GALLERY CAPTIONS ─────────────────────────────────────────────
  //
  // CARA TAMBAH FOTO:
  //   1. Taruh file foto di folder:  assets/images/
  //   2. Isi field "img" dengan path-nya, contoh:
  //        img: 'assets/images/foto1.jpg'
  //   3. Kalau "img" dikosongkan (''), kartu tampil sebagai gradient placeholder
  //
  // Rasio foto ideal: 3:4 (portrait) — misal 600x800px atau 900x1200px
  //
  gallery: [
    { img: '', caption: "The way you look when you're not looking.", tag: "candid"   },
    { img: '', caption: "Late nights that turned into mornings.",     tag: "always"  },
    { img: '', caption: "Your laugh is genuinely a personality.",     tag: "chaos"   },
    { img: '', caption: "I memorized every version of you.",          tag: "favorite"},
    { img: '', caption: "Soft hours, golden light, you.",             tag: "ours"    },
    { img: '', caption: "The version of me that exists near you.",    tag: "best self"},
  ],
};

// Freeze to prevent accidental mutations
Object.freeze(CONFIG);
Object.freeze(CONFIG.timing);
Object.freeze(CONFIG.easing);
Object.freeze(CONFIG.particles);
Object.freeze(CONFIG.three);
Object.freeze(CONFIG.breakpoints);
Object.freeze(CONFIG.performance);

window.CONFIG = CONFIG;
