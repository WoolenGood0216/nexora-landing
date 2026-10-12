"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Cpu,
  Headphones,
  Menu,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  X,
  Zap
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Nova Headphones",
    category: "AUDIO • WIRELESS",
    price: "Rp1.249.000",
    oldPrice: "Rp1.499.000",
    tag: "BEST SELLER",
    visual: "headphones",
    tone: "lime",
    description: "Audio imersif dengan noise cancelling adaptif."
  },
  {
    id: 2,
    name: "Pulse Smartwatch",
    category: "WEARABLE • GEN 3",
    price: "Rp899.000",
    oldPrice: "",
    tag: "NEW ARRIVAL",
    visual: "watch",
    tone: "purple",
    description: "Pantau aktivitas harian dalam desain minimal."
  },
  {
    id: 3,
    name: "Core Mechanical",
    category: "DESK SETUP • RGB",
    price: "Rp749.000",
    oldPrice: "Rp899.000",
    tag: "LIMITED DEAL",
    visual: "keyboard",
    tone: "blue",
    description: "Keyboard mekanikal presisi untuk setup kamu."
  }
];

const categories = [
  { name: "Audio", detail: "Suara yang terasa nyata", icon: Headphones, count: "12 produk" },
  { name: "Wearables", detail: "Teknologi yang bergerak", icon: Zap, count: "08 produk" },
  { name: "Aksesori", detail: "Upgrade ruang kerjamu", icon: Cpu, count: "24 produk" }
];

