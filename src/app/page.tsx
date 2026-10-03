import LuckyDraw from "./components/LuckyDraw";
import SiteHeader from "./components/SiteHeader";

const products = [
  {
    name: "晨露潔顏乳2026",
    en: "Morning Dew Cleanser",
    desc: "溫和胺基酸配方，洗去疲憊，不帶走水分。",
    price: "NT$ 680",
    size: "120 ml",
    tone: "bg-[#dfe6d6]",
    bottle: "bg-[#c5d3bc]",
  },
  {
    name: "苔原化妝水",
    en: "Tundra Toner",
    desc: "積雪草與綠茶萃取，替肌膚補一場山間細雨。",
    price: "NT$ 880",
    size: "150 ml",
    tone: "bg-[#e7e4d6]",
    bottle: "bg-[#a9bb9f]",
  },
  {
    name: "森林修護精華",
    en: "Forest Repair Serum",
    desc: "檜木精油與神經醯胺，穩定、修護、找回光澤。",
    price: "NT$ 1,480",
    size: "30 ml",
    tone: "bg-[#d5ddcc]",
    bottle: "bg-[#5b7553]",
  },
  {
    name: "晚安保濕霜",
    en: "Goodnight Cream",
    desc: "乳油木果與燕麥，像一床柔軟的棉被。",
    price: "NT$ 1,180",
    size: "50 ml",
    tone: "bg-[#ebe8dc]",
    bottle: "bg-[#8fa58a]",
  },
];

const ingredients = [
  { name: "積雪草", note: "Centella", text: "舒緩泛紅，安定敏感肌。" },
  { name: "台灣檜木", note: "Hinoki", text: "淡淡木質香，放鬆身心。" },
  { name: "綠茶", note: "Green Tea", text: "抗氧化，守護肌膚日常。" },
  { name: "燕麥", note: "Oat", text: "溫柔保濕，修護屏障。" },
];

const rituals = [
  { step: "01", title: "潔淨", text: "取一元硬幣大小，輕柔畫圈，以溫水洗淨。" },
  { step: "02", title: "喚醒", text: "以掌心輕拍化妝水，讓肌膚慢慢甦醒。" },
  { step: "03", title: "修護", text: "兩至三滴精華，由內而外按壓吸收。" },
  { step: "04", title: "封存", text: "最後覆上保濕霜，鎖住一整晚的溫柔。" },
];

const trustBadges = [
  { icon: "shield", title: "SGS 安全檢驗", text: "每批產品通過第三方檢測" },
  { icon: "rabbit", title: "無動物實驗", text: "Cruelty Free 承諾" },
  { icon: "pin", title: "台灣製造", text: "GMP 認證工廠生產" },
  { icon: "return", title: "30 天安心退換", text: "使用不滿意可退換" },
  { icon: "lock", title: "SSL 安全加密", text: "交易資料全程保護" },
] as const;

const footerLinks = [
  { title: "關於森息", links: ["品牌故事", "成分理念", "永續承諾", "門市據點"] },
  { title: "顧客服務", links: ["常見問題", "訂單查詢", "運送說明", "聯絡我們"] },
  { title: "政策條款", links: ["隱私權政策", "服務條款", "退換貨政策", "Cookie 政策"] },
];

