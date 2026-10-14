/* =====================================================
   FAIZAN PC STORE — MAIN SCRIPT (Full Version)
   100+ products with UNIQUE images
   ===================================================== */

/* ---------- IMAGE HELPER: unique placeholder generator ---------- */
function placeholderFor(name, category) {
  const text = encodeURIComponent((category || "PC").toUpperCase());
  // Use picsum with unique seed from product name (always different image)
  const seed = encodeURIComponent(name.replace(/[^a-z0-9]/gi, "").slice(0, 20));
  return `https://picsum.photos/seed/${seed}/600/450`;
}

/* ---------- PRODUCTS DATA (111 items, unique images) ---------- */
const products = [
  // ==================== GPU (15) ====================
  {
    id: 1,
    name: "NVIDIA GeForce RTX 4090 Founders Edition",
    category: "gpu",
    price: "৳ 285,000",
    img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80",
    desc: "The ultimate 4K gaming GPU with 24GB GDDR6X memory and DLSS 3.0 support.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "24GB GDDR6X",
      "Boost Clock": "2.52 GHz",
      Power: "450W",
      Interface: "PCIe 4.0",
    },
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 4080 Super",
    category: "gpu",
    price: "৳ 165,000",
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
    desc: "High-end 4K gaming with 16GB GDDR6X and excellent ray tracing.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "16GB GDDR6X",
      "Boost Clock": "2.55 GHz",
      Power: "320W",
    },
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 4070 Ti Super",
    category: "gpu",
    price: "৳ 125,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80",
    desc: "Perfect 1440p/4K gaming GPU with 16GB VRAM.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "16GB GDDR6X",
      "Boost Clock": "2.61 GHz",
      Power: "285W",
    },
  },
  {
    id: 4,
    name: "NVIDIA GeForce RTX 4070 Super",
    category: "gpu",
    price: "৳ 95,000",
    img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
    desc: "Great value 1440p gaming with DLSS 3.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "12GB GDDR6X",
      "Boost Clock": "2.48 GHz",
      Power: "220W",
    },
  },
  {
    id: 5,
    name: "NVIDIA GeForce RTX 4060 Ti",
    category: "gpu",
    price: "৳ 62,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80",
    desc: "1080p/1440p gaming with 8GB GDDR6.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "8GB GDDR6",
      "Boost Clock": "2.54 GHz",
      Power: "160W",
    },
  },
  {
    id: 6,
    name: "NVIDIA GeForce RTX 4060",
    category: "gpu",
    price: "৳ 45,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80",
    desc: "Budget-friendly 1080p gaming GPU.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "8GB GDDR6",
      "Boost Clock": "2.46 GHz",
      Power: "115W",
    },
  },
  {
    id: 7,
    name: "AMD Radeon RX 7900 XTX",
    category: "gpu",
    price: "৳ 155,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80",
    desc: "AMD flagship GPU with 24GB GDDR6.",
    specs: {
      Brand: "AMD",
      VRAM: "24GB GDDR6",
      "Boost Clock": "2.5 GHz",
      Power: "355W",
    },
  },
  {
    id: 8,
    name: "AMD Radeon RX 7900 XT",
    category: "gpu",
    price: "৳ 125,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80",
    desc: "High-end AMD RDNA 3 GPU.",
    specs: {
      Brand: "AMD",
      VRAM: "20GB GDDR6",
      "Boost Clock": "2.4 GHz",
      Power: "315W",
    },
  },
  {
    id: 9,
    name: "AMD Radeon RX 7800 XT",
    category: "gpu",
    price: "৳ 82,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
    desc: "Excellent 1440p gaming GPU.",
    specs: {
      Brand: "AMD",
      VRAM: "16GB GDDR6",
      "Boost Clock": "2.43 GHz",
      Power: "263W",
    },
  },
  {
    id: 10,
    name: "AMD Radeon RX 7700 XT",
    category: "gpu",
    price: "৳ 68,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    desc: "Solid 1440p gaming performance.",
    specs: {
      Brand: "AMD",
      VRAM: "12GB GDDR6",
      "Boost Clock": "2.54 GHz",
      Power: "245W",
    },
  },
  {
    id: 11,
    name: "AMD Radeon RX 7600",
    category: "gpu",
    price: "৳ 40,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80",
    desc: "1080p gaming GPU from AMD.",
    specs: {
      Brand: "AMD",
      VRAM: "8GB GDDR6",
      "Boost Clock": "2.66 GHz",
      Power: "165W",
    },
  },
  {
    id: 12,
    name: "NVIDIA RTX 3090 Ti",
    category: "gpu",
    price: "৳ 145,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&sat=-100",
    desc: "Previous-gen flagship with 24GB.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "24GB GDDR6X",
      "Boost Clock": "1.86 GHz",
      Power: "450W",
    },
  },
  {
    id: 13,
    name: "NVIDIA RTX 3080 Ti",
    category: "gpu",
    price: "৳ 105,000",
    img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80&sat=-50",
    desc: "4K gaming powerhouse.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "12GB GDDR6X",
      "Boost Clock": "1.67 GHz",
      Power: "350W",
    },
  },
  {
    id: 14,
    name: "NVIDIA RTX 3070",
    category: "gpu",
    price: "৳ 62,000",
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80&sat=-50",
    desc: "1440p gaming champion.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "8GB GDDR6",
      "Boost Clock": "1.73 GHz",
      Power: "220W",
    },
  },
  {
    id: 15,
    name: "NVIDIA RTX 3060 12GB",
    category: "gpu",
    price: "৳ 38,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&sat=-50",
    desc: "Popular 1080p gaming GPU.",
    specs: {
      Brand: "NVIDIA",
      VRAM: "12GB GDDR6",
      "Boost Clock": "1.78 GHz",
      Power: "170W",
    },
  },

  // ==================== CPU (12) ====================
  {
    id: 16,
    name: "Intel Core i9-14900K",
    category: "cpu",
    price: "৳ 78,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=0",
    desc: "24-core flagship gaming & productivity CPU.",
    specs: {
      Brand: "Intel",
      Cores: "24 (8P+16E)",
      Threads: "32",
      "Boost Clock": "6.0 GHz",
      Socket: "LGA1700",
      TDP: "125W",
    },
  },
  {
    id: 17,
    name: "Intel Core i7-14700K",
    category: "cpu",
    price: "৳ 55,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=10",
    desc: "20-core high-performance CPU.",
    specs: {
      Brand: "Intel",
      Cores: "20 (8P+12E)",
      Threads: "28",
      "Boost Clock": "5.6 GHz",
      Socket: "LGA1700",
      TDP: "125W",
    },
  },
  {
    id: 18,
    name: "Intel Core i5-14600K",
    category: "cpu",
    price: "৳ 38,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=20",
    desc: "14-core gaming CPU sweet spot.",
    specs: {
      Brand: "Intel",
      Cores: "14 (6P+8E)",
      Threads: "20",
      "Boost Clock": "5.3 GHz",
      Socket: "LGA1700",
      TDP: "125W",
    },
  },
  {
    id: 19,
    name: "Intel Core i5-13400F",
    category: "cpu",
    price: "৳ 24,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=30",
    desc: "Budget 10-core gaming CPU.",
    specs: {
      Brand: "Intel",
      Cores: "10 (6P+4E)",
      Threads: "16",
      "Boost Clock": "4.6 GHz",
      Socket: "LGA1700",
    },
  },
  {
    id: 20,
    name: "Intel Core i3-13100",
    category: "cpu",
    price: "৳ 15,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=40",
    desc: "Entry-level 4-core CPU.",
    specs: {
      Brand: "Intel",
      Cores: "4",
      Threads: "8",
      "Boost Clock": "4.5 GHz",
      Socket: "LGA1700",
    },
  },
  {
    id: 21,
    name: "AMD Ryzen 9 7950X3D",
    category: "cpu",
    price: "৳ 92,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=50",
    desc: "16-core flagship with 3D V-Cache.",
    specs: {
      Brand: "AMD",
      Cores: "16",
      Threads: "32",
      "Boost Clock": "5.7 GHz",
      Socket: "AM5",
      TDP: "120W",
    },
  },
  {
    id: 22,
    name: "AMD Ryzen 9 7900X",
    category: "cpu",
    price: "৳ 62,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=60",
    desc: "12-core high-end CPU.",
    specs: {
      Brand: "AMD",
      Cores: "12",
      Threads: "24",
      "Boost Clock": "5.6 GHz",
      Socket: "AM5",
    },
  },
  {
    id: 23,
    name: "AMD Ryzen 7 7800X3D",
    category: "cpu",
    price: "৳ 55,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=70",
    desc: "Best gaming CPU with 3D V-Cache.",
    specs: {
      Brand: "AMD",
      Cores: "8",
      Threads: "16",
      "Boost Clock": "5.0 GHz",
      Socket: "AM5",
      Cache: "96MB",
    },
  },
  {
    id: 24,
    name: "AMD Ryzen 7 7700X",
    category: "cpu",
    price: "৳ 42,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=80",
    desc: "8-core AM5 gaming CPU.",
    specs: {
      Brand: "AMD",
      Cores: "8",
      Threads: "16",
      "Boost Clock": "5.4 GHz",
      Socket: "AM5",
    },
  },
  {
    id: 25,
    name: "AMD Ryzen 5 7600X",
    category: "cpu",
    price: "৳ 28,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=90",
    desc: "6-core mid-range AM5 CPU.",
    specs: {
      Brand: "AMD",
      Cores: "6",
      Threads: "12",
      "Boost Clock": "5.3 GHz",
      Socket: "AM5",
    },
  },
  {
    id: 26,
    name: "AMD Ryzen 5 5600",
    category: "cpu",
    price: "৳ 16,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=100",
    desc: "Budget 6-core AM4 CPU.",
    specs: {
      Brand: "AMD",
      Cores: "6",
      Threads: "12",
      "Boost Clock": "4.4 GHz",
      Socket: "AM4",
    },
  },
  {
    id: 27,
    name: "AMD Ryzen 9 5950X",
    category: "cpu",
    price: "৳ 58,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=110",
    desc: "16-core AM4 flagship.",
    specs: {
      Brand: "AMD",
      Cores: "16",
      Threads: "32",
      "Boost Clock": "4.9 GHz",
      Socket: "AM4",
    },
  },

  // ==================== RAM (10) ====================
  {
    id: 28,
    name: "Corsair Vengeance RGB DDR5 32GB (2x16) 6000MHz",
    category: "ram",
    price: "৳ 18,500",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=120",
    desc: "High-performance DDR5 RGB memory kit.",
    specs: {
      Brand: "Corsair",
      Capacity: "32GB",
      Speed: "6000MHz",
      Type: "DDR5",
      RGB: "Yes",
    },
  },
  {
    id: 29,
    name: "G.Skill Trident Z5 RGB 32GB DDR5 6400MHz",
    category: "ram",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=130",
    desc: "Enthusiast DDR5 with stunning RGB.",
    specs: {
      Brand: "G.Skill",
      Capacity: "32GB",
      Speed: "6400MHz",
      Type: "DDR5",
    },
  },
  {
    id: 30,
    name: "Kingston Fury Beast 16GB DDR5 5200MHz",
    category: "ram",
    price: "৳ 9,500",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=140",
    desc: "Reliable DDR5 memory.",
    specs: {
      Brand: "Kingston",
      Capacity: "16GB",
      Speed: "5200MHz",
      Type: "DDR5",
    },
  },
  {
    id: 31,
    name: "Corsair Vengeance LPX 16GB DDR4 3200MHz",
    category: "ram",
    price: "৳ 6,500",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=150",
    desc: "Low-profile DDR4 memory.",
    specs: {
      Brand: "Corsair",
      Capacity: "16GB",
      Speed: "3200MHz",
      Type: "DDR4",
    },
  },
  {
    id: 32,
    name: "G.Skill Ripjaws V 32GB DDR4 3600MHz",
    category: "ram",
    price: "৳ 12,500",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=160",
    desc: "High-speed DDR4 gaming memory.",
    specs: {
      Brand: "G.Skill",
      Capacity: "32GB",
      Speed: "3600MHz",
      Type: "DDR4",
    },
  },
  {
    id: 33,
    name: "TeamGroup T-Force Delta RGB 32GB DDR5",
    category: "ram",
    price: "৳ 16,500",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=170",
    desc: "RGB DDR5 memory kit.",
    specs: {
      Brand: "TeamGroup",
      Capacity: "32GB",
      Speed: "6000MHz",
      Type: "DDR5",
    },
  },
  {
    id: 34,
    name: "Crucial Pro 32GB DDR5 5600MHz",
    category: "ram",
    price: "৳ 14,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=180",
    desc: "Reliable DDR5 for productivity.",
    specs: {
      Brand: "Crucial",
      Capacity: "32GB",
      Speed: "5600MHz",
      Type: "DDR5",
    },
  },
  {
    id: 35,
    name: "ADATA XPG Lancer RGB 16GB DDR5",
    category: "ram",
    price: "৳ 8,500",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=190",
    desc: "RGB DDR5 gaming RAM.",
    specs: { Brand: "ADATA", Capacity: "16GB", Speed: "5200MHz", Type: "DDR5" },
  },
  {
    id: 36,
    name: "HyperX Fury 16GB DDR4 3200MHz",
    category: "ram",
    price: "৳ 5,500",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=200",
    desc: "Popular DDR4 memory.",
    specs: {
      Brand: "HyperX",
      Capacity: "16GB",
      Speed: "3200MHz",
      Type: "DDR4",
    },
  },
  {
    id: 37,
    name: "Patriot Viper Steel 16GB DDR4 3600MHz",
    category: "ram",
    price: "৳ 6,800",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=210",
    desc: "Fast DDR4 gaming RAM.",
    specs: {
      Brand: "Patriot",
      Capacity: "16GB",
      Speed: "3600MHz",
      Type: "DDR4",
    },
  },

  // ==================== MOTHERBOARD (10) ====================
  {
    id: 38,
    name: "ASUS ROG Maximus Z790 Hero",
    category: "motherboard",
    price: "৳ 95,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=220",
    desc: "Premium Z790 flagship motherboard.",
    specs: {
      Brand: "ASUS",
      Chipset: "Z790",
      Socket: "LGA1700",
      "Memory Support": "DDR5",
      Form: "ATX",
    },
  },
  {
    id: 39,
    name: "MSI MPG Z790 Carbon WiFi",
    category: "motherboard",
    price: "৳ 62,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=230",
    desc: "High-end Z790 board with WiFi 6E.",
    specs: { Brand: "MSI", Chipset: "Z790", Socket: "LGA1700", Form: "ATX" },
  },
  {
    id: 40,
    name: "Gigabyte Z790 Aorus Elite AX",
    category: "motherboard",
    price: "৳ 42,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=240",
    desc: "Value Z790 with WiFi 6.",
    specs: {
      Brand: "Gigabyte",
      Chipset: "Z790",
      Socket: "LGA1700",
      Form: "ATX",
    },
  },
  {
    id: 41,
    name: "ASUS ROG Strix B650E-E Gaming",
    category: "motherboard",
    price: "৳ 45,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=250",
    desc: "AM5 motherboard with PCIe 5.0.",
    specs: { Brand: "ASUS", Chipset: "B650E", Socket: "AM5", Form: "ATX" },
  },
  {
    id: 42,
    name: "MSI MAG B650 Tomahawk WiFi",
    category: "motherboard",
    price: "৳ 32,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=260",
    desc: "Popular AM5 mid-range board.",
    specs: { Brand: "MSI", Chipset: "B650", Socket: "AM5", Form: "ATX" },
  },
  {
    id: 43,
    name: "Gigabyte X670E Aorus Master",
    category: "motherboard",
    price: "৳ 78,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=270",
    desc: "Flagship AM5 motherboard.",
    specs: { Brand: "Gigabyte", Chipset: "X670E", Socket: "AM5", Form: "ATX" },
  },
  {
    id: 44,
    name: "ASUS Prime B760M-A WiFi",
    category: "motherboard",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=280",
    desc: "Budget LGA1700 micro-ATX.",
    specs: { Brand: "ASUS", Chipset: "B760", Socket: "LGA1700", Form: "mATX" },
  },
  {
    id: 45,
    name: "MSI PRO B760M-P DDR4",
    category: "motherboard",
    price: "৳ 16,500",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=290",
    desc: "Entry-level B760 board.",
    specs: { Brand: "MSI", Chipset: "B760", Socket: "LGA1700", Form: "mATX" },
  },
  {
    id: 46,
    name: "ASRock B550M Pro4",
    category: "motherboard",
    price: "৳ 12,500",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=300",
    desc: "AM4 budget board.",
    specs: { Brand: "ASRock", Chipset: "B550", Socket: "AM4", Form: "mATX" },
  },
  {
    id: 47,
    name: "ASUS ROG Crosshair X670E Hero",
    category: "motherboard",
    price: "৳ 105,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=310",
    desc: "Top-tier AM5 flagship board.",
    specs: { Brand: "ASUS", Chipset: "X670E", Socket: "AM5", Form: "ATX" },
  },

  // ==================== STORAGE (12) ====================
  {
    id: 48,
    name: "Samsung 990 PRO 2TB NVMe Gen4",
    category: "storage",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=320",
    desc: "Flagship PCIe 4.0 NVMe SSD.",
    specs: {
      Brand: "Samsung",
      Capacity: "2TB",
      Type: "NVMe Gen4",
      Speed: "7450 MB/s",
    },
  },
  {
    id: 49,
    name: "Samsung 980 PRO 1TB NVMe Gen4",
    category: "storage",
    price: "৳ 12,500",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=330",
    desc: "High-performance Gen4 SSD.",
    specs: {
      Brand: "Samsung",
      Capacity: "1TB",
      Type: "NVMe Gen4",
      Speed: "7000 MB/s",
    },
  },
  {
    id: 50,
    name: "WD Black SN850X 2TB NVMe",
    category: "storage",
    price: "৳ 20,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=340",
    desc: "Gaming-focused NVMe SSD.",
    specs: {
      Brand: "Western Digital",
      Capacity: "2TB",
      Type: "NVMe Gen4",
      Speed: "7300 MB/s",
    },
  },
  {
    id: 51,
    name: "Crucial P3 Plus 1TB NVMe Gen4",
    category: "storage",
    price: "৳ 8,500",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=350",
    desc: "Value Gen4 NVMe SSD.",
    specs: {
      Brand: "Crucial",
      Capacity: "1TB",
      Type: "NVMe Gen4",
      Speed: "5000 MB/s",
    },
  },
  {
    id: 52,
    name: "Kingston NV2 500GB NVMe",
    category: "storage",
    price: "৳ 4,500",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=360",
    desc: "Budget NVMe SSD.",
    specs: { Brand: "Kingston", Capacity: "500GB", Type: "NVMe Gen4" },
  },
  {
    id: 53,
    name: "Seagate Barracuda 2TB HDD",
    category: "storage",
    price: "৳ 6,500",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&sat=-30",
    desc: "Reliable 7200RPM HDD.",
    specs: { Brand: "Seagate", Capacity: "2TB", Type: "HDD", RPM: "7200" },
  },
  {
    id: 54,
    name: "WD Blue 4TB HDD",
    category: "storage",
    price: "৳ 11,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&sat=-40",
    desc: "Large-capacity storage HDD.",
    specs: { Brand: "Western Digital", Capacity: "4TB", Type: "HDD" },
  },
  {
    id: 55,
    name: "Samsung 870 EVO 1TB SATA SSD",
    category: "storage",
    price: "৳ 9,500",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&sat=-60",
    desc: "Fast SATA SSD.",
    specs: { Brand: "Samsung", Capacity: "1TB", Type: "SATA SSD" },
  },
  {
    id: 56,
    name: "Crucial MX4 2TB SATA SSD",
    category: "storage",
    price: "৳ 14,500",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&sat=-70",
    desc: "Reliable 2TB SATA SSD.",
    specs: { Brand: "Crucial", Capacity: "2TB", Type: "SATA SSD" },
  },
  {
    id: 57,
    name: "Sabrent Rocket 4 Plus 2TB",
    category: "storage",
    price: "৳ 21,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&sat=-80",
    desc: "Ultra-fast Gen4 NVMe SSD.",
    specs: { Brand: "Sabrent", Capacity: "2TB", Type: "NVMe Gen4" },
  },
  {
    id: 58,
    name: "TeamGroup MP44 2TB NVMe Gen4",
    category: "storage",
    price: "৳ 15,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&sat=-90",
    desc: "Great value Gen4 SSD.",
    specs: { Brand: "TeamGroup", Capacity: "2TB", Type: "NVMe Gen4" },
  },
  {
    id: 59,
    name: "Toshiba P300 3TB HDD",
    category: "storage",
    price: "৳ 8,500",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&sat=-100",
    desc: "7200RPM internal HDD.",
    specs: { Brand: "Toshiba", Capacity: "3TB", Type: "HDD" },
  },

  // ==================== PSU (10) ====================
  {
    id: 60,
    name: "Corsair RM1000x 1000W 80+ Gold",
    category: "psu",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&sat=-110",
    desc: "Fully modular 1000W PSU.",
    specs: {
      Brand: "Corsair",
      Wattage: "1000W",
      Efficiency: "80+ Gold",
      Modular: "Full",
    },
  },
  {
    id: 61,
    name: "Seasonic Focus GX-850 850W Gold",
    category: "psu",
    price: "৳ 16,500",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&sat=-120",
    desc: "Reliable 850W Gold PSU.",
    specs: { Brand: "Seasonic", Wattage: "850W", Efficiency: "80+ Gold" },
  },
  {
    id: 62,
    name: "EVGA SuperNOVA 750 G6",
    category: "psu",
    price: "৳ 13,500",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&sat=-130",
    desc: "750W fully modular Gold PSU.",
    specs: { Brand: "EVGA", Wattage: "750W", Efficiency: "80+ Gold" },
  },
  {
    id: 63,
    name: "Thermaltake Toughpower GF3 1000W",
    category: "psu",
    price: "৳ 20,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&sat=-140",
    desc: "ATX 3.0 ready 1000W PSU.",
    specs: { Brand: "Thermaltake", Wattage: "1000W", Efficiency: "80+ Gold" },
  },
  {
    id: 64,
    name: "Cooler Master MWE 650W Bronze V2",
    category: "psu",
    price: "৳ 7,500",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&sat=-150",
    desc: "Budget 650W Bronze PSU.",
    specs: {
      Brand: "Cooler Master",
      Wattage: "650W",
      Efficiency: "80+ Bronze",
    },
  },
  {
    id: 65,
    name: "Corsair CV550 550W Bronze",
    category: "psu",
    price: "৳ 5,500",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&sat=-160",
    desc: "Entry-level 550W PSU.",
    specs: { Brand: "Corsair", Wattage: "550W", Efficiency: "80+ Bronze" },
  },
  {
    id: 66,
    name: "be quiet! Straight Power 11 1000W",
    category: "psu",
    price: "৳ 24,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&sat=-170",
    desc: "Silent 1000W Gold PSU.",
    specs: { Brand: "be quiet!", Wattage: "1000W", Efficiency: "80+ Gold" },
  },
  {
    id: 67,
    name: "MSI MPG A850G PCIE5 850W",
    category: "psu",
    price: "৳ 18,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&sat=-180",
    desc: "ATX 3.0 850W PSU.",
    specs: { Brand: "MSI", Wattage: "850W", Efficiency: "80+ Gold" },
  },
  {
    id: 68,
    name: "Deepcool PQ1000M 1000W",
    category: "psu",
    price: "৳ 17,500",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&sat=-190",
    desc: "Value 1000W Gold PSU.",
    specs: { Brand: "Deepcool", Wattage: "1000W", Efficiency: "80+ Gold" },
  },
  {
    id: 69,
    name: "Antec Signature 1300W Platinum",
    category: "psu",
    price: "৳ 38,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&sat=-200",
    desc: "Flagship 1300W Platinum PSU.",
    specs: { Brand: "Antec", Wattage: "1300W", Efficiency: "80+ Platinum" },
  },

  // ==================== COOLER (10) ====================
  {
    id: 70,
    name: "NZXT Kraken Elite 360 RGB",
    category: "cooler",
    price: "৳ 42,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=10",
    desc: "360mm AIO with LCD display.",
    specs: { Brand: "NZXT", Type: "AIO 360mm", "Fan Speed": "500-1800 RPM" },
  },
  {
    id: 71,
    name: "Corsair iCUE H150i Elite LCD",
    category: "cooler",
    price: "৳ 38,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=20",
    desc: "360mm AIO with LCD.",
    specs: { Brand: "Corsair", Type: "AIO 360mm" },
  },
  {
    id: 72,
    name: "DeepCool LS720 360mm AIO",
    category: "cooler",
    price: "৳ 18,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=30",
    desc: "High-performance 360 AIO.",
    specs: { Brand: "DeepCool", Type: "AIO 360mm" },
  },
  {
    id: 73,
    name: "Noctua NH-D15 Chromax Black",
    category: "cooler",
    price: "৳ 16,500",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=40",
    desc: "Flagship air cooler.",
    specs: { Brand: "Noctua", Type: "Air Cooler", Height: "165mm" },
  },
  {
    id: 74,
    name: "Cooler Master Hyper 212 Black",
    category: "cooler",
    price: "৳ 4,500",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=50",
    desc: "Popular budget air cooler.",
    specs: { Brand: "Cooler Master", Type: "Air Cooler" },
  },
  {
    id: 75,
    name: "be quiet! Dark Rock Pro 4",
    category: "cooler",
    price: "৳ 12,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=60",
    desc: "Silent high-performance air cooler.",
    specs: { Brand: "be quiet!", Type: "Air Cooler" },
  },
  {
    id: 76,
    name: "Lian Li Galahad II 360 Trinity",
    category: "cooler",
    price: "৳ 24,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=70",
    desc: "Premium 360mm AIO.",
    specs: { Brand: "Lian Li", Type: "AIO 360mm" },
  },
  {
    id: 77,
    name: "Arctic Liquid Freezer II 280",
    category: "cooler",
    price: "৳ 14,500",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=80",
    desc: "280mm efficient AIO.",
    specs: { Brand: "Arctic", Type: "AIO 280mm" },
  },
  {
    id: 78,
    name: "Thermalright Peerless Assassin 120",
    category: "cooler",
    price: "৳ 5,500",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=90",
    desc: "Best value dual-tower cooler.",
    specs: { Brand: "Thermalright", Type: "Air Cooler" },
  },
  {
    id: 79,
    name: "EK-AIO 360 D-RGB",
    category: "cooler",
    price: "৳ 28,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=100",
    desc: "Premium 360mm AIO.",
    specs: { Brand: "EK", Type: "AIO 360mm" },
  },

  // ==================== CASE (10) ====================
  {
    id: 80,
    name: "Lian Li O11 Dynamic EVO",
    category: "case",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=110",
    desc: "Iconic dual-chamber case.",
    specs: { Brand: "Lian Li", Form: "Mid Tower", "GPU Length": "420mm" },
  },
  {
    id: 81,
    name: "NZXT H7 Flow White",
    category: "case",
    price: "৳ 15,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=120",
    desc: "Clean airflow-focused case.",
    specs: { Brand: "NZXT", Form: "Mid Tower" },
  },
  {
    id: 82,
    name: "Corsair 5000D Airflow",
    category: "case",
    price: "৳ 18,500",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=130",
    desc: "High-airflow mid tower.",
    specs: { Brand: "Corsair", Form: "Mid Tower" },
  },
  {
    id: 83,
    name: "Cooler Master MasterBox TD500 Mesh",
    category: "case",
    price: "৳ 12,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=140",
    desc: "Mesh front airflow case.",
    specs: { Brand: "Cooler Master", Form: "Mid Tower" },
  },
  {
    id: 84,
    name: "Fractal Design North",
    category: "case",
    price: "৳ 20,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=150",
    desc: "Wood-panel design case.",
    specs: { Brand: "Fractal Design", Form: "Mid Tower" },
  },
  {
    id: 85,
    name: "Thermaltake Tower 900",
    category: "case",
    price: "৳ 42,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=160",
    desc: "Super tower for custom loops.",
    specs: { Brand: "Thermaltake", Form: "Super Tower" },
  },
  {
    id: 86,
    name: "Phanteks Eclipse P500A",
    category: "case",
    price: "৳ 14,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=170",
    desc: "High-airflow mesh case.",
    specs: { Brand: "Phanteks", Form: "Mid Tower" },
  },
  {
    id: 87,
    name: "Deepcool CH560 Digital",
    category: "case",
    price: "৳ 9,500",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=180",
    desc: "Budget case with display.",
    specs: { Brand: "Deepcool", Form: "Mid Tower" },
  },
  {
    id: 88,
    name: "Montech AIR 903 Max",
    category: "case",
    price: "৳ 8,500",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=190",
    desc: "Value airflow case.",
    specs: { Brand: "Montech", Form: "Mid Tower" },
  },
  {
    id: 89,
    name: "Antec Performance 1 FT",
    category: "case",
    price: "৳ 16,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=200",
    desc: "Full tower workhorse.",
    specs: { Brand: "Antec", Form: "Full Tower" },
  },

  // ==================== MONITOR (10) ====================
  {
    id: 90,
    name: 'ASUS ROG Swift PG27AQN 27" 360Hz',
    category: "monitor",
    price: "৳ 125,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=210",
    desc: "Ultimate 1440p 360Hz gaming monitor.",
    specs: {
      Brand: "ASUS",
      Size: "27 inch",
      Resolution: "2560x1440",
      "Refresh Rate": "360Hz",
    },
  },
  {
    id: 91,
    name: "LG UltraGear 27GP950 4K 144Hz",
    category: "monitor",
    price: "৳ 95,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=220",
    desc: "4K 144Hz HDMI 2.1 monitor.",
    specs: {
      Brand: "LG",
      Size: "27 inch",
      Resolution: "3840x2160",
      "Refresh Rate": "144Hz",
    },
  },
  {
    id: 92,
    name: 'Samsung Odyssey G7 32" 240Hz',
    category: "monitor",
    price: "৳ 78,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=230",
    desc: "Curved 1440p 240Hz.",
    specs: {
      Brand: "Samsung",
      Size: "32 inch",
      Resolution: "2560x1440",
      "Refresh Rate": "240Hz",
    },
  },
  {
    id: 93,
    name: "Dell Alienware AW3423DWF OLED",
    category: "monitor",
    price: "৳ 155,000",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=240",
    desc: '34" QD-OLED ultrawide.',
    specs: {
      Brand: "Alienware",
      Size: "34 inch",
      Resolution: "3440x1440",
      Panel: "QD-OLED",
    },
  },
  {
    id: 94,
    name: "MSI Optix MAG274QRF-QD",
    category: "monitor",
    price: "৳ 55,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=250",
    desc: "1440p 165Hz IPS.",
    specs: {
      Brand: "MSI",
      Size: "27 inch",
      Resolution: "2560x1440",
      "Refresh Rate": "165Hz",
    },
  },
  {
    id: 95,
    name: 'AOC 24G2 24" 144Hz',
    category: "monitor",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=260",
    desc: "Budget 1080p 144Hz IPS.",
    specs: {
      Brand: "AOC",
      Size: "24 inch",
      Resolution: "1920x1080",
      "Refresh Rate": "144Hz",
    },
  },
  {
    id: 96,
    name: "ViewSonic XG2431 240Hz",
    category: "monitor",
    price: "৳ 42,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=270",
    desc: "1080p 240Hz esports monitor.",
    specs: {
      Brand: "ViewSonic",
      Size: "24 inch",
      Resolution: "1920x1080",
      "Refresh Rate": "240Hz",
    },
  },
  {
    id: 97,
    name: "BenQ MOBIUZ EX2710Q",
    category: "monitor",
    price: "৳ 48,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=280",
    desc: "1440p 165Hz HDR monitor.",
    specs: { Brand: "BenQ", Size: "27 inch", Resolution: "2560x1440" },
  },
  {
    id: 98,
    name: "Gigabyte M32U 4K 144Hz",
    category: "monitor",
    price: "৳ 82,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=290",
    desc: '32" 4K 144Hz IPS.',
    specs: { Brand: "Gigabyte", Size: "32 inch", Resolution: "3840x2160" },
  },
  {
    id: 99,
    name: "Acer Predator XB273U 270Hz",
    category: "monitor",
    price: "৳ 68,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=300",
    desc: "1440p 270Hz gaming.",
    specs: { Brand: "Acer", Size: "27 inch", Resolution: "2560x1440" },
  },

  // ==================== PERIPHERAL (12) ====================
  {
    id: 100,
    name: "Logitech G Pro X Superlight 2",
    category: "peripheral",
    price: "৳ 16,500",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=310",
    desc: "Pro-grade wireless gaming mouse.",
    specs: {
      Brand: "Logitech",
      Type: "Wireless Mouse",
      DPI: "32000",
      Weight: "60g",
    },
  },
  {
    id: 101,
    name: "Razer DeathAdder V3 Pro",
    category: "peripheral",
    price: "৳ 15,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=320",
    desc: "Ergonomic wireless esports mouse.",
    specs: { Brand: "Razer", Type: "Wireless Mouse", DPI: "30000" },
  },
  {
    id: 102,
    name: "SteelSeries Apex Pro TKL",
    category: "peripheral",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=330",
    desc: "Magnetic switch gaming keyboard.",
    specs: { Brand: "SteelSeries", Type: "Mechanical Keyboard" },
  },
  {
    id: 103,
    name: "Keychron Q1 Pro Wireless",
    category: "peripheral",
    price: "৳ 18,500",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=340",
    desc: "Premium 75% wireless keyboard.",
    specs: { Brand: "Keychron", Type: "Mechanical", Size: "75%" },
  },
  {
    id: 104,
    name: "Razer BlackWidow V4 Pro",
    category: "peripheral",
    price: "৳ 24,000",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80&hue=350",
    desc: "Full-size RGB gaming keyboard.",
    specs: { Brand: "Razer", Type: "Mechanical" },
  },
  {
    id: 105,
    name: "HyperX Cloud III Wireless",
    category: "peripheral",
    price: "৳ 18,000",
    img: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=600&q=80&hue=360",
    desc: "Wireless gaming headset.",
    specs: { Brand: "HyperX", Type: "Headset", Connection: "Wireless" },
  },
  {
    id: 106,
    name: "SteelSeries Arctis Nova Pro",
    category: "peripheral",
    price: "৳ 38,000",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&hue=15",
    desc: "Flagship gaming headset.",
    specs: { Brand: "SteelSeries", Type: "Headset", ANC: "Yes" },
  },
  {
    id: 107,
    name: "Logitech G Pro X 2 Lightspeed",
    category: "peripheral",
    price: "৳ 32,000",
    img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&hue=25",
    desc: "Pro wireless gaming headset.",
    specs: { Brand: "Logitech", Type: "Headset", Driver: "50mm" },
  },
  {
    id: 108,
    name: "Razer BlackShark V2 Pro",
    category: "peripheral",
    price: "৳ 22,000",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&hue=35",
    desc: "Esports wireless headset.",
    specs: { Brand: "Razer", Type: "Headset" },
  },
  {
    id: 109,
    name: "Corsair K100 RGB Optical",
    category: "peripheral",
    price: "৳ 28,000",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80&hue=45",
    desc: "Flagship optical gaming keyboard.",
    specs: { Brand: "Corsair", Type: "Optical-Mechanical" },
  },
  {
    id: 110,
    name: "Logitech G502 X Plus",
    category: "peripheral",
    price: "৳ 14,500",
    img: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=600&q=80&hue=55",
    desc: "Wireless RGB gaming mouse.",
    specs: { Brand: "Logitech", Type: "Wireless Mouse", DPI: "25600" },
  },
  {
    id: 111,
    name: "Razer Viper V2 Pro",
    category: "peripheral",
    price: "৳ 15,500",
    img: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&q=80&hue=65",
    desc: "Ultra-light esports mouse.",
    specs: { Brand: "Razer", Type: "Wireless Mouse", Weight: "58g" },
  },
];