function ProductVisual({ visual }: { visual: string }) {
  if (visual === "headphones") {
    return (
      <svg viewBox="0 0 320 230" className="product-art" role="img" aria-label="Ilustrasi headphone futuristik">
        <defs>
          <linearGradient id="cup" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eff6e9" />
            <stop offset="55%" stopColor="#8d9a8a" />
            <stop offset="100%" stopColor="#333e3c" />
          </linearGradient>
          <linearGradient id="band" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d9ff9c" />
            <stop offset="100%" stopColor="#657e49" />
          </linearGradient>
        </defs>
        <ellipse cx="162" cy="195" rx="91" ry="13" fill="#b8ff5c" opacity=".12" />
        <path d="M83 126 V94 C83 42 117 19 161 19 C205 19 239 45 239 94 V126" fill="none" stroke="#242d2d" strokeWidth="23" strokeLinecap="round" />
        <path d="M83 124 V91 C83 45 118 26 161 26 C203 26 234 48 239 91 V124" fill="none" stroke="url(#band)" strokeWidth="13" strokeLinecap="round" />
        <rect x="59" y="103" width="49" height="81" rx="20" fill="url(#cup)" stroke="#d9ff9c" strokeOpacity=".45" />
        <rect x="212" y="103" width="49" height="81" rx="20" fill="url(#cup)" stroke="#d9ff9c" strokeOpacity=".45" />
        <rect x="69" y="115" width="29" height="57" rx="13" fill="#111915" />
        <rect x="222" y="115" width="29" height="57" rx="13" fill="#111915" />
        <path d="M76 121 Q83 117 90 121 M229 121 Q236 117 243 121" stroke="#b8ff5c" strokeWidth="2" opacity=".8" fill="none" />
        <circle cx="83" cy="151" r="3" fill="#b8ff5c" /><circle cx="236" cy="151" r="3" fill="#b8ff5c" />
      </svg>
    );
  }
  if (visual === "watch") {
    return (
      <svg viewBox="0 0 320 230" className="product-art" role="img" aria-label="Ilustrasi jam pintar">
        <defs><linearGradient id="watchmetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d9d4ff"/><stop offset="1" stopColor="#66618d"/></linearGradient></defs>
        <ellipse cx="160" cy="190" rx="67" ry="12" fill="#8b7cff" opacity=".2" />
        <g transform="rotate(-13 160 115)">
          <rect x="127" y="5" width="66" height="70" rx="22" fill="#35314e" />
          <rect x="127" y="155" width="66" height="70" rx="22" fill="#35314e" />
          <rect x="107" y="49" width="106" height="133" rx="31" fill="url(#watchmetal)" />
          <rect x="115" y="57" width="90" height="117" rx="25" fill="#0b0c17" stroke="#bcb4ff" strokeOpacity=".65" />
          <circle cx="160" cy="115" r="32" fill="none" stroke="#8b7cff" strokeWidth="7" strokeDasharray="155 50" transform="rotate(-90 160 115)" />
          <circle cx="160" cy="115" r="22" fill="none" stroke="#b8ff5c" strokeWidth="3" strokeDasharray="95 45" transform="rotate(-90 160 115)" />
          <text x="160" y="121" fill="#f4f3ff" textAnchor="middle" fontSize="18" fontWeight="700">98</text>
          <circle cx="217" cy="104" r="5" fill="#b8b0ff" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 230" className="product-art" role="img" aria-label="Ilustrasi keyboard mekanikal">
      <defs><linearGradient id="keybody" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#566078"/><stop offset="1" stopColor="#161c2a"/></linearGradient></defs>
      <ellipse cx="160" cy="185" rx="112" ry="14" fill="#5e9bff" opacity=".18" />
      <g transform="translate(35 52) skewY(-8)">
        <rect x="0" y="0" width="250" height="119" rx="15" fill="url(#keybody)" stroke="#8ab9ff" strokeOpacity=".6" />
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: row === 4 ? 6 : 10 }).map((__, col) => (
            <rect key={`${row}-${col}`} x={12 + col * (row === 4 ? 37 : 23)} y={12 + row * 21} width={row === 4 ? 31 : 17} height="14" rx="3" fill={row === 2 && col === 4 ? "#b8ff5c" : row === 1 && col === 5 ? "#8b7cff" : "#252e41"} stroke="#90a9d8" strokeOpacity=".35" />
          ))
        )}
        <path d="M17 103 H230" stroke="#6ca4ff" strokeWidth="2" opacity=".8" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function addToCart(id: number) {
    setCartCount((count) => count + 1);
    setAdded((current) => [...current, id]);
    window.setTimeout(() => {
      setAdded((current) => current.filter((item) => item !== id));
    }, 1400);
  }

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="announcement">
        <Sparkles size={14} />
        <span>Upgrade your everyday — diskon hingga 20% untuk produk pilihan</span>
        <ArrowUpRight size={14} />
      </div>

      <header className="site-header">
        <a href="#" className="brand" aria-label="NEXORA beranda">
          <span className="brand-mark"><span /></span>
          NEXORA<span className="brand-period">.</span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Navigasi utama">
          <a href="#produk" onClick={() => setMenuOpen(false)}>Produk</a>
          <a href="#kategori" onClick={() => setMenuOpen(false)}>Kategori</a>
          <a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang</a>
          <a href="#newsletter" onClick={() => setMenuOpen(false)}>Kontak</a>
        </nav>
        <div className="header-actions">
          <a className="cart-button" href="#produk" aria-label={`Keranjang, ${cartCount} item`}>
            <ShoppingBag size={17} />
            <span className="cart-label">Keranjang</span>
            <span className="cart-count">{cartCount}</span>
          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Tutup menu" : "Buka menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> THE NEXT GENERATION STORE</div>
          <h1>Teknologi untuk <span>langkah</span> berikutnya<span className="lime-dot">.</span></h1>
          <p className="hero-description">Temukan perangkat yang bukan cuma canggih, tapi bikin keseharianmu terasa satu level lebih maju.</p>
          <div className="hero-buttons">
            <a href="#produk" className="button-primary">Jelajahi produk <ArrowRight size={17} /></a>
            <a href="#tentang" className="button-text">Kenali NEXORA <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>N</span><span>X</span><span>+</span></div>
            <div><strong>2.400+</strong><small>tech enthusiasts memilih kami</small></div>
            <div className="proof-divider" />
            <div className="rating"><span>★★★★★</span><small>4.9/5 rating</small></div>
          </div>
        </div>

        <div className="hero-art-wrap" aria-label="Visual produk teknologi futuristik">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-glow" />
          <div className="hero-grid" />
          <div className="floating-label label-top"><span className="tiny-signal" /> FUTURE READY <ArrowUpRight size={13} /></div>
          <div className="hero-device">
            <div className="device-headband" />
            <div className="device-cup left-cup"><span /></div>
            <div className="device-cup right-cup"><span /></div>
            <div className="device-center"><div className="device-logo">N</div><span>SPATIAL AUDIO</span></div>
          </div>
          <div className="floating-label label-bottom"><Zap size={14} /> <span>BUILT FOR WHAT&apos;S NEXT</span></div>
          <div className="spec-chip"><span>01 / 03</span><span>DESIGNED TO INSPIRE</span></div>
        </div>
        <div className="hero-bottom-line"><span>SCROLL TO EXPLORE</span><div /><span>01 — 04</span></div>
      </section>

      <section className="trust-strip" id="tentang">
        <div className="trust-item"><Zap size={19} /><div><strong>Teknologi terkurasi</strong><span>Dipilih dengan standar tinggi</span></div></div>
        <div className="trust-item"><ShieldCheck size={19} /><div><strong>Belanja lebih tenang</strong><span>Garansi produk pilihan*</span></div></div>
        <div className="trust-item"><ArrowUpRight size={19} /><div><strong>Pengiriman nasional</strong><span>Ke berbagai kota Indonesia*</span></div></div>
      </section>

      <section className="section-wrap category-section" id="kategori">
        <div className="section-heading">
          <div><div className="eyebrow">DISCOVER YOUR NEXT</div><h2>Temukan <span>kategori</span> pilihan.</h2></div>
          <a href="#produk" className="section-link">Lihat semua <ArrowUpRight size={16} /></a>
        </div>
        <div className="category-grid">
          {categories.map(({ name, detail, icon: Icon, count }, index) => (
            <a href="#produk" className={`category-card category-${index}`} key={name}>
              <div className="category-icon"><Icon size={24} /></div>
              <div className="category-count">{count}</div>
              <h3>{name}</h3><p>{detail}</p>
              <span className="category-arrow"><ArrowUpRight size={18} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-wrap product-section" id="produk">
        <div className="section-heading">
          <div><div className="eyebrow">THE NEXORA SELECTION</div><h2>Gear up for <span>more.</span></h2><p className="section-subtitle">Pilihan teknologi yang siap menemani ide-ide besarmu.</p></div>
          <a href="#newsletter" className="section-link">Jelajahi koleksi <ArrowUpRight size={16} /></a>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-visual visual-${product.tone}`}>
                <span className="product-tag">{product.tag}</span>
                <button className="quick-view" aria-label={`Lihat ${product.name}`} onClick={() => document.getElementById(`product-${product.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}><ArrowUpRight size={17} /></button>
                <ProductVisual visual={product.visual} />
              </div>
              <div className="product-info" id={`product-${product.id}`}>
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-bottom">
                  <div><strong>{product.price}</strong>{product.oldPrice && <del>{product.oldPrice}</del>}</div>
                  <button className={`add-button ${added.includes(product.id) ? "is-added" : ""}`} onClick={() => addToCart(product.id)} aria-label={`Tambah ${product.name} ke keranjang`}>
                    {added.includes(product.id) ? <Check size={18} /> : <ShoppingBag size={18} />}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-note">*Produk, harga, diskon, rating, dan klaim layanan di halaman ini merupakan data contoh untuk demo. Ganti dengan informasi toko yang terverifikasi sebelum dipublikasikan.</p>
      </section>

      <section className="section-wrap newsletter-section" id="newsletter">
        <div className="newsletter-glow" />
        <div className="newsletter-copy"><div className="eyebrow"><Sparkles size={14} /> STAY IN THE LOOP</div><h2>Jadilah yang pertama tahu <span>apa berikutnya.</span></h2><p>Info produk baru, penawaran spesial, dan inspirasi teknologi langsung ke inbox kamu.</p></div>
        <form className="newsletter-form" onSubmit={subscribe}>
          <label htmlFor="newsletter-email">Alamat email</label>
          <div className="email-field"><input id="newsletter-email" type="email" placeholder="kamu@email.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Daftar newsletter">{subscribed ? <Check size={18} /> : <ArrowRight size={18} />}</button></div>
          <span className="form-feedback">{subscribed ? "Terima kasih! Formulir demo berhasil divalidasi." : "Dengan mendaftar, kamu menyetujui kebijakan privasi kami."}</span>
        </form>
      </section>

      <footer className="site-footer">
        <a href="#" className="brand"><span className="brand-mark"><span /></span>NEXORA<span className="brand-period">.</span></a>
        <p>Teknologi untuk langkah berikutnya.</p>
        <div className="footer-links"><a href="#produk">Produk</a><a href="#tentang">Tentang</a><a href="#newsletter">Kontak</a></div>
        <span className="copyright">© {new Date().getFullYear()} NEXORA. Demo landing page.</span>
      </footer>
    </main>
  );
}