function TrustIcon({ type }: { type: (typeof trustBadges)[number]["icon"] }) {
  const paths: Record<typeof type, React.ReactNode> = {
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    rabbit: (
      <>
        <path d="M9 3c-1 3-1 6 0 8M15 3c1 3 1 6 0 8" />
        <circle cx="12" cy="15" r="5" />
        <path d="M10.5 14.5h.01M13.5 14.5h.01" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6-5.5-6-11a6 6 0 1112 0c0 5.5-6 11-6 11z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    return: (
      <>
        <path d="M4 12a8 8 0 108-8H8" />
        <path d="M10 1L7 4l3 3" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 118 0v3" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <path d="M50 155 C50 110 50 60 50 5" />
      <path d="M50 30 C30 25 20 10 18 2 C35 4 47 15 50 30Z" />
      <path d="M50 50 C72 45 82 30 85 20 C66 22 53 33 50 50Z" />
      <path d="M50 75 C26 70 14 52 10 40 C32 42 47 56 50 75Z" />
      <path d="M50 100 C75 95 87 77 90 64 C68 66 53 80 50 100Z" />
      <path d="M50 125 C28 121 17 105 13 94 C34 95 47 108 50 125Z" />
    </svg>
  );
}

function Bottle({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <div className="h-6 w-8 rounded-t-sm bg-forest/80" />
      <div className="h-2 w-10 bg-forest/60" />
      <div
        className={`flex h-40 w-24 items-center justify-center rounded-b-[2rem] rounded-t-lg ${color} shadow-[inset_-8px_0_16px_rgba(0,0,0,0.06)]`}
      >
        <span className="font-serif text-xs tracking-[0.3em] text-cream [writing-mode:vertical-rl]">
          森息
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-cream text-ink">
      {/* 導覽列 */}
      <SiteHeader />

      <main>
        {/* 主視覺 */}
        <section className="relative overflow-hidden bg-forest text-cream">
          <Leaf className="pointer-events-none absolute -right-16 -top-6 h-80 md:-right-10 md:h-[30rem] text-sage/30 rotate-12" />
          <Leaf className="pointer-events-none absolute -bottom-24 left-[-3rem] h-56 md:h-80 text-sage/20 -rotate-[20deg]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 md:grid-cols-2 md:gap-16 lg:py-36">
            <div>
              <p className="mb-6 text-xs tracking-[0.5em] text-sage">BOTANICAL SKINCARE</p>
              <h1 className="font-serif text-4xl leading-snug tracking-wider sm:text-5xl lg:text-6xl lg:leading-tight">
                讓肌膚
                <br />
                回到山林裡
                <br />
                <span className="text-sage">慢慢呼吸</span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-loose text-cream/75 sm:mt-8 sm:text-base">
                我們從台灣山林採集植物的溫柔，
                <br />
                以最少的成分，做最安心的保養。
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-cream px-8 py-3 text-sm tracking-widest text-forest transition hover:bg-sage hover:text-cream"
                >
                  探索系列
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-cream/40 px-8 py-3 text-sm tracking-widest transition hover:border-cream"
                >
                  品牌故事
                </a>
              </div>
            </div>
            <div className="flex origin-bottom scale-90 items-end justify-center gap-3 sm:scale-100 sm:gap-6">
              <div className="translate-y-6 scale-90 opacity-90">
                <Bottle color="bg-[#a9bb9f]" />
              </div>
              <Bottle color="bg-[#dfe6d6]" />
              <div className="translate-y-10 scale-75 opacity-80">
                <Bottle color="bg-[#8fa58a]" />
              </div>
            </div>
          </div>
        </section>

        {/* 品牌故事 */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <p className="text-xs tracking-[0.5em] text-moss">OUR STORY</p>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl leading-relaxed tracking-wider text-forest">
                簡單的事，
                <br />
                慢慢做。
              </h2>
            </div>
            <div className="space-y-6 leading-loose text-ink/75">
              <p>
                森息誕生於一次山中散步。清晨的霧氣、潮濕的苔蘚、被雨洗過的葉片——
                我們發現，大自然本身就是最好的保養。
              </p>
              <p>
                所以我們只選擇真正需要的成分，不添加人工香料與色素，
                以可回收的玻璃瓶盛裝，讓每一次保養，都是一段與自己獨處的安靜時光。
              </p>
              <div className="grid grid-cols-3 gap-3 border-t sm:gap-6 border-ink/10 pt-8 text-center">
                <div>
                  <p className="font-serif text-2xl text-forest sm:text-3xl">98%</p>
                  <p className="mt-1 text-xs tracking-wide text-ink/60 sm:tracking-widest">天然來源成分</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-forest sm:text-3xl">0</p>
                  <p className="mt-1 text-xs tracking-wide text-ink/60 sm:tracking-widest">人工香料色素</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-forest sm:text-3xl">100%</p>
                  <p className="mt-1 text-xs tracking-wide text-ink/60 sm:tracking-widest">可回收包裝</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 商品 */}
        <section id="products" className="bg-paper py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 md:mb-16 text-center">
              <p className="text-xs tracking-[0.5em] text-moss">COLLECTION</p>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl tracking-wider text-forest">森林日常系列</h2>
            </div>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <article key={p.name} className="group">
                  <div
                    className={`flex h-64 items-center sm:h-72 justify-center ${p.tone} transition duration-500 group-hover:-translate-y-1`}
                  >
                    <Bottle color={p.bottle} />
                  </div>
                  <div className="mt-6">
                    <p className="text-[0.65rem] tracking-[0.3em] text-moss uppercase">{p.en}</p>
                    <h3 className="mt-2 font-serif text-lg tracking-wider text-forest">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.desc}</p>
                    <div className="mt-4 flex items-baseline justify-between border-t border-ink/10 pt-4 text-sm">
                      <span className="text-forest">{p.price}</span>
                      <span className="text-xs text-ink/50">{p.size}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 成分 */}
        <section id="ingredients" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-10 md:mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-[0.5em] text-moss">INGREDIENTS</p>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl tracking-wider text-forest">來自土地的禮物</h2>
            </div>
            <p className="max-w-sm text-sm leading-loose text-ink/65">
              每一種成分都有它存在的理由。我們相信，少即是多。
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 grid-cols-2 lg:grid-cols-4">
            {ingredients.map((i) => (
              <div key={i.name} className="bg-cream p-5 transition sm:p-6 md:p-8 hover:bg-[#e9eee3]">
                <Leaf className="h-16 text-moss" />
                <h3 className="mt-6 font-serif text-xl tracking-wider text-forest">{i.name}</h3>
                <p className="mt-1 text-xs tracking-[0.3em] text-moss">{i.note}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{i.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 保養儀式 */}
        <section id="ritual" className="bg-forest py-20 md:py-28 text-cream">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 md:mb-16 text-center">
              <p className="text-xs tracking-[0.5em] text-sage">DAILY RITUAL</p>
              <h2 className="mt-4 font-serif text-2xl md:text-3xl tracking-wider">四步驟的安靜時光</h2>
            </div>
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {rituals.map((r) => (
                <li key={r.step} className="border-t border-cream/20 pt-6">
                  <span className="font-serif text-4xl text-sage">{r.step}</span>
                  <h3 className="mt-4 font-serif text-xl tracking-widest">{r.title}</h3>
                  <p className="mt-3 text-sm leading-loose text-cream/70">{r.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 引言 */}
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <p className="font-serif text-xl leading-loose tracking-wider text-forest sm:text-2xl md:text-3xl">
            「保養不是為了變成別人，
            <br />
            而是好好照顧現在的自己。」
          </p>
          <p className="mt-8 text-xs tracking-[0.5em] text-moss">— SENSI</p>
        </section>

        {/* 電子報 */}
        <section className="bg-paper py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
            <h2 className="font-serif text-2xl tracking-wider text-forest">收到來自森林的信</h2>
            <p className="text-sm text-ink/65">訂閱電子報，獲得新品消息與首購九折優惠。</p>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="min-w-0 flex-1 border-b border-ink/30 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-ink/40 focus:border-forest"
              />
              <button
                type="button"
                className="rounded-full bg-forest px-8 py-3 text-sm tracking-widest text-cream transition hover:bg-moss"
              >
                訂閱
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 頁尾 */}
      <footer className="bg-forest text-cream">
        {/* 信任元素 */}
        <div className="border-b border-cream/15">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 px-6 py-12 sm:grid-cols-3 md:py-14 lg:grid-cols-5">
            {trustBadges.map((b) => (
              <li key={b.title} className="flex flex-col items-center gap-3 text-center last:col-span-2 sm:last:col-span-1">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sage/50 text-sage">
                  <TrustIcon type={b.icon} />
                </span>
                <p className="font-serif text-sm tracking-widest">{b.title}</p>
                <p className="text-xs text-cream/55">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 連結與聯絡資訊 */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 sm:grid-cols-3 md:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="font-serif text-xl tracking-[0.3em]">
              森息 <span className="text-sm tracking-[0.4em] text-sage">SENSI</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-loose text-cream/60">
              來自山林的溫柔植萃保養，讓肌膚回到最自然的呼吸。
            </p>
            <ul className="mt-6 space-y-2 text-sm text-cream/70">
              <li>客服專線｜0800-000-000</li>
              <li>服務時間｜週一至週五 10:00–18:00</li>
              <li>
                客服信箱｜
                <a href="mailto:hello@sensi.example" className="underline-offset-4 hover:underline">
                  hello@sensi.example
                </a>
              </li>
            </ul>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs tracking-[0.4em] text-sage">{group.title}</p>
              <ul className="mt-5 space-y-3 text-sm text-cream/75">
                {group.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-cream">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 版權與付款方式 */}
        <div className="border-t border-cream/15">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 text-xs text-cream/50 md:flex-row">
            <div className="space-y-1 text-center md:text-left">
              <p>© 2026 SENSI Botanical Skincare. All rights reserved.</p>
              <p>森息植萃有限公司｜統一編號 12345678｜化粧品登錄字號 000000000000</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="mr-1">安全付款</span>
              {["VISA", "Mastercard", "JCB", "LINE Pay", "Apple Pay"].map((m) => (
                <span key={m} className="rounded border border-cream/25 px-2 py-1 text-[0.65rem] tracking-wider text-cream/70">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <LuckyDraw />
    </div>
  );
}