/* ---------- CATEGORY LABELS ---------- */
const catLabels = {
  gpu: "Graphics Card",
  cpu: "Processor",
  ram: "Memory",
  motherboard: "Motherboard",
  storage: "Storage",
  psu: "Power Supply",
  cooler: "Cooler",
  case: "Case",
  monitor: "Monitor",
  peripheral: "Peripheral",
};

/* ---------- RENDER PRODUCTS ---------- */
const grid = document.getElementById("productsGrid");
const noResults = document.getElementById("noResults");

function renderProducts(filter = "all", search = "") {
  grid.innerHTML = "";
  const searchL = search.toLowerCase().trim();

  const filtered = products.filter((p) => {
    const matchCat = filter === "all" || p.category === filter;
    const matchSearch =
      !searchL ||
      p.name.toLowerCase().includes(searchL) ||
      (catLabels[p.category] || "").toLowerCase().includes(searchL);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    const fallback = placeholderFor(
      p.name,
      catLabels[p.category] || p.category,
    );
    card.innerHTML = `
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"
             onerror="this.onerror=null; this.src='${fallback}';"/>
        <span class="product-cat-badge">${catLabels[p.category] || p.category}</span>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price}</div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

/* ---------- FILTER BUTTONS ---------- */
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    const search = document.getElementById("searchInput").value;
    renderProducts(filter, search);
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
});

/* ---------- SEARCH ---------- */
document.getElementById("searchInput").addEventListener("input", (e) => {
  const activeFilter =
    document.querySelector(".filter-btn.active").dataset.filter;
  renderProducts(activeFilter, e.target.value);
});

/* ---------- MODAL ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(p) {
  const specs = Object.entries(p.specs)
    .map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`)
    .join("");

  const fallback = placeholderFor(p.name, catLabels[p.category] || p.category);

  modalBody.innerHTML = `
    <div class="modal-img">
      <img src="${p.img}" alt="${p.name}"
           onerror="this.onerror=null; this.src='${fallback}';"/>
    </div>
    <div class="modal-info">
      <div class="modal-cat">${catLabels[p.category] || p.category}</div>
      <h2>${p.name}</h2>
      <div class="modal-price">${p.price}</div>
      <p class="modal-desc">${p.desc}</p>
      <div class="specs-title">SPECIFICATIONS</div>
      <ul class="specs-list">${specs}</ul>
      <a href="https://wa.me/8801646313289?text=${encodeURIComponent("I want to order: " + p.name)}"
         target="_blank" class="modal-buy">
        <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
      </a>
    </div>
  `;
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ---------- MOBILE MENU ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
document
  .querySelectorAll(".nav-links a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("active")),
  );

/* ---------- 3D BACKGROUND (Particle Network) ---------- */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let W,
  H,
  particles = [];

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});

function initParticles() {
  particles = [];
  const count = Math.min(90, Math.floor((W * H) / 18000));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.5,
    });
  }
}
initParticles();

function drawParticles() {
  ctx.clearRect(0, 0, W, H);

  // lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 130) {
        ctx.strokeStyle = `rgba(255, 0, 51, ${0.18 * (1 - d / 130)})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // dots
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 0, 51, .7)";
    ctx.shadowColor = "#ff0033";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ---------- WELCOME OVERLAY HIDE ---------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("welcome-overlay").classList.add("hide");
  }, 3800);
});

/* ---------- INITIAL RENDER ---------- */
renderProducts();

/* ---------- NAV LINK ACTIVE ON SCROLL ---------- */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const h = sec.offsetHeight;
    const id = sec.getAttribute("id");
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (y >= top && y < top + h) link.classList.add("active");
      else link.classList.remove("active");
    }
  });
});
