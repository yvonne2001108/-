"use client";

import { useEffect, useRef, useState } from "react";

const WIN_RATE = 0.1;
const COUPON_CODE = "SENSI90";

type Status = "idle" | "drawing" | "win" | "lose";

export default function LuckyDraw() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function close() {
    clearTimeout(timerRef.current);
    setOpen(false);
    setStatus("idle");
    setCopied(false);
  }

  function draw() {
    setStatus("drawing");
    setCopied(false);
    timerRef.current = setTimeout(() => {
      setStatus(Math.random() < WIN_RATE ? "win" : "lose");
    }, 1800);
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(COUPON_CODE);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-moss px-5 py-3 text-sm tracking-widest text-cream shadow-lg shadow-forest/30 transition hover:-translate-y-0.5 hover:bg-forest sm:right-6 sm:bottom-6"
      >
        <span aria-hidden="true">🎁</span>
        試試手氣
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest/60 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lucky-draw-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-cream px-6 py-10 text-center text-ink shadow-2xl sm:px-8"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              aria-label="關閉"
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-ink/50 transition hover:bg-ink/5 hover:text-forest"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <p className="text-xs tracking-[0.5em] text-moss">LUCKY DRAW</p>
            <h2 id="lucky-draw-title" className="mt-3 font-serif text-2xl tracking-wider text-forest">
              森林的小禮物
            </h2>

            <div className="mx-auto my-8 flex h-36 w-36 items-center justify-center rounded-full border border-sage/50 bg-paper">
              {status === "idle" && <LeafMark className="h-16 text-moss" />}
              {status === "drawing" && <LeafMark className="h-16 animate-spin text-moss [animation-duration:0.8s]" />}
              {status === "win" && (
                <div>
                  <p className="font-serif text-4xl text-forest">9 折</p>
                  <p className="mt-1 text-xs tracking-widest text-moss">優惠券</p>
                </div>
              )}
              {status === "lose" && <span className="text-5xl" aria-hidden="true">🍃</span>}
            </div>

            <div aria-live="polite" className="min-h-[7.5rem]">
              {status === "idle" && (
                <>
                  <p className="text-sm leading-relaxed text-ink/65">
                    點擊下方按鈕抽獎，
                    <br />
                    有機會獲得全館 9 折優惠券。
                  </p>
                  <DrawButton onClick={draw}>開始抽獎</DrawButton>
                </>
              )}
              {status === "drawing" && <p className="pt-4 text-sm tracking-widest text-ink/65">森林正在為你挑選⋯</p>}
              {status === "win" && (
                <>
                  <p className="text-sm text-forest">恭喜你！結帳時輸入優惠碼即可使用</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <code className="rounded border border-dashed border-moss bg-paper px-4 py-2 font-mono text-lg tracking-[0.2em] text-forest">
                      {COUPON_CODE}
                    </code>
                    <button
                      type="button"
                      onClick={copyCode}
                      className="rounded-full border border-forest px-4 py-2 text-xs tracking-widest text-forest transition hover:bg-forest hover:text-cream"
                    >
                      {copied ? "已複製" : "複製"}
                    </button>
                  </div>
                </>
              )}
              {status === "lose" && (
                <>
                  <p className="text-sm leading-relaxed text-ink/65">
                    這次沒有抽中，
                    <br />
                    森林說：下一陣風也許就是你的。
                  </p>
                  <DrawButton onClick={draw}>再試一次</DrawButton>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function DrawButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 w-full rounded-full bg-forest py-3 text-sm tracking-widest text-cream transition hover:bg-moss"
    >
      {children}
    </button>
  );
}

function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 160" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M50 155 C50 110 50 60 50 5" />
      <path d="M50 30 C30 25 20 10 18 2 C35 4 47 15 50 30Z" />
      <path d="M50 50 C72 45 82 30 85 20 C66 22 53 33 50 50Z" />
      <path d="M50 75 C26 70 14 52 10 40 C32 42 47 56 50 75Z" />
      <path d="M50 100 C75 95 87 77 90 64 C68 66 53 80 50 100Z" />
      <path d="M50 125 C28 121 17 105 13 94 C34 95 47 108 50 125Z" />
    </svg>
  );
}
